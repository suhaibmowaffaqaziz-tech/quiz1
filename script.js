const questions = [
  { q: "س1: ما الوحدة البنائية الأساسية لجميع الكائنات الحية؟", options: ["النسيج","الخلية","العضو","الجزيء"], answer: 1 },
  { q: "س2: أي من الخلايا يفتقد الغلاف النووي والعضيات الغشائية؟", options: ["الخلية حقيقية النواة","الخلية بدائية النواة","الخلية النباتية","الخلية الحيوانية"], answer: 1 },
  { q: "س3: من أول من صنع المجهر وتمكن من رؤية الخلية؟", options: ["روبرت هوك","روبرت براون","فان ليفنهوك","شلايدن"], answer: 2 },
  { q: "س4: من أول من استخدم مصطلح 'خلية' Cell عند وصف نسيج الفلين؟", options: ["فان ليفنهوك","روبرت هوك","ماثياس شلايدن","ثيودور شوان"], answer: 1 },
  { q: "س5: اكتشف العالم روبرت براون عام 1831:", options: ["جدار الخلية","النواة","الميتوكوندريا","الغشاء البلازمي"], answer: 1 },
  { q: "س6: من العالم الذي توصل عام 1838 إلى أن جميع النباتات تتكون من خلايا؟", options: ["روبرت براون","ماثياس شلايدن","ثيودور شوان","روبرت هوك"], answer: 1 },
  { q: "س7: من الذي أثبت أن جميع الحيوانات تتكون من خلايا عام 1839؟", options: ["فان ليفنهوك","ثيودور شوان","ماثياس شلايدن","روبرت براون"], answer: 1 },
  { q: "س8: الخلية حقيقية النواة تتميز بوجود:", options: ["نواة واضحة محاطة بغلاف نووي","عدم وجود نواة","غياب العضيات الغشائية","جدار خلوي فقط"], answer: 0 },
  { q: "س9: أي من العلماء وصف الخلية بأنها 'ردهة هوائية تشبه تجويف خلية شمع العسل'؟", options: ["فان ليفنهوك","روبرت براون","روبرت هوك","ثيودور شوان"], answer: 2 },
  { q: "س10: ما العلم الذي يُعنى بدراسة الخلايا؟", options: ["علم الأجنة","علم الأنسجة","علم الخلية Cytology","علم وظائف الأعضاء"], answer: 2 },
  { q: "س11: في أي سنة وصف ماثياس شلايدن أن جميع النباتات مكوّنة من خلايا؟", options: ["1723","1831","1838","1839"], answer: 2 },
  { q: "س12: أي من التالي يُعتبر من الخلايا بدائية النواة؟", options: ["الخلية النباتية","الخلية البكتيرية","الخلية الحيوانية","خلية الفطر"], answer: 1 },
  { q: "س13: أي مما يلي لا ينتمي إلى العلماء الذين ساهموا في تطور نظرية الخلية؟", options: ["فان ليفنهوك","ماثياس شلايدن","جريجور مندل","ثيودور شوان"], answer: 2 },
  { q: "س14: أي من العلماء اكتشف النواة وقدّم وصفًا لها؟", options: ["روبرت براون","فان ليفنهوك","روبرت هوك","شلايدن"], answer: 0 },
  { q: "س15: أول من رأى الخلية تحت المجهر كان:", options: ["روبرت هوك","فان ليفنهوك","ثيودور شوان","براون"], answer: 1 },
  { q: "س16: الخلايا التي لها عضيات خلوية غشائية مثل الميتوكوندريا والبلاستيدات هي:", options: ["بدائية النواة","حقيقية النواة","البكتيرية فقط","الفيروسية"], answer: 1 }
];

let score = 0;
const quizContainer = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function loadQuiz() {
  score = 0;
  quizContainer.innerHTML = "";
  resultDiv.textContent = "";

  questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question";

    const questionText = document.createElement("h3");
    questionText.textContent = q.q;
    div.appendChild(questionText);

    const ul = document.createElement("ul");
    ul.className = "options";

    q.options.forEach((opt, idx) => {
      const li = document.createElement("li");
      li.textContent = opt;

      li.addEventListener("click", () => {
        if (li.classList.contains("correct") || li.classList.contains("wrong")) return;

        if (idx === q.answer) {
          li.classList.add("correct");
          score++;
        } else {
          li.classList.add("wrong");
        }

        Array.from(ul.children).forEach(item => item.style.pointerEvents = "none");
      });

      ul.appendChild(li);
    });

    div.appendChild(ul);
    quizContainer.appendChild(div);
  });
}

document.getElementById("showResult").addEventListener("click", () => {
  const percentage = ((score / questions.length) * 100).toFixed(2);
  resultDiv.textContent = `النتيجة النهائية: ${score} من ${questions.length} (${percentage}%)`;
});

document.getElementById("restart").addEventListener("click", () => {
  loadQuiz();
});

loadQuiz();
