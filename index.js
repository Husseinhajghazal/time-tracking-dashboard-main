let daily = document.getElementById("daily");
let monthly = document.getElementById("monthly");
let weekly = document.getElementById("weekly");
let rtime = document.querySelectorAll(".rtimevalue");
let ptime = document.querySelectorAll(".ptimevalue");
let choice = document.querySelector(".choice").children;
let btns = [...choice];

daily.onclick = function () {
  btns.forEach((e) => {
    e.classList.remove("active");
    daily.classList.add("active");
  });
  for (let i = 0; i < 6; i++) {
    fetch("data.json")
      .then((e) => e.json())
      .then((e) => (rtime[i].innerHTML = e[i].timeframes.daily.current));
    //-------------------------------------------------------------------
    fetch("data.json")
      .then((k) => k.json())
      .then(
        (k) => (ptime[i].innerHTML = `day - ${k[i].timeframes.daily.previous}`)
      );
  }
};

monthly.onclick = function () {
  btns.forEach((e) => {
    e.classList.remove("active");
    monthly.classList.add("active");
  });
  for (let i = 0; i < 6; i++) {
    fetch("data.json")
      .then((e) => e.json())
      .then((e) => (rtime[i].innerHTML = e[i].timeframes.monthly.current));
    //-------------------------------------------------------------------
    fetch("data.json")
      .then((k) => k.json())
      .then(
        (k) =>
          (ptime[i].innerHTML = `Month - ${k[i].timeframes.monthly.previous}`)
      );
  }
};

weekly.onclick = function () {
  btns.forEach((e) => {
    e.classList.remove("active");
    weekly.classList.add("active");
  });
  for (let i = 0; i < 6; i++) {
    fetch("data.json")
      .then((e) => e.json())
      .then((e) => (rtime[i].innerHTML = e[i].timeframes.weekly.current));
    //-------------------------------------------------------------------
    fetch("data.json")
      .then((k) => k.json())
      .then(
        (k) =>
          (ptime[i].innerHTML = `Week - ${k[i].timeframes.weekly.previous}`)
      );
  }
};

window.onload = function () {
  btns.forEach((e) => {
    e.classList.remove("active");
    weekly.classList.add("active");
  });
  for (let i = 0; i < 6; i++) {
    fetch("data.json")
      .then((e) => e.json())
      .then((e) => (rtime[i].innerHTML = e[i].timeframes.weekly.current));
    //-------------------------------------------------------------------
    fetch("data.json")
      .then((k) => k.json())
      .then(
        (k) =>
          (ptime[i].innerHTML = `Week - ${k[i].timeframes.weekly.previous}`)
      );
  }
};
