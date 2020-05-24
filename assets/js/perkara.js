/* Slider Untuk Departemen */ 

const slider = document.querySelector('.slider-items');
const sliderItems = document.querySelectorAll('.slider-items img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter =1;
const size = sliderItems[0].clientWidth;

slider.style.transform = 'translateX(' + (-size*counter) + 'px)';

//button listener

nextBtn.addEventListener('click',() => {
    if(counter >= sliderItems.length-1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' +(-size*counter) +'px)';
});

prevBtn.addEventListener('click',() =>{
    if (counter <=0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' +(-size*counter) + 'px)';
});

slider.addEventListener('transitionend', () =>{
    if (sliderItems[counter].id === 'lastClone'){
        slider.style.transition = "none";
        counter = sliderItems.length -2;
        slider.style.transform = 'translateX(' +(-size*counter) + 'px)';
    }
    if (sliderItems[counter].id === 'firstClone'){
        slider.style.transition = "none";
        counter = sliderItems.length -counter;
        slider.style.transform = 'translateX(' +(-size*counter) + 'px)';
    }
});
/* -------------------------------------------------------------------- */

/* Slider Untuk Kegiatan */ 

const slider_k = document.querySelector('.slider-items2');
const slider_items2 = document.querySelectorAll('.slider-items2 img');

//Buttons
const prev_btn = document.querySelector('#prev-btn');
const next_btn = document.querySelector('#next-btn');

//Counter
let count =1;
const siz = slider_items2[0].clientWidth;

slider_k.style.transform = 'translateX(' + (-siz*count) + 'px)';

//button listener
next_btn.addEventListener('click',() => {
    if(count >= sliderItems.length-1) return;
    slider_k.style.transition = "transform 0.4s ease-in-out";
    count++;
    slider_k.style.transform = 'translateX(' +(-siz*count) +'px)';
});

prev_btn.addEventListener('click',() =>{
    if (count <=0) return;
    slider_k.style.transition = "transform 0.4s ease-in-out";
    count--;
    slider_k.style.transform = 'translateX(' +(-siz*count) + 'px)';
});

slider_k.addEventListener('transitionend', () =>{
    if (slider_items2[count].id === 'last-clone'){
        slider_k.style.transition = "none";
        count = slider_items2.length -2;
        slider_k.style.transform = 'translateX(' +(-siz*count) + 'px)';
    }
    if (slider_items2[count].id === 'first-clone'){
        slider_k.style.transition = "none";
        count = sliderItems.length -count;
        slider_k.style.transform = 'translateX(' +(-siz*count) + 'px)';
    }
});
