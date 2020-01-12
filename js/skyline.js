// const windows = document.querySelectorAll('.window')


function turnOnLights() {
  const skyline = document.querySelector('.bg-decoration')
  const windows = document.querySelectorAll('.window')
  if (skyline.querySelectorAll('.on').length == 0) {
    const numOnStart = 50;
    const windowsOn = getRandom(windows, numOnStart);
    windowsOn.forEach(function(window, index) {
      window.classList.add("on")
    })
    turnOnLights();
  }
  else {
    window.setTimeout(function() {
      const numSwitch = 3;
      const windowsSwitch = getRandom(windows, numSwitch)
      windowsSwitch.forEach(function(window, index) {
        if (window.classList.contains("on")) {
          window.classList.remove("on")
        }
        else {
          window.classList.add("on")
        }
      })
      turnOnLights();
    }, 750)
  }
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function snow() {
  const snow = document.querySelector('.snow');
  var numSnowflakes = 100;
  var incriment = 0;

  while (incriment < numSnowflakes) {
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    var snowFlake = document.createElement('div');
    var delay = Math.random()* 10 - 5;
    var bottom = randoFiver*2 -1 + 100;
    snowFlake.classList.add('snowflake')
    snowFlake.style=`left: ${incriment%100}%; bottom: ${randoHundo - 1}%; animation-delay: ${delay}s;`
    snow.appendChild(snowFlake)
    incriment+=randoFiver;
  }
}

snow();
turnOnLights();