var mainFunc = require("./logic");
var assert = require("assert");

describe("main task output test", function() {
  it("returns the output 1", function() {
    var result = mainFunc({
      devices: [
        {
          id: "F972B82BA56A70CC579945773B6866FB",
          name: "Посудомоечная машина",
          power: 950,
          duration: 3,
          mode: "night"
        },
        {
          id: "C515D887EDBBE669B2FDAC62F571E9E9",
          name: "Духовка",
          power: 2000,
          duration: 2,
          mode: "day"
        },
        {
          id: "02DDD23A85DADDD71198305330CC386D",
          name: "Холодильник",
          power: 50,
          duration: 24
        },
        {
          id: "1E6276CC231716FE8EE8BC908486D41E",
          name: "Термостат",
          power: 50,
          duration: 24
        },
        {
          id: "7D9DC84AD110500D284B33C82FE6E85E",
          name: "Кондиционер",
          power: 850,
          duration: 1
        }
      ],
      rates: [
        {
          from: 7,
          to: 10,
          value: 6.46
        },
        {
          from: 10,
          to: 17,
          value: 5.38
        },
        {
          from: 17,
          to: 21,
          value: 6.46
        },
        {
          from: 21,
          to: 23,
          value: 5.38
        },
        {
          from: 23,
          to: 7,
          value: 1.79
        }
      ],
      maxPower: 2100
    });
    var rtest = {
      schedule: {
        "0": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E",
          "7D9DC84AD110500D284B33C82FE6E85E",
          "F972B82BA56A70CC579945773B6866FB"
        ],
        "1": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E",
          "F972B82BA56A70CC579945773B6866FB"
        ],
        "2": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E",
          "F972B82BA56A70CC579945773B6866FB"
        ],
        "3": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "4": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "5": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "6": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "7": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "8": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "9": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "10": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E",
          "C515D887EDBBE669B2FDAC62F571E9E9"
        ],
        "11": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E",
          "C515D887EDBBE669B2FDAC62F571E9E9"
        ],
        "12": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "13": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "14": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "15": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "16": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "17": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "18": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "19": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "20": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "21": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "22": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ],
        "23": [
          "02DDD23A85DADDD71198305330CC386D",
          "1E6276CC231716FE8EE8BC908486D41E"
        ]
      },
      consumedEnergy: {
        value: 38.939,
        devices: {
          F972B82BA56A70CC579945773B6866FB: 5.1015,
          C515D887EDBBE669B2FDAC62F571E9E9: 21.52,
          "02DDD23A85DADDD71198305330CC386D": 5.398,
          "1E6276CC231716FE8EE8BC908486D41E": 5.398,
          "7D9DC84AD110500D284B33C82FE6E85E": 1.5215
        }
      }
    };
    assert.deepEqual(result, rtest, "true");
  });
});

