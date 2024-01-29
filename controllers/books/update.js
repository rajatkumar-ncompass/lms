const c = require("../../utils/db");

async function putBookData(req, res) {
  try {
    let sTime = performance.now();
    const { ID } = req.body;
    let s = "";
    fields.map((f) => {
      String(req.body[f]).length > 0
        ? f != "ID"
          ? (s += `${f}='${req.body[f]}',`)
          : null
        : null;
    });
    s = s.slice(0, -1);

    await c
      .executeQuery(`UPDATE BOOK SET ${s} WHERE ID=${ID}`)
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
