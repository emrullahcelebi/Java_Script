

    const listeArr=[];
    const textEl = document.querySelector("#txtbox");
    const listEl = document.querySelector("#liste");


    /* Sort methodu */
const sortEl = () =>{
    let getSortList = listeArr.sort();
    let liEl = "";
    listEl.innerHTML="";
    for(let i=0; i<getSortList.length; i++) {
        liEl += `<li> ${getSortList[i]} </li>`;
        }

   listEl.innerHTML= liEl;
}



/* Add methodu */
const addEl= () =>{
    const text = textEl.value;
    let liEl = "";
    kontrol(text);
    listeArr.push(text);

    for(let i=0; i<listeArr.length; i++) {
        liEl += `<li> ${listeArr[i]} </li>`;
    }
       listEl.innerHTML= liEl;
        
        return listEl;
    }

/* Kontrol */
    const kontrol = (result) => {
        if(!result) {
            document.querySelector("#h3").innerHTML="Deger giriniz"
            return false;
        }
        document.querySelector("#h3").innerHTML="";
        return true;
    }


    /* Reverse */
const reverseEl=()=>{
    let getReverseList =listeArr.reverse();
    let liEl = "";
    listEl.innerHTML="";
    for(let i=0; i<getReverseList.length; i++) {
        liEl += `<li> ${getReverseList[i]} </li>`;
        }

   listEl.innerHTML= liEl;
}
/* Remove Last */
const removeLastEl=()=>{
    listeArr.pop();
    let liEl = "";
    listEl.innerHTML="";
    for(let i=0; i<listeArr.length; i++) {
        liEl += `<li> ${listeArr[i]} </li>`;
        }
   listEl.innerHTML= liEl;
}

/* Remove First */
const removeFirstEl=()=>{
    listeArr.shift();
    let liEl = "";
    listEl.innerHTML="";
    for(let i=0; i<listeArr.length; i++) {
        liEl += `<li> ${listeArr[i]} </li>`;
        }
   listEl.innerHTML= liEl;
}

/* Remove All */
const removeAllEl =()=>{
 
        listeArr.splice(0,listeArr.length);     
   listEl.innerHTML=listeArr;
}

/* Mix */

const mixList=()=>{
    let liEl = "";
    

    for(let i=0;i<listeArr.length; i++){
        const newList=[];
        
       if(newList.){
    newList.push(listeArr[getRandom()]);
    } 
    }
    






   
 /* m=listIndex.random(listIndex.length);
        console.log(m) */
        //liEl += `<li> ${listeArr[i]} </li>`;
    listEl.innerHTML= liEl;
}
const getRandom = () => {
    return listeArr[Math.floor(Math.random() * listeArr.length)];
  };
console.log(getRandom());