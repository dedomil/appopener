const { parse } = require("useragent");

module.exports = (useragent) => {
  let os = parse(useragent).os.family.toLowerCase();
  (os == "android") ? os = "android" : (os == "iphone" || os == "ipod" || os == "ipad" || os == "ios") ? os = "ios" : os = "web";
  return os;
}
