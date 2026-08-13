/* =========================================================
   WIZ WINNER CONSTRUCTION SERVICES, INC.
   Website behaviour: navigation, content rendering, inquiry form
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------- DATA */

  var SERVICES = [
    {
      key: "electrical",
      name: "Electrical / Instrumentation",
      icon: "⚡",
      lead: "Engineering design and estimation, programming, planning & scheduling, and QA/QC.",
      items: [
        "HV/LV Switch Gear, MCC, Transformers, Panels",
        "Small Power & Lighting",
        "Grounding / Lightning Protection",
        "Conduit / Cable Tray Installation",
        "Cable Pulling (power, control & communication)",
        "Cable Glanding & Termination Works",
        "Outdoor / Street Lighting Installation",
        "Fire & Gas Detection System",
        "Security System / Public Address System",
        "Hi-pot, Duster and Megger Testing",
        "HV/LV Motor SOLO Testing (bumping & rotation)",
        "Cathodic Protection System",
        "Electrical Equipment / Safety Instruments",
        "Heat Tracing",
        "Bench / Field Instrument Calibration",
        "UPS Installation",
        "Pre-commissioning, Commissioning & Troubleshooting",
        "Preventive and Corrective Maintenance"
      ]
    },
    {
      key: "mechanical",
      name: "Mechanical Works",
      icon: "⚙️",
      lead: "Design, installation and maintenance of rotating and process equipment.",
      items: [
        "Conveyors",
        "LV/HV Motors & Pump Alignment",
        "All Mechanical Rotating Equipment",
        "HVAC (Heating, Ventilation & Air Conditioning)",
        "Commercial, industrial and residential ventilation",
        "Controlled environment: cleanrooms",
        "Cooling tower & evaporator bio-growth elimination",
        "Duct work and chilled water piping system",
        "Rehabilitation & restoration of HVAC equipment",
        "Water treatment systems",
        "POU and POE commercial industrial water systems",
        "Water supply for resort and housing development",
        "Desalination and reverse osmosis",
        "Elimination of bio fouling, scales & corrosion"
      ]
    },
    {
      key: "piping",
      name: "Piping Works Installation",
      icon: "🛠️",
      lead: "Complete piping systems fabricated and installed to specification.",
      items: [
        "Water lines: chilled, condenser, cooling, raw, potable, service",
        "Process pipeline",
        "Fire protection piping system",
        "Sewer line piping system",
        "Nitrogen piping system",
        "Steam line piping system",
        "Compressed air piping works",
        "Pipe supports and common support fabrication"
      ]
    },
    {
      key: "civil",
      name: "Civil & Structural Works",
      icon: "🏗️",
      lead: "Site development and structural facilities from ground breaking to turnover.",
      items: [
        "Construction of storm drainage system",
        "Roadway construction",
        "Construction of road widening",
        "Site development works",
        "Manufacturing building facilities",
        "Warehouse building facilities",
        "Perimeter fence projects",
        "Parking lot and carport construction"
      ]
    },
    {
      key: "wastewater",
      name: "Wastewater Treatment",
      icon: "💧",
      lead: "Design and build of wastewater treatment facilities, plus consultancy and chemicals.",
      items: [
        "Modular treatment facilities",
        "Sequencing Batch Reactor (SBR)",
        "Conventional Activated Sludge (CAS)",
        "Advance Oxidation Process (AOP)",
        "Rehabilitation of existing facilities",
        "Start-up, testing and commissioning",
        "Liquid enzymes and freeze dried bacteria",
        "Odor eliminator, FOG degreaser",
        "Sodium hypochlorite, pH neutralizer, sodium hydroxide"
      ]
    },
    {
      key: "management",
      name: "Management & Manpower",
      icon: "👷",
      lead: "Project management, consultancy and skilled labor supply.",
      items: [
        "Project management and consultancy",
        "E/I supervisors",
        "Mechanical / piping supervisors",
        "QA/QC engineers",
        "E/I technicians",
        "Electricians and helpers",
        "Mechanical technicians",
        "Scaffolders and pipe fitters"
      ]
    }
  ];

  var CLIENTS = [
    "Procter & Gamble", "Murata Manufacturing", "Fuji Film", "Nestlé Philippines",
    "Taikisha Philippines", "Toenec Philippines", "Liconin Co., Ltd.", "Hoya Glass Disk",
    "SunPower", "Asian Terminals Inc.", "RFM Cabuyao", "Axelum Resources Corp.",
    "YKK Philippines", "Advantec Factory", "TOPI Factory", "Wiz Winner Learning Institute"
  ];

  var PROJECTS = [
    { client: "Procter & Gamble", scope: "CDC 34 Warehouse — Electrical", date: "07/15/2007", amount: "₱31,364,941.00" },
    { client: "Procter & Gamble", scope: "E-Lite Electrical Cabuyao PP07 Project", date: "01/04/2012", amount: "₱13,468,762.00" },
    { client: "Procter & Gamble", scope: "PP09 Electrical Converter, PU & ADP Installation", date: "02/21/2013", amount: "₱10,248,916.00" },
    { client: "Procter & Gamble", scope: "Philips Lighting Installation", date: "03/18/2014", amount: "₱7,277,045.00" },
    { client: "Procter & Gamble", scope: "BC Dart 0.5 Converter Line Electrical Installation", date: "10/16/2018", amount: "₱6,951,611.20" },
    { client: "Procter & Gamble", scope: "PP72 Converter / PU / ADP / Packloop Electrical", date: "09/10/2019", amount: "₱8,561,662.50" },
    { client: "Procter & Gamble", scope: "Network Remediation", date: "02/18/2021", amount: "₱44,531,732.60" },
    { client: "Procter & Gamble", scope: "C1-4 Relocation and Arjunior Electrical Scope", date: "03/14/2023", amount: "₱8,401,814.48" },
    { client: "Procter & Gamble", scope: "AUTOBOT Installation Project", date: "11/22/2024", amount: "₱10,654,653.59" },
    { client: "Procter & Gamble", scope: "PU Support in Indonesia", date: "01/08/2013", amount: "USD 12,310.00" },
    { client: "Procter & Gamble", scope: "PU Support in Vietnam", date: "05/14/2013", amount: "USD 34,011.00" },
    { client: "Taikisha Philippines", scope: "Mechanical works at exterior area, genset and canteen", date: "1 yr & 6 mos.", amount: "₱29,950,435.20" },
    { client: "Taikisha Philippines", scope: "Mechanical plumbing works at Nippon Premium Bakery", date: "6 months", amount: "₱14,112,000.00" },
    { client: "Taikisha Philippines", scope: "Mechanical and plumbing works at SPWS Phase 6", date: "7 months", amount: "₱11,536,000.00" },
    { client: "Taikisha Philippines", scope: "Mechanical & plumbing works for YKK new factory", date: "8 months", amount: "₱11,200,000.00" },
    { client: "Taikisha Philippines", scope: "Mechanical works for dry coil system at CMI Bldg. 12", date: "6 months", amount: "₱10,706,138.00" },
    { client: "Taikisha Philippines", scope: "Air conditioning & mechanical ventilation, MK Maritime Training Center", date: "6 months", amount: "₱6,496,000.00" },
    { client: "Taikisha Philippines", scope: "Exterior-interior sewer piping at Murata factory", date: "6 months", amount: "₱3,999,968.00" },
    { client: "Taikisha Philippines", scope: "Compressed air piping works at Murata factory", date: "6 months", amount: "₱3,696,000.00" },
    { client: "Taikisha Philippines", scope: "Fuji Film mechanical works", date: "6 months", amount: "₱3,673,600.00" },
    { client: "Toenec Philippines", scope: "Fire protection works at New Glory factory", date: "6 months", amount: "₱11,660,000.00" },
    { client: "Toenec Philippines", scope: "Air conditioning & ventilation works at New Glory factory", date: "6 months", amount: "₱10,000,000.00" },
    { client: "Toenec Philippines", scope: "Plumbing works at New Glory factory", date: "6 months", amount: "₱7,790,000.00" },
    { client: "Toenec Philippines", scope: "Mechanical piping and plumbing works", date: "8 months", amount: "₱3,268,443.63" },
    { client: "Toenec Philippines", scope: "Mechanical works at Yazaki proposed P552 line", date: "3 months", amount: "₱2,200,000.00" },
    { client: "Liconin Co., Ltd.", scope: "Inside piping works — electrolytic tinning & tin free steel line", date: "6 months", amount: "USD 350,000.00" },
    { client: "Liconin Co., Ltd.", scope: "Outside piping works — electrolytic tinning & tin free steel line", date: "6 months", amount: "USD 188,000.00" }
  ];

  var HIGHLIGHTS = [
    { code: "01", title: "Wiz Winner Learning Institute", desc: "Proposed two-storey building with covered court." },
    { code: "02", title: "Perimeter Fence — Murata FPIP", desc: "Civil works perimeter fence project, Batangas." },
    { code: "03", title: "Project Luna Support", desc: "P&G Malaysia overseas support deployment." },
    { code: "04", title: "Solar Panel Installation", desc: "Complete mounting and electrical tie-in works." },
    { code: "05", title: "SunPower Solar Carport", desc: "Structural and electrical carport project." },
    { code: "06", title: "Cleanroom — Hoya Fab-1", desc: "Controlled environment cleanroom construction." },
    { code: "07", title: "Chilled Water Piping — Murata", desc: "Chilled water distribution piping system." },
    { code: "08", title: "Ducting Works — SPWS Bataan", desc: "Ventilation ducting and common supports." },
    { code: "09", title: "Nestlé Tanauan RTD Plant", desc: "Cable tray installation and power/control wiring." }
  ];

  var TEAM = [
    {
      title: "Executive & Administration",
      members: [
        { n: "Ramil A. Macalalad", r: "President" },
        { n: "Raul Macalalad", r: "Vice-President / COO" },
        { n: "Armando Plata", r: "Consultant" },
        { n: "Melanie Ilao", r: "HR / Purchasing Manager" },
        { n: "Veneranda Guzom", r: "Admin Personnel" },
        { n: "Shaira Joy Peñaranda", r: "HR Personnel" },
        { n: "Ma. Pamela Castillo", r: "Accountant" },
        { n: "Samantha Catilo", r: "Book Keeper" }
      ]
    },
    {
      title: "Project Management & HSE",
      members: [
        { n: "Alfred Macaraig", r: "Project Manager" },
        { n: "Caselito Nambio", r: "Project Manager" },
        { n: "Rudy Matira", r: "Project Manager" },
        { n: "Maria Luz Hizola", r: "Project Manager" },
        { n: "Julie Alconaba", r: "HSE Head" },
        { n: "Evangelino Magdadaro", r: "HSE" }
      ]
    },
    {
      title: "Civil Department",
      members: [
        { n: "Nelson Garcia", r: "Civil Engineer" },
        { n: "Gil Gundran", r: "Civil Engineer" },
        { n: "Floridel Encio", r: "Site Engineer" },
        { n: "Philp John Lanao", r: "Safety Officer" },
        { n: "Randolf Bunyi", r: "Safety Officer" },
        { n: "Noly S. Hondanero", r: "Construction Foreman" },
        { n: "Crispin Gatdula", r: "Construction Foreman" },
        { n: "Noly Acorda", r: "Construction Lead Man" },
        { n: "Michael Acorda", r: "Construction Lead Man" },
        { n: "Isolde Camos", r: "Warehouse Man" }
      ]
    },
    {
      title: "Mechanical Department",
      members: [
        { n: "Yvette Lorenzo", r: "Project In-Charge" },
        { n: "Mary Ann Acorda", r: "Project In-Charge" },
        { n: "Melody Zorilla", r: "Purchasing Officer" },
        { n: "Cesar Mananquil II", r: "Safety Officer" },
        { n: "Lina Evangelista", r: "Safety Officer" },
        { n: "Augusto Evaristo", r: "Supervisor" },
        { n: "Bonnie Libres", r: "Supervisor" },
        { n: "Carlo Nambio", r: "QA/QC Engineer (RME)" }
      ]
    },
    {
      title: "Electrical Department",
      members: [
        { n: "Arvin Collado", r: "Project In-Charge" },
        { n: "Ruel Rivera", r: "Project In-Charge" },
        { n: "Benjie Ramiro", r: "Head Supervisor" },
        { n: "Ponciano Carillo", r: "Supervisor" },
        { n: "Pedro Ola", r: "Supervisor" },
        { n: "Clemente Q. Genteroy", r: "Safety Officer" },
        { n: "Joseph Jarlego", r: "Safety Officer" },
        { n: "Jeffrey Casicnan", r: "Safety Officer" },
        { n: "Joel Vergara", r: "QA/QC / AutoCAD Operator" },
        { n: "Jezreel Hernandez", r: "QA Head (REE)" },
        { n: "Jovan Molleno", r: "QA/QC Engineer (REE)" },
        { n: "Rolly Capalad", r: "Warehouseman" }
      ]
    },
    {
      title: "Air Conditioning & Refrigeration Technicians",
      members: [
        { n: "Ramil Jayson Hilaga", r: "ACR Technician" },
        { n: "Ramil Sanchez", r: "ACR Technician" },
        { n: "Denver Placio", r: "ACR Technician" },
        { n: "Val Panganiban", r: "ACR Technician" },
        { n: "Manolo Santos", r: "ACR Technician" },
        { n: "Klyford Vilar", r: "ACR Technician" }
      ]
    }
  ];

  var EQUIPMENT = [
    ["1", "Mobile Crane", "—", "18,000.00 kg", "Owned"],
    ["2", "10-Wheeler Truck", "RLD 730", "37,450.00 kg", "Owned"],
    ["3", "Boom Truck", "RJV 398", "15,250.00 kg", "Owned"],
    ["4", "Truck with Canopy", "XLG 943", "4,200.00 kg", "Owned"],
    ["5", "Truck with Canopy", "PCS 231", "3,200.00 kg", "Owned"],
    ["6", "Dump Truck", "RMF 129", "2,100.00 kg", "Owned"],
    ["7", "Manlift Truck", "RJY 129", "3,750.00 kg", "Owned"],
    ["8", "Manlift Truck", "RJY 129", "3,750.00 kg", "Owned"],
    ["9", "Manlift Truck", "RJY 129", "3,750.00 kg", "Owned"],
    ["10", "Back Hoe", "PC128US", "—", "Owned"],
    ["11", "Back Hoe", "PC128UU", "—", "Owned"],
    ["12", "Back Hoe", "REGA 308", "—", "Owned"],
    ["13", "Utility Vehicle", "PPJ 912", "2,700.00 kg", "Owned"],
    ["14", "Utility Vehicle", "PEI 341", "1,900.00 kg", "Owned"],
    ["15", "Utility Vehicle", "VFA 899", "1,100.00 kg", "Owned"],
    ["16", "Utility Vehicle", "VEW 193", "1,100.00 kg", "Owned"],
    ["17", "Utility Vehicle", "WRW 884", "1,900.00 kg", "Owned"],
    ["18", "Compressor Jack Hammer (2 units)", "—", "5.5 Hp", "Owned"],
    ["19", "Compactor", "—", "6.0 Hp", "Owned"],
    ["20", "Concrete Cutter", "—", "11.5 Hp", "Owned"]
  ];

  /* ---------------------------------------------------- HELPERS */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function initials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }

  /* ---------------------------------------------------- NAVIGATION */

  var PAGES = ["home", "about", "services", "projects", "equipment", "team", "contact"];

  function showPage(page, skipHash) {
    if (PAGES.indexOf(page) === -1) page = "home";
    $all(".page").forEach(function (p) { p.classList.remove("active"); });
    var target = document.getElementById("page-" + page);
    if (target) target.classList.add("active");

    $all(".nav-link").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-link") === page);
    });

    if (!skipHash) history.replaceState(null, "", "#" + page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    $("#nav").classList.remove("open");
    $("#navToggle").classList.remove("open");

    if (page === "home") animateCounters();
  }

  document.addEventListener("click", function (e) {
  var pill = e.target.closest(".svc-pill");
  if (pill) {
    // Alisin ang 'active' class sa lahat ng pill buttons
    document.querySelectorAll(".svc-pill").forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Idagdag ang 'active' class sa pinalitang button
    pill.classList.add("active");
  }
});

  $("#navToggle").addEventListener("click", function () {
    $("#nav").classList.toggle("open");
    this.classList.toggle("open");
  });

  window.addEventListener("hashchange", function () {
    showPage((location.hash || "#home").slice(1), true);
  });

  /* ---------------------------------------------------- SCROLL UI */

  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    $("#header").classList.toggle("scrolled", y > 10);
    $("#toTop").classList.toggle("show", y > 400);
  });
  $("#toTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------------------------------------------- COUNTERS */

  var countersDone = false;
  function animateCounters() {
    if (countersDone) return;
    countersDone = true;
    $all("[data-count]").forEach(function (node) {
      var goal = parseInt(node.getAttribute("data-count"), 10);
      var current = 0;
      var step = Math.max(1, Math.round(goal / 40));
      var timer = setInterval(function () {
        current += step;
        if (current >= goal) { current = goal; clearInterval(timer); node.textContent = goal + "+"; return; }
        node.textContent = current;
      }, 30);
    });
  }

  /* ---------------------------------------------------- RENDER: HOME SERVICES */

  (function renderHomeServices() {
    var wrap = $("#homeServices");
    SERVICES.forEach(function (s) {
      var card = el("div", "feature service-card");
      card.setAttribute("data-link", "services");
      card.innerHTML =
        '<span class="feature-icon">' + s.icon + "</span>" +
        "<h3>" + s.name + "</h3>" +
        "<p>" + s.lead + "</p>" +
        "<ul><li>" + s.items.slice(0, 3).join("</li><li>") + "</li></ul>";
      wrap.appendChild(card);
    });
  })();

  /* ---------------------------------------------------- RENDER: SERVICE TABS */

  (function renderServiceTabs() {
    var tabs = $("#serviceTabs");
    var body = $("#serviceBody");

    function paint(service) {
      body.innerHTML =
        "<h3>" + service.icon + " " + service.name + "</h3>" +
        '<p class="lead">' + service.lead + "</p>" +
        '<div class="svc-cols">' +
        service.items.map(function (i) { return '<div class="svc-item">' + i + "</div>"; }).join("") +
        "</div>";
    }

    SERVICES.forEach(function (s, idx) {
      var btn = el("button", "tab" + (idx === 0 ? " active" : ""), s.icon + " " + s.name);
      btn.type = "button";
      btn.addEventListener("click", function () {
        $all(".tab", tabs).forEach(function (t) { t.classList.remove("active"); });
        btn.classList.add("active");
        paint(s);
      });
      tabs.appendChild(btn);
    });
    paint(SERVICES[0]);
  })();

  /* ---------------------------------------------------- RENDER: CLIENTS */

  (function renderClients() {
    var wrap = $("#clientList");
    CLIENTS.forEach(function (c) { wrap.appendChild(el("div", "client", c)); });
  })();

  /* ---------------------------------------------------- RENDER: PROJECTS */

  (function renderProjects() {
    var rows = $("#projectRows");
    var filters = $("#projectFilters");
    var clients = ["All"].concat(PROJECTS.map(function (p) { return p.client; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));

    function paint(filter) {
      rows.innerHTML = "";
      PROJECTS.filter(function (p) { return filter === "All" || p.client === filter; })
        .forEach(function (p) {
          var tr = el("tr");
          tr.innerHTML =
            '<td><span class="tag">' + p.client + "</span></td>" +
            "<td>" + p.scope + "</td>" +
            "<td>" + p.date + "</td>" +
            '<td class="right">' + p.amount + "</td>";
          rows.appendChild(tr);
        });
    }

    clients.forEach(function (c, i) {
      var chip = el("button", "chip" + (i === 0 ? " active" : ""), c);
      chip.type = "button";
      chip.addEventListener("click", function () {
        $all(".chip", filters).forEach(function (x) { x.classList.remove("active"); });
        chip.classList.add("active");
        paint(c);
      });
      filters.appendChild(chip);
    });
    paint("All");

    var hg = $("#highlightGrid");
    HIGHLIGHTS.forEach(function (h) {
      hg.appendChild(el("div", "highlight",
        '<div class="highlight-top">' + h.code + "</div>" +
        '<div class="highlight-body"><h3>' + h.title + "</h3><p>" + h.desc + "</p></div>"));
    });
  })();

  /* ---------------------------------------------------- RENDER: EQUIPMENT */

  (function renderEquipment() {
    var body = $("#equipmentRows");
    EQUIPMENT.forEach(function (row) {
      var tr = el("tr");
      tr.innerHTML = "<td>" + row[0] + "</td><td>" + row[1] + "</td><td>" + row[2] +
        "</td><td>" + row[3] + '</td><td><span class="tag">' + row[4] + "</span></td>";
      body.appendChild(tr);
    });
  })();

  /* ---------------------------------------------------- RENDER: TEAM */

  (function renderTeam() {
    var wrap = $("#teamSections");
    TEAM.forEach(function (block) {
      var section = el("div", "team-block", "<h2>" + block.title + "</h2>");
      var grid = el("div", "team-grid");
      block.members.forEach(function (m) {
        grid.appendChild(el("div", "member",
          '<div class="avatar">' + initials(m.n) + "</div><b>" + m.n + "</b><span>" + m.r + "</span>"));
      });
      section.appendChild(grid);
      wrap.appendChild(section);
    });
  })();

  /* ---------------------------------------------------- INQUIRY FORM */

  var form = $("#inquiryForm");
  var alertBox = $("#formAlert");
  var STORAGE_KEY = "wwcsi_inquiries";

  function setError(name, msg) {
    var input = document.getElementById(name);
    var slot = document.querySelector('[data-error="' + name + '"]');
    if (slot) { slot.textContent = msg || ""; slot.classList.toggle("show", !!msg); }
    if (input && input.parentElement) input.parentElement.classList.toggle("invalid", !!msg);
  }

  function validate() {
    var ok = true;
    var v = function (id) { return (document.getElementById(id).value || "").trim(); };

    ["fullName", "email", "phone", "service", "message", "consent"].forEach(function (f) { setError(f, ""); });

    if (v("fullName").length < 3) { setError("fullName", "Please enter your full name."); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) { setError("email", "Please enter a valid email address."); ok = false; }
    if (v("phone").replace(/\D/g, "").length < 7) { setError("phone", "Please enter a valid contact number."); ok = false; }
    if (!v("service")) { setError("service", "Please select the service you need."); ok = false; }
    if (v("message").length < 15) { setError("message", "Please describe your project (at least 15 characters)."); ok = false; }
    if (!$("#consent").checked) {
      var slot = document.querySelector('[data-error="consent"]');
      slot.textContent = "Please confirm so we can reply to you.";
      slot.classList.add("show");
      ok = false;
    }
    return ok;
  }

  function showAlert(type, html) {
    alertBox.className = "alert " + type;
    alertBox.innerHTML = html;
    alertBox.hidden = false;
  }

  function loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch (e) { return []; }
  }

  function renderSaved() {
    var data = loadSaved();
    var wrap = $("#savedWrap");
    var rows = $("#savedRows");
    if (!data.length) { wrap.hidden = true; return; }
    wrap.hidden = false;
    rows.innerHTML = "";
    data.slice().reverse().forEach(function (item) {
      var tr = el("tr");
      tr.innerHTML =
        '<td><span class="tag">' + item.ref + "</span></td>" +
        "<td>" + item.date + "</td>" +
        "<td>" + item.service + "</td>" +
        "<td>" + item.fullName + "</td>" +
        '<td class="right"><button type="button" class="link-btn" data-del="' + item.ref + '">Remove</button></td>';
      rows.appendChild(tr);
    });
  }

  $("#savedRows").addEventListener("click", function (e) {
    var ref = e.target.getAttribute && e.target.getAttribute("data-del");
    if (!ref) return;
    var data = loadSaved().filter(function (i) { return i.ref !== ref; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    renderSaved();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.hidden = true;

    if (!validate()) {
      showAlert("error", "⚠️ Please correct the highlighted fields and submit again.");
      return;
    }

    var btn = $("#submitBtn");
    btn.disabled = true;
    btn.textContent = "Sending…";

    setTimeout(function () {
      var ref = "WWCSI-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
      var record = {
        ref: ref,
        date: new Date().toLocaleString(),
        fullName: $("#fullName").value.trim(),
        company: $("#company").value.trim(),
        email: $("#email").value.trim(),
        phone: $("#phone").value.trim(),
        service: $("#service").value,
        location: $("#location").value.trim(),
        budget: $("#budget").value,
        message: $("#message").value.trim()
      };
      var data = loadSaved();
      data.push(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      showAlert("success",
        "✅ Thank you, <strong>" + record.fullName + "</strong>! Your inquiry has been received.<br />" +
        "Reference No. <strong>" + ref + "</strong> — our team will contact you at <strong>" +
        record.email + "</strong> within one business day.");

      form.reset();
      ["fullName", "email", "phone", "service", "message", "consent"].forEach(function (f) { setError(f, ""); });
      document.querySelector('[data-error="consent"]').classList.remove("show");
      btn.disabled = false;
      btn.textContent = "Submit Inquiry";
      renderSaved();
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 700);
  });

  $("#resetBtn").addEventListener("click", function () {
    alertBox.hidden = true;
    ["fullName", "email", "phone", "service", "message"].forEach(function (f) { setError(f, ""); });
    document.querySelector('[data-error="consent"]').classList.remove("show");
  });

  /* ---------------------------------------------------- INIT */

  $("#year").textContent = new Date().getFullYear();
  renderSaved();
  showPage((location.hash || "#home").slice(1), true);
})();

// Complete Services Data Object
const servicesData = {
  electrical: {
    icon: '⚡',
    title: 'ELECTRICAL / INSTRUMENTATION',
    desc: 'Engineering design and estimation, programming, planning & scheduling, and QA/QC.',
    items: [
      'HV/LV Switch Gear, MCC, Transformers, Panels',
      'Small Power & Lighting',
      'Grounding / Lightning Protection',
      'Conduit / Cable Tray Installation',
      'Cable Pulling (power, control & communication)',
      'Cable Glanding & Termination Works',
      'Outdoor / Street Lighting Installation',
      'Fire & Gas Detection System',
      'Security System / Public Address System',
      'Hi-pot, Duster and Megger Testing',
      'HV/LV Motor SOLO Testing (bumping & rotation)',
      'Cathodic Protection System',
      'Electrical Equipment / Safety Instruments',
      'Heat Tracing',
      'Bench / Field Instrument Calibration',
      'UPS Installation',
      'Pre-commissioning, Commissioning & Troubleshooting',
      'Preventive and Corrective Maintenance'
    ]
  },
  mechanical: {
    icon: '⚙️',
    title: 'MECHANICAL WORKS',
    desc: 'Complete mechanical installation, fabrication, and equipment positioning.',
    items: [
      'Heavy equipment positioning and alignment',
      'Conveyor systems installation',
      'Overhead crane and gantry setup',
      'Industrial pump installation and alignment',
      'Tank fabrication and installation',
      'Ducting works and blower systems'
    ]
  },
  piping: {
    icon: '🛠️',
    title: 'PIPING WORKS INSTALLATION',
    desc: 'Complete piping systems fabricated and installed to specification.',
    items: [
      'Water lines: chilled, condenser, cooling, raw, potable, service',
      'Process pipeline',
      'Fire protection piping system',
      'Sewer line piping system',
      'Nitrogen piping system',
      'Steam line piping system',
      'Compressed air piping works',
      'Pipe supports and common support fabrication'
    ]
  },
  civil: {
    icon: '🏗️',
    title: 'CIVIL & STRUCTURAL WORKS',
    desc: 'Structural steel framing and civil construction services.',
    items: [
      'Structural steel fabrication and erection',
      'Equipment foundation and concrete works',
      'Architectural finishes and painting',
      'Industrial plant civil works'
    ]
  },
  wastewater: {
    icon: '💧',
    title: 'WASTEWATER TREATMENT',
    desc: 'Wastewater treatment facility installation and maintenance.',
    items: [
      'Wastewater treatment plant piping & equipment',
      'Chemical dosing system installation',
      'Blower and aeration pipeworks',
      'Filter press and sludge treatment setup'
    ]
  },
  management: {
    icon: '👷',
    title: 'MANAGEMENT & MANPOWER',
    desc: 'Project management, engineering support, and skilled manpower deployment.',
    items: [
      'Project management and supervision',
      'Safety and QA/QC officers deployment',
      'Skilled labor supply (welders, fitters, electricians)',
      'Testing and commissioning assistance'
    ]
  }
};

// Global function para siguradong matawag agad ng onclick attribute
window.switchService = function(key, btnElement) {
  const data = servicesData[key];
  if (!data) return;

  // Update active tab style
  const allTabs = document.querySelectorAll('.svc-tab');
  allTabs.forEach(tab => tab.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Update content card
  const card = document.querySelector('.service-content-card');
  if (!card) return;

  let itemsHTML = '';
  data.items.forEach(item => {
    itemsHTML += `
      <div class="svc-item">
        <span class="arrow">▶</span>
        <span>${item}</span>
      </div>
    `;
  });

  card.innerHTML = `
    <div class="svc-header">
      <span class="svc-icon">${data.icon}</span>
      <h2>${data.title}</h2>
    </div>
    <p class="svc-desc">${data.desc}</p>
    <div class="svc-list-grid">
      ${itemsHTML}
    </div>
  `;
};

// Data Records Array
const projectRecordsData = [
  { client: 'Procter & Gamble', scope: 'CDC 34 Warehouse — Electrical', date: '07/15/2007', amount: '₱31,364,941.00' },
  { client: 'Procter & Gamble', scope: 'E-Lite Electrical Cabuyao PP07 Project', date: '01/04/2012', amount: '₱13,468,762.00' },
  { client: 'Procter & Gamble', scope: 'PP09 Electrical Converter, PU & ADP Installation', date: '02/21/2013', amount: '₱10,248,916.00' },
  { client: 'Procter & Gamble', scope: 'Philips Lighting Installation', date: '03/18/2014', amount: '₱7,277,045.00' },
  { client: 'Taikisha Philippines', scope: 'Mechanical works at exterior area, genset and canteen', date: '1 yr & 6 mos.', amount: '₱29,950,435.20' },
  { client: 'Taikisha Philippines', scope: 'Mechanical plumbing works at Nippon Premium Bakery', date: '6 months', amount: '₱14,112,000.00' },
  { client: 'Toenec Philippines', scope: 'Fire protection works at New Glory factory', date: '6 months', amount: '₱11,660,000.00' },
  { client: 'Liconin Co., Ltd.', scope: 'Inside piping works — electrolytic tinning & tin free steel line', date: '6 months', amount: 'USD 350,000.00' }
];

window.filterProjects = function(clientName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const tbody = document.getElementById('projectsTableBody');
  if (!tbody) return;

  const filtered = clientName === 'All' 
    ? projectRecordsData 
    : projectRecordsData.filter(p => p.client.toLowerCase() === clientName.toLowerCase());

  tbody.innerHTML = filtered.map(row => `
    <tr>
      <td><span class="client-pill">${row.client}</span></td>
      <td>${row.scope}</td>
      <td>${row.date}</td>
      <td><strong>${row.amount}</strong></td>
    </tr>
  `).join('');
};

// Auto-render table on load
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('projectsTableBody')) {
    filterProjects('All');
  }
});

window.selectClient = function(clientName, cardElement) {
  // 1. Alisin ang active class sa lahat ng client cards
  const allCards = document.querySelectorAll('.client-card');
  allCards.forEach(card => card.classList.remove('active'));

  // 2. Idagdag ang active class sa pinindot na card
  if (cardElement) {
    cardElement.classList.add('active');
  }

  // 3. I-filter ang Project Records Table ayon sa Napiling Client
  if (typeof window.filterProjects === 'function') {
    window.filterProjects(clientName);
  }
};

// Data ng Project Records
const projectRecords = [
  // Procter & Gamble
  { client: 'Procter & Gamble', scope: 'CDC 34 Warehouse — Electrical', date: '07/15/2007', amount: '₱31,364,941.00' },
  { client: 'Procter & Gamble', scope: 'E-Lite Electrical Cabuyao PP07 Project', date: '01/04/2012', amount: '₱13,468,762.00' },
  { client: 'Procter & Gamble', scope: 'PP09 Electrical Converter, PU & ADP Installation', date: '02/21/2013', amount: '₱10,248,916.00' },
  { client: 'Procter & Gamble', scope: 'Philips Lighting Installation', date: '03/18/2014', amount: '₱7,277,045.00' },
  { client: 'Procter & Gamble', scope: 'BC Dart 0.5 Converter Line Electrical Installation', date: '10/16/2018', amount: '₱6,951,611.20' },
  { client: 'Procter & Gamble', scope: 'PP72 Converter / PU / ADP / Packloop Electrical', date: '09/10/2019', amount: '₱8,561,662.50' },
  { client: 'Procter & Gamble', scope: 'Network Remediation', date: '02/18/2021', amount: '₱44,531,732.60' },
  { client: 'Procter & Gamble', scope: 'C1-4 Relocation and Arjunior Electrical Scope', date: '03/14/2023', amount: '₱8,401,814.48' },
  { client: 'Procter & Gamble', scope: 'AUTOBOT Installation Project', date: '11/22/2024', amount: '₱10,654,653.59' },
  { client: 'Procter & Gamble', scope: 'PU Support in Indonesia', date: '01/08/2013', amount: 'USD 12,310.00' },
  { client: 'Procter & Gamble', scope: 'PU Support in Vietnam', date: '05/14/2013', amount: 'USD 34,011.00' },

  // Taikisha Philippines
  { client: 'Taikisha Philippines', scope: 'Mechanical works at exterior area, genset and canteen', date: '1 yr & 6 mos.', amount: '₱29,950,435.20' },
  { client: 'Taikisha Philippines', scope: 'Mechanical plumbing works at Nippon Premium Bakery', date: '6 months', amount: '₱14,112,000.00' },
  { client: 'Taikisha Philippines', scope: 'Mechanical and plumbing works at SPWS Phase 6', date: '7 months', amount: '₱11,536,000.00' },
  { client: 'Taikisha Philippines', scope: 'Mechanical & plumbing works for YKK new factory', date: '8 months', amount: '₱11,200,000.00' },
  { client: 'Taikisha Philippines', scope: 'Mechanical works for dry coil system at CMI Bldg. 12', date: '6 months', amount: '₱10,706,138.00' },
  { client: 'Taikisha Philippines', scope: 'Air conditioning & mechanical ventilation, MK Maritime Training Center', date: '6 months', amount: '₱6,496,000.00' },
  { client: 'Taikisha Philippines', scope: 'Exterior-interior sewer piping at Murata factory', date: '6 months', amount: '₱3,999,968.00' },
  { client: 'Taikisha Philippines', scope: 'Compressed air piping works at Murata factory', date: '6 months', amount: '₱3,696,000.00' },
  { client: 'Taikisha Philippines', scope: 'Fuji Film mechanical works', date: '6 months', amount: '₱3,673,600.00' },

  // Toenec Philippines
  { client: 'Toenec Philippines', scope: 'Fire protection works at New Glory factory', date: '6 months', amount: '₱11,660,000.00' },
  { client: 'Toenec Philippines', scope: 'Air conditioning & ventilation works at New Glory factory', date: '6 months', amount: '₱10,000,000.00' },
  { client: 'Toenec Philippines', scope: 'Plumbing works at New Glory factory', date: '6 months', amount: '₱7,790,000.00' },
  { client: 'Toenec Philippines', scope: 'Mechanical piping and plumbing works', date: '8 months', amount: '₱3,268,443.63' },
  { client: 'Toenec Philippines', scope: 'Mechanical works at Yazaki proposed P552 line', date: '3 months', amount: '₱2,200,000.00' },

  // Liconin Co., Ltd.
  { client: 'Liconin Co., Ltd.', scope: 'Inside piping works — electrolytic tinning & tin free steel line', date: '6 months', amount: 'USD 350,000.00' },
  { client: 'Liconin Co., Ltd.', scope: 'Outside piping works — electrolytic tinning & tin free steel line', date: '6 months', amount: 'USD 188,000.00' }
];

// Function para mag-render ng Table Rows sa HTML
function renderProjectsTable(data) {
  const tbody = document.getElementById('projectsTableBody');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px;">No project records found for this client.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(item => `
    <tr>
      <td><span class="client-badge" style="background: #fdf2f2; color: #800020; border: 1px solid #fecdcd; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 0.75rem;">${item.client}</span></td>
      <td>${item.scope}</td>
      <td>${item.date}</td>
      <td style="text-align: right; font-weight: bold; color: #111827;">${item.amount}</td>
    </tr>
  `).join('');
}

// Function para sa Filter Buttons
window.filterProjects = function(clientName, btn) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (clientName === 'All') {
    renderProjectsTable(projectRecords);
  } else {
    const filtered = projectRecords.filter(item => item.client.toLowerCase() === clientName.toLowerCase());
    renderProjectsTable(filtered);
  }
};

// Function kapag pinihit ang Client Card sa itaas
window.selectClient = function(clientName, btn) {
  const cards = document.querySelectorAll('.client-card');
  cards.forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // I-trigger ang filter sa table
  const matchingFilterBtn = Array.from(document.querySelectorAll('.filter-btn')).find(
    b => b.textContent.trim().toLowerCase() === clientName.toLowerCase()
  );

  if (matchingFilterBtn) {
    filterProjects(clientName, matchingFilterBtn);
  } else {
    filterProjects(clientName, null);
  }
};

// Awtomatikong maglo-load kapag nakalabas na ang HTML
document.addEventListener('DOMContentLoaded', () => {
  renderProjectsTable(projectRecords);

  // Set Current Year sa Footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function openMemberModal(card) {
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('active-card'));
  card.classList.add('active-card');

  const name = card.getAttribute('data-name');
  const role = card.getAttribute('data-role');
  const dept = card.getAttribute('data-dept');
  const imgSrc = card.getAttribute('data-img');

  document.getElementById('modalName').textContent = name;
  document.getElementById('modalRole').textContent = role;
  document.getElementById('modalDept').textContent = dept;
  document.getElementById('modalImg').src = imgSrc;

  document.getElementById('memberModal').style.display = 'flex';
}

function closeMemberModal(e) {
  if (e.target.id === 'memberModal' || e.target.classList.contains('team-modal-close')) {
    document.getElementById('memberModal').style.display = 'none';
    document.querySelectorAll('.team-card').forEach(c => c.classList.remove('active-card'));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.svc-tab-btn');
  const contents = document.querySelectorAll('.svc-tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // 1. Alisin ang 'active' class sa lahat ng buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // 2. Itago ang lahat ng tab content
      contents.forEach(content => content.style.display = 'none');

      // 3. Ilagay ang 'active' class sa pino-pindot na button
      this.classList.add('active');

      // 4. Alamin kung anong tab ang ipapakita batay sa text ng button
      const text = this.textContent.toLowerCase();
      let targetId = '';

      if (text.includes('electrical')) targetId = 'tab-content-electrical';
      else if (text.includes('mechanical')) targetId = 'tab-content-mechanical';
      else if (text.includes('piping')) targetId = 'tab-content-piping';
      else if (text.includes('civil')) targetId = 'tab-content-civil';
      else if (text.includes('wastewater')) targetId = 'tab-content-wastewater';
      else if (text.includes('management') || text.includes('manpower')) targetId = 'tab-content-manpower';

      // 5. Ipakita ang napiling content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var pills = document.querySelectorAll(".svc-pill");

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      // Tanggalin ang active status sa lahat ng buttons
      pills.forEach(function (p) { p.classList.remove("active"); });

      // Idagdag ang active status sa pinalitang button
      this.classList.add("active");

      // Kunin ang napiling service key
      var serviceKey = this.getAttribute("data-service");
      
      // Ipakita ang kaukulang service detail content
      showServiceDetail(serviceKey);
    });
  });
});

function showServiceDetail(key) {
  // Logic para palitan ang nilalaman o mag-navigate sa napiling serbisyo
  console.log("Active Service:", key);
}

function switchService(serviceKey, clickedBtn) {
  // 1. Tanggalin ang 'active' class sa lahat ng Pill Buttons at i-apply sa napiling button
  var allPills = document.querySelectorAll('.svc-pill');
  allPills.forEach(function(pill) {
    pill.classList.remove('active');
  });
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }

  // 2. Tanggalin ang 'active' class sa lahat ng Cards
  var allCards = document.querySelectorAll('.service-card');
  allCards.forEach(function(card) {
    card.classList.remove('active');
  });

  // 3. Ipakita ang card na tumutugma sa napiling service
  var selectedCard = document.getElementById('card-' + serviceKey);
  if (selectedCard) {
    selectedCard.classList.add('active');
  }
}

// Function para mag-render ng Project Table Rows
function renderProjectsTable(data) {
  const tbody = document.getElementById("projectsTableBody");
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="padding:20px; text-align:center; color:#6b7280;">No records found for this client.</td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(row => `
    <tr>
      <td style="font-weight: 700; color: #0f172a;">${row.client}</td>
      <td>${row.scope}</td>
      <td style="color: #64748b;">${row.date}</td>
      <td>${row.amount}</td>
    </tr>
  `).join('');
}

function openLightbox(cardElement) {
  const imgElement = cardElement.querySelector('img');
  const modal = document.getElementById('imageLightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  
  if (imgElement && modal && modalImg) {
    modalImg.src = imgElement.src;
    modal.style.display = 'flex';
  }
}

function closeLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  if (modal) {
    modal.style.display = 'none';
  }
}