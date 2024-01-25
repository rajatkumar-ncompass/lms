const c = require("../../utils/db");

async function putBookDetailsData(req, res) {
  try {
    let sTime = performance.now();
    const { BOOK_ID } = req.body;
    let fields = Object.keys(req.body);


    let s = "";
    fields.map((f) => {
      String(req.body[f]).length > 0
        ? f != "BOOK_ID"
          ? (s += `${f}=${req.body[f]},`)
          : null
        : null;
    });
    s = s.slice(0, -1);


    await c
      .executeQuery(`UPDATE BOOK_DETAILS SET ${s} WHERE BOOK_ID=${BOOK_ID}`)
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
  putBookDetailsData,
};
