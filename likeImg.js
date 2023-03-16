let likecounter;
if (localStorage.getItem("like") == null) {
  likecounter = 0;
} else {
  likecounter = localStorage.getItem("like");
}
let disLikeCounter;
if (localStorage.getItem("dislike") == null) {
  disLikeCounter = 0;
} else {
  disLikeCounter = localStorage.getItem("dislike");
}

document.querySelector("#likeContainer>h3>span").innerText = likecounter;
document.querySelector("#likeContainer>h3+h3>span").innerText = disLikeCounter;

document.querySelector("#like").addEventListener("click", myLike);

function myLike() {
  likecounter++;
  localStorage.setItem("like", likecounter);
  document.querySelector("#likeContainer>h3>span").innerText =
    localStorage.getItem("like");
}

document.querySelector("#dislike").addEventListener("click", myDisLike);
function myDisLike() {
  disLikeCounter++;
  localStorage.setItem("dislike", disLikeCounter);
  document.querySelector("#likeContainer>h3+h3>span").innerText =
    localStorage.getItem("dislike");
}
