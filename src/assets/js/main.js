
window.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.navbarlink');
  let mainLinkContainer = document.querySelector('.navbar-collapse.collapse');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      if (mainLinkContainer.classList.contains('in')
      ) {
        mainLinkContainer.classList.remove('in')
      }
    })
  }
})
