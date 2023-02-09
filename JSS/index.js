alert("Warning you might be captivated by the contents.");
const downloadCV = document.querySelector('a[download]');
const downloadText = document.querySelector('#downloadText');

downloadCV.addEventListener('click', function() {
   downloadText.textContent = "Thank you";
  });
