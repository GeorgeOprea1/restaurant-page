function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contactSection");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 07 123 456 78";

  const address = document.createElement("p");
  address.textContent = "🏠 Cedar Koll Boulevard 42 / Wisconsin / USA";

  const restaurantLocation = document.createElement("img");

  // here I have to put an image and a location
  // restaurantLocation.src = "images/restaurant-location.png";
  // restaurantLocation.alt = "Cedar Koll restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
