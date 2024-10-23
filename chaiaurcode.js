const randomColorGenerate=function(){
    const hex="0123456789ABCDEF"
    let color='#'

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

const start=document.getElementById('start');
const stop=document.getElementById('stop');
let setIdx;
const colorChanging=function(){
    if (!setIdx) {
        setIdx=setInterval(changing, 1000);
    }

   function changing(){
    document.body.style.backgroundColor=randomColorGenerate();
   }

}

const stopColoring=function(){
    clearInterval(setIdx);
    setIdx=null;
}
start.addEventListener('click',colorChanging);
stop.addEventListener('click',stopColoring)