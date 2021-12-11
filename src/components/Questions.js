const Questions = [
    {
        id: 0,
        type: "checkbox",
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
        type: "radio",
        question: "What is Question 2?",
        options: [
            {
                text: "Answer 1",
                fact_key: 'answer1',
                fact_value: false
            },

            {
                text: "Answer 2",
                fact_key: 'answer2',
                fact_value: false
            },

            {
                text: "Answer 3",
                fact_key: 'answer3',
                fact_value: false
            }
        ]
    },

    // {
    //     id: 2,
    //     type: "radio",
    //     question: "What is Question 3?",
    //     options: ["Answer 1", "Answer 2", "Answer 3"]
    // }
]

export default Questions