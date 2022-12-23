
    const listeArr=[];
    const textEl = document.querySelector("#txtbox");
    const listEl = document.querySelector("#liste");


const refreshList = () => {
    let liEl = "";
   
    for(let i=0; i<listeArr.length; i++) {
        liEl += `<li> ${listeArr[i]} </li>`;
    }

   listEl.innerHTML= liEl;
  
}



    /* Sort methodu */
const sortEl = () =>{
    listeArr.sort();
    refreshList();
}



/* Add methodu */
const addEl= () =>{
    const text = textEl.value;
    
    kontrol(text);
    listeArr.push(text);

    refreshList();
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
    listeArr.reverse();
    refreshList();
}
/* Remove Last */
const removeLastEl=()=>{
    listeArr.pop();
    refreshList();
}

/* Remove First */
const removeFirstEl=()=>{
    listeArr.shift();
    refreshList();
}

/* Remove All */
const removeAllEl =()=>{
 
   listeArr.splice(0,listeArr.length);     
   refreshList();
}

/* Mix */

const mixList=()=>{
    listeArr.sort( ()=> Math.random() - 0.5 );
    refreshList();
}

//const listeArr=[23,56,2,676,23,12];

//listeArr.includes(5)