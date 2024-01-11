const menu = document.querySelector('#menu-icon')
const navMenu = document.querySelector('.nav-menu')
const smain = document.querySelector('main-section')

menu.addEventListener('click', function() {
    // Funcionalidades do botão menu
    menu.classList.toggle('ativo')
    if (menu.classList == 'material-icons ativo'){
        menu.innerHTML = 'close'
        menu.style.transition = 'all .5s'
        menu.style.color = 'var(--color1)'
        menu.style.transform = 'rotate(180deg)'
    } else {
        menu.innerHTML = 'menu'
        menu.style.transition = 'all .5s'
        menu.style.color = 'white'
        menu.style.transform = 'rotate(0)'
    }

    // Funcionalidade da tag nav
    navMenu.classList.toggle('ativo')
})

function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.typewriter')
    
    ativaLetra(titulo)
}

escrevendoLetra()
