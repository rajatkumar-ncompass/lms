const c = require("../../utils/db");

async function putAuthorData(req, res) {
  try {
    let sTime = performance.now();
    const { ID } = req.body;
    let fields = Object.keys(req.body);
    // fields.map(async (f) => {
    //   String(req.body[f]).length > 0
    //     ? await c
    //         .executeQuery(
    //           `UPDATE AUTHOR SET ${f}="${req.body[f]}" WHERE ID="${ID}"`
    //         )
    //         .then((res) => {
    //           console.log("Success");
    //         })
    //     : null;
    // });

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
      .executeQuery(`UPDATE AUTHOR SET ${s} WHERE ID=${ID}`)
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
  putAuthorData,
};
