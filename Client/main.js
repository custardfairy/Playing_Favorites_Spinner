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
  pushBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var text1 = document.querySelector("#game1").value;
    document.querySelector(".box1 .span1 b").innerHTML = text1;
    document.querySelector(".box2 .span1 b").innerHTML = text1;
    var text2 = document.querySelector("#game2").value;
    document.querySelector(".box1 .span2 b").innerHTML = text2;
    document.querySelector(".box2 .span2 b").innerHTML = text2;
    var text3 = document.querySelector("#game3").value;
    document.querySelector(".box1 .span3 b").innerHTML = text3;
    document.querySelector(".box2 .span3 b").innerHTML = text3;
    var text4 = document.querySelector("#game4").value;
    document.querySelector(".box1 .span4 b").innerHTML = text4;
    document.querySelector(".box2 .span4 b").innerHTML = text4;
  });

  // const bgaBtn = document.getElementById("bgaBtn");
  // bgaBtn.addEventListener("click", function (event) {
    // event.preventDefault();
    // console.log("clicked");
    // makeGetRequest("/api/bga");
  // });

  // function makeGetRequest(path) {
  //   axios.get(path).then(
  //     (response) => {
  //       var result = response.data;
  //       console.log(result);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // makeGetRequest(
  //   "https://api.boardgameatlas.com/oauth/authorize?response_type=code&client_id=4ljazoQBAE&redirect_uri=http://localhost:3000/"
  // );
const unameButton = document.querySelector('#unameBtn');
const unameText = document.querySelector('#username');

unameButton.addEventListener('click', clickButton);

function clickButton() {
let URL = "https://api.boardgameatlas.com/api/lists?username=" + unameText.value + "&client_id=4ljazoQBAE"

console.log(URL)
// code to pass the URL to the server to GET the game lists
axios
  .get(URL)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
// need code to pull the specific list_id and pass to api/search, return the given list
// https://api.boardgameatlas.com/api/search?list_id={"list_id"}&client_id=4ljazoQBAE
// my list_id kIAQ6D3nV2
// GET https://api.boardgameatlas.com/api/search?list_id=kIAQ6D3nV2&client_id=4ljazoQBAE
// need code to pull only the names of games from the returned list into an array
// need code to push the array into a viewable list on the page (html)
// need code to make items in the list selectable 
// need code to push the selected items into the spinner
// need code attached to randomizer button to randomly select and alert a single game title from the full list.
axios
  .get(URL)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
}

  // games to be pulled from table or API database
  let games = [];

  // list to be created from games array imported from API db or table
  let list = document.getElementById("myList");
  // how do I add checkboxes to this generated list?  (possible solution below)

  // function to create list from games array
  games.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
// function to check off a game when it is clicked "checked"
  let selectList = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// how do I send checked items to the spinner?
// if list element is checked, assign it to a variable and send it to the spinner

