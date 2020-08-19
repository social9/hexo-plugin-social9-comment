hexo.extend.helper.register('s9CommentScript', function (options) {
  const { async, defer } = Object.assign({ async: "async", defer: "defer"}, options)
  return `<script  ${async} ${defer} src="//social9.com/comments/js/commento.js"></script>`;
})

hexo.extend.tag.register('s9CommentBox', function (args, content) {
  return s9CommentBox()
}, { ends: true })

hexo.extend.helper.register('s9CommentBox', function (content) {
  return s9CommentBox()
}, { ends: true })

function s9CommentBox () {
  return `<div id="s9comments"></div>`;
}