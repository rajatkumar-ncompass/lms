const successMessageFunction = (
  successValue,
  statusValue,
  messageValue,
  dataValue,
  sTimeValue,
  eTimeValue,
  tTimeValue
) => {
  return {
    success: successValue,
    status: statusValue,
    message: messageValue,
    data: dataValue,
    startTime: sTimeValue,
    endTime: eTimeValue,
    totalTime: tTimeValue,
  };
};

module.exports = { successMessageFunction };
