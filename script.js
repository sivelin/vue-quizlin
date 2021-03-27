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
    items: [
      { title: 'Geografie', description: '15 Fragen' },
      { title: 'Biologie', description: '16 Fragen' },
      { title: 'Geschichte', description: '25 Fragen' },
      { title: 'Informatik', description: '20 Fragen' }
    ]
  }
})