const c = require("../../utils/db");

async function deleteBookDetailsData(req, res) {
  try {
    let sTime = performance.now();
    const ID = req.query.id;
    await c.executeQuery(`DELETE FROM BOOK_DETAILS WHERE ID="${ID}"`).then((res) => {
      console.log("Success");
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    res.send({
      success: true,
      message: "Data Deleted successfully",
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
  deleteBookDetailsData,
};
