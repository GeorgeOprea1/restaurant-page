function createPrivateEvents() {
  const privateEvents = document.createElement("div");
  privateEvents.classList.add("privateEventsSection");

  const privateEventsHeader = document.createElement("h2");
  privateEventsHeader.textContent = "PRIVATE EVENTS";

  const privateEventsPara = document.createElement("p");
  privateEventsPara.textContent =
    "With a variety of unique event options,Louie’s Restaurant is available for large party bookings and full restaurant buyouts.  From intimate seated private dining room experiences, cocktails on the roof-top garden, and receptions throughout our multiple spaces, our venue can accommodate groups ranging in size from 9 to 150 guests. Please contact us below for all of your event inquiries.";

  const privateEventsHeader2 = document.createElement("h2");
  privateEventsHeader2.textContent = "WEDDINGS";

  const privateEventsPara2 = document.createElement("p");
  privateEventsPara2.textContent =
    "Louie’s Restaurant team strives to make your dream wedding a reality. We work with couples to design and execute the perfect celebration for up to 150 guests. Louie’s Restaurant offers seasonal wood fired family style dinners, natural wines and unique craft cocktails. Located in the heart of Williamsburg, our building provides a warm and welcoming environment throughout three different floors, perfect for smaller ceremonies and larger celebrations.";

  privateEvents.appendChild(privateEventsHeader);
  privateEvents.appendChild(privateEventsPara);
  privateEvents.appendChild(privateEventsHeader2);
  privateEvents.appendChild(privateEventsPara2);

  return privateEvents;
}

function loadPrivateEvents() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createPrivateEvents());
}

export default loadPrivateEvents;
