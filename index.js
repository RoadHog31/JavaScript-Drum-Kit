function playSound(e) {
    
    //console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together. 
    audio.currentTime = 0; //rewind to start
    audio.play();
    //console.log(key);
    key.classList.add("playing");
};

function removeTransition(e) {
    
    //console.log(e);
    if (e.propertyName !== "transform") return; //skip if not a transform
    //console.log(e.propertyName);
    this.classList.remove("playing"); 

};

//When have array of elements you have to loop over them. 
const keys = document.querySelectorAll(".key");
//listen for transition end event. 
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//e is a KeyboardEvent object full of data such as key code
window.addEventListener("keydown", playSound);