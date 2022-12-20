//Büyük sayının küçük sayıya bölümünden kalanlar toplamını, küçük sayı büyük sayıya
//yetişene kadar birer birer artırarak bulalım.


let sayi1El = document.querySelector("#sayi1");
let sayi2El = document.querySelector("#sayi2");
let mesaj = document.querySelector("#msg");

//click== onclick burada click yazmak yeterli yani click oldugunda icindeki fonk.calissin
 document.querySelector("#hesapla").addEventListener("click",() =>{
    let sayi1 = sayi1El.value;
    let sayi2 = sayi2El.value;

    //buyuk olandan cikartma yapacagimiz icin kim buyukse basa gecsin
    if(sayi1>sayi2){
        let temp = sayi1;
        sayi1 = sayi2;
        sayi2= temp;
    }

    let kalanlar=0;
    while (sayi2>sayi1){
        kalanlar += (sayi2%sayi1);
        sayi1++;
    }
    mesaj.innerText = `Kalanlar Toplami = ${kalanlar}`;
    sayi1El.value = "";
    sayi2El.value = "";
 });
