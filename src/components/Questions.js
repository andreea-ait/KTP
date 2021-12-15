const Questions = [
  {
    text: "What is your home type?",
    type: 'radio',
    requirements: {},
    options: [
      {
        text: "Apartment/Flat",
        fact_key: 'flat',
        fact_value: false
      },

      {
        text: "House",
        fact_key: 'house',
        fact_value: false
      },

    ]
  },

  {
    text: "Do you live in a residential neighbourhood?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'residential',
        fact_value: false
      }
    ]
  },

  {
    text: "Do you feel safe when you are home alone in general?",
    type: 'yes_no',
    final: true,
    requirements: {},
    options: [
      {
        text: "",
        fact_key: 'feel_safe',
        fact_value: false
      }
    ]
  }
]

export default Questions