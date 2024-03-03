//получаем необходимые элементы
const productControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec')); //массив всех "минусов" счетчика
const productControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc')); //массив всех "плюсов" счетчика
const productValue = Array.from(document.querySelectorAll('.product__quantity-value')); //массив всех значений счетчика
const productAddBtn = Array.from(document.querySelectorAll('.product__add')); //массив всех "кнопок" Добавить в корзину
const product = Array.from(document.querySelectorAll('.product')); //массив всех продуктов (не в корзине)
const productImage = Array.from(document.querySelectorAll('.product__image')); //массив изображений продуктов
const cartProducts = document.querySelector('.cart__products') //корзина

//уменьшаем количество товара
productControlDec.forEach((elem, index) => { //для каждого минуса применяем следующее
    elem.addEventListener('click', () => { //при клике проверяем
        if (productValue[index].textContent > 1) { //если число значения счетчика больше одного, то уменьшаем значение счетчика
            productValue[index].textContent = Number(productValue[index].textContent) - 1;
        }
    })
})

//увеличиваем количество товара
productControlInc.forEach((elem, index) => { //для каждого плюса применяем следующее
    elem.addEventListener('click', () => { //при клике добавляем числу значения счетчика + 1
        productValue[index].textContent = Number(productValue[index].textContent) + 1;
    })
})

//добавляем товар в корзину
productAddBtn.forEach((elem, index) => { //для каждой "кнопки" Добавить в корзину
    elem.addEventListener('click', () => { //при клике на кнопку

        let cartProductsAll = Array.from(document.querySelectorAll('.cart__product'));
        let productInCart = cartProductsAll.find(function() {
            return cartProducts.querySelector(`[data-id="${product[index].dataset.id}"]`);
        });

        if (productInCart) {
            let cartProductCount = Array.from(document.querySelectorAll('.cart__product-count'));
            for (let elem of cartProductCount) {
                elem.textContent = Number(elem.textContent) + Number(productValue[index].textContent)
            }
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${product[index].dataset.id}">
                    <img class="cart__product-image" src="${productImage[index].src}">
                    <div class="cart__product-count"> ${productValue[index].textContent}</div>
                </div
            `)
        }
    })
})


// ------- СТАРЫЙ КОД -------

//         let cartProduct = document.createElement('div'); //создаем элемент div - карточка товара в корзине
//         cartProduct.dataset.id = product[index].dataset.id; //приписываем созданному div'у data-id,которое равно индексу продукта, чья кнопка была нажата
//         let cartProductId = cartProduct.dataset.id; //достаем data-id
//         cartProduct.setAttribute('class', 'cart__product'); //добавляем созданному div'у класс

//         let cartProductImage= document.createElement('img'); //создаем элемент img - изображение товара в корзине
//         cartProductImage.src = productImage[index].src; //добавляем ссылку на изображение, получаем нужную ссылку по индексу элемента из массива изображений продуктов
//         cartProductImage.setAttribute('class', 'cart__product-image'); //добавляем созданному img класс

//         let cartProductCount = document.createElement('div'); //создаем элемент div - счетчик товара в корзине
//         cartProductCount.setAttribute('class', 'cart__product-count'); //добавляем созданному div'у класс
//         cartProductCount.textContent = productValue[index].textContent; //значение счетчика берем по индексу элемента из массива всех значений счетчика

//         let cartArray = cart.querySelector(`[data-id="${cartProductId}"]`);
        
//         if (cartArray) {
//             let cartProductCountRes = Array.from(document.querySelectorAll('.cart__product-count'));
//             cartProductCountRes[index].textContent = Number(cartProductCountRes[index].textContent) + Number(productValue[index].textContent);
//         } else {
//             cartProduct.appendChild(cartProductImage); //добавляем изображение в карточку товара в корзине
//             cartProduct.appendChild(cartProductCount); //добавляем счетчик в карточку товара в корзине
//             cart.appendChild(cartProduct); //добавляем карточку товара в корзину
//         }