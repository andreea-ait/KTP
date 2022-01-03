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

  
//FLAT
  {
    text: "Do you have a metal door at you flat's entrance?",
    type: 'yes_no',
    requirements: {'flat': true},
    options: [
      {
        text: "",
        fact_key: 'fence',
        fact_value: false,
        score: 10
      }
    ]
  },
  
//HOUSE
  {
    text: "Do you have a fence higher than 2.5 meters?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'fence',
        fact_value: false, 
        score: 2
      }
    ]
  },

  {
    text: "Do you have any scary dogs in the courtyard?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'dogs',
        fact_value: false,
        score: 1
      }
    ]
  },

  {
    text: "Do you have a surveillance system on the outside of your house?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'exterior_surveillance',
        fact_value: false, 
        score: 11
      }
    ]
  },

  {
    text: "Do you have bars on ground floor windows?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'bars',
        fact_value: false, 
        score: 3
      }
    ]
  },

  {
    text: "Do you have lights with motion sensors on the exterior of your house?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'lights',
        fact_value: false, 
        score: 2
      }
    ]
  },

  {
    text: "Do you have a backup generator?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'generator',
        fact_value: false,
        score: 5
      }
    ]
  },



  {
    text: "Do you have a contract with a rapid response team in case of a break in?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'rapid_response',
        fact_value: false, 
        score: 14
      }
    ]
  },

  {
    text: "Do you have a surveillance system in your house?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'indoor_surveillance',
        fact_value: false, 
        score: 10
      }
    ]
  },

  {
    text: "Do you have a fire alarm system in your home?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'fire_alarm',
        fact_value: false, 
        score: 10
      }
    ]
  },

  {
    text: "Do you have a safe box in your home?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'safe_box',
        fact_value: false, 
        score: 1
      }
    ]
  },

  {
    text: "Do you have burglar-proof windows?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'windows',
        fact_value: false, 
        score: 1
      }
    ]
  },

  {
    text: "Do you have an intercom system at your entrances?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'intercom',
        fact_value: false,
        score: 2
      }
    ]
  },

  {
    text: "Do you live in a remote area?",
    type: 'yes_no',
    requirements: {'house': true},
    options: [
      {
        text: "",
        fact_key: 'remote',
        fact_value: false
      }
    ]
  },

  {
    text: "Do you have perimeter lighting? (lights with motion sensors)?",
    type: 'yes_no',
    requirements: {'remote': true},
    options: [
      {
        text: "",
        fact_key: 'perimeter',
        fact_value: false,
        score: 2
      }
    ]
  },

  {
    text: "Do you have a surveillance system on the perimeter of your courtyard?",
    type: 'yes_no',
    requirements: {'remote': true},
    options: [
      {
        text: "",
        fact_key: 'surveillance_courtyard',
        fact_value: false,
        score: 5
      }
    ]
  },

  {
    text: "Do you have metal doors at the entrances of your house?",
    type: 'yes_no',
    requirements: {'remote': true},
    options: [
      {
        text: "",
        fact_key: 'metal_door_remote',
        fact_value: false,
        score: 3
      }
    ]
  },

  {
    text: "Do you have metal doors at the entrances of your house?",
    type: 'yes_no',
    requirements: {'remote': false},
    options: [
      {
        text: "",
        fact_key: 'metal_door_not_remote',
        fact_value: false,
        score: 6
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