const KB = 
  {
    facts: [
      // {predicate: [argument1, argument2, ...]}
      {playForzaHor: ["Adi", "Rares"]},
      {waterThePlants: ["Andra"]},
      {doDebugging: ["Rares"]},
      {paintNails: ["Andreea"]},
      {learnForExam: ["Adi", "Andra"]}
    ],

    rules: [
      // {conclusion: [premise1, premise2, ...]}
      {haveTimeToLearn: [!playForzaHor]},
      {passExam: [learnForExam]},
      {havePrettyNails: [paintNails]},
      {goodProgrammer: [doDebugging]},
      {haveNicePlants: [waterThePlants]}
    ]
  }

export default KB
