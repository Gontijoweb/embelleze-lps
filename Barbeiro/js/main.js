const animDireita = document.querySelectorAll('.anim-direita')
const animEsquerda = document.querySelectorAll('.anim-esquerda')

window.addEventListener('scroll', checkAnim)

checkAnim()

function checkAnim () {
    const triggerBottom = window.innerHeight / 4 * 4

    animDireita.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top

        if (animTop < triggerBottom) {
            anim.classList.add('rolagem-direita')
            anim.classList.remove('anim-direita')
        }
    })

    animEsquerda.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top

        if (animTop < triggerBottom) {
            anim.classList.add('rolagem-esquerda')
            anim.classList.remove('anim-esquerda')
        }
    })
}