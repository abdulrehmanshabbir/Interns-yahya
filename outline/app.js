if('scrollRestoration' in history)history.scrollRestoration='manual';

const SECTIONS = [{"title": "Python Foundations", "short": "Foundations", "topics": [["1.1", "Getting Started", "Python as an interpreted, dynamically typed, multi-paradigm language; installing Python 3 and checking `python --version`; the REPL vs running `.py` scripts; choosing an editor (VS Code, PyCharm); the Zen of Python (`import this`); PEP 8 style basics"], ["1.2", "Syntax Essentials", "Indentation as block structure; comments and docstrings; statements vs expressions; identifiers, naming rules and reserved keywords; line continuation"], ["1.3", "Variables and Data Types", "Variables as names bound to objects; `int`, `float`, `complex`, `bool`, `str`, `None`; `type()` and `isinstance()`; type conversion (`int()`, `float()`, `str()`, `bool()`); truthy and falsy values; mutable vs immutable types"], ["1.4", "Operators", "Arithmetic (`+ - * / // % **`); comparison and chained comparisons; logical `and`, `or`, `not` with short-circuiting; assignment and augmented assignment (`+=`, `-=`); identity (`is`) and membership (`in`); bitwise operators; walrus operator `:=`; operator precedence"], ["1.5", "Input and Output", "`print()` with `sep` and `end`; `input()` and converting user input; f-strings and `str.format()`; escape sequences (`\\n`, `\\t`)"], ["1.6", "Control Flow", "`if` / `elif` / `else`; conditional expressions (`x if cond else y`); `match` / `case` pattern matching; `while` and `for` loops; `range()`; `break`, `continue`, `pass`; `else` on loops; nested loops"]]}, {"title": "Core Data Structures and Functions", "short": "Data & Functions", "topics": [["2.1", "Strings in Depth", "Indexing, negative indexes and slicing (`s[start:stop:step]`); string immutability; methods: `split`, `join`, `strip`, `replace`, `find`, `count`, `upper`, `lower`, `startswith`, `endswith`; multiline and raw strings; Unicode, `encode()` / `decode()` and UTF-8"], ["2.2", "Lists", "Creating, indexing and slicing; methods: `append`, `extend`, `insert`, `remove`, `pop`, `index`, `count`, `sort`, `reverse`; `list.sort()` vs `sorted()`; nested lists; assignment vs shallow copy; lists as stacks"], ["2.3", "Tuples", "Creating tuples, including `(x,)`; immutability and when to prefer tuples; packing, unpacking and extended unpacking (`first, *rest = items`); swapping values; `collections.namedtuple`"], ["2.4", "Dictionaries", "Key-value pairs and hashable keys; `get()` and `setdefault()`; `keys()`, `values()`, `items()`; adding, updating and deleting (`update()`, `pop()`, `del`); preserved insertion order; dict merge and update operators (3.9+); nested dictionaries"], ["2.5", "Sets", "Unique, unordered collections; fast membership tests; union, intersection, difference, symmetric difference; `add`, `remove`, `discard`; `frozenset`"], ["2.6", "Built-in Iteration Helpers", "`len`, `range`, `enumerate`, `zip`, `reversed`; `sorted()` with `key=` and `reverse=`; `min`, `max`, `sum`, `any`, `all`"], ["2.7", "Functions", "`def` and `return` (including multiple return values); parameters vs arguments; positional, keyword and default arguments; the mutable default argument pitfall; `*args` and `**kwargs`; positional-only (`/`) and keyword-only (`*`) parameters; docstrings and basic type hints; `lambda`; functions as first-class objects; recursion and the recursion limit"], ["2.8", "Scope", "The LEGB rule (Local, Enclosing, Global, Built-in); `global` and `nonlocal`"], ["2.9", "Modules and Packages", "`import`, `from ... import`, `as` aliases; writing your own modules; `if __name__ == \"__main__\":`; packages and `__init__.py`; how Python finds modules (`sys.path`); installing packages with `pip`"]]}, {"title": "Intermediate Python", "short": "Intermediate", "topics": [["3.1", "Comprehensions", "List, dict and set comprehensions; conditions and nested comprehensions; generator expressions; when a plain loop is clearer"], ["3.2", "Exception Handling", "`try` / `except` / `else` / `finally`; catching specific exceptions; the exception hierarchy; `raise` and re-raising; custom exception classes; chaining with `raise ... from`; `ExceptionGroup` and `except*`; `assert`"], ["3.3", "File Handling", "`open()` and file modes; the `with` statement; reading and writing text and binary files; encodings; `pathlib`; `os` and `shutil`; CSV with `csv`; JSON with `json`"], ["3.4", "OOP Fundamentals", "Classes and objects; `__init__` and `self`; instance vs class attributes; instance, class (`@classmethod`) and static (`@staticmethod`) methods; encapsulation with `_` and `__` (name mangling); `@property` getters and setters"], ["3.5", "Inheritance and Polymorphism", "Inheritance and method overriding; `super()`; multiple inheritance and the MRO; polymorphism and duck typing; composition vs inheritance; abstract base classes (`abc`)"], ["3.6", "Dataclasses and Enums", "`@dataclass` (defaults, `field()`, `frozen`, `order`); `enum.Enum`, `IntEnum` and `auto()`"], ["3.7", "Special (Dunder) Methods", "`__str__` and `__repr__`; comparisons (`__eq__`, `__lt__`) and `functools.total_ordering`; `__hash__`; container methods (`__len__`, `__getitem__`, `__contains__`, `__iter__`); operator overloading (`__add__` and friends); `__bool__`; `__call__`"], ["3.8", "Iterators and Generators", "Iterables vs iterators; the iterator protocol (`__iter__`, `__next__`, `StopIteration`); generator functions and `yield`; `yield from`; lazy evaluation"], ["3.9", "Functional Programming", "First-class and higher-order functions; closures; `map`, `filter`, `functools.reduce`; `functools.partial`; pure functions and avoiding side effects"]]}, {"title": "Advanced Python", "short": "Advanced", "topics": [["4.1", "Decorators", "Closures recap; writing function decorators; `functools.wraps`; decorators with arguments; stacking decorators; class decorators; practical uses: timing, caching, logging, retry"], ["4.2", "Context Managers", "The protocol (`__enter__`, `__exit__`); class-based context managers; `contextlib.contextmanager`; `contextlib.suppress` and `ExitStack`; handling exceptions inside `__exit__`"], ["4.3", "Attribute Access and Descriptors", "`__getattr__`, `__getattribute__`, `__setattr__`, `__delattr__`; the descriptor protocol (`__get__`, `__set__`, `__set_name__`); how `property` and methods work under the hood; `__slots__`"], ["4.4", "Asynchronous Programming", "`async` / `await` and coroutines; the event loop; tasks, `asyncio.gather` and `asyncio.TaskGroup`; timeouts and cancellation; async iterators, generators and context managers; async HTTP with `httpx` or `aiohttp`"]]}, {"title": "Professional Python", "short": "Professional", "topics": [["5.1", "Environments and Dependencies", "Virtual environments (`venv`); `pip` and `requirements.txt`; `pyproject.toml`; modern tools such as uv and Poetry; `pipx` for command-line tools; managing Python versions (pyenv or uv)"], ["5.2", "Testing", "`unittest` basics; `pytest` (fixtures, `parametrize`, markers); mocking with `unittest.mock`; coverage with `coverage.py`; test-driven development; `doctest`"], ["5.3", "Debugging and Logging", "Reading tracebacks; `breakpoint()` and `pdb`; IDE debuggers; `logging` levels, handlers, formatters and configuration"], ["5.4", "Design Patterns", "Pythonic factory, strategy, observer, adapter and singleton (via modules); dependency injection"], ["5.5", "Version Control and Deployment", "Git and GitHub workflow; branches and pull requests; continuous integration with GitHub Actions; Docker basics"]]}];

