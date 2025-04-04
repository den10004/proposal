import { product } from "./productArr";

const formatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
let total = 0;
const listElements = product.map(function (p) {
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
  const h6div2 = document.createElement("h6");
  pdiv2.textContent = p.quantity;
  h6div2.textContent = `Кол-во (шт.)`;
  div2.appendChild(h6div2);
  div2.appendChild(pdiv2);

  const div3 = document.createElement("li");
  div3.classList.add("div3", "div-style");
  const pdiv3 = document.createElement("p");
  const h6div3 = document.createElement("h6");
  pdiv3.textContent = formatter.format(p.price);
  h6div3.textContent = `Цена (₽)`;
  div3.appendChild(h6div3);
  div3.appendChild(pdiv3);

  let cost = p.quantity * p.price;
  const div4 = document.createElement("li");
  div4.classList.add("div4", "div-style");
  const pdiv4 = document.createElement("p");
  const h6div4 = document.createElement("h6");
  const strong4 = document.createElement("strong");
  strong4.textContent = formatter.format(cost);
  h6div4.textContent = `Стоимость (₽)`;
  div4.appendChild(h6div4);
  div4.appendChild(pdiv4);
  pdiv4.appendChild(strong4);

  div.appendChild(li);
  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);

  total += cost;
  return div;
});

const container = document.getElementById("render-list");
const totalContainer = document.querySelector(".selection__total");
console.log(totalContainer);
listElements.forEach(function (element) {
  container.appendChild(element);
});

totalContainer.innerHTML =
  "<p>Итого: <span>	&nbsp;" + formatter.format(total) + "</span> </p>";
