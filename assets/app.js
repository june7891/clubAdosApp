/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tablinks");
const contents = document.querySelectorAll(".tabcontent");

tabs.onclick = (e) => {
  console.log("it works");
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("bg-blue-800");
    });
    e.target.classList.add("bg-blue-800");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};
