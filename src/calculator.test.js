// https://github.com/chaijs/chai/issues/469
chai.config.truncateThreshold = 0;

const expect = chai.expect;

function pressButtons(buttons) {
  const value = {};
  buttons.forEach(button => {
    Object.assign(value, calculate(value, button));
  });
  // no need to distinguish between null and undefined values
  Object.keys(value).forEach(key => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
}
