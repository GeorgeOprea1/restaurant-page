function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contactSection");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 (222)-888 5555";

  const address = document.createElement("p");
  address.textContent = "🏠 Cedar Koll Boulevard 42 / Wisconsin / USA";

  contact.appendChild(address);
  contact.appendChild(phoneNumber);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
