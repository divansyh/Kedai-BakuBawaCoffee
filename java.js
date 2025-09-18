// Toggle class active untuk mobile menu
const navbarNav = document.querySelector('.navbar-nav');
const menuIcon = document.querySelector('#menu');

// Ketika hamburger menu diklik
menuIcon.onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar navbar untuk menutup menu
document.addEventListener('click', function(e) {
  if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});