const c = require("../../utils/db");

async function getBooksData(req, res) {
  try {
    let sTime = performance.now();
    let dataObtained;
    await c.executeQuery(`SELECT * FROM BOOK`).then((res) => {
      dataObtained = res;
      console.log(dataObtained);
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    res.send({
      success: true,
      message: "fetched data successfully",
      data: dataObtained,
      startTime: sTime,
      endTime: eTime,
      totalTime: tTime,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
}

module.exports = {
  getBooksData,
};
