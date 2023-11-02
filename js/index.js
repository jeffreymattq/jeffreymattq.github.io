// light mode filter
// filter:brightness(90%) sepia(1) hue-rotate(-14deg) saturate(99.5%) brightness(118%);

//dark mode filter
// filter:brightness(50%) sepia(1) hue-rotate(200deg) saturate(101.5%) brightness(67%);


function cardAnim(x){
    // console.log(x.classList.length)
    const allCards = document.getElementsByClassName('grayscaleCard');
    allCards[x.dataset.value].classList.toggle('active');
    
    // const offsetY = allCards[x.dataset.value].offsetTop;

    if(x.classList.length > 1){
        //undo active, and return cards opacity
        cardsFadeOut(x.dataset.value);
    }
    else{
        cardsFadeIn(x.dataset.value);
    }
}

function cardsFadeOut(x){   //removes all other cards, puts clicked card on top of stack and expands to reveal thumbnail
    const allCards = document.getElementsByClassName('grayscaleCard');

    for(i=0;i<allCards.length;i++){
        if(i!=x){
            allCards[i].style.opacity = '0';
            allCards[i].style.visibility = 'hidden';
            allCards[i].style.pointerEvents = 'none';
            // console.log(i)
        }
    }

    let selectedCard = allCards[x];
    let imgHeight = selectedCard.getElementsByTagName('img')[0].clientHeight;
    let imgWidth = selectedCard.getElementsByTagName('img')[0].clientWidth;
    selectedCard.style.height = imgHeight/1.2 + "px";
    selectedCard.style.width = imgWidth + "px";

    selectedCard.style.position = 'absolute';
    const offsetY = allCards[x].offsetTop;
    selectedCard.style.transform = "translateY(-" + offsetY + "px)";
    document.getElementsByClassName('textContainer')[0].style.opacity = "1";
    document.getElementsByClassName('textContainer')[0].style.top = imgHeight/1.15 + "px";
    document.getElementsByClassName('outLink')[0].style.opacity = '1';
    // document.getElementsByClassName('textContainer')[0].style.visibility = "visible";
}
function cardsFadeIn(x){    //reduces back to regular size, puts it back in its og position, other cards fade back in
    const allCards = document.getElementsByClassName('grayscaleCard');
    for(i=0;i<allCards.length;i++){
        if(i == x){
            let selectedCard = allCards[i];
    
            selectedCard.style.height = "150px";
            selectedCard.style.width = "auto";

            selectedCard.style.position = "";
            selectedCard.style.transform = "";
        }
        else{
            allCards[i].style.opacity = '1';
            allCards[i].style.visibility = 'visible';
            allCards[i].style.pointerEvents = '';
        }
    }
    document.getElementsByClassName('textContainer')[0].style.opacity = "0"
    document.getElementsByClassName('textContainer')[0].style.top = "0 px";
    document.getElementsByClassName('outLink')[0].style.opacity = '0';
    // document.getElementsByClassName('textContainer')[0].style.visibility = "hidden";
}

