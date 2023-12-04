function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contactSection");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 (222)-888 5555";

  const address = document.createElement("p");
  address.textContent = "🏠 Cedar Koll Boulevard 42 / Wisconsin / USA";

  const eMail = document.createElement("p");
  eMail.textContent = "📩 louie-restaurant@yahoo.com";

  const hours = document.createElement("div");
  hours.classList.add("hours");

  const weekHours = document.createElement("p");
  weekHours.textContent = "🕒 Mon-Fri: 8am-8pm";
  hours.appendChild(weekHours);

  const weekendHours = document.createElement("p");
  weekendHours.textContent = "Sat-Sun:8am-11pm";
  hours.appendChild(weekendHours);

  contact.appendChild(address);
  contact.appendChild(phoneNumber);
  contact.appendChild(eMail);
  contact.appendChild(hours);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
