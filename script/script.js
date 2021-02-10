const cards = document.querySelectorAll('.feature__grid__item')
const allClickable = document.querySelectorAll('.clickable')

// To ensure that other clickable elements can be added to cards
// and work as intended, without trigerring the main event listener
allClickable.forEach( ele => {
    ele.addEventListener('click', e => e.stopPropagation())
})



cards.forEach( card => {
    card.addEventListener('click', e => {
        
        // check if any text is selected, 
        const textSelected = window.getSelection().toString()
        if (textSelected) {
            return false;
        }

        // if no text selected, get the card clicked
        const clickedCard = e.target.closest('.feature__grid__item')

        // get all the child elements of the card clicked
        let childrenArr = Array.from(clickedCard.children)

        // find the child with the class 'main-link'
        const mainLink = childrenArr.find(ele => {
            return ele.classList.contains('main-link')
        })

        mainLink.click()
    })
})
