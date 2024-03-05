const items = document.getElementById('items');
const loader = document.getElementById('loader')

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let xhrValute = JSON.parse(xhr.responseText).response.Valute;
        
        Object.values(xhrValute).forEach((elem) => {
            items.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">${elem.CharCode}</div>
                    <div class="item__value">${elem.Value}</div>
                    <div class="item__currency">руб.</div>
            `)
        })

        loader.classList.remove('loader_active');
    }
})