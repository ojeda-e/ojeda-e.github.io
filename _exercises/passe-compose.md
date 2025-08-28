---
layout: french-exercises
permalink: /francais-avec-mia/passe-compose/
icon: fa-history
order: 1
---
<h3>Le Passé Composé - Interactive Exercises</h3>
<div class="exercise-content">
  
  <div class="exercise-header">
    <h4>Complete the sentence with the correct form of the verb in passé composé:</h4>
  </div>
  
  <div class="sentence-container">
    <div id="sentence-display" class="sentence-text"></div>
    <div class="answer-section">
      <input type="text" id="answer-input" placeholder="Type your answer here..." class="answer-input">
      <button id="check-answer-btn" class="check-button">Check Answer</button>
      <button id="show-answer-btn" class="show-button">Show Answer</button>
    </div>
    <div id="feedback" class="feedback"></div>
    <button id="new-exercise-btn" class="exercise-button">
      <i class="fa fa-history"></i> New Exercise
    </button>
  </div>
  
  <div class="hint-section">
    <h5>Grammar Tips:</h5>
    <ul>
      <li><strong>Avoir:</strong> Most verbs use "avoir" as auxiliary</li>
      <li><strong>Être:</strong> Use "être" for: aller, venir, naître, mourir, partir, arriver, entrer, sortir, monter, descendre, retourner, rester, tomber, passer</li>
      <li><strong>Agreement:</strong> With "être", the past participle agrees with the subject</li>
      <li><strong>Regular -er verbs:</strong> Remove -er and add -é (e.g., parler → parlé)</li>
      <li><strong>Regular -ir verbs:</strong> Remove -ir and add -i (e.g., finir → fini)</li>
      <li><strong>Regular -re verbs:</strong> Remove -re and add -u (e.g., vendre → vendu)</li>
    </ul>
  </div>
</div>

<script>
// French grammar exercise data for Passé Composé
const exercises = [
  {
    sentence: "Tu ………………… (descendre) à la boulangerie ce matin.",
    answer: "es descendu",
    explanation: "Descendre uses 'être' as auxiliary, so we conjugate 'être' in present tense (tu es) + past participle 'descendu'"
  },
  {
    sentence: "Nous ………………… (manger) au restaurant hier soir.",
    answer: "avons mangé",
    explanation: "Manger uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (nous avons) + past participle 'mangé'"
  },
  {
    sentence: "Elle ………………… (aller) au cinéma samedi dernier.",
    answer: "est allée",
    explanation: "Aller uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'allé' + agreement 'e' for feminine"
  },
  {
    sentence: "Ils ………………… (finir) leurs devoirs avant le dîner.",
    answer: "ont fini",
    explanation: "Finir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (ils ont) + past participle 'fini'"
  },
  {
    sentence: "Je ………………… (naître) en 1990.",
    answer: "suis né",
    explanation: "Naître uses 'être' as auxiliary, so we conjugate 'être' in present tense (je suis) + past participle 'né'"
  },
  {
    sentence: "Vous ………………… (parler) avec le professeur après le cours.",
    answer: "avez parlé",
    explanation: "Parler uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (vous avez) + past participle 'parlé'"
  },
  {
    sentence: "Marie ………………… (partir) en vacances la semaine dernière.",
    answer: "est partie",
    explanation: "Partir uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'parti' + agreement 'e' for feminine"
  },
  {
    sentence: "Les enfants ………………… (jouer) dans le parc toute l'après-midi.",
    answer: "ont joué",
    explanation: "Jouer uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (ils ont) + past participle 'joué'"
  },
  {
    sentence: "Mon frère ………………… (venir) me rendre visite hier.",
    answer: "est venu",
    explanation: "Venir uses 'être' as auxiliary, so we conjugate 'être' in present tense (il est) + past participle 'venu'"
  },
  {
    sentence: "Nous ………………… (vendre) notre ancienne voiture.",
    answer: "avons vendu",
    explanation: "Vendre uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (nous avons) + past participle 'vendu'"
  },
  {
    sentence: "Il ………………………….. (descendre) acheter une baguette.",
    answer: "est descendu",
    explanation: "Descendre uses 'être' as auxiliary, so we conjugate 'être' in present tense (il est) + past participle 'descendu'"
  },
  {
    sentence: "Marie ………………………….. (partir) en week-end à Paris.",
    answer: "est partie",
    explanation: "Partir uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'parti' + agreement 'e' for feminine"
  },
  {
    sentence: "J'……………………….. (apporter) mes jeux vidéo.",
    answer: "ai apporté",
    explanation: "Apporter uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (j'ai) + past participle 'apporté'"
  },
  {
    sentence: "Vous ………………………….. (voir) un film.",
    answer: "avez vu",
    explanation: "Voir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (vous avez) + past participle 'vu'"
  },
  {
    sentence: "Elles ………………………….. (terminer) leurs devoirs.",
    answer: "ont terminé",
    explanation: "Terminer uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (elles ont) + past participle 'terminé'"
  },
  {
    sentence: "On ………………………….. (aimer) le spectacle d'hier.",
    answer: "a aimé",
    explanation: "Aimer uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (on a) + past participle 'aimé'"
  },
  {
    sentence: "Nous ………………………….. (courir) pour attraper le bus.",
    answer: "avons couru",
    explanation: "Courir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (nous avons) + past participle 'couru'"
  },
  {
    sentence: "Tu ………………………….. (avoir) 15/20 en maths.",
    answer: "as eu",
    explanation: "Avoir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (tu as) + past participle 'eu'"
  },
  {
    sentence: "Il ………………………….. (entendre) un bruit bizarre.",
    answer: "a entendu",
    explanation: "Entendre uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (il a) + past participle 'entendu'"
  },
  {
    sentence: "Elle ………………………….. (faire) une surprise à ses copains.",
    answer: "a fait",
    explanation: "Faire uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (elle a) + past participle 'fait'"
  },
  {
    sentence: "Nous _________________ (venir) hier soir.",
    answer: "sommes venus",
    explanation: "Venir uses 'être' as auxiliary, so we conjugate 'être' in present tense (nous sommes) + past participle 'venu' + agreement 's' for plural"
  },
  {
    sentence: "Il _________________ (devoir) aller chez le médecin ce matin.",
    answer: "a dû",
    explanation: "Devoir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (il a) + past participle 'dû'"
  },
  {
    sentence: "Les étudiants _________________ (pouvoir) finir leur examen à temps.",
    answer: "ont pu",
    explanation: "Pouvoir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (ils ont) + past participle 'pu'"
  },
  {
    sentence: "Vous _________________ (mettre) beaucoup de sucre dans votre café.",
    answer: "avez mis",
    explanation: "Mettre uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (vous avez) + past participle 'mis'"
  },
  {
    sentence: "Ils _________________ (faire) un excellent travail cette année.",
    answer: "ont fait",
    explanation: "Faire uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (ils ont) + past participle 'fait'"
  },
  {
    sentence: "Tu _________________ (prendre) un café à midi.",
    answer: "as pris",
    explanation: "Prendre uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (tu as) + past participle 'pris'"
  },
  {
    sentence: "Elle _________________ (arriver) en classe avec 10 minutes de retard.",
    answer: "est arrivée",
    explanation: "Arriver uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'arrivé' + agreement 'e' for feminine"
  },
  {
    sentence: "Vous ______________________ (ne pas choisir) de dessert ?",
    answer: "n'avez pas choisi",
    explanation: "Choisir uses 'avoir' as auxiliary, so we conjugate 'avoir' in present tense (vous avez) + 'ne pas' + past participle 'choisi'"
  },
  {
    sentence: "Ils _________________ (rester) à la maison.",
    answer: "sont restés",
    explanation: "Rester uses 'être' as auxiliary, so we conjugate 'être' in present tense (ils sont) + past participle 'resté' + agreement 's' for plural"
  },
  {
    sentence: "Ma voiture ___________________ (tomber) en panne.",
    answer: "est tombée",
    explanation: "Tomber uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'tombé' + agreement 'e' for feminine"
  },
  {
    sentence: "Elle ______________________ (venir) à quelle heure ?",
    answer: "est venue",
    explanation: "Venir uses 'être' as auxiliary, so we conjugate 'être' in present tense (elle est) + past participle 'venu' + agreement 'e' for feminine"
  }
];

