const toggleMenu = document.querySelector('[data-togglemenu]')
const body = document.querySelector('body')




export function menu(){
    toggleMenu.addEventListener('click',()=>{
        console.log('click')
        toggle ()
        menuStyle()
    })

}
 


function toggle (){
    if(toggleMenu.classList.contains('open')){
        toggleMenu.classList.replace('open','close')
        menuStyle('close')
    }
    else if(toggleMenu.classList.contains('close')){
        toggleMenu.classList.replace('close','open')
        menuStyle('open')
    }
    else{
        toggleMenu.classList.add('open')
        menuStyle('open')
    }
}

function menuStyle(ev){
    const menu = document.querySelector('[data-menu]')
    if(ev == null || ev == '') return
    if(ev === 'open'){
        menu.classList.add('active')
        body.style.overflowY = 'hidden'
    }
    else if (ev === 'close'){
        menu.classList.remove('active')
        body.style.overflowY = ''
    }

}