function createFaq() {
  const faq = document.createElement("div");
  faq.classList.add("faqSection");

  const faqHeader1 = document.createElement("h2");
  faqHeader1.classList.add("faq-header");
  faqHeader1.textContent = "ABOUT US";

  const faqPara1 = document.createElement("p");
  faqPara1.classList.add("faq-para");
  faqPara1.textContent =
    "Louie’s Restaurant is your favorite neighborhood spot serving American staples.";

  const faqHeader2 = document.createElement("h2");
  faqHeader2.classList.add("faq-header");
  faqHeader2.textContent = "RESERVATIONS";

  const faqPara2 = document.createElement("p");
  faqPara2.classList.add("faq-para");
  faqPara2.textContent =
    "We do offer reservations for Williamsburg. For weekend brunch, we are almost exclusively walk-in based and we only offer limited reservations. Please stop by and talk to the host for the estimated wait time and to be added to the waitlist.";

  const faqHeader3 = document.createElement("h2");
  faqHeader3.classList.add("faq-header");
  faqHeader3.textContent = "HOLIDAYS";

  const faqPara3 = document.createElement("p");
  faqPara3.classList.add("faq-para");
  faqPara3.textContent =
    "We are proud to offer our usual brunch and dinner service for all holidays.  We will be closed on Thanksgiving and Christmas Day.Louie’s Restaurant is your favorite neighborhood spot serving American staples.";

  const faqHeader4 = document.createElement("h2");
  faqHeader4.classList.add("faq-header");
  faqHeader4.textContent = "RECEIPT REQUESTS";

  const faqPara4 = document.createElement("p");
  faqPara4.classList.add("faq-para");
  faqPara4.textContent =
    "For Receipt Requests, please email hello@louierestaurant.com and please provide us with the date, name, dollar amount and last four digits of the credit card.";

  const faqHeader5 = document.createElement("h2");
  faqHeader5.classList.add("faq-header");
  faqHeader5.textContent = "PRESS INQUIRIES";

  const faqPara5 = document.createElement("p");
  faqPara5.classList.add("faq-para");
  faqPara5.textContent =
    "Press inquiries please contact, Amanda: amanda@louierestaurant.com";

  faq.appendChild(faqHeader1);
  faq.appendChild(faqPara1);

  faq.appendChild(faqHeader2);
  faq.appendChild(faqPara2);

  faq.appendChild(faqHeader3);
  faq.appendChild(faqPara3);

  faq.appendChild(faqHeader4);
  faq.appendChild(faqPara4);
  faq.appendChild(faqHeader5);
  faq.appendChild(faqPara5);

  return faq;
}

function loadFaq() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createFaq());
}

export default loadFaq;
