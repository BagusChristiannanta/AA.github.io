let search = document.querySelector('.search-box');
let menu = document.querySelector('.navbar');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  menu.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
 menu.classList.toggle('active');
 search.classList.remove('active');
}

window.addEventListener('scroll', () => {
  menu.classList.remove('active');
  search.classList.remove('active');
});

let header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
  header.classList.toggle('shadow', window.scrollY > 0);
});

let slideIndex = 1;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";  
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);

// Show scroll to top button when user scrolls down
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function validateForm(event) {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      showMessage('error', 'Mohon lengkapi semua kolom.');
      event.preventDefault(); // Menghentikan aksi default formulir
      return false;
  }

  // Mengosongkan formulir setelah dikirim
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  showMessage('success', 'Pesan berhasil dikirim.');
  return false; // Menghindari submit default formulir
}

function showMessage(type, text) {
  let messageDiv = document.getElementById('message');
  messageDiv.innerHTML = text;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
}
