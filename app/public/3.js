var iframe = document.createElement('iframe')
iframe.src = 'http://x.localhost.com:7001/public/hash.html'
document.body.appendChild(iframe)

window.onhashchange = function () {
  // 小练习，做个工具方法，取出query的值
  var query = getQuery(location.hash)
  console.log(query)

}

function getQuery(locationHash) {
  var hash = decodeURIComponent(locationHash)
  var queryStr = hash.split('#')[1];
  var queryArr = queryStr.split('&')
  var query = {};
  queryArr.forEach(function (val) {
    var keyValArr = val.split('=');
    query[keyValArr[0]] = keyValArr[1];
  })
  return query;
}