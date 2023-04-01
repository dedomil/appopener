const intentData = require("./intentData");

module.exports = (url) => {
  let { appName, intent_url, package_android, apple_scheme } = intentData(url);
  return {
    appName: appName,
    intent_android: `intent://${intent_url}#Intent;package=${package_android};scheme=https;end`,
    intent_ios: `${apple_scheme}://${intent_url}`,
    intent_web: url
  }
}
