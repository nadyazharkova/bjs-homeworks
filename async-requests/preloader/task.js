const items = document.getElementById('items');
const loader = document.getElementById('loader')

let item = document.createElement('div');
item.setAttribute('class', 'item');

let itemCode = document.createElement('div');
itemCode.setAttribute('class', 'item__code');

let itemValue = document.createElement('div');
itemValue.setAttribute('class', 'item__value');

let itemCurrency = document.createElement('div');
itemCurrency.setAttribute('class', 'item__currency');
itemCurrency.textContent = 'руб.'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let xhrValute = JSON.parse(xhr.responseText).response.Valute;
        let itemValueArray = [];
        let itemCodeArray = [];

        Object.values(xhrValute).forEach((elem) => {
            itemValueArray.push(elem.Value);
            itemCodeArray.push(elem.CharCode);
        })
        
        itemCodeArray.forEach((elem) => {
            itemCode.textContent = elem;
            item.appendChild(itemCode)
            console.log(item)
        })

        console.log(itemValueArray);
        console.log(itemCodeArray);
        loader.classList.remove('loader_active');
    }
})




// Object.values(xhrValute).forEach((elem) => {
//     itemValue.textContent = elem.Value;
//     itemCode.textContent = elem.CharCode;
//     console.log(itemValue.textContent);
//     console.log(itemCode.textContent);

//     item.appendChild(itemCode);
//     item.appendChild(itemValue);
//     item.appendChild(itemCurrency);
//     console.log(item);

//     items.appendChild(item);
// })