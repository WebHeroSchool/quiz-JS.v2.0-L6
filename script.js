const question1 = 'вопрос1'; 
const question2 = 'вопрос2'; 
const question3 = 'вопрос3';
let correctAnswers = ['1','2','3'];
let correctResult = 0;

function userAnswer(question, correctAnswers) {
	let answer = prompt(question);
	let count = 0;
	if (answer.toLowerCase() == correctAnswers) {
		correctResult++;
   }
}
 
userAnswer(question1, correctAnswers[0]);
userAnswer(question2, correctAnswers[1]);
userAnswer(question3, correctAnswers[2]);

console.log(correctResult);
document.getElementById('aaa').innerHTML= 'Правильных ответов: ' +correctResult;
