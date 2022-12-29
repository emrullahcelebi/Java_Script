import { searchShows } from "./modules/tvmaze.js";
document.getElementById("txtSearch").addEventListener("input", (e)=>{
    const query = e.target.value;
    if(!query || query.length<3) {
        document.getElementById("tvShows").innerHTML="";
return;
    }

createShows(query);
   
   
    
});

const createShows=(query)=>{
    searchShows(query, (shows)=>{//collback datasi
        console.log(shows);
        let strShows="";
        shows.forEach((item)=>{
    strShows+=createShowHTML(item);
           
        });

document.getElementById("tvShows").innerHTML=strShows;
    });


    
};
const createShowHTML =(item)=>{
    const {image, name, genres} = item.show;//destraction yaptik asagida kullanmak icin


    return` 
<div class="col-md-4">
  <div class="card">
    <img src="${image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${genres.join("-")}</p>
    </div>
  </div>
</div>

    `;
}