const KB = 
  {
    facts: {
      // predicate: [argument1, argument2, ...]
      // 'flat': null,
      // 'house': null, 
      // 'access_control': null,
      'fact1': true,
      'fact2': true
    },

    // rules: {
    //   // [conclusion]: [fact1, fact2, ...]
    //   [{'access_control': true}]: [{'house': true}],
    //   [{'conclusion1': true}]: [{'fact1': true, 'fact2': true}]
    // }

    rules: [
      {
        premises_keys: ['fact1', 'fact2'],
        premises_values: [true, true],
        conclusion_key: 'conclusion',
        conclusion_value: true
      },

      {
        premises_keys: ['house'],
        premises_values: [true],
        conclusion_key: 'access_control',
        conclusion_value: true
      }
    ]
  }

export default KB
