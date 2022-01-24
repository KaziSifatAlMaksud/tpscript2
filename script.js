let n = 0;

const button = document.querySelector('#button');
button.addEventListener("click",()=>{

    n++;
    console.log(n);
    document.querySelector("#number").innerHTML = n;
});