describe("two test", function() {
  it("returns the output 2", function() {
    var result = mainFunc({
      devices: [
        {
          id: "dgbsdhsdhsdh",
          name: "Посудомоечная машина",
          power: 900,
          duration: 5,
          mode: "night"
        },
        {
          id: "sdtewyweruyeruethdfn",
          name: "Духовка",
          power: 2000,
          duration: 2,
          mode: "day"
        },
        {
          id: "sdfjhrturtiteioto",
          name: "Холодильник",
          power: 50,
          duration: 24
        },
        {
          id: "sdfurtuitryoyortyo",
          name: "Термостат",
          power: 50,
          duration: 24
        },
        {
          id: "ah578457rfjhfgjnfgnfnfgn",
          name: "Кондиционер",
          power: 850,
          duration: 1
        }
      ],
      rates: [
        {
          from: 6,
          to: 9,
          value: 6.46
        },
        {
          from: 9,
          to: 17,
          value: 4.38
        },
        {
          from: 17,
          to: 20,
          value: 6.46
        },
        {
          from: 20,
          to: 23,
          value: 3.38
        },
        {
          from: 23,
          to: 7,
          value: 1.79
        }
      ],
      maxPower: 2100
    });
    var rtest = {
      schedule: {
        0: [
          "ah578457rfjhfgjnfgnfnfgn",
          "dgbsdhsdhsdh",
          "sdfjhrturtiteioto",
          "sdfurtuitryoyortyo"
        ],
        1: ["dgbsdhsdhsdh", "sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        2: ["dgbsdhsdhsdh", "sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        3: ["dgbsdhsdhsdh", "sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        4: ["dgbsdhsdhsdh", "sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        5: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        6: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        7: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        8: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        9: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        10: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        11: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        12: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        13: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        14: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        15: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        16: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        17: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        18: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        19: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        20: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo", "sdtewyweruyeruethdfn"],
        21: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo", "sdtewyweruyeruethdfn"],
        22: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"],
        23: ["sdfjhrturtiteioto", "sdfurtuitryoyortyo"]
      },
      consumedEnergy: {
        value: 32.2765,
        devices: {
          dgbsdhsdhsdh: 8.055,
          sdtewyweruyeruethdfn: 13.52,
          sdfjhrturtiteioto: 4.59,
          sdfurtuitryoyortyo: 4.59,
          ah578457rfjhfgjnfgnfnfgn: 1.5215
        }
      }
    };
    assert.deepEqual(result, rtest, "true");
  });
});

describe("three test", function() {
  it("returns the output 3", function() {
    var result = mainFunc({
      devices: [
        {
          id: "sdgsdgsdgsdgsgsdfet",
          name: "Посудомоечная машина",
          power: 900,
          duration: 5,
          mode: "night"
        },
        {
          id: "fgnfngfgjfgjfgj",
          name: "Духовка",
          power: 3000,
          duration: 2,
          mode: "day"
        },
        {
          id: "cvncvnfgkjfgkfkrtirti",
          name: "Холодильник",
          power: 50,
          duration: 24
        },
        {
          id: "g236347r5nfgnfgmfgm",
          name: "Термостат",
          power: 50,
          duration: 24
        },
        {
          id: "n12423tsedgcvbncvncnvcn",
          name: "Кондиционер",
          power: 80,
          duration: 21
        }
      ],
      rates: [
        {
          from: 6,
          to: 9,
          value: 6.46
        },
        {
          from: 9,
          to: 17,
          value: 4.38
        },
        {
          from: 17,
          to: 20,
          value: 6.46
        },
        {
          from: 20,
          to: 23,
          value: 3.38
        },
        {
          from: 23,
          to: 7,
          value: 5.79
        }
      ],
      maxPower: 5100
    });
    var rtest = {
      schedule: {
        0: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn",
          "sdgsdgsdgsdgsgsdfet"
        ],
        1: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn",
          "sdgsdgsdgsdgsgsdfet"
        ],
        2: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn",
          "sdgsdgsdgsdgsgsdfet"
        ],
        3: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn",
          "sdgsdgsdgsdgsgsdfet"
        ],
        4: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        5: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        6: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        7: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        8: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        9: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        10: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        11: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        12: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        13: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        14: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        15: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        16: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        17: ["cvncvnfgkjfgkfkrtirti", "g236347r5nfgnfgmfgm"],
        18: ["cvncvnfgkjfgkfkrtirti", "g236347r5nfgnfgmfgm"],
        19: ["cvncvnfgkjfgkfkrtirti", "g236347r5nfgnfgmfgm"],
        20: [
          "cvncvnfgkjfgkfkrtirti",
          "fgnfngfgjfgjfgj",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        21: [
          "cvncvnfgkjfgkfkrtirti",
          "fgnfngfgjfgjfgj",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ],
        22: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn",
          "sdgsdgsdgsdgsgsdfet"
        ],
        23: [
          "cvncvnfgkjfgkfkrtirti",
          "g236347r5nfgnfgmfgm",
          "n12423tsedgcvbncvncnvcn"
        ]
      },
      consumedEnergy: {
        value: 64.8996,
        devices: {
          sdgsdgsdgsdgsgsdfet: 23.886,
          fgnfngfgjfgjfgj: 20.28,
          cvncvnfgkjfgkfkrtirti: 6.19,
          g236347r5nfgnfgmfgm: 6.19,
          n12423tsedgcvbncvncnvcn: 8.3536
        }
      }
    };
    assert.deepEqual(result, rtest, "true");
  });
});
