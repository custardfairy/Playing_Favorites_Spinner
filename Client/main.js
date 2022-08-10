function rotateFunction() {
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
}

const pushBtn = document.getElementById("pushBtn");
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

const postBtn = document.querySelector("#postBtn");
const getBtn = document.querySelector("#getBtn");
const winnersForm = document.querySelector("#winnersForm");
const unameButton = document.querySelector("#unameBtn");
const unameText = document.querySelector("#username");
const createGameTable = unameButton.addEventListener("click", clickButton);
const randomButton = document.getElementById("randoBtn");
const bgaBtn = document.getElementById("bgaBtn");

// app.get("/api/games", getRando);

function clickButton() {
  let URL =
    "https://api.boardgameatlas.com/api/lists?username=" +
    unameText.value +
    "&client_id=4ljazoQBAE";

  console.log(URL);
  // code to pass the URL to the server to GET the game lists
  axios
    .get(URL)
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
      pullListId(res.data.lists[0].id);
    })
    .catch((error) => {
      console.error(error);
    });
}

// let games = [];
// code to pull the specific list_id and pass to api/search, return the given list
function pullListId(id) {
  let listURL =
    "https://api.boardgameatlas.com/api/search?list_id=" +
    id +
    "&client_id=4ljazoQBAE";

  axios
    .get(listURL)
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
      // games = res.data;
      this.data = res.data.games;
      this.data.forEach(function (item) {
        console.log(item);
        let li = document.createElement("li");
        li.innerText = item.name;
        list.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

const list = document.getElementById("myList");

// function to check off a game when it is clicked "checked"
myList.addEventListener(
  "click",
  function (event) {
    if (event.target === "li") {
      event.target.checklist.toggle("checked");
    }
  },
  false
);

// bgaBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   axios
//     .get("http://localhost:3000/auth")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function for a random game alert
// const getRando = () => {
//   axios.get("http://localhost:3000/api/games").then((res) => {
//     const data = res.data.games.name;
//     alert(data);
//   });
// };

// how do I send checked items to the spinner?
// need code to make items in the list selectable
// need code to push the selected items into the spinner
// need code attached to randomizer button to randomly select and alert a single game title from the full list.
const postWinner = (body) => {
  console.log(body);
  axios.post(`/api/winners`, body).then();
};

const submitHandler = (event) => {
  event.preventDefault();
  let gameTitle = document.querySelector("#gameTitle");
  let winnerName = document.querySelector("#winnerName");
  let score = document.querySelector("#score");

  let bodyObj = {
    gameTitle: gameTitle.value,
    winnerName: winnerName.value,
    score: score.value,
  };

  postWinner(bodyObj);
};
winnersForm.addEventListener("submit", submitHandler);
