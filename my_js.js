function editText() {
  document.getElementById("myText").innerHTML =
    "Es geht um die Grundlagen, denn diese sind wichtig.";
}

console.log(document.title);

let change = true;

function changeImage() {
  let pic = document.getElementById("mypic");
  if (change) {
    pic.src = "img/img1.jpg";
    change = false;
  } else {
    pic.src = "img/img2.jpg";
    change = true;
  }
}

function addImage() {
  let myP = document.getElementById("pTarget");
  let imgNew = document.createElement("img");
  imgNew.src = "img/img1.jpg";
  myP.appendChild(imgNew);
}
