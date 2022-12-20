

    const listeArr=[];
    
    
const sortEl = () =>{
    let sortList = listeArr.sort();
    console.log(sortList);
    let listEl = document.querySelector("#liste");
    let liEl = "";
    listEl.innerHTML="";
    for(let i=0; i<sortList.length; i++) {
        liEl += `<li> ${sortList[i]} </li>`;
        }

   listEl.innerHTML= liEl;
}




const addEl= () =>{

    let textEl = document.querySelector("#txtbox").value;    
    let listEl = document.querySelector("#liste");
    let liEl = "";
    kontrol(textEl);

    listeArr.push(textEl);
    

    for(let i=0; i<listeArr.length; i++) {
        liEl += `<li> ${listeArr[i]} </li>`;
    }

       listEl.innerHTML= liEl;
        
    console.log(listeArr)
        return listEl;
        
    }

    const kontrol = (result) => {
        if(!result) {
            document.querySelector("#h3").innerHTML="Deger giriniz"
            return false;
        }
        document.querySelector("#h3").innerHTML="";

        return true;
    }
