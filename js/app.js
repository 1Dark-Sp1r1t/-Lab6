console.log('script.js підключено');

const quizQuestions = [
  { question: 'Яка планета Сонячної системи є найбільшою?', answer: 'Юпітер' },
  { question: 'Скільки континентів на Землі?', answer: '7' },
  { question: 'Який газ переважає в атмосфері Землі?', answer: 'Азот' },
  { question: 'Як називається найдовша річка у світі?', answer: 'Амазонка' }
];


function checkQuizAnswers(questions, userAnswers) {
  let correctCount = 0; 

  for (const item of questions) {
    console.log(`\nПитання: ${item.question}`);
    
    const currentAnswer = userAnswers.shift(); 
    console.log(`Відповідь користувача: ${currentAnswer}`);

    if (currentAnswer === item.answer) {
      console.log('Результат: Правильно ✔');
      correctCount++;
    } else {
      console.log(`Результат: Неправильно ✘ (Правильна відповідь: ${item.answer})`);
    }
  }

  return correctCount; 
}

const calcScorePercent = (correctCount, total) => Math.round((correctCount / total) * 100);


console.log('--- ПОЧАТОК ВІКТОРИНИ ---');

const testUserAnswers = ['Юпітер', '6', 'Кисень', 'Амазонка']; 

const totalQuestions = quizQuestions.length;
const finalCorrectCount = checkQuizAnswers(quizQuestions, testUserAnswers);

const scorePercent = calcScorePercent(finalCorrectCount, totalQuestions);

console.log('\n--- ПІДСУМКИ ---');
console.log(`Загальний бал: ${finalCorrectCount} з ${totalQuestions}`);
console.log(`Відсоток успішності: ${scorePercent}%`);