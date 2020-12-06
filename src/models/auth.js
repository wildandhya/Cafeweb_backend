/** @format */

const db = require("../configs/dbMysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      const checkUsername = "SELECT email FROM users WHERE email = ?";
      db.query(checkUsername, [body.email], (err, data) => {
        if (data.length) {
          reject({ msg: "email already exist" });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password } = body;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const newBody = {
                ...body,
                password: hashedPassword,
                level_id: 1,
              };
              const qs = "INSERT INTO users SET ?";
              db.query(qs, newBody, (err, data) => {
                if (!err) {
                  resolve(data);
                } else {
                  reject(err);
                }
              });
            });
          });
        }
      });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const checkUsername = "SELECT email FROM users WHERE email=?";
      db.query(checkUsername, [body.email], (err, data) => {
        if (!data.length) {
          reject({
            msg: "your email not found",
          });
        } else {
          const qs = "SELECT * FROM users WHERE email=?";
          db.query(qs, body.email, (err, data) => {
            if (err) {
              reject(err);
            }
            if (data.length) {
              bcrypt.compare(body.password, data[0].password, (err, result) => {
                if (result) {
                  const { email } = body;
                  const { level_id } = data[0];
                  const payload = {
                    email,
                    level_id,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  const msg = "login success";
                  resolve({ data, msg, token });
                }
                if (!result) {
                  reject({
                    msg: "Password wrong",
                  });
                }
                if (err) {
                  reject(err);
                }
              });
            }
          });
        }
      });
    });
  },
};

module.exports = authModel;
