

const proxied = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function() {
  const args = arguments; // 伪代码

  this.addEventListener('readystatechange', function() {
    if (this.readyState === 1) {
      start = (new Date()).getTime();
    }

    if (this.readyState === 4) {
      const params = { ...args, ...status, ...others }; // 伪代码
      (new Image()).src = `${options.url}?${stringfy(params)}`;
    }
  })
  
  return proxied.apply(this, [].slice.call(arguments))
}

