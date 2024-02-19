const reveal = Array.from(document.querySelectorAll('.reveal')); //находим все элементы с классом reveal, преобразовываем в массив

for (let elem of reveal) { //для каждого элемента массива reveal применяем событие scroll
    window.addEventListener('scroll', () => {
        const { top, bottom } = elem.getBoundingClientRect(); //получаем координаты нужного элемента
        let topVisible = top > 0 && top < window.innerHeight; //проверяем варианты видимости элемента
        let bottomVisible = bottom < window.innerHeight && bottom > 0;
    
        if (!topVisible && !bottomVisible) {
            elem.classList.remove('reveal_active') //удаляем класс, если элемент не виден
        } else {
            elem.classList.add('reveal_active') //добавляем класс, если элемент виден
        }
    });
}