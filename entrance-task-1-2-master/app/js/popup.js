import Velocity from "velocity-animate";

export const weather = () => {
  document.getElementById("overlay").style.display = "none";
  const buttomYellow = document.getElementById("msg-buttom-yellow");
  buttomYellow.style.display = "none";
  const buttomWhite = document.getElementById("msg-buttom-white");
  buttomWhite.style.display = "none";

  let xx;

  let yy;

  const mPos = { x: -1, y: -1 };

  const div = document.querySelectorAll(".weather");

  Object.entries(div).map(object => {
    object[1].onclick = event => {
      mPos.x = event.pageX;
      mPos.y = event.pageY;

      xx = event.pageX;
      yy = event.pageY;

      const msg = document.getElementById("msg");
      msg.style.top = `${mPos.y}px`;
      msg.style.left = `${mPos.x}px`;

      Velocity(
        msg,
        {
          height: "435px",
          width: "630px",
          left: window.innerWidth / 2 - 300,
          top: window.innerHeight / 2 - 250,
        },
        {
          duration: 300,
          complete() {
            document.getElementById("gaussian_blur").style.filter = "blur(2px)";
            document.getElementById("header-blur").style.filter = "blur(2px)";
            document.getElementById("overlay").style.display = "block";
            document.getElementById("msg-buttom-yellow").style.display = "flex";
            document.getElementById("msg-buttom-white").style.display = "flex";
          },
        },
      );
    };
    return null;
  });

  /* document.querySelectorAll(".weather").onclick = function() {
    mPos.x = event.pageX;
    mPos.y = event.pageY;

    xx = event.pageX;
    yy = event.pageY;

    var msg = document.getElementById("msg");
    msg.style.top = mPos.y + "px";
    msg.style.left = mPos.x + "px";

    Velocity(
      msg,
      {
        height: "435px",
        width: "630px",
        left: window.innerWidth / 2 - 300,
        top: window.innerHeight / 2 - 250
      },
      {
        duration: 300,
        complete: function() {
          document.getElementById("gaussian_blur").style.filter = "blur(2px)";
          document.getElementById("header-blur").style.filter = "blur(2px)";
          document.getElementById("overlay").style.display = "block";
          document.getElementById("msg-buttom-yellow").style.display = "flex";
          document.getElementById("msg-buttom-white").style.display = "flex";
        }
      }
    );
  }; */

  document.getElementById("msg-buttom-white").onclick = () => {
    const msg = document.getElementById("msg");
    document.getElementById("gaussian_blur").style.filter = "";
    document.getElementById("header-blur").style.filter = "";
    document.getElementById("overlay").style.display = "none";
    buttomYellow.style.display = "none";
    buttomWhite.style.display = "none";
    Velocity(
      msg,
      {
        height: "0px",
        width: "0px",
        left: `${xx}px`,
        top: `${yy}px`,
      },
      {
        duration: 200,
      },
    );
  };

  window.addEventListener("mousemove", e => {
    xx = e.pageX;
    yy = e.pageY;
  });
};

export const temp = () => null;
