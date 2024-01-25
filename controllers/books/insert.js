const c = require("../../utils/db");

async function postBookData(req, res) {
  try {
    let sTime = performance.now();
    const { ID, NAME, ISBN, EDITION } = req.body;
    await c
      .executeQuery(
        `INSERT INTO BOOK VALUES("${ID}","${NAME}","${ISBN}","${EDITION}"")`
      )
      .then((res) => {
        console.log("Success");
      });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    res.send({
      success: true,
      message: "Data Inserted successfully",
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
  postBookData,
};
