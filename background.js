var arr = [
  'chunk-2b1dc28d',
  'chunk-6d64e948',
  'chunk-f2b7093c',
]
// onResponseStarted
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var url = details.url;
    var tmpFile = '';
    arr.forEach((file) => {
      if (url.indexOf(file) > -1) {
        console.log(details);
        tmpFile = file
      }
    })
    if (tmpFile) {
      // console.log(chrome);
      console.log("match file => " + tmpFile);
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'icon.png',
        title: '恭喜你',
        message: '可以去掉"meitu"水印并免VIP下载'
      });
    }
    url = tmpFile ? chrome.extension.getURL("hack/" + tmpFile + '.js') : url;
    return {redirectUrl: url};
  },
  {
    urls: ["https://pc.meitu.com/public/dist/js/*"],
    types: ["script"]
  },
  ["blocking"]
)
