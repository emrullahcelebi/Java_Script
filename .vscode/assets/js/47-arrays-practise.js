


document.querySelector("#btnFind").addEventListener("click", ()=>{
    const arr=[12,343,555,623,23,11,3,56,8];

    const maxNumber = getMaxNumber(arr);
    document.querySelector("#result").innerHTML=maxNumber;
});

const getMaxNumber = (arr) =>{

    if(!arr || typeof(arr) !=="object" || arr.length <= 0) return false;

    let maxNum=arr[0];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }

    return 123;
}

getMaxNumber(null);