/* ---- per-browser storage (ticks are kept only in this browser) ---- */
const KEY = "python-outline-done-v1";
const SECTION_KEY = "python-outline-section-v1";
function loadDone() {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) { return new Set(); }
}
function saveDone() {
  try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch (e) {}
}
let done = loadDone();
let current = 0;
try {
  const fromHash = (location.hash || "").replace("#", "");
  const n = /^s[1-9]$/.test(fromHash) ? Number(fromHash.slice(1)) - 1 : Number(localStorage.getItem(SECTION_KEY));
  if (n >= 0 && n < SECTIONS.length) current = n;
} catch (e) {}

const TOTAL = SECTIONS.reduce((n, s) => n + s.topics.length, 0);
const TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 12.5l4 4L18 8.5"/></svg>';

function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function withCode(s) { return esc(s).replace(/`([^`]*)`/g, "<code>$1</code>"); }
/* "a; b; c" becomes a bullet list, each point starting with a capital letter */
function learnList(s) {
  const items = s.split(/;\s*/).map(x => x.trim()).filter(Boolean)
    .map(x => /^[a-z]/.test(x) ? x[0].toUpperCase() + x.slice(1) : x);
  return `<ul class="learn">${items.map(x => `<li>${withCode(x)}</li>`).join("")}</ul>`;
}

function renderProgress() {
  const n = SECTIONS.reduce((c, s) => c + s.topics.filter(t => done.has(t[0])).length, 0);
  document.getElementById("doneCount").textContent = n;
  document.getElementById("totalCount").textContent = TOTAL;
  document.getElementById("donePct").textContent = Math.round(n / TOTAL * 100) + "%";
  document.getElementById("bar").style.width = (n / TOTAL * 100) + "%";
}

function renderTabs() {
  const el = document.getElementById("tabs");
  el.innerHTML = "";
  SECTIONS.forEach((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tab";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === current ? "true" : "false");
    b.textContent = s.short;
    b.addEventListener("click", () => show(i, true));
    el.appendChild(b);
    if (i === current) requestAnimationFrame(() => b.scrollIntoView({ block: "nearest", inline: "nearest" }));
  });
}

function renderCard() {
  const s = SECTIONS[current];
  const count = s.topics.filter(t => done.has(t[0])).length;
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="card-head">
      <span class="pid">${current + 1}</span>
      <h2>${esc(s.title)}</h2>
      <span class="sec-count" id="secCount">${count} / ${s.topics.length} done</span>
    </div>
    <table>
      <colgroup><col class="c-id"><col class="c-topic"><col class="c-learn"><col class="c-done"></colgroup>
      <thead><tr><th scope="col">#</th><th scope="col">Topic</th><th scope="col">What to learn</th><th scope="col" class="h-done">Done</th></tr></thead>
      <tbody>
        ${s.topics.map(([id, name, learn]) => `
        <tr class="${done.has(id) ? "done" : ""}" data-id="${id}">
          <td class="t-id">${id}</td>
          <td class="t-topic">${esc(name)}</td>
          <td class="t-learn">${learnList(learn)}</td>
          <td class="t-done"><label class="check" title="Mark ${esc(name)} as completed">
            <input type="checkbox" id="chk-${id.replace(".", "-")}" ${done.has(id) ? "checked" : ""} aria-label="${esc(name)} completed">
            <span>${TICK}</span></label></td>
        </tr>`).join("")}
      </tbody>
    </table>`;
  card.querySelectorAll("tbody tr").forEach(tr => {
    const id = tr.dataset.id;
    tr.querySelector("input").addEventListener("change", e => {
      if (e.target.checked) done.add(id); else done.delete(id);
      saveDone();
      tr.classList.toggle("done", e.target.checked);
      const c = s.topics.filter(t => done.has(t[0])).length;
      document.getElementById("secCount").textContent = `${c} / ${s.topics.length} done`;
      renderProgress();
    });
  });
}

