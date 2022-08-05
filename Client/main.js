function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  }

  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);

  const form = document.querySelector(".form");
  submitInput = form[0].querySelector("input[type='submit']");

  function getDataForm(event) {
    event.preventDefault();
    let formData = new FormData(form[0]);
    
    document.addEventListener('DOMContentLoaded', function(){
      submitInput.addEventListener('click', getDataForm, false);
      
    }, false);

    // need to send new FormData to box1.html and duplicate to box2.html. Post with fetch? Is this going to server or staying in client?
