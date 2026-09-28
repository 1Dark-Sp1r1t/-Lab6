// Крок 3. Перевірити підключення
console.log('script.js підключено');

// Крок 4. Оголосити дані свого варіанта (масив питань вікторини)
const quizQuestions = [
  { question: 'Яка планета Сонячної системи є найбільшою?', answer: 'Юпітер' },
  { question: 'Скільки континентів на Землі?', answer: '7' },
  { question: 'Який газ переважає в атмосфері Землі?', answer: 'Азот' },
  { question: 'Як називається найдовша річка у світі?', answer: 'Амазонка' }
];

// Крок 5-6. Обробити дані циклом (for...of) та умовною класифікацією (if/else)
// Функція виводить питання, перевіряє "відповідь користувача" і рахує бали
function checkQuizAnswers(questions, userAnswers) {
  let correctCount = 0; // Лічильник правильних відповідей (змінна let, бо значення змінюється)

  // Перебираємо всі питання масиву циклом for...of
  for (const item of questions) {
    console.log(`\nПитання: ${item.question}`);
    
    // Жорстко задаємо поточну відповідь користувача для тестування (беремо з масиву userAnswers)
    // Використовуємо метод shift(), щоб взяти першу відповідь з масиву відповідей
    const currentAnswer = userAnswers.shift(); 
    console.log(`Відповідь користувача: ${currentAnswer}`);

    // Строге порівняння (===) відповіді користувача з правильною відповіддю
    if (currentAnswer === item.answer) {
      console.log('Результат: Правильно ✔');
      correctCount++;
    } else {
      console.log(`Результат: Неправильно ✘ (Правильна відповідь: ${item.answer})`);
    }
  }

  return correctCount; // Повертаємо загальну кількість правильних відповідей
}

// Крок 7. Написати стрілкову функцію (рахує відсоток правильних відповідей)
const calcScorePercent = (correctCount, total) => Math.round((correctCount / total) * 100);

// --- Виклик функцій та виведення результатів ---

console.log('--- ПОЧАТОК ВІКТОРИНИ ---');

// Жорстко задані відповіді користувача (2 правильні, 2 неправильні)
const testUserAnswers = ['Юпітер', '6', 'Кисень', 'Амазонка']; 

// Запускаємо перевірку
const totalQuestions = quizQuestions.length;
const finalCorrectCount = checkQuizAnswers(quizQuestions, testUserAnswers);

// Рахуємо відсоток за допомогою нашої стрілкової функції
const scorePercent = calcScorePercent(finalCorrectCount, totalQuestions);

console.log('\n--- ПІДСУМКИ ---');
console.log(`Загальний бал: ${finalCorrectCount} з ${totalQuestions}`);
console.log(`Відсоток успішності: ${scorePercent}%`);
