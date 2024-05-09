/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("btn").onclick = function() {
    let img = document.getElementById("img");
    let pics = [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://media.istockphoto.com//green-rice-fild-with-evening-sky.jpg",
      "https://media.istockphoto.com/id/1189191651/photo/majestic-oak-tree-at-autumn-sunset.jpg",
      "https://media.istockphoto.com/id/856462498/photo/landsakap-i-sverige.jpg",
      "https://media.istockphoto.com/id/856462498/photo/landsakap-i-sverige.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    ];
    let person = [
      "dog",
      "chicken",
      "serpent",
      "cat",
      "goat",
      "an alient",
      "a baby"
    ];
    let action = [
      "destroyed my",
      "set fire on my",
      "ran over my",
      "yelled at my",
      "bit my",
      "swallowed my",
      "stoles my"
    ];
    let posession = [
      "car",
      "phone",
      "laptop",
      "clothes",
      "egg",
      "house",
      "wristwatch"
    ];
    let time = [
      "while i was sleeping",
      "while at work",
      "on my way to class",
      "while I stepped outside",
      "before i could leave"
    ];
    let randomIdx = Math.floor(Math.random() * person.length);
    let perIndxR = person[randomIdx];
    let picsR = pics[randomIdx];
    let actIndxR = action[Math.floor(Math.random() * action.length)];
    let posIndxR = posession[Math.floor(Math.random() * posession.length)];
    let timIndxR = time[Math.floor(Math.random() * time.length)];
    img.src = picsR;

    document.getElementById("excuse").innerHTML =
      // best practice for string
      //  perIndxR + " " + actIndxR + " " + posIndxR + " " + timIndxR;
      `${perIndxR} ${actIndxR} ${posIndxR} ${timIndxR}`;
  };
};
