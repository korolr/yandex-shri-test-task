import "../scss/main.scss";
import LargeSlider from "./largeSlider";
import slider from "./slider";
import sliderhello from "./sliderhello";
import { weather } from "./popup";

const main = () => {
  LargeSlider(); // Слайдер избранных сценариев сделан для адаптивности
  slider();
  sliderhello();
  weather();
};

main();
