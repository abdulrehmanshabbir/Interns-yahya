/* One entry per problem set. Newest first is worked out automatically. */
const SETS = [
  { date: "2026-10-20", url: "20-10-2026/", levels: "Basic \u00b7 Intermediate \u00b7 Advanced" },
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function parts(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const weekday = DAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return { y, m, d, weekday, month: MONTHS[m - 1] };
}

function render() {
  const sorted = [...SETS].sort((a, b) => b.date.localeCompare(a.date));
  const groups = new Map();
  sorted.forEach(s => {
    const p = parts(s.date);
    const key = `${p.month} ${p.y}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ ...s, p });
  });

  const root = document.getElementById("months");
  root.innerHTML = "";
  let first = true;
  groups.forEach((items, label) => {
    const sec = document.createElement("section");
    sec.className = "month";
    const head = document.createElement("div");
    head.className = "month-head";
    const h2 = document.createElement("h2");
    h2.textContent = label;
    head.append(h2);
    const ul = document.createElement("ul");
    ul.className = "sets";
    items.forEach(s => {
      const li = document.createElement("li");
      li.className = "set";
      li.innerHTML = `
        <div class="cal" aria-hidden="true"><span class="mon"></span><span class="day"></span></div>
        <div class="info"><h3></h3></div>
        <a class="btn">Open</a>`;
      li.querySelector(".mon").textContent = s.p.month.slice(0, 3);
      li.querySelector(".day").textContent = s.p.d;
      const h3 = li.querySelector("h3");
      h3.textContent = `${s.p.weekday}, ${s.p.d} ${s.p.month} ${s.p.y}`;
      if (first) {
        const b = document.createElement("span");
        b.className = "badge";
        b.textContent = "Latest";
        h3.appendChild(b);
        first = false;
      }
      const a = li.querySelector("a");
      a.href = s.url;
      a.setAttribute("aria-label", `Open problem set for ${h3.firstChild.textContent}`);
      ul.appendChild(li);
    });
    sec.append(head, ul);
    root.appendChild(sec);
  });
}
render();
