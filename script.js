let animated_text = document.querySelector('.animated-text')

let text1 = 'I Develop Mobile Apps'
let text2 = 'I Love Wordpress'  
let text3 = 'I Code Cool Websites'

function applyAnimation (text1) {
    setInterval(() => {
        if(text1.length == 0)
            clearInterval()
        
        else {
            animated_text.innerHTML += text1.charAt(0);
            text1 = text1.substr(1, text1.length)
        }
    }, 50);
}

function removeAnimation (text1) {
    setTimeout(() => {
        let index = text1.length - 1
        setInterval(() => {
            if(index >= 0) {
                let newText = animated_text.innerHTML.slice(0, -1);
                animated_text.innerHTML = newText;
                index--;
            }
            else
                clearInterval()
        }, 50)
    }, 2000)
    
}

let animationsDelay = () => {
        setTimeout(() => {
            applyAnimation(text1)
            removeAnimation(text1)
        }, 100)
        
        setTimeout(() => {
            applyAnimation(text2)
            removeAnimation(text2)
        }, 3300)

        setTimeout(() => {
            applyAnimation(text3)
            removeAnimation(text3)
        }, 6200)
}

animationsDelay()


let cursor = document.querySelector('.cursor')

window.onmousemove = (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}

const menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.nav-links')
let showMenu = document.querySelector('.menu-hide')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-hide')
})