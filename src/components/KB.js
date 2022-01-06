const KB = 
  {
    facts: {
      // predicate: [argument1, argument2, ...]
      // 'flat': null,
      // 'house': null, 
      // 'access_control': null,
      // 'fact1': true,
      // 'fact2': true,
      // 'safety': 0
    },

    // rules: {
    //   // [conclusion]: [fact1, fact2, ...]
    //   [{'access_control': true}]: [{'house': true}],
    //   [{'conclusion1': true}]: [{'fact1': true, 'fact2': true}]
    // }

    rules: [
      // {
      //   premises_keys: ['fact1', 'fact2'],
      //   premises_values: [true, true],
      //   conclusion_key: 'conclusion',
      //   conclusion_value: true,
      //   score: 1
      // },

      // {
      //   premises_keys: ['house'],
      //   premises_values: [true],
      //   conclusion_key: 'access_control',
      //   conclusion_value: true,
      //   score: 0
      // },

      // {
      //   premises_keys: ['flat'],
      //   premises_values: [true],
      //   conclusion_key: 'access_control',
      //   conclusion_value: false,
      //   score: 0
      // },

      // rapid response
      {
        premises_keys: ['flat', 'flat_rapid_response'],
        premises_values: [true, true],
        conclusion_key: ['rapid_response'],
        conclusion_value: [true]
      },

      {
        premises_keys: ['house', 'house_rapid_response'],
        premises_values: [true, true],
        conclusion_key: ['rapid_response'],
        conclusion_value: [true]
      },

      // surveillance
      {
        premises_keys: ['flat', 'flat_surveillance'],
        premises_values: [true, true],
        conclusion_key: ['full_surveillance'],
        conclusion_value: [true]
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, true, true],
        conclusion_key: ['full_surveillance'],
        conclusion_value: [true]
      },

      {
        premises_keys: ['flat', 'flat_surveillance'],
        premises_values: [true, false],
        conclusion_key: ['full_surveillance'],
        conclusion_value: [false]
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, false],
        conclusion_key: ['full_surveillance'],
        conclusion_value: [false]
      },

      // metal doors
      {
        premises_keys: ['house', 'metal_door_remote'],
        premises_values: [true, true],
        conclusion_key: ['metal_door'],
        conclusion_value: [true]
      },

      {
        premises_keys: ['house', 'metal_door_not_remote'],
        premises_values: [true, true],
        conclusion_key: ['metal_door'],
        conclusion_value: [true]
      },

      // ground windows bars
      {
        premises_keys: ['flat', 'ground_floor'],
        premises_values: [true, false],
        conclusion_key: ['ground_floor_bars'],
        conclusion_value: [true]
        // if you don't live on the ground floor in a flat,
        // we can ignore the ground window bars (no reccomendation)
      },

      {
        premises_keys: ['house', 'bars'],
        premises_values: [true, true],
        conclusion_key: ['ground_floor_bars'],
        conclusion_value: [true]
      },
      
      // awareness (in case of burglars)
      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, true],
        conclusion_key: ['awareness', 'awareness_level'],
        conclusion_value: [true, 100]
      },

      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, false],
        conclusion_key: ['awareness', 'awareness_level'],
        conclusion_value: [true, 75]
      },

      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [false, false],
        conclusion_key: ['awareness', 'awareness_level'],
        conclusion_value: [true, 0]
      },

      //delaying 
      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [true, true],
        conclusion_key: ['delaying', 'delaying_level'],
        conclusion_value: [true, 100]
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, true],
        conclusion_key: ['delaying', 'delaying_level'],
        conclusion_value: [true, 75]
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [true, false],
        conclusion_key: ['delaying', 'delaying_level'],
        conclusion_value: [true, 50]
      },
      

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, false],
        conclusion_key: ['delaying', 'delaying_level'],
        conclusion_value: [true, 25]
      },

      // recognition
      // recognition for both flat/apartment and house
      {
        premises_keys: ['full_surveillance'],
        premises_values: [false],
        conclusion_key: ['recognition', 'recognition_level'],
        conclusion_value: [true, 0]
      },
      
      {
        premises_keys: ['full_surveillance'],
        premises_values: [true],
        conclusion_key: ['recognition', 'recognition_level'],
        conclusion_value: [true, 100]
      },

      // recognition house case
      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, true],
        conclusion_key: ['recognition', 'recognition_level'],
        conclusion_value: [true, 75]
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, true, false],
        conclusion_key: ['recognition', 'recognition_level'],
        conclusion_value: [true, 50]
      },
    ]
  }

export default KB
