let cakes = [
    {
        bgimg: 'pie.jpg',
        cartimg: 'cart.png',
        price: '$5',
        name: 'Other Item',
    },
    {
        bgimg: 'cupcake7.jpg',
        cartimg: 'cart.png',
        price: '$5',
        name: 'Cupcake Item',
    },
    {
        bgimg: 'cake6.jpg',
        cartimg: 'cart.png',
        price: '$5',
        name: 'Cake Item',
    },
    {
        bgimg: 'do3.webp',
        cartimg: 'cart.png',
        price: '$5',
        name: 'Doughnut Item',
    },
    {
        bgimg: 'mousse.jpg',
        cartimg: 'cart.png',
        price: '$10',
        name: 'Other Item',
    },
    {
        bgimg: 'cupcake4.jpg',
        cartimg: 'cart.png',
        price: '$10',
        name: 'Cupcake Item',
    },
    {
        bgimg: 'cake5.jpg',
        cartimg: 'cart.png',
        price: '$10',
        name: 'Cake Item',
    },
    {
        bgimg: 'do4.jpg',
        cartimg: 'cart.png',
        price: '$10',
        name: 'Doughnut Item',
    },
    {
        bgimg: 'other.avif',
        cartimg: 'cart.png',
        price: '$15',
        name: 'Other Item',
    },
    {
        bgimg: 'cupcake5.jpg',
        cartimg: 'cart.png',
        price: '$15',
        name: 'Cupcake Item',
    },
    {
        bgimg: 'cake4.webp',
        cartimg: 'cart.png',
        price: '$15',
        name: 'Cake Item',
    },
    {
        bgimg: 'do.jpg',
        cartimg: 'cart.png',
        price: '$15',
        name: 'Doughnut Item',
    },
]
const input = document.querySelector('input')
const pictures = document.querySelector('.pictures')
const cakeEl = document.querySelector('#cakes')
const cupcakes = document.querySelector('#cupcakes')
const Others = document.querySelector('#Others')
const doughnuts = document.querySelector('#doughnuts')
const all = document.querySelector('#all')

for (const c of cakes) {
    pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
}



cakeEl.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Cake Item')
    for (const c of filter) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})

cupcakes.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Cupcake Item')
    for (const c of filter) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})

Others.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Other Item')
    for (const c of filter) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})


doughnuts.addEventListener('click', () => {
    pictures.innerHTML = ''
    const filter = cakes.filter((n) => n.name == 'Doughnut Item')
    for (const c of filter) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})



all.addEventListener('click', () => {
    pictures.innerHTML = ''
    for (const c of cakes) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})

input.addEventListener('input', () => { pictures.innerHTML = ''

    const filter = cakes.filter((n) => n.name.toUpperCase().includes(input.value.toUpperCase()))

    for (const c of filter) {
        pictures.innerHTML += `<div class="pics1">
                    <div class="imgcart"> 
                    <img src=${c.bgimg} alt="">
                        <p class="movecart">
                            <img src=${c.cartimg} alt="">
                        </p>
                    </div>

                    <div class="caption">
                        <p id="word">${c.name}</p>
                        <p>${c.price}</p>
                    </div>
                </div>`
    }
})