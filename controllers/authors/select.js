const c = require("../../utils/db");
const redisClient = require("../../utils/redisClient");
const { successMessageFunction } = require("../../utils/successMessage");
const { errorMessageFunction } = require("../../utils/errorMessage");
// const zlib = require("zlib");

const selectQuery = "SELECT * FROM AUTHOR";

const getAuthorData = async (req, res) => {
  try {
    let dataObtained;
    let sTime = performance.now();

    await c.executeQuery(selectQuery).then((res) => {
      dataObtained = res[0];
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;

    let bufferObject = new Buffer.from(JSON.stringify(dataObtained));
    zlib.gzip(bufferObject, function (err, zippedData) {
      if (!err) {
        let successResponse = successMessageFunction(
          true,
          200,
          "Data Fetched Successfully",
          zippedData,
          sTime,
          eTime,
          tTime
        );
        res.status(200).send(successResponse);
      } else {
        let errorResponse = errorMessageFunction(false, err.statusCode, err);
        res.status(500).send(errorResponse);
      }
    });
  } catch (error) {
    let errorResponse = errorMessageFunction(false, 500, error);
    res.status(500).send(errorResponse);
  }
};

module.exports = {
  getAuthorData,
};