function renderPager() {
  const prev = SECTIONS[current - 1], next = SECTIONS[current + 1];
  const pager = document.getElementById("pager");
  pager.innerHTML = `
    <button class="pg pg-prev" type="button" ${prev ? "" : "disabled"}>
      <span class="pg-dir">← Previous</span><span class="pg-sub">${prev ? esc(prev.title) : ""}</span>
    </button>
    <button class="pg pg-next" type="button" ${next ? "" : "disabled"}>
      <span class="pg-dir">Next →</span><span class="pg-sub">${next ? esc(next.title) : ""}</span>
    </button>`;
  pager.querySelector(".pg-prev").addEventListener("click", () => show(current - 1, true));
  pager.querySelector(".pg-next").addEventListener("click", () => show(current + 1, true));
}

function show(i, scroll) {
  if (i < 0 || i >= SECTIONS.length) return;
  current = i;
  try { localStorage.setItem(SECTION_KEY, String(i)); } catch (e) {}
  try { history.replaceState(null, "", "#s" + (i + 1)); } catch (e) {}
  renderTabs();
  renderCard();
  renderPager();
  if (scroll) {
    const card = document.getElementById("card");
    if (card.getBoundingClientRect().top < 60) card.scrollIntoView({ block: "start" });
  }
}

document.addEventListener("keydown", e => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === "ArrowRight") show(current + 1, true);
  if (e.key === "ArrowLeft") show(current - 1, true);
});

/* Clear with an inline second click instead of a dialog */
const resetBtn = document.getElementById("resetBtn");
let armTimer = null;
resetBtn.addEventListener("click", () => {
  if (!resetBtn.classList.contains("armed")) {
    resetBtn.classList.add("armed");
    resetBtn.textContent = "Click again to clear";
    armTimer = setTimeout(() => { resetBtn.classList.remove("armed"); resetBtn.textContent = "Clear"; }, 3000);
    return;
  }
  clearTimeout(armTimer);
  done = new Set();
  saveDone();
  resetBtn.classList.remove("armed");
  resetBtn.textContent = "Clear";
  renderProgress();
  renderCard();
});

renderProgress();
show(current, false);

(function(){function t(){window.scrollTo(0,0);}t();window.addEventListener('load',function(){t();requestAnimationFrame(function(){requestAnimationFrame(t);});});})();
