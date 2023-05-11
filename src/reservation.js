function createReservation() {
  const reservation = document.createElement("div");
  reservation.classList.add("reservationSection");

  const reservationHeader = document.createElement("h2");
  reservationHeader.textContent = "RESERVATIONS";

  const reservationInput1 = document.createElement("input");
  reservationInput1.classList.add("reservationInput");
  reservationInput1.name = "location";
  reservationInput1.placeholder = "Location";
  reservationInput1.type = "text";
  reservationInput1.setAttribute("required", "");

  const reservationInput2 = document.createElement("input");
  reservationInput2.classList.add("reservationInput");
  reservationInput2.name = "number of people";
  reservationInput2.placeholder = "Number of people";
  reservationInput2.type = "number";
  reservationInput2.min = "1";
  reservationInput2.setAttribute("required", "");

  const reservationInput3 = document.createElement("input");
  reservationInput3.classList.add("reservationInput");
  reservationInput3.name = "Date";
  reservationInput3.type = "text";
  reservationInput3.placeholder = "Date";
  reservationInput3.setAttribute("required", "");
  reservationInput3.addEventListener("click", function () {
    reservationInput3.type = "date";
  });

  const reservationBtn = document.createElement("button");
  reservationBtn.classList.add("reservationBtn");
  reservationBtn.textContent = "Find a table";

  reservation.appendChild(reservationHeader);
  reservation.appendChild(reservationInput1);
  reservation.appendChild(reservationInput2);
  reservation.appendChild(reservationInput3);
  reservation.appendChild(reservationBtn);

  return reservation;
}

function loadReservation() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createReservation());
}

export default loadReservation;
