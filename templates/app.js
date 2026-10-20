/* Today's date in Pakistan time, formatted like 12-Oct-2026. */
function pakistanDate() {
  const parts = {};
  new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Karachi", day: "2-digit", month: "short", year: "numeric" })
    .formatToParts(new Date())
    .forEach(p => { parts[p.type] = p.value; });
  return `${parts.day}-${parts.month}-${parts.year}`;
}

const SECTIONS = ["What I worked on today", "Blockers & challenges", "Plan for tomorrow", "Notes / queries"];
const HOURS = "Working hours today: <e.g. 9:00 AM – 5:00 PM>";

function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* Plain text: used by apps that do not accept formatting. */
function plainTemplate(date) {
  const lines = [`Daily Progress Report ${date}`, "", HOURS];
  SECTIONS.forEach(title => lines.push("", title, "• "));
  return lines.join("\n");
}

/* Rich text: a bold title and real bulleted lists, so Slack keeps the
   bullets and Enter starts a new point. Nothing else is bold or italic. */
function richTemplate(date) {
  let html = `<p><b>Daily Progress Report ${date}</b></p><p><br></p><p>${esc(HOURS)}</p>`;
  SECTIONS.forEach(title => {
    html += `<p><br></p><p>${esc(title)}</p><ul><li>&nbsp;</li></ul>`;
  });
  return html;
}

function showDate() {
  document.querySelectorAll(".today").forEach(el => { el.textContent = pakistanDate(); });
}
showDate();
setInterval(showDate, 60 * 1000);   // stays correct if the page is left open past midnight

const btn = document.getElementById("copyBtn");
const label = document.getElementById("copyLabel");
const status = document.getElementById("copyStatus");
let resetTimer = null;

function flash(text) {
  label.textContent = text;
  status.textContent = text;
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => { label.textContent = "Copy template"; status.textContent = ""; }, 1800);
}

/* Fallback: select a hidden rich-text copy and use the browser's copy command. */
function selectionCopy(html) {
  const box = document.createElement("div");
  box.contentEditable = "true";
  box.innerHTML = html;
  box.style.cssText = "position:fixed;left:-9999px;top:0;white-space:pre-wrap;color:#000;background:#fff;font-weight:400;font-style:normal";
  document.body.appendChild(box);
  const range = document.createRange();
  range.selectNodeContents(box);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) {}
  sel.removeAllRanges();
  box.remove();
  return ok;
}

btn.addEventListener("click", () => {
  const date = pakistanDate();
  showDate();
  const html = richTemplate(date);
  const text = plainTemplate(date);
  const fail = () => {
    if (selectionCopy(html)) { flash("Copied"); return; }
    try {
      navigator.clipboard.writeText(text).then(() => flash("Copied"), () => flash("Couldn't copy, try again"));
    } catch (e) { flash("Couldn't copy, try again"); }
  };
  try {
    const item = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    navigator.clipboard.write([item]).then(() => flash("Copied"), fail);
  } catch (e) {
    fail();
  }
});
