/** @format */

const formResponse = {
  success: (res, data) => {
    const formResponObj = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(formResponObj);
  },

  error: (res, error) => {
    const formResponObj = {
      success: false,
      status: 500,
      error: error,
    };
    res.json(formResponObj);
  },
  pagination: ({ query }, res, data) => {
    const page = Number(query.page);
    const limit = Number(query.limit);
    const prevPage =
      page === 1 ? "" : `/product?page=${page - 1}&limit=${limit}`;
    const nextPage = `/product?page=${page + 1}&limit=${limit}`;
    const responseObj = {
      success: true,
      status: 200,
      data,
      pageInfo: {
        currentPage: query.page,
        limit: query.limit,
        prevPage,
        nextPage,
      },
    };
    res.json(responseObj);
  },
  paginationSort: ({ query }, res, data) => {
    const page = Number(query.page);
    const limit = Number(query.limit);
    const by = query.by;
    const order = query.order;
    const prevPage =
      page === 1
        ? ""
        : `/product/sort?page=${
            page - 1
          }&limit=${limit}&by=${by}&order=${order}`;
    const nextPage = `/product/sort?page=${
      page + 1
    }&limit=${limit}&by=${by}&order=${order}`;
    const responseObj = {
      success: true,
      status: 200,
      data,
      pageInfo: {
        currentPage: query.page,
        limit: query.limit,
        prevPage,
        nextPage,
      },
    };
    res.json(responseObj);
  },
};

module.exports = formResponse;
