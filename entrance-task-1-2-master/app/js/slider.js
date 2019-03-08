function slider() {
  const list = document.querySelector(".device_gallery-big");
  const listElems = document.querySelectorAll(".device_gallery__elem");

  let position = 0;

  const width = 600;
  const count = 1;

  document.querySelector(".device__prev").onclick = () => {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = `${position}px`;
  };

  document.querySelector(".device__next").onclick = () => {
    position = Math.max(
      position - width * count,
      -width * (listElems.length - count),
    );
    list.style.marginLeft = `${position}px`;
  };

  let touchstartX = 0;
  let touchendX = 0;

  const gestureZone = document.getElementById("device__category");

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

export default slider;
