
let path = document.querySelectorAll('svg path');
let lay2 = document.getElementsByClassName('layer2');

path.forEach((item, index) => {
    let speed = 80;
    let pathLength = item.getTotalLength();

    item.setAttribute('stroke-dasharray', pathLength);
    item.setAttribute('stroke-dashoffset', pathLength);

    item.innerHTML = '<animate attributeName="stroke-dashoffset" begin="0s" dur="'+ pathLength / speed+'s" to="0" fill="freeze" />';

});
document.querySelector('#path29 animate').addEventListener('endEvent', () =>{
        lay2[0].style.display = 'block';
        lay2[1].style.display = 'block';
});

//animation on load
document.addEventListener('DOMContentLoaded', () =>{
    const observerUp = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('slideUp');
                return
            }
            entry.target.classList.remove('slideUp');
        })
    })

    const observerDown = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('slideDown');
                return
            }
            entry.target.classList.remove('slideDown');
        })
    })

    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('slideRight');
                return
            }
            entry.target.classList.remove('slideRight');
        })
    })

    const observerLeft = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('slideLeft');
                return
            }
            entry.target.classList.remove('slideLeft');
        })
    })

    const observerFade = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('fadeIn');
                return
            }
            entry.target.classList.remove('fadeIn');
        })
    });

    const allAnimatedElUp = document.querySelectorAll('.animateUp');
    const allAnimatedElDown = document.querySelectorAll('.animateDown');
    const allAnimatedElRight = document.querySelectorAll('.animateRight');
    const allAnimatedElLeft = document.querySelectorAll('.animateLeft');
    const allAnimatedElFade = document.querySelectorAll('.animateFade');

    allAnimatedElUp.forEach((el) => observerUp.observe(el))
    allAnimatedElDown.forEach((el) => observerDown.observe(el))
    allAnimatedElRight.forEach((el) => observerRight.observe(el))
    allAnimatedElLeft.forEach((el) => observerLeft.observe(el))
    allAnimatedElFade.forEach((el) => observerFade.observe(el))
});

//variables
let viewGal = document.getElementsByClassName('imgH');
let lightBox = document.getElementById('lightBox');
let close = document.getElementById('close');
let back = document.getElementById('back');
let forward = document.getElementById('forward');
let changeImg = document.getElementById('changeImg');
let changeText = document.getElementById('changeText');
let images = ['/images/myriam-zilles-KltoLK6Mk-g-unsplash.jpg',
    '/images/pexels-olly-3812745.jpg',
    '/images/calm.jpg',
    '/images/pexels-shvets-production-7176026.jpg'];
let text = ["Substance use disorder (SUD), formerly known as drug addiction, is a mental health condition where you experience a problematic pattern of substance use that affects your health and quality of life. Substances change how your brain functions over time.",
    "Stress is a normal response to external challenges, but persistent stress can significantly impact mental health, potentially leading to issues like anxiety, depression, or even more severe conditions.",
    "Finding peace with your mental health involves a combination of self-care habits, like regular exercise and sleep, and mindset shifts, such as practicing mindfulness and gratitude. Building a routine, connecting with others, setting boundaries, and seeking professional help when needed are also key to achieving a calmer, more stable state of mind.",
    "Counselling for mental health involves working with a professional to address specific issues, cope with stress, or improve well-being through psychological methods like Cognitive Behavioural Therapy (CBT). To find help, you can consult a GP for a referral, search for a mental health professional directly, or contact organizations and helplines for immediate support."
]

let services = document.getElementById('serv');
let servList = document.getElementById('servList');

//event listeners
services.addEventListener('mouseover', () =>{
    servList.style.visibility = "visible";
    document.getElementById('servBut').style.backgroundColor = "#ffd21c";
    console.log("hovered");
});
services.addEventListener('mouseleave', () =>{
    servList.style.visibility = "hidden";
    document.getElementById('servBut').style.backgroundColor = "black";
});
close.addEventListener('click', () =>{
    lightBox.style.visibility = "hidden";
});
//dynamic gallery
for(let el of viewGal){
    el.addEventListener('click', (e) =>{
        lightBox.style.visibility = "visible";
        let imgUrl = e.currentTarget.style.backgroundImage;
        let str = imgUrl.slice(5, imgUrl.length -2);
        changeImg.src = `${str}`;
        changeText.innerText = text[images.indexOf(str)];
    });
}

forward.addEventListener('click', () =>{
    let imgSrc = document.getElementById('changeImg').src 
    imgSrc = imgSrc.replace("http://127.0.0.1:5500", "")
    
    let index = images.indexOf(imgSrc);
    
    if(index < images.length -1){
        index++;
        changeImg.src = images[index];
        changeText.innerText = text[index];
    }
    else{
        index = 0;
        changeImg.src = images[index];
        changeText.innerText = text[index];
    }
    console.log("clicked")
});

back.addEventListener('click', () =>{
    let imgSrc = document.getElementById('changeImg').src 
    imgSrc = imgSrc.replace("http://127.0.0.1:5500", "")
    
    let index = images.indexOf(imgSrc);
    
    if(images.length > index && index > 0){
        index --;
        changeImg.src = images[index];
        changeText.innerText = text[index];
    }
    else{
        index = 3;
        changeImg.src = images[index];
        changeText.innerText = text[index];
    }
    console.log("clicked")
});

