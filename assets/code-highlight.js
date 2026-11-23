document.addEventListener('DOMContentLoaded', function () {
  if (!window.hljs) return;
  document.querySelectorAll('.post-content pre code').forEach(function (block) {
    if (block.closest('.highlight') || block.classList.contains('nohighlight')) return;
    hljs.highlightElement(block);
  });
});
