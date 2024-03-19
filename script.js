const header = document.getElementById('header');

header.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#808080';
});

header.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#000';
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-contact');
    var contactSection = document.getElementById('contact');

    toggleButton.addEventListener('click', function() {
        if (contactSection.style.display === 'none') {
            contactSection.style.display = 'block';
        } else {
            contactSection.style.display = 'none';
        }
    });
});

