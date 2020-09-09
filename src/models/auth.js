/** @format */

const db = require("../configs/dbMysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      const checkUsername = "SELECT username FROM users WHERE username = ?";
      db.query(checkUsername, [body.username], (err, data) => {
        if (data.length) {
          reject({ msg: "usernamenya udh ade" });
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
              const newBody = { ...body, password: hashedPassword };
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
      const checkUsername = "SELECT username FROM users WHERE username = ?";
      db.query(checkUsername, [body.username], (err, data) => {
        if (!data.length) {
          reject("msg: username not found");
        } else {
          const qs =
            "SELECT users.username, users.password, users.level_id FROM users WHERE username=?";
          db.query(qs, body.username, (err, data) => {
            if (err) {
              reject(err);
            }
            if (data.length) {
              bcrypt.compare(body.password, data[0].password, (err, result) => {
                if (result) {
                  const { username } = body;
                  const { level_id } = data[0];
                  const payload = {
                    username,
                    level_id,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  const msg = "login success";
                  resolve({ msg, token });
                }
                if (!result) {
                  reject({
                    msg: "wrong password",
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
