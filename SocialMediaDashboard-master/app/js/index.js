(function () {

  const $ = document.querySelector.bind(document);

  const toggleBox = $('input#themetoggle');

  toggleBox.addEventListener('input', e => {
    e.preventDefault();

    document.body.classList.toggle('dark', e.target.checked);
  }, false);

  document.body.classList.toggle('dark', toggleBox.checked);
})();