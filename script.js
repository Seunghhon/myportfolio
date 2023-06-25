document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

const section2 = document.querySelectorAll(".section-2 a");
const section1 = document.querySelectorAll(".section-1 a");

var theme = "dark";
  const root = document.documentElement;
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
    for (var i = 0; i < document.getElementsByTagName("h2").length; i++) document.getElementsByTagName("h2")[i].style.color = "#000000";
    document.getElementsByClassName("Avatar")[0].style.border = "5px solid #ffffff";
    //document.getElementsByTagName("u")[0].style.color = "#000000";
    //document.getElementsByTagName("u")[1].style.color = "#000000";
    
    section1.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style = "color: #000000;transition: 0.5s;"
      });
      element.addEventListener("mouseout", () => {
        element.style = "color: #7A7C80;transition: 0.5s;"
      });
    });
    section2.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style = "color: #000000;transition: 0.5s;"
      });
      element.addEventListener("mouseout", () => {
        element.style = "color: #7A7C80;transition: 0.5s;"
      });
    });
  }
  function setDark() {
    root.style.setProperty("--bs-dark", "#101827");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
    for (var i = 0; i < document.getElementsByTagName("h2").length; i++) document.getElementsByTagName("h2")[i].style.color = "#ffffff";
    document.getElementsByClassName("Avatar")[0].style.border = "5px solid #ffffff";
    document.getElementsByTagName("u")[0].style.color = "#9c9c9c";
    document.getElementsByTagName("u")[1].style.color = "#9c9c9c";
    
    section1.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style = "color: #ffffff;transition: 0.5s;"
      });
      element.addEventListener("mouseout", () => {
        element.style = "color: #9c9c9c;transition: 0.5s;"
      });
    });
    section2.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style = "color: #ffffff;transition: 0.5s;"
      });
      element.addEventListener("mouseout", () => {
        element.style = "color: #9c9c9c;transition: 0.5s;"
      });
    });
  }