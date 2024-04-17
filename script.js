(function () {
  const progress = document.querySelectorAll(`.progress-bar .progress`);
  for (let i = 0; i < progress.length; i++) {
    let progressNum = progress[i].getAttribute(`data-pers`);
    progress[i].style.width = `${progressNum}%`;
  }
})();
