const c = require("../../utils/db");
const { successMessageFunction } = require("../../utils/successMessage");
const { errorMessageFunction } = require("../../utils/errorMessage");

const updateQuery = "UPDATE CUSTOMER_1 SET ${s} WHERE ID=${ID}";
async function putCustomerData(req, res) {
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
      "Data Update Successfully",
      sTime,
      eTime,
      tTime
    );
    res.status(200).send(successResponse);
  } catch (error) {
    let errorResponse = errorMessageFunction(false, error, 400);
    res.status(400).send(errorResponse);
  }
}

module.exports = {
  putCustomerData,
};
