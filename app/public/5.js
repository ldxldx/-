var iframe = document.createElement('iframe')
iframe.src = 'http://x.localhost.com:8080/public/post.html'
document.body.appendChild(iframe)

window.addEventListener('message', function(e) {
  console.log(JSON.parse(e.data))
}, false);