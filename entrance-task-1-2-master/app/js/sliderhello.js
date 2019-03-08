function arrowCheck(position) {
  if (position !== 0) {
    document.getElementById("card-hello__chunk").style.display = "none";
  } else {
    document.getElementById("card-hello__chunk").style.display = "block";
  }
}

function sliderhello() {
  const list = document.querySelector(".card-hello_gallery-big");
  const listElems = document.querySelectorAll(".card-hello_gallery__elem");

  let position = 0;

  const width = 200;
  const count = 1;

  let touchstartY = 0;
  let touchendY = 0;

  const gestureZone = document.getElementById("card-hello_gallery");

  function handleGesture() {
    if (touchendY < touchstartY) {
      position = Math.min(position + width * count, 0);
      list.style.marginTop = `${position}px`;
      arrowCheck(position);
    }

    if (touchendY > touchstartY) {
      position = Math.max(
        position - width * count,
        -width * (listElems.length - count),
      );
      list.style.marginTop = `${position}px`;
      arrowCheck(position);
    }
  }

  gestureZone.addEventListener(
    "touchstart",
    event => {
      touchstartY = event.changedTouches[0].screenY;
    },
    false,
  );

  gestureZone.addEventListener(
    "touchend",
    event => {
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
    },
    false,
  );

  gestureZone.addEventListener("wheel", e => {
    if (e.deltaY < 0) {
      position = Math.min(position + width * count, 0);
      list.style.marginTop = `${position}px`;
      arrowCheck(position);
    }
    if (e.deltaY > 0) {
      position = Math.max(
        position - width * count,
        -width * (listElems.length - count),
      );
      list.style.marginTop = `${position}px`;
      arrowCheck(position);
    }
  });
}

export default sliderhello;
