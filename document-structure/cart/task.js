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
        let cartProductId = product[index].getAttribute('data-id');
        
        let cartProductsAll = Array.from(document.querySelectorAll('.cart__product'));
        
        let productInCart = cartProductsAll.find(product => product.dataset.id == cartProductId);

        if (productInCart) {
            let cartProductCount = productInCart.children[1];
            cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productValue[index].textContent);
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