const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) { //if dark mode has been clicked, then go by whatever the toggle has been left to since last time
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.getElementsByClassName('theme-switch')[0].getElementsByTagName('img')[0].src = 'static/moonIcon.png';
        document.getElementsByClassName('card-img')[0].getElementsByTagName('img')[0].src = 'static/FIU_vrt_Color.png';
        document.getElementById('mmalertWeb').src = 'static/appSamples/mmalertWebDark.png';
        document.getElementById('mmalertPhone').src = 'static/appSamples/iphoneMMAlertDark.png';
        document.getElementById('virsWeb').src = 'static/appSamples/virsDark.png';
        document.getElementById('m&mWeb').src = 'static/appSamples/m&mDark.png';
        document.getElementById('geekWeb').src = 'static/appSamples/geekDark.png';
        document.getElementById('githubIcon').src = 'static/github-mark-white.png';
        document.getElementById('siteLink').src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[0].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[1].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/github-mark-white.png';
        toggleSwitch.checked = true;
    }
}
else{   //if dark mode hasnt been touched then go by system preference
    if(darkModePreference['matches'] == true){
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementsByClassName('theme-switch')[0].getElementsByTagName('img')[0].src = 'static/moonIcon.png';
        document.getElementsByClassName('card-img')[0].getElementsByTagName('img')[0].src = 'static/FIU_vrt_Color.png';
        document.getElementById('mmalertWeb').src = 'static/appSamples/mmalertWebDark.png';
        document.getElementById('mmalertPhone').src = 'static/appSamples/iphoneMMAlertDark.png';
        document.getElementById('virsWeb').src = 'static/appSamples/virsDark.png';
        document.getElementById('m&mWeb').src = 'static/appSamples/m&mDark.png';
        document.getElementById('geekWeb').src = 'static/appSamples/geekDark.png';
        document.getElementById('githubIcon').src = 'static/github-mark-white.png';
        document.getElementById('siteLink').src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[0].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[1].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/github-mark-white.png';
        toggleSwitch.checked = true;
    } 
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        document.getElementsByClassName('theme-switch')[0].getElementsByTagName('img')[0].src = 'static/moonIcon.png';
        document.getElementsByClassName('card-img')[0].getElementsByTagName('img')[0].src = 'static/FIU_vrt_Color.png';
        document.getElementById('mmalertWeb').src = 'static/appSamples/mmalertWebDark.png';
        document.getElementById('mmalertPhone').src = 'static/appSamples/iphoneMMAlertDark.png';
        document.getElementById('virsWeb').src = 'static/appSamples/virsDark.png';
        document.getElementById('m&mWeb').src = 'static/appSamples/m&mDark.png';
        document.getElementById('geekWeb').src = 'static/appSamples/geekDark.png';
        document.getElementById('githubIcon').src = 'static/github-mark-white.png';
        document.getElementById('siteLink').src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[0].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/boxArrowUpLight.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[1].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/github-mark-white.png';
        localStorage.setItem('theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        document.getElementsByClassName('theme-switch')[0].getElementsByTagName('img')[0].src = 'static/sunIcon.png';
        document.getElementsByClassName('card-img')[0].getElementsByTagName('img')[0].src = 'static/FIU_vrt_Color_rev.png';
        document.getElementById('mmalertWeb').src = 'static/appSamples/mmalertWebLight.png';
        document.getElementById('mmalertPhone').src = 'static/appSamples/iphoneMMAlertLight.png';
        document.getElementById('virsWeb').src = 'static/appSamples/virsLight.png';
        document.getElementById('m&mWeb').src = 'static/appSamples/m&mLight.png';
        document.getElementById('geekWeb').src = 'static/appSamples/geekLight.png';
        document.getElementById('githubIcon').src = 'static/github-mark-dark.png';
        document.getElementById('siteLink').src = 'static/boxArrowUpDark.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[0].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/boxArrowUpDark.png';
        document.getElementsByClassName('buttonContainer')[0].getElementsByClassName('projSource')[1].getElementsByClassName('front')[0].getElementsByTagName('img')[0].src = 'static/github-mark-dark.png';
        localStorage.setItem('theme','light');
    }
}

if(toggleSwitch != null){
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// extend buttons to show text
var button = document.getElementsByClassName('front');
var i;
for(i=0;i<button.length;i++){
    button[i].addEventListener("mouseover",function(){
        this.classList.toggle("active");
        this.style.width = "181.48px";
        // this.getElementsByTagName('span')[0].style = "display:block;";
        // this.getElementsByTagName('span')[0].style = "opacity:1;";
    });
    button[i].addEventListener('mouseout',function(){
        this.classList.toggle("active");
        this.style.width = "117px";
        // this.getElementsByTagName('span')[0].style = "display:none;";
        // this.getElementsByTagName('span')[0].style = "opacity:0;";
    });
}

