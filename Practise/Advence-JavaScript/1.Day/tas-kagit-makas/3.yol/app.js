/*
1.butonların üzerinde yazmasını istediğim şeyleri bir dizide tutalım.
2. butonlara click olduğunda çalışsın istediğim fonksiyon
3.kullanıcı seçimi ile sanal seçimin karşılaştırılıp sonuçların
 switch ile yazılması
Append sayfada seçtiğimiz bir alanın sonuna veri eklememizi sağlar.
 */

const sonucEl =document.querySelector("#sonuc");
const secenekEl=document.querySelector("#secenek");

const secenekler=["tas","kagit","makas"];






const getSonuc = (e) => { 
    let kullaniciSecimi = e.target.innerHTML;
    let sanalSecim=secenekler[Math.floor(Math.random()*secenekler.length)];
    switch(kullaniciSecimi + sanalSecim){
        case "makaskagit":
        case "tasmakas" :
        case "kagittas" :
            sonucEl.innerHTML ="SEN KAZANDIN";
            break;

        case "kagitmakas":
        case "makastas" :
        case "taskagit" :
            sonucEl.innerHTML ="KAYBETTIN";
            break;

        case "kagitkagit":
        case "makasmakas" :
        case "tastas" :
            sonucEl.innerHTML ="BERABERE";
            break;
        

    }
 }

 /* Butonlari ekliyelim */
secenekler.forEach((secim)=>{
    const buton=document.createElement("button");
    buton.innerHTML=secim;
    buton.addEventListener("click",getSonuc);
    secenekEl.appendChild(buton);
})