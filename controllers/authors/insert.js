const c = require("../../utils/db");

async function postAuthorData(req, res) {
  try {
    let sTime = performance.now();
    const { ID, FIRST_NAME, LAST_NAME } = req.body;
    await c
      .executeQuery(
        `INSERT INTO AUTHOR VALUES("${ID}","${FIRST_NAME}","${LAST_NAME}")`
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
  postAuthorData,
};
