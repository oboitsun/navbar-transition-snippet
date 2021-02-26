window.addEventListener('scroll', function (e) {
  if (window.scrollY > 60) {
    document.getElementById('nav').classList.add('scrolled')
  }
  if (window.scrollY < 60) {
    document.getElementById('nav').classList.remove('scrolled')
  }
})
