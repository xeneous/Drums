function bateria (imagen, mp3, letter){
    this.imagen=imagen;
    this.mp3=mp3;
    this.letter=letter;
};

w=new bateria('crash.png','crash.mp3','w');
a=new bateria('kick.png','kick-bass.mp3','a');
s=new bateria('snare.png','snare.mp3','s');
d=new bateria('tom1.png','tom-1.mp3','d');
j=new bateria('tom2.png','tom-2.mp3','j');
k=new bateria('tom3.png','tom-3.mp3','k');
l=new bateria('tom4.png','tom-4.mp3','l');


instruments = [];
instruments.push(w);
instruments.push(a);
instruments.push(s);
instruments.push(d);
instruments.push(j);
instruments.push(k);
instruments.push(l);

document.querySelectorAll(".drum").
    forEach((elem, key) => elem.addEventListener("click",function ()
    {
        makesound(instruments[key].mp3,instruments[key].letter);
    }
    )
  );

document.addEventListener("keydown",function (event) {
        const result = instruments.find(({ letter }) => letter === event.key);
        if (result !== undefined)
        {
            makesound(result.mp3,result.letter);
        }
    }
)

function makesound(audioFile,letter)
{
    buttonAnimation(letter);
    var audio = new Audio('sounds/'+audioFile);
    audio.play();
    setTimeout(() => {
        buttonAnimation(letter);
    }, 100);
}

function buttonAnimation(pressedKey){
    var activeButton=document.querySelector("."+pressedKey);
    activeButton.classList.toggle("pressed");
}