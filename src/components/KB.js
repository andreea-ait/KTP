const KB = 
  {
    facts: {
      // predicate: [argument1, argument2, ...]
      'flat': null,
      'house': null
    },

    rules: [
      // {
      //   premises_keys: ['fact1', 'fact2'],
      //   premises_values: [true, true],
      //   conclusion_key: 'conclusion',
      //   conclusion_value: true,
      //   score: 1
      // },

      // TEST
      // {
      //   premises_keys: ['remote', 'house'],
      //   premises_values: [true, true],
      //   conclusion_key: ['test_score', 'xxy'],
      //   conclusion_value: [15, true]
      // },

      // remote
      // remote area
      {
        premises_keys: ['remote', 'house'],
        premises_values: [true, true],
        conclusion_key: 'remote_area',
        conclusion_value: true
      },

      //full coverage
      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, true, true, true],
      //   conclusion_key: ['full_coverage', 'score'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, true, true, true],
        conclusion_key: 'full_coverage',
        conclusion_value: true
      },

      //no covergae
      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, false, false, false],
      //   conclusion_key: ['no_coverage', 'score'],
      //   conclusion_value: [true, 0]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, false, false, false],
        conclusion_key: 'no_coverage',
        conclusion_value: true
      },

      //partial coverage with just 1 missing
      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, false, true, true],
      //   conclusion_key: ['partial_coverage_without_surveillance', 'score'],
      //   conclusion_value: [true, 66]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, false, true, true],
        conclusion_key: 'partial_coverage_without_surveillance',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, true, false, true],
      //   conclusion_key: ['partial_coverage_without_generator', 'score'],
      //   conclusion_value: [true, 33]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, true, false, true],
        conclusion_key: 'partial_coverage_without_generator',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, true, true, false],
      //   conclusion_key: ['partial_coverage_without_perimeter', 'score'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, true, true, false],
        conclusion_key: 'partial_coverage_without_perimeter',
        conclusion_value: true
      },

      //partial coverage with 2 missing
      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, true, false, false],
      //   conclusion_key: ['almost_no_coverage_with_surveillance', 'score'],
      //   conclusion_value: [true, 66]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, true, false, false],
        conclusion_key: 'almost_no_coverage_with_surveillance',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, false, true, false],
      //   conclusion_key: ['almost_no_coverage_with_generator', 'score'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, false, true, false],
        conclusion_key: 'almost_no_coverage_with_generator',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
      //   premises_values: [true, false, false, true],
      //   conclusion_key: ['almost_no_coverage_with_perimeter', 'score'],
      //   conclusion_value: [true, 33]
      // },
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, false, false, true],
        conclusion_key: 'almost_no_coverage_with_perimeter',
        conclusion_value: true
      },

      // rapid response
      {
        premises_keys: ['flat', 'flat_rapid_response'],
        premises_values: [true, true],
        conclusion_key: 'rapid_response',
        conclusion_value: true
      },

      {
        premises_keys: ['flat', 'flat_rapid_response'],
        premises_values: [true, false],
        conclusion_key: 'rapid_response',
        conclusion_value: false
      },

      {
        premises_keys: ['flat', 'alarm'],
        premises_values: [true, false],
        conclusion_key: 'rapid_response',
        conclusion_value: false
      },

      {
        premises_keys: ['house', 'house_rapid_response'],
        premises_values: [true, true],
        conclusion_key: 'rapid_response',
        conclusion_value: true
      },

      // surveillance
      {
        premises_keys: ['flat', 'flat_surveillance'],
        premises_values: [true, true],
        conclusion_key: 'full_surveillance',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, true, true],
        conclusion_key: 'full_surveillance',
        conclusion_value: true
      },

      {
        premises_keys: ['flat', 'flat_surveillance'],
        premises_values: [true, false],
        conclusion_key: 'full_surveillance',
        conclusion_value: false
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, false],
        conclusion_key: 'full_surveillance',
        conclusion_value: false
      },

      // metal doors
      {
        premises_keys: ['house', 'metal_door_remote'],
        premises_values: [true, true],
        conclusion_key: 'metal_door',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'metal_door_not_remote'],
        premises_values: [true, true],
        conclusion_key: 'metal_door',
        conclusion_value: true
      },

      // ground windows bars
      {
        premises_keys: ['flat', 'ground_floor'],
        premises_values: [true, false],
        conclusion_key: 'ground_floor_bars',
        conclusion_value: true
        // if you don't live on the ground floor in a flat,
        // we can ignore the ground window bars (no reccomendation)
      },

      {
        premises_keys: ['house', 'bars'],
        premises_values: [true, true],
        conclusion_key: 'ground_floor_bars',
        conclusion_value: true
      },
      
      // awareness (in case of burglars)
      // {
      //   premises_keys: ['alarm', 'rapid_response'],
      //   premises_values: [true, true],
      //   conclusion_key: ['awareness', 'awareness_level'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, true],
        conclusion_key: 'full_awareness',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['alarm', 'rapid_response'],
      //   premises_values: [true, false],
      //   conclusion_key: ['awareness', 'awareness_level'],
      //   conclusion_value: [true, 50]
      // },
      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, false],
        conclusion_key: 'good_awareness',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['alarm', 'rapid_response'],
      //   premises_values: [false, false],
      //   conclusion_key: ['awareness', 'awareness_level'],
      //   conclusion_value: [true, 0]
      // },
      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [false, false],
        conclusion_key: 'no_awareness',
        conclusion_value: true
      },

      //delaying 
      // {
      //   premises_keys: ['metal_door', 'ground_floor_bars'],
      //   premises_values: [true, true],
      //   conclusion_key: ['delaying', 'delaying_level'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['metal_door', 'ground_floor' ,'ground_floor_bars'],
        premises_values: [true, true, true],
        conclusion_key: 'max_delaying',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['metal_door', 'ground_floor_bars'],
      //   premises_values: [false, true],
      //   conclusion_key: ['delaying', 'delaying_level'],
      //   conclusion_value: [true, 75]
      // },
      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, true],
        conclusion_key: 'good_delaying_bad_door',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['metal_door', 'ground_floor_bars'],
      //   premises_values: [true, false],
      //   conclusion_key: ['delaying', 'delaying_level'],
      //   conclusion_value: [true, 50]
      // },
      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [true, false],
        conclusion_key: 'poor_delaying_only_door',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['metal_door', 'ground_floor_bars'],
      //   premises_values: [false, false],
      //   conclusion_key: ['delaying', 'delaying_level'],
      //   conclusion_value: [true, 25]
      // },
      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, false],
        conclusion_key: 'no_delaying',
        conclusion_value: true
      },

      // recognition
      // recognition for both flat/apartment and house
      // {
      //   premises_keys: ['full_surveillance'],
      //   premises_values: [false],
      //   conclusion_key: ['recognition', 'recognition_level'],
      //   conclusion_value: [true, 0]
      // },
      {
        premises_keys: ['full_surveillance'],
        premises_values: [false],
        conclusion_key: 'no_recognition',
        conclusion_value: true
      },
      
      // {
      //   premises_keys: ['full_surveillance'],
      //   premises_values: [true],
      //   conclusion_key: ['recognition', 'recognition_level'],
      //   conclusion_value: [true, 100]
      // },
      {
        premises_keys: ['full_surveillance'],
        premises_values: [true],
        conclusion_key: 'perfect_recognition',
        conclusion_value: true
      },

      // recognition house case
      // {
      //   premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
      //   premises_values: [true, false, true],
      //   conclusion_key: ['recognition', 'recognition_level'],
      //   conclusion_value: [true, 75]
      // },
      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, true],
        conclusion_key: 'good_recognition_no_indoor',
        conclusion_value: true
      },

      // {
      //   premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
      //   premises_values: [true, true, false],
      //   conclusion_key: ['recognition', 'recognition_level'],
      //   conclusion_value: [true, 50]
      // },
      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, true, false],
        conclusion_key: 'good_recognition_no_outdoor',
        conclusion_value: true
      },
    ]
  }

export default KB
