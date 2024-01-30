let slides = document.querySelectorAll('.slide');
let count = 0;
console.log(slides);

let slider = setInterval(() =>{
    count++;
    slides.forEach((slide) =>  {
        console.log(slide);
        slide.style.transform = `translateX(-${count * 100}%)`
    });
    if(count == slides.length-1){
        clearInterval(slider);
    }
},3000)