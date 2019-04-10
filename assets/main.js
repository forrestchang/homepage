document.getElementById('switch').addEventListener('click', () => {
  const stylesheet = document.getElementById('stylesheet')
  const ph = document.getElementById('ph')
  if (stylesheet.getAttribute('href') === 'assets/dark.css') {
    stylesheet.setAttribute('href', 'assets/light.css')
    ph.src = ph.src.replace('theme=dark', 'theme=light')
  } else {
    stylesheet.setAttribute('href', 'assets/dark.css')
    ph.src = ph.src.replace('theme=light', 'theme=dark')
  }
})
