var css = require('./abc.css')
var c = require('./test.styl')

console.log(css)

const cats = require('./cats')
console.log(cats)

document.onclick = function (e) {
  // click to load style, then unload style
  if (!css.n) css.n = css.use()
  else css.n = css.unuse()

  // thunk name default 1.app.js, ondemand loading
  // require.ensure('./cats', function(require) {
  //   const cats = require('./cats')
  //   console.log(cats)
  // })

}

window.onload = function (arg) {
  document.querySelector('body').classList.add(c.abc)
}
