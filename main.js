let card = document.querySelectorAll('.card');
for (let i = 0; i < card.length; i++) {

    const cards = card[i]

    cards.style.background = myRandom()
}


function myRandom() {

    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)
    let rgb = `rgb(${r},${g},${b})`;

    return rgb
}

