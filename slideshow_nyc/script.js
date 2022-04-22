const back = document.querySelector("#back");
const next = document.querySelector("#next");
console.log(next);
const photos = ["nyc2.jpg", "nyc3.jpg", "nyc4.jpg", "nyc5.jpg", "nyc6.jpg", "nyc7.jpg"];

let i = 0;

next.addEventListener('click', ()=> {
    i++;
    if (i>photos.length-1) {
        i=0;
    }
    document.querySelector('#pictures').src = photos[i];
})


back.addEventListener('click', ()=> {
    i--;
    if (i<0) {
        i=photos.length-1;
    }
    document.querySelector('#pictures').src = photos[i];
})