//listeyi ul nin icine li olarak ekleyiniz
//sonra butona basilinca yeni eklenenler ile birlikte listeyi gosterelim
// sil e basilinca da sirayla sil denilen kisim silinecek ve en sonrada liste  bitti mesaji gosterilecek
const notlar = [
    "Kitap oku.",
    "Yürüyüşe çık.",
    "Daily'e katıl.",
    "Taskini bitir.",
  ];

  const liste =document.querySelector("#liste");

  let satir="";
  for(let not of notlar){
    satir += `<li>${not}</li>`
  }
console.log(satir);
liste.innerHTML = satir;

let veri = document.querySelector("#yeni");

document.querySelector("#ekle").addEventListener("click",()=>{
    if(!veri.value){
        veri.focus();//imlec yanip sonecek
        return;
    }
    liste.innerHTML += `<li>${veri.value}</li>`
    notlar.push(veri.value);//listenin sonuna ekleme
    sonuc(notlar);
    veri.value = "";
});

document.querySelector("#sil").addEventListener("click",()=>{
    if(notlar.length ==0){
        alert("Listede silinecek eleman kalmadi!");
    }
    else{
        veri.value = "";
        notlar.pop();
        liste.removeChild(liste.lastElementChild);//ul nin child i son li yi sil
        sonuc(notlar);
    }
});

const sonuc = (eklenen) => { 
    document.querySelector("#metin").innerHTML = eklenen.join("-");
 }