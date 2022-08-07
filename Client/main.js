function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  }
//  the below may be for arrow animation, could leave out anyway
  // setTimeout(function(){
  //   element.classList.add('animate');
  // }, 5000);

  // const form = document.querySelector(".form");
  // submitInput = form[0].querySelector("input[type='submit']");

  // function getDataForm(event) {
  //   event.preventDefault();
  //   let formData = new FormData(form[0]);

  //   document.addEventListener(
  //     "DOMContentLoaded",
  //     function () {
  //       submitInput.addEventListener("click", getDataForm, false);
  //     },
  //     false
  //   );
  // }

  const pushBtn = document.getElementById('pushBtn');
  pushBtn.addEventListener('click', function(event){
      event.preventDefault();
    console.log('clicked');
    var text1 = document.querySelector('#game1').value;
    document.querySelector('.box1 .span1 b').innerHTML = text1;
  })