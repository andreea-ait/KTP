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
      // },

      // MATCHING
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
        premises_keys: ['alarm'],
        premises_values: [false],
        conclusion_key: 'rapid_response',
        conclusion_value: false
      },

      {
        premises_keys: ['house', 'house_rapid_response'],
        premises_values: [true, true],
        conclusion_key: 'rapid_response',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'house_rapid_response'],
        premises_values: [true, false],
        conclusion_key: 'rapid_response',
        conclusion_value: false
      },

      // COMBINATIONS
      // surveillance
      {
        premises_keys: ['flat', 'flat_surveillance'],
        premises_values: [true, true],
        conclusion_key: 'full_surveillance',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance', 'remote'],
        premises_values: [true, true, true, false],
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
        premises_keys: ['house', 'indoor_surveillance'],
        premises_values: [true, false],
        conclusion_key: 'full_surveillance',
        conclusion_value: false
      },

      {
        premises_keys: ['house', 'exterior_surveillance'],
        premises_values: [true, false],
        conclusion_key: 'full_surveillance',
        conclusion_value: false
      },

      {
        premises_keys: ['remote', 'surveillance_courtyard'],
        premises_values: [true, false],
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
      
      // awareness level (in case of burglars)
      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, true],
        conclusion_key: 'full_awareness',
        conclusion_value: true
      },

      {
        premises_keys: ['rapid_response'],
        premises_values: [false],
        conclusion_key: 'full_awareness',
        conclusion_value: false
      },

      {
        premises_keys: ['alarm'],
        premises_values: [false],
        conclusion_key: 'full_awareness',
        conclusion_value: false
      },

      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [true, false],
        conclusion_key: 'good_awareness',
        conclusion_value: true
      },

      {
        premises_keys: ['alarm', 'rapid_response'],
        premises_values: [false, false],
        conclusion_key: 'no_awareness',
        conclusion_value: true
      },

      // burglars delaying level
      {
        premises_keys: ['flat', 'ground_floor', 'metal_door'],
        premises_values: [true, false, true],
        conclusion_key: 'max_delaying',
        conclusion_value: true
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [true, true],
        conclusion_key: 'max_delaying',
        conclusion_value: true
      },

      {
        premises_keys: ['flat', 'ground_floor', 'metal_door'],
        premises_values: [true, false, false],
        conclusion_key: 'max_delaying',
        conclusion_value: false
      },

      {
        premises_keys: ['metal_door'],
        premises_values: [false],
        conclusion_key: 'max_delaying',
        conclusion_value: false
      },

      {
        premises_keys: ['flat', 'ground_floor', 'ground_floor_bars'],
        premises_values: [true, true, false],
        conclusion_key: 'max_delaying',
        conclusion_value: false
      },

      {
        premises_keys: ['house', 'ground_floor_bars'],
        premises_values: [true, false],
        conclusion_key: 'max_delaying',
        conclusion_value: false
      },

      {
        premises_keys: ['flat', 'ground_floor', 'metal_door'],
        premises_values: [true, false, false],
        conclusion_key: 'no_delaying',
        conclusion_value: true
      },

      {
        premises_keys: ['metal_door', 'ground_floor' ,'ground_floor_bars'],
        premises_values: [true, true, false],
        conclusion_key: 'max_delaying',
        conclusion_value: false
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, true],
        conclusion_key: 'good_delaying_bad_door',
        conclusion_value: true
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [true, false],
        conclusion_key: 'poor_delaying_only_door',
        conclusion_value: true
      },

      {
        premises_keys: ['metal_door', 'ground_floor_bars'],
        premises_values: [false, false],
        conclusion_key: 'no_delaying',
        conclusion_value: true
      },

      // recognition
      // recognition for both flat/apartment and house
      {
        premises_keys: ['full_surveillance', 'flat'],
        premises_values: [false, true],
        conclusion_key: 'no_recognition',
        conclusion_value: true
      },
      
      {
        premises_keys: ['full_surveillance'],
        premises_values: [true],
        conclusion_key: 'perfect_recognition',
        conclusion_value: true
      },

      {
        premises_keys: ['full_surveillance'],
        premises_values: [false],
        conclusion_key: 'perfect_recognition',
        conclusion_value: false
      },

      // recognition house case
      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, true],
        conclusion_key: 'good_recognition_no_indoor',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, true, false],
        conclusion_key: 'good_recognition_no_outdoor',
        conclusion_value: true
      },

      {
        premises_keys: ['house', 'indoor_surveillance', 'exterior_surveillance'],
        premises_values: [true, false, false],
        conclusion_key: 'no_recognition',
        conclusion_value: true
      },

      // remote area
      {
        premises_keys: ['remote', 'house'],
        premises_values: [true, true],
        conclusion_key: 'remote_area',
        conclusion_value: true
      },

      // full coverage
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, true, true, true],
        conclusion_key: 'full_coverage',
        conclusion_value: true
      },

      // no covergae
      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'generator', 'perimeter'],
        premises_values: [true, false, false, false],
        conclusion_key: 'no_coverage',
        conclusion_value: true
      },

      // some coverage
      {
        premises_keys: ['remote_area', 'surveillance_courtyard'],
        premises_values: [true, true],
        conclusion_key: 'no_coverage',
        conclusion_value: false
      },

      {
        premises_keys: ['remote_area', 'generator'],
        premises_values: [true, true],
        conclusion_key: 'no_coverage',
        conclusion_value: false
      },

      {
        premises_keys: ['remote_area', 'perimeter'],
        premises_values: [true, true],
        conclusion_key: 'no_coverage',
        conclusion_value: false
      },

      // FINAL OUTCOMES
      {
        premises_keys: ['full_awareness', 'max_delaying', 'perfect_recognition', 'feel_safe'],
        premises_values: [true, true, true, false],
        conclusion_key: 'fully_protected_should_feel_safe',
        conclusion_value: true
      },

      {
        premises_keys: ['full_coverage', 'remote', 'feel_safe'],
        premises_values: [true, true, true],
        conclusion_key: 'fully_protected_feels_safe',
        conclusion_value: true
      },

      {
        premises_keys: ['full_awareness', 'max_delaying', 'perfect_recognition', 'feel_safe'],
        premises_values: [true, true, true, true],
        conclusion_key: 'fully_protected_feels_safe',
        conclusion_value: true
      },

      {
        premises_keys: ['full_coverage', 'remote', 'feel_safe'],
        premises_values: [true, true, false],
        conclusion_key: 'fully_protected_should_feel_safe',
        conclusion_value: true
      },

      {
        premises_keys: ['full_awareness', 'feel_safe'],
        premises_values: [false, false],
        conclusion_key: 'how_to_feel_safer',
        conclusion_value: true
      },

      {
        premises_keys: ['max_delaying', 'feel_safe'],
        premises_values: [false, false],
        conclusion_key: 'how_to_feel_safer',
        conclusion_value: true
      },

      {
        premises_keys: ['perfect_recognition', 'feel_safe'],
        premises_values: [false, false],
        conclusion_key: 'how_to_feel_safer',
        conclusion_value: true
      },

      {
        premises_keys: ['full_coverage', 'remote', 'feel_safe'],
        premises_values: [false, true, false],
        conclusion_key: 'how_to_feel_safer',
        conclusion_value: true
      },

      {
        premises_keys: ['full_awareness', 'feel_safe'],
        premises_values: [false, true],
        conclusion_key: 'feel_safe_home_unprotected',
        conclusion_value: true
      },

      {
        premises_keys: ['max_delaying', 'feel_safe'],
        premises_values: [false, true],
        conclusion_key: 'feel_safe_home_unprotected',
        conclusion_value: true
      },

      {
        premises_keys: ['perfect_recognition', 'feel_safe'],
        premises_values: [false, true],
        conclusion_key: 'feel_safe_home_unprotected',
        conclusion_value: true
      },

      {
        premises_keys: ['full_coverage', 'remote', 'feel_safe'],
        premises_values: [false, true],
        conclusion_key: 'feel_safe_home_unprotected',
        conclusion_value: true
      },

      // awareness
      {
        premises_keys: ['full_awareness', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'a1_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['good_awareness', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'a2_flat',
        conclusion_value: true
      },
      
      {
        premises_keys: ['no_awareness', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'a3_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['full_awareness', 'house'],
        premises_values: [true, true],
        conclusion_key: 'a1_house',
        conclusion_value: true
      },

      {
        premises_keys: ['good_awareness', 'house'],
        premises_values: [true, true],
        conclusion_key: 'a2_house',
        conclusion_value: true
      },
      
      {
        premises_keys: ['no_awareness', 'house'],
        premises_values: [true, true],
        conclusion_key: 'a3_house',
        conclusion_value: true
      },
      
      // delaying
      {
        premises_keys: ['max_delaying', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'd1_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['good_delaying_bad_door', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'd2_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['poor_delaying_only_door', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'd3_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['no_delaying', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'd4_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['max_delaying', 'house'],
        premises_values: [true, true],
        conclusion_key: 'd1_house',
        conclusion_value: true
      },

      {
        premises_keys: ['good_delaying_bad_door', 'house'],
        premises_values: [true, true],
        conclusion_key: 'd2_house',
        conclusion_value: true
      },

      {
        premises_keys: ['poor_delaying_only_door', 'house'],
        premises_values: [true, true],
        conclusion_key: 'd3_house',
        conclusion_value: true
      },

      {
        premises_keys: ['no_delaying', 'house'],
        premises_values: [true, true],
        conclusion_key: 'd4_house',
        conclusion_value: true
      },

      // recognition
      {
        premises_keys: ['perfect_recognition', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'r1_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['no_recognition', 'flat'],
        premises_values: [true, true],
        conclusion_key: 'r2_flat',
        conclusion_value: true
      },

      {
        premises_keys: ['perfect_recognition', 'house'],
        premises_values: [true, true],
        conclusion_key: 'r1_house',
        conclusion_value: true
      },

      {
        premises_keys: ['good_recognition_no_indoor', 'house'],
        premises_values: [true, true],
        conclusion_key: 'r2_house',
        conclusion_value: true
      },

      {
        premises_keys: ['good_recognition_no_outdoor', 'house'],
        premises_values: [true, true],
        conclusion_key: 'r3_house',
        conclusion_value: true
      },

      {
        premises_keys: ['no_recognition', 'house'],
        premises_values: [true, true],
        conclusion_key: 'r4_house',
        conclusion_value: true
      },

      {
        premises_keys: ['remote_area', 'full_coverage'],
        premises_values: [true, true],
        conclusion_key: 'rem1',
        conclusion_value: true
      },

      {
        premises_keys: ['remote_area', 'surveillance_courtyard', 'no_coverage'],
        premises_values: [true, false, false],
        conclusion_key: 'rem2',
        conclusion_value: true
      },

      {
        premises_keys: ['remote_area', 'generator', 'no_coverage'],
        premises_values: [true, false, false],
        conclusion_key: 'rem3',
        conclusion_value: true
      },

      {
        premises_keys: ['remote_area', 'perimeter', 'no_coverage'],
        premises_values: [true, false, false],
        conclusion_key: 'rem4',
        conclusion_value: true
      },

      {
        premises_keys: ['remote_area', 'no_coverage'],
        premises_values: [true, true],
        conclusion_key: 'rem5',
        conclusion_value: true
      }
    ]
  }

export default KB
