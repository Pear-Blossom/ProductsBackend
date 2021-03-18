module.exports.booleanConverter = value => {
  if (value === "1") return true;
  if (value === "0") return false;
  return null;
};