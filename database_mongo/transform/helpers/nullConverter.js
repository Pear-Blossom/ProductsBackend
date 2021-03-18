module.exports.nullConverter = value => {
  if (value === "null") return "0";
  return value;
};