import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadFaq from "./faq";
import loadPrivateEvents from "./private-events";
import loadReservation from "./reservation";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  content.appendChild(header);

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "Louie’s Restaurant";
  header.appendChild(restaurantName);

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  header.appendChild(navbar);

  const faqElement = document.createElement("button");
  faqElement.classList.add("faq");
  faqElement.textContent = "FAQ";
  navbar.appendChild(faqElement);
  faqElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(faqElement);
    loadFaq();
  });

  const homeElement = document.createElement("button");
  homeElement.classList.add("home");
  homeElement.textContent = "Home";
  navbar.appendChild(homeElement);
  homeElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeElement);
    loadHome();
  });

  const privateEventsElement = document.createElement("button");
  privateEventsElement.classList.add("privateEvents");
  privateEventsElement.textContent = "Private Events";
  navbar.appendChild(privateEventsElement);
  privateEventsElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(privateEventsElement);
    loadPrivateEvents();
  });

  const reservationElement = document.createElement("button");
  reservationElement.classList.add("reservation");
  reservationElement.textContent = "Reservation";
  navbar.appendChild(reservationElement);
  reservationElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(reservationElement);
    loadReservation();
  });

  const menuElement = document.createElement("button");
  menuElement.classList.add("menu");
  menuElement.textContent = "Menu";
  navbar.appendChild(menuElement);
  menuElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuElement);
    loadMenu();
  });

  const contactElement = document.createElement("button");
  contactElement.classList.add("contact");
  contactElement.textContent = "Contact";
  navbar.appendChild(contactElement);
  contactElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactElement);
    loadContact();
  });

  return header;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
      button.classList.remove("navbar-clicked");
    }
  });

  button.classList.add("active");
  button.classList.add("navbar-clicked");
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  content.appendChild(footer);

  const paragraphFooter = document.createElement("p");
  paragraphFooter.classList.add("paragraphFooter");
  paragraphFooter.textContent = "Copyright George Oprea © 2023";
  footer.appendChild(paragraphFooter);

  const linkFooter = document.createElement("a");
  linkFooter.classList.add("linkFooter");
  linkFooter.href = "https://github.com/GeorgeOprea1/restaurant-page";
  linkFooter.target = "_blank";
  footer.appendChild(linkFooter);

  const imageFooter = document.createElement("img");
  imageFooter.classList.add("imageFooter");
  imageFooter.src = "./img/github.svg";
  linkFooter.appendChild(imageFooter);

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector("button"));
  loadHome();
}

export default initializeWebsite;
