let urunler=[...products];//shallow copy

const urunlerEl=document.querySelector(".urunler");
const formEl=document.querySelector("form");
const inputEl=document.querySelector("input");
const markaEl=document.querySelector(".markalar");


let icerik="";

const urunYerlestir = () => { 
    if(urunler.length<1){
        urunlerEl.innerHTML=`<h2>Aradiginiz urun bulunmamaktadir</h2>`;
    }
    urunlerEl.innerHTML=urunler.map((product)=>{
        const {id,image, titel,price}=product;
        icerik +=  `
        <article class="urun" id=${id}>
                  <img src=${image} alt="" />
                  <footer>
                    <h5 class="isim">${titel}</h5>
                    <span class="fiyat">$ ${price}</span>
                  </footer>
                </article>`
    return icerik;
/* return `
<article class="urun" id=${id}>
          <img src=${image} alt="" />
          <footer>
            <h5 class="isim">${titel}</h5>
            <span class="fiyat">$ ${price}</span>
          </footer>
        </article>`
    }).join(""); */

});
 };

 urunYerlestir();

 const butonYerlestir = () => { 
    const butonText=[
        "all",
        ...new Set(products.map((product)=>product.company))
    ];
    markaEl.innerHTML=butonText.map((company)=>{
        return `<button class="btn" id=${company}>${company}</button>`
    }).join("");
  };
  butonYerlestir();

