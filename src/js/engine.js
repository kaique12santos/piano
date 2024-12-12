const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keysCheck = document.querySelector(".keys-check input")
const volumeSlider = document.querySelector(".volume-slider input")
let mapedkey=[];
let audio= new Audio("./src/tunes/a.wav");
const playTune= (key)=>{
    audio.src=`./src/tunes/${key}.wav`;
    audio.play();

    const clickdkey= document.querySelector(`[data-key="${key}"]`);
    clickdkey.classList.add("active");
    setTimeout(()=>{
        clickdkey.classList.remove("active");
    },150);
};



pianoKeys.forEach((key)=>{
    console.log(key.dataset.key)
    key.addEventListener("click", ()=> playTune(key.dataset.key))
    mapedkey.push(key.dataset.key);
});


// captura das teclas
document.addEventListener("keydown",(e)=>{
   if (mapedkey.includes(e.key)) {
        playTune(e.key);
   }
    
});
// evento do volume
const handleVolume=(e)=>{
     audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume)


const showHideKeys= () =>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
keysCheck.addEventListener("click", showHideKeys);