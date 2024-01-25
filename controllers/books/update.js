const c = require("../../utils/db");

async function putBookData(req, res) {
  try {
    let sTime = performance.now();
    const { ID, FIRST_NAME } = req.body;
    await c
      .executeQuery(
        `UPDATE BOOK SET FIRST_NAME="${FIRST_NAME}" WHERE ID="${ID}"`
      )
      .then((res) => {
        console.log("Success");
      });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    res.send({
      success: true,
      message: "Data Updated successfully",
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
  putBookData,
};
