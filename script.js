// select elements from the HTML
const assignPercentInput = document.querySelector('#assign-percent');
const quizPercentInput = document.querySelector('#quiz-percent');
const examPercentInput = document.querySelector('#exam-percent');
const desiredPercentInput = document.querySelector('#desired-percent');
const calculateBtn = document.querySelector('#calculate-btn');
const resultDiv = document.querySelector('#result');

// add click event listener to the calculate button
calculateBtn.addEventListener('click', () => {
  // get the values of the inputs and parse them as numbers
  const assignPercent = parseFloat(assignPercentInput.value);
  const quizPercent = parseFloat(quizPercentInput.value);
  const examPercent = parseFloat(examPercentInput.value);
  const desiredPercent = parseFloat(desiredPercentInput.value);

  // calculate the total points earned by the student
  const totalPossiblePoints = 540;
  const assignPoints = 45 * (assignPercent / 100);
  const quizPoints = 45 * (quizPercent / 100);
  const examPoints = 250 * (examPercent / 100);
  const totalEarnedPoints = quizPoints + assignPoints + examPoints;

  // calculate the desired grade
  const desiredGrade = (totalEarnedPoints / totalPossiblePoints) * 100;

  // calculate the percent needed on the final exam
  const finalPointsNeeded = (desiredPercent / 100) * totalPossiblePoints - totalEarnedPoints;
  const finalPercentNeeded = (finalPointsNeeded / 200) * 100;

  // display the result
  resultDiv.innerHTML = `<p>You need ${finalPercentNeeded.toFixed(2)}% on the final exam <br> to get a ${desiredPercent}% overall grade.</p>
    </p>`;
  resultDiv.style.display = 'block';
});
