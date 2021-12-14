const Questions = [
    {
        id: 0,
        type: "radio",
        question: "What types of security are you looking for? (choose one or more options)",
        options: [
            {
                text: "Burglary",
                fact_key: 'burglary',
                fact_value: false
            },

            {
                text: "Video Surveillance",
                fact_key: 'video',
                fact_value: false
            },

            {
                text: "Access Control",
                fact_key: 'access',
                fact_value: false
            },             
        ]
    },
    
    {
        id: 1,
        type: "number",
        security_type: 'burglary',
        question: "How many rooms do you want to contain movement sensors?",
        options: [
            {
                text: "Number of rooms:",
                fact_key: 'rooms',
                fact_value: '0'
            }            
        ]
    },

    {
      id: 2,
      type: "number",
      security_type: 'burglary',
      question: "How many entrance doors does the house have?",
      options: [
          {
              text: "Number of entrance doors:",
              fact_key: 'entrance_doors',
              fact_value: '0'
          }            
      ]
  },

    {
        id: 3,
        type: "yes_no",
        security_type: 'burglary',
        question: "Would you like to have an alarm panic button?",
        options: [
            {
                text: "",
                fact_key: 'panic_button',
                fact_value: false
            }
        ]
    },

    {
        id: 4,
        type: "number",
        security_type: 'video',
        question: "How many rooms do you want to contain surveillance cameras?",
        options: [
            {
                text: "Number of rooms:",
                fact_key: 'number_of_rooms',
                fact_value: '0'
            }            
        ]
    },

    {
      id: 5,
      type: "yes_no",
      security_type: 'video',
      question: "Would you like to have exterior surveillance cameras?",
      options: [
          {
              text: "",
              fact_key: 'exterior_cameras',
              fact_value: false
          }
      ]
    },

    {
      id: 6,
      type: "yes_no",
      security_type: 'video',
      question: "Do you want the cameras to have microphones?",
      options: [
          {
              text: "",
              fact_key: 'cameras_mic',
              fact_value: false
          }
      ]
    },

    {
      id: 7,
      type: "radio",
      security_type: 'video',
      question: "Please choose the type of nightvision for the cameras",
      options: [
          {
              text: "Infrared",
              fact_key: 'infrared',
              fact_value: false
          },

          {
            text: "Colourful",
            fact_key: 'color',
            fact_value: false
        }
      ]
    },

    {
      id: 8,
      type: "yes_no",
      security_type: 'video',
      question: "Do you want the cameras to be equiped with speakers?",
      options: [
          {
              text: "",
              fact_key: 'speakers',
              fact_value: false
          }
      ]
    },
]

export default Questions