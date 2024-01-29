const c = require("../../utils/db");
const { successMessageFunction } = require("../../utils/successMessage");
const { errorMessageFunction } = require("../../utils/errorMessage");

let deleteQuery = "DELETE FROM AUTHOR WHERE ID=${ID}";
const deleteAuthorData = async (req, res) => {
  try {
    let sTime = performance.now();
    const { ID } = req.body;
    console.log(ID);
    const finalDeleteQuery = deleteQuery.replace("${ID}", ID);
    await c.executeQuery(finalDeleteQuery).then((response) => {
      console.log(response);
    });

    let eTime = performance.now();
    let tTime = eTime - sTime;
    let successResponse = successMessageFunction(
      true,
      200,
      "Row Deleted Successfully",
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
  deleteAuthorData,
};
