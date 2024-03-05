const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let xhrData = JSON.parse(xhr.responseText).data;

        pollTitle.textContent = xhrData.title;

        xhrData.answers.forEach((answer) => {
            let answerButton = document.createElement('button');
            answerButton.setAttribute('class', 'poll__answer');
            answerButton.textContent = answer;
            pollAnswers.appendChild(answerButton);
        })

        let arrayOfAnswers = Array.from(document.querySelectorAll('.poll__answer'));
        
        arrayOfAnswers.forEach((answer) => {
            answer.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
})