var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    show: false
  }
})

var quizzes = new Vue({
  el: '#quizzes',
  data: {
    questionnaireActive:  {
      title: 'test',
      count: 1,
      questionnaire: [
        {
          question: "In welchem Kontinent liegen die Alpen?",
          answers: ["Europa", "Asien", "Australien"],
          correct: "Europa"
        }
      ]
    },
    items: [
      {
        title: 'Geografie',
        count: 1,
        questionnaire: [
          {
            question: "In welchem Kontinent liegen die Alpen?",
            answers: ["Europa", "Asien", "Australien"],
            correct: "Europa"
          }
        ]
      },
      { title: 'Biologie', count: 2 ,
        questionnaire: [
          {
            question: "Was ist das grösste Organ des Menschen?",
            answers:[ "Haut", "Magen", "Zunge"]
          },
          {
            question: "In welchem Kontinent liegen die Alpen?",
            answers: ["Europa", "Asien", "Australien"],
            correct: "Europa"
          }
        ]
      },
      { title: 'Geschichte', count: 0 },
      { title: 'Informatik', count: 0 }
    ]
  },
  methods: {
    setQuestionnaire(obj) {
      this.questionnaireActive = obj,
      this.show = true
    }
  }
})