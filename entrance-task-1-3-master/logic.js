function valueMin(input) {
  var price = {};
  for (var i = 0; i < 24; i++) {
    price[i] = 0;
  }

  input.map(rate => {
    if (rate.from > rate.to) {
      var h = [];
      for (var i = rate.from; i < 24; i++) {
        h.push(i);
      }

      for (var i = 0; i < rate.to; i++) {
        h.push(i);
      }
      h.map(vl => {
        price[vl] = rate.value;
      });
    }

    for (var i = rate.from; i < rate.to; i++) {
      price[i] = rate.value;
    }
  });

  return price;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function getUnique(input) {
  var arr = [];
  for (var i = 0; i < 24; i++) {
    arr.push(input[i]);
  }
  var unique = arr.filter(onlyUnique).sort();
  return unique;
}

module.exports = function SmartHouse(input) {
  const minPrice = valueMin(input.rates); // Получение минимальной цены в каждом часу
  const maxValue = input.maxPower;
  const minPriceUnique = getUnique(minPrice);

  var value = 0;
  var schedule = {};
  var schedulePrice = {}; // Переменная для хранения цены в каждом дне
  var trueArr = [];
  var trueArrDay = [];
  var trueArrNight = [];
  var objDevicesPrice = {};

  for (var i = 0; i < 24; i++) {
    schedule[i] = [];
    schedulePrice[i] = 0;
  }

  for (var i = 0; i < minPriceUnique.length; i++) {
    for (var j = 0; j < 24; j++) {
      if (minPrice[j] === minPriceUnique[i]) {
        trueArr.push(j); // Оптимальные часы по возрастанию
      }
    }
  }

  var arrDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 24; j++) {
      if (arrDay[j] !== undefined && trueArr[i] === arrDay[j]) {
        trueArrDay.push(arrDay[j]); // Оптимальные часы для дня
      }
    }
  }

  var arrNight = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 24; j++) {
      if (arrNight[j] !== undefined && trueArr[i] === arrNight[j]) {
        trueArrNight.push(arrNight[j]); // Для ночи
      }
    }
  }

  input.devices.map(device => {
    objDevicesPrice[device.id] = 0;

    for (var i = 0; i < device.duration; i++) {
      var n = trueArr[i];

      if (device.mode === "day") {
        var n = trueArrDay[i];
      }

      if (device.mode === "night") {
        var n = trueArrNight[i];
      }

      if (schedule[n].includes(device.id) === false) {
        if (schedulePrice[n] + device.power <= maxValue) {
          schedulePrice[n] = schedulePrice[n] + device.power;
          schedule[n].push(device.id);
          var vl =
            Math.round(
              (objDevicesPrice[device.id] +
                minPrice[n] * device.power * 0.001) *
                10000
            ) / 10000;
          objDevicesPrice[device.id] = vl;
        } else {
          // Поиск часа если мощность больше
          for (var j = i; j < 24; j++) {
            var m = trueArr[j];

            if (device.mode === "day") {
              var m = trueArrDay[j];
            }

            if (device.mode === "night") {
              var m = trueArrNight[j];
            }
            if (schedulePrice[j] + device.power <= maxValue) {
              schedulePrice[m] = schedulePrice[m] + device.power;
              schedule[m].push(device.id);
              var vl =
                Math.round(
                  (objDevicesPrice[device.id] +
                    minPrice[n] * device.power * 0.001) *
                    10000
                ) / 10000;
              objDevicesPrice[device.id] = vl;
              break;
            }
          }
        }
      }
    }
    for (var i = 0; i < 24; i++) {
      schedule[i].sort();
    }
    value = value + objDevicesPrice[device.id];
  });

  return {
    schedule: schedule,
    consumedEnergy: {
      value: Math.round(value * 10000) / 10000,
      devices: objDevicesPrice
    }
  };
};
