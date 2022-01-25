
//e is a KeyboardEvent object full of data such as key code
window.addEventListener("keydown", function (e) {
    
    //console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together. 
    audio.currentTime = 0; //rewind to start
    audio.play();
    console.log(key);

});