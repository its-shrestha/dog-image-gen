function getDawg(dogURL) {
    document.getElementById("imag").src = "";
        document.getElementById("imag").src = dogURL;

}

function getDawgURL() {
    fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => {
    const dogURL = data.message; 
    getDawg(dogURL); 
}).catch(err => console.log("lmao error occured"));

}

const btn = document.getElementById("dogBtn");

btn.addEventListener("click", () => {
  btn.classList.remove("animate__heartBeat");
  void btn.offsetWidth; // This forces a reflow so animation restarts
  btn.classList.add("animate__heartBeat");
});
