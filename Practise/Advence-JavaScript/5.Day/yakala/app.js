const daireler = document.querySelectorAll(".col-4");
const kelebek = document.querySelector(".resim");
const timer= document.getElementById("timer");
const scoreEl=document.getElementById("score");
const mesaj= document.querySelector("mesaj");


let score=0;
let konum;
let zaman=20;
let timerId=null;

const rndmKonum = ()=>{
    daireler.forEach((daire,index)=>{
        daire.classList.remove("resim");//varsa silecek yoksa birsey yapmaz
        daire.setAttribute("id",index);//index i id olarak atadik
    });
    let rndmYer=daireler[Math.floor(Math.random()*daireler.length)];
    rndmYer.classList.add("resim");

    konum=rndmYer.id;
}
//rndmKonum();
/*Mouse Down olayı farenin tuşuna basıldığında,
mouse up ise farenin tuşu bırakıldığında devreye girer.
 
dairelere mousedown özelliğiye idleri kontrol edelim.
random olarak seçilenle aynıysa puan artırılsın ve 
scoreEl a yerleştirilin.
*/


daireler.forEach((daire)=>{
    daire.addEventListener("mausedown", ()=>{
        if(daire.id==konum){
            score++;
            scoreEl.innerText=score;
            konum=null;
        }
    });
});

/* belli sure araliklarinda rndmKonum func calissin */

const yerles = ()=>{
    timerId=setInterval(rndmKonum,700);
};

yerles();

const geriSayim = ()=>{
    zaman--;
    timer.innerText=zaman;
    if(zaman==0){
        clearInterval(timerId);
        clearInterval(geriSayimTimer);
        mesaj.innerHTML=`<h2>GAME OVER</h2> <br> <h2>${score}</h2>`;
    }
}

let geriSayimTimer=setInterval(geriSayim,1000);
