var util = require('util');

function MissingFlagsError(missingFlags) {
  Error.call(this);
  this.missingFlags = missingFlags;
}

util.inherits(MissingFlagsError, Error);

module.exports = function () {
  var missingFlags = Array.prototype.filter.call(arguments, function (arg) {
    return process.execArgv.indexOf(arg) < 0;
  });
  if (missingFlags.length) {
    throw new MissingFlagsError(missingFlags);
  }
};
