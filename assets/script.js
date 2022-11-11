const slides = [
    {
        "image":"../assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"../assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"../assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"../assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let arrowl = document.getElementById('arrow_left');
let arrowr = document.getElementById('arrow_right');
let img = document.getElementById('img');

let dots = document.getElementById('dots');
let banner = document.getElementById('banner')
let dot
let point = document.getElementsByClassName('dot');
for(let i = 0 ; i<slides.length; i++ ) {
    let dot = document.createElement('div')
    dots.appendChild(dot)
    dot.className ='dot'
    point[0].classList.add('dot_selected');

}


i = 0 ;
arrowr.addEventListener( "click", function (){
    if(i==slides.length -1){
        i = 0
        i --
    }
    i++	
        img.src = slides[i]['image']
dote(i);
})

arrowl.addEventListener( "click", function (){
    if(i == 0){
        i = 4
    }
    i--
    img.src = slides[i]['image']
    dote(i);
}) 

function dote(i){
let point = document.getElementsByClassName('dot');
if(point[i]){
    for (let y = 0; y < point.length; y++) {
        const element = point[y];
        point[y].classList.remove('dot_selected');
        
    }

point[i].classList.add('dot_selected');
} 
}
