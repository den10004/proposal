import{d as q,y as I,m as g}from"./metrika-CKl_2uW-.js";const D={январь:1,февраль:2,март:3,апрель:4,май:5,июнь:6,июль:7,август:8,сентябрь:9,октябрь:10,ноябрь:11,декабрь:12},L=A(`${g}`);function A(e){e=e.toLowerCase();const t=D[e];return t||"Некорректное название месяца"}const M=new Date(`${L} ${q}, ${I} 00:00:00`).getTime(),P=setInterval(function(){const e=new Date().getTime(),t=M-e,i=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(t%(1e3*60*60)/(1e3*60)),d=Math.floor(t%(1e3*60)/1e3);document.getElementById("days").innerHTML=i,document.getElementById("hours").innerHTML=o,document.getElementById("minutes").innerHTML=n,document.getElementById("seconds").innerHTML=d,t<0&&(clearInterval(P),document.getElementById("timer").style.display="none",document.getElementById("timer-info").style.display="none",document.querySelector(".order__timer").innerHTML="Акция истекла!",document.querySelector(".order__timer").style.fontWeight="bold")},1e3),S=[{id:1,title:'Акустическая система AudioHolics, 2 полосы, НЧ1 х 8", ВЧ ленточный 4* импеданс 8 Ом, чувствительность 94 дБ, частотный диапазон: 70 Гц - 20000 Гц (± 2Дб)',quantity:11,price:16e4},{id:2,title:"Сабвуфер МК Sound V12+ Black (400/800Вт (номинальная/пиковая), ТНХ Select, 12-дюймов, 20-200 Гц (+/-ЗдБ).)",quantity:2,price:199e3},{id:3,title:"AV Процессор TRINNOV Altitudel6 (2021 год доставали для тестирования)",quantity:1,price:146e4},{id:4,title:'Экран Звукопрозрачный VideoVOX НК-100В (170")',quantity:1,price:285e3},{id:5,title:"Tone Winner AD-7300PA Plus - Усилитель мощности 7 х 300 Вт Tone",quantity:1,price:248e3},{id:6,title:"Winner AD-5100PA Plus - Усилитель мощности 5 х 100 Вт",quantity:1,price:62750},{id:7,title:"Кинотеатральный 4К проектор Sony VPL-XW5000/B (черный) SXRD, 4К (3840x2160), 2000 ANSI, HDCP 2.3, лазерно-фосфорный источник света. 1.38-2.21:1, зум 1.6, сдвиг объектива по вертикали: +/-71%, по горизонтали:+/-25%, 13 кг, цвет черный",quantity:11,price:569e3},{id:8,title:"Медиаплеер Zidoo Z3000 PRO",quantity:11,price:84e3},{id:9,title:'Жесткий диск WD SATA-III 12Tb Purple Pro (7200rpm) 256Mb 3.5" (WD121PURP)',quantity:1,price:38e3},{id:10,title:"Медиаплеер SHIELD TV Pro 4K16ГБ 2019 Android. 3 ГБ/16 ГБ, Wi-Fi, Bluetooth, черный",quantity:1,price:4e4},{id:11,title:"Караоке-система AST Mini и вокальная радиосистема AST-926M",quantity:1,price:18e4}],a=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2});let f=0;const B=S.map(function(e){const t=document.createElement("ul");t.classList.add("selection-table","section-tablebody");const i=document.createElement("li"),o=document.createElement("p");i.appendChild(o),o.textContent=e.id;const n=document.createElement("li");n.className="div1";const d=document.createElement("p");d.textContent=e.title,n.appendChild(d);const s=document.createElement("hr");s.classList.add("hr-selection-white","hr-selection"),n.appendChild(s);const c=document.createElement("li");c.classList.add("div2","div-style");const m=document.createElement("p"),u=document.createElement("h6");m.textContent=e.quantity,u.textContent="Кол-во (шт.)",c.appendChild(u),c.appendChild(m);const l=document.createElement("li");l.classList.add("div3","div-style");const p=document.createElement("p"),h=document.createElement("h6");p.textContent=a.format(e.price),h.textContent="Цена (₽)",l.appendChild(h),l.appendChild(p);let y=e.quantity*e.price;const r=document.createElement("li");r.classList.add("div4","div-style");const C=document.createElement("p"),E=document.createElement("h6"),v=document.createElement("strong");return v.textContent=a.format(y),E.textContent="Стоимость (₽)",r.appendChild(E),r.appendChild(C),C.appendChild(v),t.appendChild(i),t.appendChild(n),t.appendChild(c),t.appendChild(l),t.appendChild(r),f+=y,t}),b=document.getElementById("render-list"),T=document.querySelector(".selection__total");console.log(T);B.forEach(function(e){b.appendChild(e)});T.innerHTML="<p>Итого: <span>	&nbsp;"+a.format(f)+"</span> </p>";
