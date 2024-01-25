const c = require("../../utils/db");

async function postBookDetailsData(req, res) {
  try {
    let sTime = performance.now();
    const { BOOK_ID, AUTHOR_ID } = req.body;
    await c
      .executeQuery(
        `INSERT INTO BOOK_DETAILS VALUES("${BOOK_ID}","${AUTHOR_ID}"")`
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
  postBookDetailsData,
};
