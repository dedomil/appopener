module.exports = (url) => {
  let { hostname, search, pathname } = new URL(url);
  let intent_url = (url.split("//")[1]).endsWith("/") ? (url.split("//")[1]) : `${(url.split("//")[1])}/`;
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    return {
      appName: "youtube",
      intent_android: `intent://${intent_url}#Intent;package=com.google.android.youtube;scheme=https;end`,
      intent_ios: `vnd.youtube://${intent_url}`,
      intent_web: url
    }
  } else if (hostname.includes("instagram.com")) {
    return {
      appName: "instagram",
      intent_android: `intent://${intent_url}#Intent;package=com.instagram.android;scheme=https;end`,
      intent_ios: `vnd.instagram://${intent_url}`,
      intent_web: url
    }
    // } else if (hostname.includes("twitter.com")) { //tweet user search
    //   let intent;
    //   if (pathname.includes("/status/")) {
    //     intent = `status?id=${pathname.split("/status/")[1]}`
    //   } else if (pathname == "/search") {
    //     console.log("search");
    //   } else if (!pathname) {
    //     // only twitter.com
    //   }
    //   return {
    //     appName: "twitter",
    //     package_android: "com.twitter.android",
    //     apple_scheme: "twitter",
    //     intent_url_ios: intent,
    //     intent_url_android: intent_url
    //   }
  } else if (hostname.includes("spotify.com")) {
    let query = pathname.split("/")[1];
    let value = pathname.split("/")[2];
    return {
      appName: "spotify",
      intent_android: `spotify://${query}/${value}`,
      intent_ios: `spotify://${query}/${value}`,
      intent_web: url
    }
  } else {
    return {
      appName: "web",
      intent_android: url,
      intent_ios: url,
      intent_web: url
    }
  }
}
