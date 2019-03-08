import { splitEvery } from "ramda";

function LargeSlider() {
  let gallery = document.querySelector(".gallery");

  const galleryBackup = gallery.cloneNode(true);

  function setContainer() {
    let listElems = document.querySelectorAll(".card");
    const container = document.querySelector(".gallery");

    const elemArr = splitEvery(9, listElems);

    const page = Math.floor(listElems.length / 9) + 1;

    const sliderbig = document.createElement("div");
    sliderbig.className = "slider-big";
    container.appendChild(sliderbig);

    for (let i = 0; i < page; i++) {
      const sliderBigElem = document.createElement("div");
      const favoritecontainer = document.createElement("div");
      sliderBigElem.className = "slider-big__elem";

      sliderbig.appendChild(sliderBigElem);

      favoritecontainer.className = "favorite-container";
      sliderBigElem.appendChild(favoritecontainer);

      elemArr[i].map(item => {
        favoritecontainer.appendChild(item);
        return null;
      });
    }

    const list = document.querySelector(".slider-big");
    listElems = document.querySelectorAll(".slider-big__elem");

    let position = 0;

    const width = 615;
    const count = 1;

    document.querySelector(".heading__prev").onclick = () => {
      position = Math.min(position + width * count, 0);
      list.style.marginLeft = `${position}px`;
    };

    document.querySelector(".heading__next").onclick = () => {
      position = Math.max(
        position - width * count,
        -width * (listElems.length - count),
      );
      list.style.marginLeft = `${position}px`;
    };

    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
      if (touchendX < touchstartX) {
        position = Math.min(position + width * count, 0);
        list.style.marginLeft = `${position}px`;
      }

      if (touchendX > touchstartX) {
        position = Math.max(
          position - width * count,
          -width * (listElems.length - count),
        );
        list.style.marginLeft = `${position}px`;
      }
    }

    const gestureZone = document.getElementById("two-favorite");

    gestureZone.addEventListener(
      "touchstart",
      event => {
        touchstartX = event.changedTouches[0].screenX;
      },
      false,
    );

    gestureZone.addEventListener(
      "touchend",
      event => {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
      },
      false,
    );

    gestureZone.addEventListener("wheel", e => {
      if (e.deltaY < 0) {
        position = Math.min(position + width * count, 0);
        list.style.marginLeft = `${position}px`;
      }
      if (e.deltaY > 0) {
        position = Math.max(
          position - width * count,
          -width * (listElems.length - count),
        );
        list.style.marginLeft = `${position}px`;
      }
    });
  }

  if (window.innerWidth > 1300) {
    setContainer();
  }

  window.onresize = event => {
    if (
      event.target.innerWidth > 1300 &&
      document.querySelectorAll(".slider-big__elem").length === 0
    ) {
      setContainer();
    } else if (
      event.target.innerWidth < 1300 &&
      document.querySelectorAll(".slider-big__elem").length >= 1
    ) {
      const backup = galleryBackup.cloneNode(true);

      gallery = document.querySelector(".gallery");
      const twofavorite = document.getElementById("two-favorite");

      twofavorite.replaceChild(backup, gallery);
    }
  };
}

export default LargeSlider;
