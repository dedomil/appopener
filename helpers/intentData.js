module.exports = (url) => {
  let { hostname } = new URL(url);
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    return {
      appName: "youtube",
      package_android: "com.google.android.youtube",
      apple_scheme: "vnd.youtube",
      intent_url: (url.split("//")[1]).endsWith("/") ? (url.split("//")[1]) : `${(url.split("//")[1])}/`
    }
  } else if (hostname.includes("instagram.com")) {
    return {
      appName: "instagram",
      package_android: "com.instagram.android",
      apple_scheme: "vnd.instagram",
      intent_url: url.split("//")[1]
    }
  } else if (hostname.includes("twitter.com")) {
    return {
      appName: "instagram",
      package_android: "com.twitter.android",
      apple_scheme: "vnd.twitter",
      intent_url: url.split("//")[1]
    }
  }
}
