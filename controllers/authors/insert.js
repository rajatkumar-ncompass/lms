const c = require("../../utils/db");
const mysql = require("mysql2");
const { successMessageFunction } = require("../../utils/successMessage");
const { errorMessageFunction } = require("../../utils/errorMessage");

const insertQuery = "INSERT INTO AUTHOR VALUES ?";

const postAuthorData = async (req, res) => {
  try {
    let sTime = performance.now();
    let authors = req.body.authors;
    let insertData = [];
    authors.map((key) => {
      insertData.push(Object.values(key));
    });
    const finalInsertQuery = mysql.format(insertQuery, [insertData]);

    await c.executeQuery(finalInsertQuery).then((response) => {
      console.log(response[0].affectedRows);
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    let successResponse = successMessageFunction(
      true,
      200,
      "Data Inserted Successfully",
      "",
      sTime,
      eTime,
      tTime
    );
    res.status(200).send(successResponse);
  } catch (error) {
    let errorResponse = errorMessageFunction(false, 400, error);
    res.status(400).send(errorResponse);
  }
};

module.exports = {
  postAuthorData,
};
