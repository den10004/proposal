import { product } from "./productArr";

const formatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const userElements = product.map(function (p) {
  const div = document.createElement("ul");
  div.classList.add("selection-table", "section-tablebody");

  const li = document.createElement("li");
  const pEl = document.createElement("p");
  li.appendChild(pEl);
  pEl.textContent = p.id;

  const div1 = document.createElement("li");
  div1.className = "div1";
  const pdiv1 = document.createElement("p");
  pdiv1.textContent = p.title;
  div1.appendChild(pdiv1);
  const hr = document.createElement("hr");
  hr.classList.add("hr-selection-white", "hr-selection");
  div1.appendChild(hr);

  const div2 = document.createElement("li");
  div2.classList.add("div2", "div-style");
  const pdiv2 = document.createElement("p");
  pdiv2.textContent = p.quantity;
  div2.appendChild(pdiv2);

  let cost = p.quantity * p.price;

  const div3 = document.createElement("li");
  div2.classList.add("div3", "div-style");
  const pdiv3 = document.createElement("p");
  pdiv3.textContent = formatter.format(p.price);
  div3.appendChild(pdiv3);

  const div4 = document.createElement("li");
  div2.classList.add("div4", "div-style");
  const pdiv4 = document.createElement("p");
  const strong4 = document.createElement("strong");
  strong4.textContent = formatter.format(cost);
  div4.appendChild(pdiv4);
  pdiv4.appendChild(strong4);

  div.appendChild(li);
  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);
  return div;
});

const container = document.getElementById("render-list");
userElements.forEach(function (element) {
  container.appendChild(element);
});
