console.log('script.js підключено та працює з DOM');

// Дані: масив питань (з 6 лаби)
const quizQuestions = [
  { question: 'Яка планета Сонячної системи є найбільшою?', answer: 'Юпітер' },
  { question: 'Скільки континентів на Землі?', answer: '7' },
  { question: 'Який газ переважає в атмосфері Землі?', answer: 'Азот' },
  { question: 'Як називається найдовша річка у світі?', answer: 'Амазонка' }
];

// Крок 3. Вибрати контейнери в DOM
const listContainer = document.querySelector('#questions-list');
const countElement = document.querySelector('#questions-count');

// Крок 4. Написати функцію рендеру
function renderQuestions(questionsArray) {
  // Очищаємо контейнер перед виведенням нового контенту
  listContainer.innerHTML = '';

  // Перебираємо масив циклом
  for (const item of questionsArray) {
    // Крок 5. Створити елемент li
    const listItem = document.createElement('li');
    
    // Заповнити текст
    listItem.textContent = item.question;

    // Крок 6. Додати атрибут та клас
    // Додаємо data-атрибут із правильною відповіддю
    listItem.dataset.answer = item.answer; 
    // Додаємо клас згідно з варіантом 8
    listItem.classList.add('answered');

    // Крок 7. Додати елемент у контейнер
    listContainer.append(listItem);
  }

  // Крок 9. Оновити підсумковий елемент
  countElement.textContent = `Кількість питань: ${questionsArray.length}`;
}

// Крок 8. Викликати рендер
renderQuestions(quizQuestions);