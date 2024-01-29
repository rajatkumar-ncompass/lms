const c = require("../../utils/db");

const updateQuery = "UPDATE AUTHOR SET ${s} WHERE ID=${ID}";
const putAuthorData = async (req, res) => {
  try {
    let sTime = performance.now();
    const { ID } = req.body;
    let fields = Object.keys(req.body);

    let s = "";
    fields.map((f) => {
      String(req.body[f]).length > 0
        ? f != "ID"
          ? (s += `${f}='${req.body[f]}',`)
          : null
        : null;
    });
    s = s.slice(0, -1);

    const finalUpdateQuery = updateQuery
      .replace("${s}", s)
      .replace("${ID}", ID);

    await c.executeQuery(finalUpdateQuery).then((res) => {
      console.log("Success");
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    let successResponse = successMessageFunction(
      true,
      200,
      "Data Updated Successfully",
      "",
      sTime,
      eTime,
      tTime
    );
    res.status(200).send(successResponse);
  } catch (error) {
    let errorResponse = errorMessageFunction(false, 400, error);
    res.status(400).send(errorResponse);
  }
};

module.exports = {
  putAuthorData,
};
