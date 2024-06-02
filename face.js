document.addEventListener('DOMContentLoaded', function() {
    const plusIcons = document.querySelectorAll('.plus-icon');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    plusIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const imgSrc = this.closest('.grid-item').querySelector('img').src;
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// button javascript
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function goBack() {
  window.history.back();
}