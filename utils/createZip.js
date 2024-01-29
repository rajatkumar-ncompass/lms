const zlib = require("zlib");

function createZip(bufferObject) {
  zlib.gzip(bufferObject, function (err, zippedData) {
    if (!err) {
      return zippedData;
    } else {
      console.log(err);
    }
  });
}

module.exports = {
  createZip,
};