let currentExerciseIndex = 0;

function getRandomExercise() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * exercises.length);
  } while (newIndex === currentExerciseIndex && exercises.length > 1);
  
  currentExerciseIndex = newIndex;
  return exercises[newIndex];
}

function updateExercise() {
  const sentenceDisplay = document.getElementById('sentence-display');
  const answerInput = document.getElementById('answer-input');
  const feedback = document.getElementById('feedback');
  
  const newExercise = getRandomExercise();
  
  // Clear previous feedback and input
  feedback.innerHTML = '';
  answerInput.value = '';
  
  // Update sentence display
  sentenceDisplay.innerHTML = newExercise.sentence;
  
  // Store current exercise data
  sentenceDisplay.dataset.answer = newExercise.answer;
  sentenceDisplay.dataset.explanation = newExercise.explanation;
}

function checkAnswer() {
  const answerInput = document.getElementById('answer-input');
  const feedback = document.getElementById('feedback');
  const sentenceDisplay = document.getElementById('sentence-display');
  
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = sentenceDisplay.dataset.answer.toLowerCase();
  const explanation = sentenceDisplay.dataset.explanation;
  
  if (userAnswer === correctAnswer) {
    feedback.innerHTML = '<div class="correct-answer">✅ Correct! Excellent work!</div>';
    feedback.className = 'feedback correct';
  } else {
    feedback.innerHTML = `<div class="incorrect-answer">❌ Not quite right. The correct answer is: <strong>${correctAnswer}</strong></div><div class="explanation">${explanation}</div>`;
    feedback.className = 'feedback incorrect';
  }
}

function showAnswer() {
  const feedback = document.getElementById('feedback');
  const sentenceDisplay = document.getElementById('sentence-display');
  
  const correctAnswer = sentenceDisplay.dataset.answer;
  const explanation = sentenceDisplay.dataset.explanation;
  
  feedback.innerHTML = `<div class="show-answer">Answer: <strong>${correctAnswer}</strong></div><div class="explanation">${explanation}</div>`;
  feedback.className = 'feedback show-answer';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  const newExerciseBtn = document.getElementById('new-exercise-btn');
  const checkAnswerBtn = document.getElementById('check-answer-btn');
  const showAnswerBtn = document.getElementById('show-answer-btn');
  const answerInput = document.getElementById('answer-input');
  
  if (newExerciseBtn) {
    newExerciseBtn.addEventListener('click', updateExercise);
  }
  
  if (checkAnswerBtn) {
    checkAnswerBtn.addEventListener('click', checkAnswer);
  }
  
  if (showAnswerBtn) {
    showAnswerBtn.addEventListener('click', showAnswer);
  }
  
  if (answerInput) {
    answerInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        checkAnswer();
      }
    });
  }
  
  // Initialize with first exercise
  updateExercise();
});
</script>
