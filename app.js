/**
 * GANPATI TRADING & GYMSCAPE - QUOTATION MAKER STUDIO
 * Interactive core engine and reactive document renderer
 */

// Helper to encode SVG string safely to Base64 data URI
function svgToBase64(svgStr) {
  return `data:image/svg+xml;base64,${btoa(svgStr.trim())}`;
}

// Preset item images in safe Base64
const DEFAULT_IMAGES = {
  pool_green: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="15" y="20" width="130" height="65" rx="6" fill="#5c3a21" stroke="#3b2413" stroke-width="3"/>
      <rect x="25" y="28" width="110" height="49" rx="3" fill="#15803d"/>
      <circle cx="28" cy="31" r="3.5" fill="#000"/>
      <circle cx="132" cy="31" r="3.5" fill="#000"/>
      <circle cx="28" cy="74" r="3.5" fill="#000"/>
      <circle cx="132" cy="74" r="3.5" fill="#000"/>
      <circle cx="80" cy="30" r="3" fill="#000"/>
      <circle cx="80" cy="75" r="3" fill="#000"/>
      <circle cx="65" cy="52" r="3" fill="#fff"/>
      <circle cx="75" cy="52" r="3" fill="#ef4444"/>
      <circle cx="85" cy="52" r="3" fill="#eab308"/>
      <circle cx="80" cy="48" r="3" fill="#1d4ed8"/>
      <rect x="20" y="85" width="10" height="18" fill="#451a03"/>
      <rect x="130" y="85" width="10" height="18" fill="#451a03"/>
      <rect x="75" y="85" width="10" height="18" fill="#451a03"/>
    </svg>
  `),
  pool_blue: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="15" y="20" width="130" height="65" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
      <rect x="25" y="28" width="110" height="49" rx="3" fill="#1d4ed8"/>
      <circle cx="28" cy="31" r="3.5" fill="#000"/>
      <circle cx="132" cy="31" r="3.5" fill="#000"/>
      <circle cx="28" cy="74" r="3.5" fill="#000"/>
      <circle cx="132" cy="74" r="3.5" fill="#000"/>
      <circle cx="65" cy="52" r="3" fill="#fff"/>
      <circle cx="75" cy="52" r="3" fill="#ef4444"/>
      <circle cx="85" cy="52" r="3" fill="#eab308"/>
      <rect x="20" y="85" width="12" height="18" fill="#1e293b"/>
      <rect x="128" y="85" width="12" height="18" fill="#1e293b"/>
    </svg>
  `),
  foosball: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="25" y="22" width="110" height="60" rx="4" fill="#166534" stroke="#000" stroke-width="3"/>
      <line x1="10" y1="35" x2="150" y2="35" stroke="#94a3b8" stroke-width="3"/>
      <line x1="10" y1="52" x2="150" y2="52" stroke="#94a3b8" stroke-width="3"/>
      <line x1="10" y1="69" x2="150" y2="69" stroke="#94a3b8" stroke-width="3"/>
      <rect x="45" y="31" width="5" height="9" fill="#ef4444"/>
      <rect x="75" y="31" width="5" height="9" fill="#ef4444"/>
      <rect x="105" y="31" width="5" height="9" fill="#ef4444"/>
      <rect x="55" y="48" width="5" height="9" fill="#3b82f6"/>
      <rect x="95" y="48" width="5" height="9" fill="#3b82f6"/>
      <rect x="25" y="82" width="8" height="22" fill="#334155"/>
      <rect x="127" y="82" width="8" height="22" fill="#334155"/>
    </svg>
  `),
  airhockey: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="20" y="22" width="120" height="60" rx="6" fill="#e2e8f0" stroke="#0284c7" stroke-width="3"/>
      <circle cx="80" cy="52" r="14" stroke="#ef4444" stroke-width="2"/>
      <line x1="80" y1="22" x2="80" y2="82" stroke="#ef4444" stroke-width="2"/>
      <rect x="20" y="42" width="6" height="20" fill="#0f172a"/>
      <rect x="134" y="42" width="6" height="20" fill="#0f172a"/>
      <circle cx="50" cy="52" r="6" fill="#ef4444"/>
      <circle cx="110" cy="52" r="6" fill="#2563eb"/>
      <rect x="22" y="82" width="10" height="20" fill="#0284c7"/>
      <rect x="128" y="82" width="10" height="20" fill="#0284c7"/>
    </svg>
  `),
  tabletennis: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="18" y="32" width="124" height="46" rx="2" fill="#1d4ed8" stroke="#fff" stroke-width="2"/>
      <line x1="80" y1="32" x2="80" y2="78" stroke="#fff" stroke-width="1.5"/>
      <line x1="18" y1="55" x2="142" y2="55" stroke="#fff" stroke-width="1.5"/>
      <rect x="77" y="26" width="6" height="58" fill="#334155" opacity="0.6"/>
      <line x1="28" y1="78" x2="28" y2="100" stroke="#0f172a" stroke-width="4"/>
      <line x1="132" y1="78" x2="132" y2="100" stroke="#0f172a" stroke-width="4"/>
      <line x1="80" y1="78" x2="80" y2="100" stroke="#0f172a" stroke-width="4"/>
      <circle cx="55" cy="45" r="4" fill="#f97316"/>
    </svg>
  `),
  treadmill: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="20" y="70" width="115" height="12" rx="3" fill="#1e293b"/>
      <line x1="30" y1="70" x2="60" y2="28" stroke="#334155" stroke-width="5"/>
      <rect x="52" y="20" width="30" height="15" rx="3" fill="#0f172a"/>
      <line x1="60" y1="32" x2="95" y2="35" stroke="#334155" stroke-width="4"/>
    </svg>
  `),
  crossfit: svgToBase64(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" width="160" height="110">
      <rect width="160" height="110" fill="#f8fafc"/>
      <rect x="30" y="20" width="8" height="75" fill="#0f172a"/>
      <rect x="122" y="20" width="8" height="75" fill="#0f172a"/>
      <rect x="25" y="30" width="110" height="6" fill="#0f172a"/>
      <rect x="25" y="88" width="110" height="6" fill="#0f172a"/>
      <line x1="50" y1="65" x2="110" y2="65" stroke="#94a3b8" stroke-width="5"/>
      <circle cx="50" cy="65" r="14" fill="#1e293b"/>
      <circle cx="110" cy="65" r="14" fill="#1e293b"/>
    </svg>
  `)
};

// Item catalog presets
const CATALOG_PRESETS = {
  pool1: {
    code: '1A',
    name: 'Commercial Pool Table (Option 1: Standard Commercial Slates)',
    specs: [
      'Dimensions: TableSize L8 Ft xW4 Ft(Room Size: L 18Ft x W14Ft)',
      'Bed & Frame: Authentic Best Quality Indian wood and Indian top, Wiraka 777 table cloth.',
      'Finish & Quality: Premium Brown Melamine Polish Finish, Standard Imported Cloth & Inner Leather Pockets',
      'Accessories Included: 1 Imported Ball Set, 4 Premium Ashwood Cues, Triangle, Brush, Cue Stand, 12 Chalks, 12 Cue Tips, Dust Cover'
    ],
    note: 'Note : Installation charges are Rs. 10000',
    qty: 1,
    unit: 'Unit',
    rate: 105000,
    image: DEFAULT_IMAGES.pool_green
  },
  pool2: {
    code: '1B',
    name: 'Commercial Pool Table (Option 2)',
    specs: [
      'Dimensions &Build: Size8x4 Ft,Premium CNC Precision Leveled SlateBedwith Heavy Solid Wood Base',
      'Accessories Included: Complete 4-Cue Ashwood Kit, Heavy Brass Triangle, Deluxe Wall Cue Rack & Cover'
    ],
    note: 'Note : Installation charges are Rs. 5000',
    qty: 1,
    unit: 'Unit',
    rate: 95000,
    image: DEFAULT_IMAGES.pool_blue
  },
  foosball1: {
    code: '2A',
    name: 'Commercial Foosball Table (Option 1)',
    specs: [
      'Includes: All accessories'
    ],
    note: 'Note : Installation charges are Rs. 3000',
    qty: 1,
    unit: 'Unit',
    rate: 26000,
    image: DEFAULT_IMAGES.foosball
  },
  foosball2: {
    code: '2B',
    name: 'Commercial Foosball Table (Option 2)',
    specs: [
      'Includes: All accessories'
    ],
    note: 'Note : Installation charges are Rs. 3000',
    qty: 1,
    unit: 'Unit',
    rate: 38000,
    image: DEFAULT_IMAGES.foosball
  },
  airhockey: {
    code: '3',
    name: 'Commercial Air Hockey Table (Fully Electrical)',
    specs: [
      'Includes: All accessories'
    ],
    note: 'Note : Installation charges are Rs. 8000',
    qty: 1,
    unit: 'Unit',
    rate: 68000,
    image: DEFAULT_IMAGES.airhockey
  },
  tt: {
    code: '4',
    name: 'Table Tennis Table (Metco Club DX KTR)',
    specs: [
      'Model:GenuineMetco ClubDXKTR(Official Tournament Standard)',
      'Includes: All accessories'
    ],
    note: 'Note : Installation charges are Rs. 3000',
    qty: 1,
    unit: 'Unit',
    rate: 22000,
    image: DEFAULT_IMAGES.tabletennis
  },
  treadmill: {
    code: '5',
    name: 'Commercial Heavy Duty Motorized AC Treadmill',
    specs: [
      'Motor: 4.0 HP AC Continuous (8.0 HP Peak)',
      'Running Area: 60 x 22 Inches with Orthopedic Belt',
      'Display: Touch LED Console with Speed, Distance, Calories, Pulse, Incline'
    ],
    note: 'Note : Free on-site installation included',
    qty: 1,
    unit: 'Unit',
    rate: 145000,
    image: DEFAULT_IMAGES.treadmill
  },
  crossfit: {
    code: '6',
    name: 'Multi-Functional CrossFit Rig & Bumper Plates Setup',
    specs: [
      'Heavy-duty 3x3 inch 11-gauge steel uprights',
      'Includes: J-Cups, Spotter Arms, Monkey Bar ladder, 150kg Olympic Rubber Plates'
    ],
    note: 'Note : Installation charges are Rs. 5000',
    qty: 1,
    unit: 'Set',
    rate: 125000,
    image: DEFAULT_IMAGES.crossfit
  }
};

// Application State
const state = {
  doc: {
    title: 'INVOICE CUM ESTIMATE',
    number: 'GT/2026-27/087',
    date: '24/08/2026',
    category: 'Commercial Sports Setup',
    placeOfSupply: 'Uttar Pradesh (09)',
    validity: '15 Days from Date of Issue'
  },
  firm: {
    name: 'GANPATI TRADING',
    sub: 'KROSFITSPORTS&ATHLETICS / GYMSCAPE',
    address: '2-ALalbagh,Naza Market Road, Opposite NoveltyCinemaHall, Hazratganj, Lucknow, U.P. - 226001',
    prop: 'Contact: Rishabh Bhatia (Prop.)',
    mobile: 'Mobile: +91-9696422319',
    email: 'Email: bhatiatrax@gmail.com, rishabhbhatia91@gmail.com',
    gstin: '09BZIPB3705K1ZD',
    state: 'Uttar Pradesh (Code: 09)'
  },
  client: {
    name: 'Mr. Shreyas Bhatia',
    address: 'Kanpur, Uttar Pradesh',
    contact: '+91-XXXXXXXXXX',
    gstin: 'Unregistered / 09 (U.P.)'
  },
  supply: {
    type: 'Sports & Gaming Equipment',
    deliveryMode: 'Dedicated Road Transport',
    paymentTerms: 'Direct Bank Transfer / UPI'
  },
  items: [
    { ...CATALOG_PRESETS.pool1 },
    { ...CATALOG_PRESETS.pool2 },
    { ...CATALOG_PRESETS.foosball1 },
    { ...CATALOG_PRESETS.foosball2 },
    { ...CATALOG_PRESETS.airhockey },
    { ...CATALOG_PRESETS.tt }
  ],
  footer: {
    bottomNote: 'Note: GST and transportation charges are extra.',
    bank: {
      accName: 'GANPATI TRADING',
      bankName: 'HDFC Bank',
      accNo: '50200064383526',
      ifsc: 'HDFC0000723',
      branch: 'Aminabad, Lucknow',
      accType: 'Current Account'
    },
    terms: [
      'GST @ 18% charged and itemized.',
      'Air Hockey carries 1-Year Electrical Warranty.',
      'Selection options (Option 1 / Option 2) finalized prior to dispatch.',
      'All disputes subject to Lucknow Jurisdiction only.',
      'E. & O.E.'
    ],
    sigTitle: 'For GANPATI TRADING',
    sigSubtitle: 'Authorised Signatory'
  },
  calc: {
    showImages: true,
    showGrandTotal: true,
    applyTax: false,
    taxRate: 18,
    transport: 0,
    discount: 0
  },
  zoom: 1
};

// Indian Currency Formatter (e.g. 105000 -> 1,05,000.00)
function formatINR(val) {
  const num = Number(val) || 0;
  return num.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Convert Number to Words (Indian Format)
function numberToWordsINR(amount) {
  const num = Math.round(Number(amount) || 0);
  if (num === 0) return 'Rupees Zero Only';

  const singleDigits = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const twoDigits = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensMultiple = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function convertTwoDigits(n) {
    if (n < 10) return singleDigits[n];
    if (n >= 10 && n < 20) return twoDigits[n - 10];
    return tensMultiple[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + singleDigits[n % 10] : '');
  }

  function convertThreeDigits(n) {
    let str = '';
    if (n >= 100) {
      str += singleDigits[Math.floor(n / 100)] + ' Hundred ';
      n %= 100;
    }
    if (n > 0) {
      str += convertTwoDigits(n);
    }
    return str.trim();
  }

  let crore = Math.floor(num / 10000000);
  let remainder = num % 10000000;
  let lakh = Math.floor(remainder / 100000);
  remainder = remainder % 100000;
  let thousand = Math.floor(remainder / 1000);
  let hundredRemainder = remainder % 1000;

  let words = 'Rupees ';
  if (crore > 0) words += convertTwoDigits(crore) + ' Crore ';
  if (lakh > 0) words += convertTwoDigits(lakh) + ' Lakh ';
  if (thousand > 0) words += convertTwoDigits(thousand) + ' Thousand ';
  if (hundredRemainder > 0) words += convertThreeDigits(hundredRemainder) + ' ';

  return words.trim() + ' Only';
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  setupEventListeners();
  setupAccordion();
  loadSavedQuoteFromStorage();
  renderAll();
});

// Setup DOM Event Listeners
function setupEventListeners() {
  // Input Bindings for Metadata
  bindInput('input-doc-title', (val) => { state.doc.title = val; renderDocHeader(); });
  bindInput('input-doc-number', (val) => { state.doc.number = val; renderDocHeader(); });
  bindInput('input-doc-date', (val) => { state.doc.date = val; renderDocHeader(); });
  bindInput('input-doc-category', (val) => { state.doc.category = val; renderDocHeader(); });
  bindInput('input-doc-pos', (val) => { state.doc.placeOfSupply = val; renderDocHeader(); });
  bindInput('input-doc-validity', (val) => { state.doc.validity = val; renderSupplyReference(); });

  // Firm Info
  bindInput('input-firm-name', (val) => { state.firm.name = val; renderFirmDetails(); });
  bindInput('input-firm-sub', (val) => { state.firm.sub = val; renderFirmDetails(); });
  bindInput('input-firm-address', (val) => { state.firm.address = val; renderFirmDetails(); });
  bindInput('input-firm-prop', (val) => { state.firm.prop = val; renderFirmDetails(); });
  bindInput('input-firm-mobile', (val) => { state.firm.mobile = val; renderFirmDetails(); });
  bindInput('input-firm-email', (val) => { state.firm.email = val; renderFirmDetails(); });
  bindInput('input-firm-gstin', (val) => { state.firm.gstin = val; renderFirmDetails(); });
  bindInput('input-firm-state', (val) => { state.firm.state = val; renderFirmDetails(); });

  // Client Info
  bindInput('input-client-name', (val) => { state.client.name = val; renderClientDetails(); });
  bindInput('input-client-address', (val) => { state.client.address = val; renderClientDetails(); });
  bindInput('input-client-contact', (val) => { state.client.contact = val; renderClientDetails(); });
  bindInput('input-client-gstin', (val) => { state.client.gstin = val; renderClientDetails(); });

  // Supply Reference
  bindInput('input-supply-type', (val) => { state.supply.type = val; renderSupplyReference(); });
  bindInput('input-delivery-mode', (val) => { state.supply.deliveryMode = val; renderSupplyReference(); });
  bindInput('input-payment-terms', (val) => { state.supply.paymentTerms = val; renderSupplyReference(); });

  // Footer & Bank Details
  bindInput('input-bottom-note', (val) => { state.footer.bottomNote = val; renderBottomNote(); });
  bindInput('input-bank-accname', (val) => { state.footer.bank.accName = val; renderBankDetails(); });
  bindInput('input-bank-name', (val) => { state.footer.bank.bankName = val; renderBankDetails(); });
  bindInput('input-bank-accno', (val) => { state.footer.bank.accNo = val; renderBankDetails(); });
  bindInput('input-bank-ifsc', (val) => { state.footer.bank.ifsc = val; renderBankDetails(); });
  bindInput('input-bank-branch', (val) => { state.footer.bank.branch = val; renderBankDetails(); });
  bindInput('input-bank-acctype', (val) => { state.footer.bank.accType = val; renderBankDetails(); });
  bindInput('input-terms', (val) => {
    state.footer.terms = val.split('\n').filter(t => t.trim().length > 0);
    renderTerms();
  });
  bindInput('input-signatory-title', (val) => { state.footer.sigTitle = val; renderSignatory(); });
  bindInput('input-signatory-subtitle', (val) => { state.footer.sigSubtitle = val; renderSignatory(); });

  // Master Image Column Toggle
  const toggleImagesEl = document.getElementById('toggle-show-images');
  if (toggleImagesEl) {
    toggleImagesEl.addEventListener('change', (e) => {
      state.calc.showImages = e.target.checked;
      renderTableHeader();
      renderViewTable();
      autosaveToStorage();
    });
  }

  // Calculations & Summary Toggles
  document.getElementById('toggle-show-grandtotal').addEventListener('change', (e) => {
    state.calc.showGrandTotal = e.target.checked;
    renderTotals();
  });
  document.getElementById('toggle-apply-tax').addEventListener('change', (e) => {
    state.calc.applyTax = e.target.checked;
    renderTotals();
  });
  bindInput('input-transport-charges', (val) => {
    state.calc.transport = Number(val) || 0;
    renderTotals();
  });
  bindInput('input-discount-charges', (val) => {
    state.calc.discount = Number(val) || 0;
    renderTotals();
  });

  // Action Buttons
  document.getElementById('btn-add-item').addEventListener('click', () => {
    addNewItem();
  });
  document.getElementById('btn-clear-items').addEventListener('click', () => {
    if (confirm('Clear all quotation items?')) {
      state.items = [];
      renderItems();
    }
  });

  // Presets Dropdown
  const presetBtn = document.getElementById('btn-item-presets-menu');
  const presetMenu = document.getElementById('preset-menu');
  presetBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    presetMenu.classList.toggle('show');
  });
  document.addEventListener('click', () => {
    presetMenu.classList.remove('show');
  });

  document.querySelectorAll('.preset-opt').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const presetKey = e.target.getAttribute('data-preset');
      if (CATALOG_PRESETS[presetKey]) {
        state.items.push(JSON.parse(JSON.stringify(CATALOG_PRESETS[presetKey])));
        renderItems();
      }
    });
  });

  // Header Actions
  document.getElementById('btn-load-preset').addEventListener('click', () => {
    if (confirm('Reload the PDF sample estimate items and firm details?')) {
      resetToPDFSample();
    }
  });
  document.getElementById('btn-save-quote').addEventListener('click', saveCurrentQuote);
  document.getElementById('btn-saved-list').addEventListener('click', showSavedDraftsModal);
  document.getElementById('btn-close-modal').addEventListener('click', hideSavedDraftsModal);
  document.getElementById('btn-export-json').addEventListener('click', exportJSONBackup);
  document.getElementById('input-import-json').addEventListener('change', importJSONBackup);

  document.getElementById('btn-whatsapp').addEventListener('click', openWhatsAppModal);
  document.getElementById('btn-close-wa-modal').addEventListener('click', () => {
    document.getElementById('whatsapp-modal').style.display = 'none';
  });
  document.getElementById('btn-copy-wa').addEventListener('click', copyWhatsAppText);
  document.getElementById('btn-open-wa').addEventListener('click', openWhatsAppDirect);

  document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
  });
  document.getElementById('btn-download-pdf').addEventListener('click', generatePDF);

  // Zoom Controls
  document.getElementById('btn-zoom-in').addEventListener('click', () => setZoom(state.zoom + 0.1));
  document.getElementById('btn-zoom-out').addEventListener('click', () => setZoom(state.zoom - 0.1));
  document.getElementById('btn-zoom-fit').addEventListener('click', fitZoomToWidth);
}

function bindInput(elementId, callback) {
  const el = document.getElementById(elementId);
  if (el) {
    el.addEventListener('input', (e) => {
      callback(e.target.value);
      autosaveToStorage();
    });
  }
}

// Accordion Collapsing
function setupAccordion() {
  document.querySelectorAll('.accordion-header').forEach((hdr) => {
    hdr.addEventListener('click', () => {
      const parent = hdr.parentElement;
      parent.classList.toggle('active');
    });
  });
}

// Zoom Handler
function setZoom(val) {
  state.zoom = Math.max(0.4, Math.min(1.8, val));
  const doc = document.getElementById('printable-document');
  doc.style.transform = `scale(${state.zoom})`;
  document.getElementById('zoom-level-text').textContent = `${Math.round(state.zoom * 100)}%`;
}

function fitZoomToWidth() {
  const viewportWidth = document.getElementById('document-viewport').clientWidth;
  const targetScale = (viewportWidth - 60) / 794;
  setZoom(targetScale);
}

// Item Management
function addNewItem() {
  const nextNum = state.items.length + 1;
  state.items.push({
    code: String(nextNum),
    name: 'New Sports / Fitness Item',
    specs: ['Dimensions: Standard', 'Includes: All accessories'],
    note: 'Note : Installation charges extra',
    qty: 1,
    unit: 'Unit',
    rate: 0,
    image: '' // Optional / empty by default for new items
  });
  renderItems();
}

function removeItem(index) {
  state.items.splice(index, 1);
  renderItems();
}

function duplicateItem(index) {
  const item = JSON.parse(JSON.stringify(state.items[index]));
  item.code = item.code + '-copy';
  state.items.splice(index + 1, 0, item);
  renderItems();
}

function moveItem(index, dir) {
  const target = index + dir;
  if (target < 0 || target >= state.items.length) return;
  const temp = state.items[index];
  state.items[index] = state.items[target];
  state.items[target] = temp;
  renderItems();
}

// Render All Components
function renderAll() {
  renderDocHeader();
  renderFirmDetails();
  renderClientDetails();
  renderSupplyReference();
  renderTableHeader();
  renderItems();
  renderBottomNote();
  renderBankDetails();
  renderTerms();
  renderSignatory();
  renderTotals();
  updateSavedDraftsCount();
  if (window.lucide) lucide.createIcons();
}

function renderDocHeader() {
  document.getElementById('view-doc-title').textContent = state.doc.title;
  document.getElementById('view-doc-number').textContent = state.doc.number;
  document.getElementById('view-doc-date').textContent = state.doc.date;
  document.getElementById('view-doc-category').textContent = state.doc.category;
  document.getElementById('view-doc-pos').textContent = state.doc.placeOfSupply;
}

function renderFirmDetails() {
  document.getElementById('view-firm-name').textContent = state.firm.name;
  document.getElementById('view-firm-sub').textContent = state.firm.sub;
  document.getElementById('view-firm-address').textContent = state.firm.address;
  document.getElementById('view-firm-prop').textContent = state.firm.prop;
  document.getElementById('view-firm-mobile').textContent = state.firm.mobile;
  document.getElementById('view-firm-email').textContent = state.firm.email;
  document.getElementById('view-firm-gstin').textContent = state.firm.gstin;
  document.getElementById('view-firm-state').textContent = state.firm.state;
}

function renderClientDetails() {
  document.getElementById('view-client-name').textContent = state.client.name;
  document.getElementById('view-client-address').textContent = state.client.address;
  document.getElementById('view-client-contact').textContent = state.client.contact;
  document.getElementById('view-client-gstin').textContent = state.client.gstin;
}

function renderSupplyReference() {
  document.getElementById('view-supply-type').textContent = state.supply.type;
  document.getElementById('view-delivery-mode').textContent = state.supply.deliveryMode;
  document.getElementById('view-payment-terms').textContent = state.supply.paymentTerms;
  document.getElementById('view-doc-validity').textContent = state.doc.validity;
}

function renderTableHeader() {
  const table = document.getElementById('view-items-table');
  const thead = table.querySelector('thead');
  const showImg = state.calc.showImages !== false;

  thead.innerHTML = `
    <tr>
      <th class="col-hash">#</th>
      ${showImg ? '<th class="col-img">PRODUCT IMAGE</th>' : ''}
      <th class="col-desc">ITEM DESCRIPTION & SPECIFICATIONS</th>
      <th class="col-qty">QTY</th>
      <th class="col-rate">RATE (₹)</th>
      <th class="col-amount">AMOUNT (₹)</th>
    </tr>
  `;
}

function renderBottomNote() {
  document.getElementById('view-bottom-note').textContent = state.footer.bottomNote;
}

function renderBankDetails() {
  document.getElementById('view-bank-accname').textContent = state.footer.bank.accName;
  document.getElementById('view-bank-name').textContent = state.footer.bank.bankName;
  document.getElementById('view-bank-accno').textContent = state.footer.bank.accNo;
  document.getElementById('view-bank-ifsc').textContent = state.footer.bank.ifsc;
  document.getElementById('view-bank-branch').textContent = state.footer.bank.branch;
  document.getElementById('view-bank-acctype').textContent = state.footer.bank.accType;
}

function renderTerms() {
  const listEl = document.getElementById('view-terms-list');
  listEl.innerHTML = '';
  state.footer.terms.forEach((term) => {
    const li = document.createElement('li');
    li.textContent = term;
    listEl.appendChild(li);
  });
}

function renderSignatory() {
  document.getElementById('view-sig-title').textContent = state.footer.sigTitle;
  document.getElementById('view-sig-subtitle').textContent = state.footer.sigSubtitle;
}

// Render Line Items in both Editor and View Document
function renderItems() {
  document.getElementById('items-count-badge').textContent = state.items.length;
  
  // Render In Left Editor Pane
  const editorContainer = document.getElementById('editor-items-container');
  editorContainer.innerHTML = '';

  state.items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';

    const hasImg = item.image && item.image.trim().length > 0;
    
    // Clean Image Box HTML
    let imageBoxHtml = '';
    if (hasImg) {
      imageBoxHtml = `
        <div class="item-image-preview-box">
          <img src="${item.image}" class="item-thumb-preview" id="thumb-preview-${index}" alt="Preview" />
          <div class="item-img-controls">
            <label class="img-btn-label">
              Change Image
              <input type="file" accept="image/*" style="display:none;" onchange="handleImageUpload(event, ${index})" />
            </label>
            <button type="button" class="btn-remove-img" onclick="removeImage(${index})">
              Remove Image
            </button>
          </div>
        </div>
      `;
    } else {
      imageBoxHtml = `
        <div class="item-image-empty-box">
          <span class="no-img-text"><i data-lucide="image-off" class="icon-tiny"></i> No image attached (Optional)</span>
          <label class="btn btn-sm btn-secondary cursor-pointer">
            <i data-lucide="image-plus"></i> Add Image
            <input type="file" accept="image/*" style="display:none;" onchange="handleImageUpload(event, ${index})" />
          </label>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="item-card-header">
        <div class="item-badge-row">
          <input type="text" class="form-control item-code-input" value="${item.code || ''}" placeholder="#" data-index="${index}" data-field="code" />
          <span class="item-order-title">Item ${index + 1}</span>
        </div>
        <div class="item-card-tools">
          <button class="btn-icon" onclick="moveItem(${index}, -1)" title="Move Up" ${index === 0 ? 'disabled' : ''}><i data-lucide="arrow-up"></i></button>
          <button class="btn-icon" onclick="moveItem(${index}, 1)" title="Move Down" ${index === state.items.length - 1 ? 'disabled' : ''}><i data-lucide="arrow-down"></i></button>
          <button class="btn-icon" onclick="duplicateItem(${index})" title="Duplicate"><i data-lucide="copy"></i></button>
          <button class="btn-icon btn-danger-outline" onclick="removeItem(${index})" title="Remove"><i data-lucide="trash"></i></button>
        </div>
      </div>
      
      <div class="form-group">
        <label>Product / Equipment Name</label>
        <input type="text" class="form-control item-name-field" value="${item.name || ''}" data-index="${index}" data-field="name" />
      </div>

      <div class="form-group">
        <label>Specifications (Bullet lines)</label>
        <textarea class="form-control item-specs-field" rows="3" data-index="${index}" data-field="specs">${(item.specs || []).join('\n')}</textarea>
      </div>

      <div class="form-group">
        <label>Installation / Highlight Note</label>
        <input type="text" class="form-control" value="${item.note || ''}" placeholder="e.g. Note : Installation charges are Rs. 3000" data-index="${index}" data-field="note" />
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Qty & Unit</label>
          <div style="display:flex; gap: 4px;">
            <input type="number" class="form-control" style="width: 60px;" value="${item.qty || 1}" min="1" data-index="${index}" data-field="qty" />
            <input type="text" class="form-control" value="${item.unit || 'Unit'}" placeholder="Unit" data-index="${index}" data-field="unit" />
          </div>
        </div>
        <div class="form-group">
          <label>Rate (₹)</label>
          <input type="number" class="form-control" value="${item.rate || 0}" min="0" data-index="${index}" data-field="rate" />
        </div>
      </div>

      <div class="form-group">
        <label>Product Photo (Optional)</label>
        ${imageBoxHtml}
      </div>
    `;

    editorContainer.appendChild(card);
  });

  // Attach dynamic input listeners on editor cards
  editorContainer.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      const field = e.target.getAttribute('data-field');
      if (isNaN(idx) || !state.items[idx]) return;

      if (field === 'specs') {
        state.items[idx].specs = e.target.value.split('\n').filter(s => s.trim().length > 0);
      } else if (field === 'qty') {
        state.items[idx].qty = Number(e.target.value) || 1;
      } else if (field === 'rate') {
        state.items[idx].rate = Number(e.target.value) || 0;
      } else {
        state.items[idx][field] = e.target.value;
      }
      renderViewTable();
      renderTotals();
      autosaveToStorage();
    });
  });

  renderViewTable();
  renderTotals();
  if (window.lucide) lucide.createIcons();
}

// Render Document View Table
function renderViewTable() {
  const tbody = document.getElementById('view-items-tbody');
  tbody.innerHTML = '';
  const showImgCol = state.calc.showImages !== false;

  state.items.forEach((item) => {
    const tr = document.createElement('tr');
    
    // Specifications list HTML
    const specsHtml = (item.specs && item.specs.length > 0)
      ? `<ul class="table-specs-list">${item.specs.map(s => `<li>${formatSpecLine(s)}</li>`).join('')}</ul>`
      : '';

    // Installation note badge HTML
    const noteHtml = item.note ? `<div class="table-install-note">${item.note}</div>` : '';

    const amount = (item.qty || 1) * (item.rate || 0);

    // Optional image column cell
    let imgTdHtml = '';
    if (showImgCol) {
      if (item.image && item.image.trim().length > 0) {
        imgTdHtml = `
          <td class="col-img">
            <div class="table-img-wrap">
              <img src="${item.image}" alt="Product" />
            </div>
          </td>
        `;
      } else {
        imgTdHtml = `
          <td class="col-img">
            <div class="table-img-wrap table-img-empty">
              <span class="no-img-dash">—</span>
            </div>
          </td>
        `;
      }
    }

    tr.innerHTML = `
      <td class="col-hash item-row-code">${item.code || ''}</td>
      ${imgTdHtml}
      <td class="col-desc">
        <div class="table-item-title">${item.name || ''}</div>
        ${specsHtml}
        ${noteHtml}
      </td>
      <td class="col-qty">${item.qty || 1} ${item.unit || 'Unit'}</td>
      <td class="col-rate">${formatINR(item.rate)}</td>
      <td class="col-amount">${formatINR(amount)}</td>
    `;

    tbody.appendChild(tr);
  });
}

// Format bold prefixes in bullet specs (like Dimensions:, Bed & Frame:)
function formatSpecLine(text) {
  if (text.includes(':')) {
    const parts = text.split(':');
    const prefix = parts.shift();
    return `<strong>${prefix}:</strong> ${parts.join(':')}`;
  }
  return text;
}

// Image upload handler
window.handleImageUpload = function(event, itemIndex) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    state.items[itemIndex].image = e.target.result;
    renderItems();
    autosaveToStorage();
  };
  reader.readAsDataURL(file);
};

// Remove Image from an item
window.removeImage = function(itemIndex) {
  if (state.items[itemIndex]) {
    state.items[itemIndex].image = '';
    renderItems();
    autosaveToStorage();
  }
};

// Calculations & Totals
function renderTotals() {
  let subtotal = 0;
  state.items.forEach(i => {
    subtotal += (i.qty || 1) * (i.rate || 0);
  });

  const tax = state.calc.applyTax ? (subtotal * (state.calc.taxRate / 100)) : 0;
  const grandTotal = subtotal + tax + state.calc.transport - state.calc.discount;

  const card = document.getElementById('view-totals-summary-card');
  if (!state.calc.showGrandTotal) {
    card.style.display = 'none';
    return;
  }
  card.style.display = 'flex';

  document.getElementById('view-subtotal-val').textContent = `₹ ${formatINR(subtotal)}`;
  
  const taxRow = document.getElementById('view-tax-row');
  if (state.calc.applyTax) {
    taxRow.style.display = 'flex';
    document.getElementById('view-tax-val').textContent = `₹ ${formatINR(tax)}`;
  } else {
    taxRow.style.display = 'none';
  }

  const transportRow = document.getElementById('view-transport-row');
  if (state.calc.transport > 0) {
    transportRow.style.display = 'flex';
    document.getElementById('view-transport-val').textContent = `₹ ${formatINR(state.calc.transport)}`;
  } else {
    transportRow.style.display = 'none';
  }

  const discountRow = document.getElementById('view-discount-row');
  if (state.calc.discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('view-discount-val').textContent = `- ₹ ${formatINR(state.calc.discount)}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('view-grandtotal-val').textContent = `₹ ${formatINR(grandTotal)}`;
  document.getElementById('view-amount-words').textContent = numberToWordsINR(grandTotal);
}

// Reset to initial PDF sample
function resetToPDFSample() {
  state.doc = {
    title: 'INVOICE CUM ESTIMATE',
    number: 'GT/2026-27/087',
    date: '24/08/2026',
    category: 'Commercial Sports Setup',
    placeOfSupply: 'Uttar Pradesh (09)',
    validity: '15 Days from Date of Issue'
  };
  state.firm = {
    name: 'GANPATI TRADING',
    sub: 'KROSFITSPORTS&ATHLETICS / GYMSCAPE',
    address: '2-ALalbagh,Naza Market Road, Opposite NoveltyCinemaHall, Hazratganj, Lucknow, U.P. - 226001',
    prop: 'Contact: Rishabh Bhatia (Prop.)',
    mobile: 'Mobile: +91-9696422319',
    email: 'Email: bhatiatrax@gmail.com, rishabhbhatia91@gmail.com',
    gstin: '09BZIPB3705K1ZD',
    state: 'Uttar Pradesh (Code: 09)'
  };
  state.client = {
    name: 'Mr. Shreyas Bhatia',
    address: 'Kanpur, Uttar Pradesh',
    contact: '+91-XXXXXXXXXX',
    gstin: 'Unregistered / 09 (U.P.)'
  };
  state.items = [
    { ...CATALOG_PRESETS.pool1 },
    { ...CATALOG_PRESETS.pool2 },
    { ...CATALOG_PRESETS.foosball1 },
    { ...CATALOG_PRESETS.foosball2 },
    { ...CATALOG_PRESETS.airhockey },
    { ...CATALOG_PRESETS.tt }
  ];
  state.footer.bottomNote = 'Note: GST and transportation charges are extra.';
  state.calc.showImages = true;
  state.calc.applyTax = false;
  state.calc.showGrandTotal = true;
  state.calc.transport = 0;
  state.calc.discount = 0;

  // Sync back into input fields
  syncInputsFromState();
  renderAll();
  autosaveToStorage();
}

// LocalStorage Auto-save
function autosaveToStorage() {
  localStorage.setItem('gymscape_quote_current', JSON.stringify(state));
}

function loadSavedQuoteFromStorage() {
  const saved = localStorage.getItem('gymscape_quote_current');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      syncInputsFromState();
    } catch (e) {
      console.error('Error loading saved state:', e);
    }
  }
}

function syncInputsFromState() {
  document.getElementById('input-doc-title').value = state.doc.title || '';
  document.getElementById('input-doc-number').value = state.doc.number || '';
  document.getElementById('input-doc-date').value = state.doc.date || '';
  document.getElementById('input-doc-category').value = state.doc.category || '';
  document.getElementById('input-doc-pos').value = state.doc.placeOfSupply || '';
  document.getElementById('input-doc-validity').value = state.doc.validity || '';

  document.getElementById('input-firm-name').value = state.firm.name || '';
  document.getElementById('input-firm-sub').value = state.firm.sub || '';
  document.getElementById('input-firm-address').value = state.firm.address || '';
  document.getElementById('input-firm-prop').value = state.firm.prop || '';
  document.getElementById('input-firm-mobile').value = state.firm.mobile || '';
  document.getElementById('input-firm-email').value = state.firm.email || '';
  document.getElementById('input-firm-gstin').value = state.firm.gstin || '';
  document.getElementById('input-firm-state').value = state.firm.state || '';

  document.getElementById('input-client-name').value = state.client.name || '';
  document.getElementById('input-client-address').value = state.client.address || '';
  document.getElementById('input-client-contact').value = state.client.contact || '';
  document.getElementById('input-client-gstin').value = state.client.gstin || '';

  document.getElementById('input-supply-type').value = state.supply.type || '';
  document.getElementById('input-delivery-mode').value = state.supply.deliveryMode || '';
  document.getElementById('input-payment-terms').value = state.supply.paymentTerms || '';

  document.getElementById('input-bottom-note').value = state.footer.bottomNote || '';
  document.getElementById('input-bank-accname').value = state.footer.bank.accName || '';
  document.getElementById('input-bank-name').value = state.footer.bank.bankName || '';
  document.getElementById('input-bank-accno').value = state.footer.bank.accNo || '';
  document.getElementById('input-bank-ifsc').value = state.footer.bank.ifsc || '';
  document.getElementById('input-bank-branch').value = state.footer.bank.branch || '';
  document.getElementById('input-bank-acctype').value = state.footer.bank.accType || '';
  document.getElementById('input-terms').value = (state.footer.terms || []).join('\n');
  document.getElementById('input-signatory-title').value = state.footer.sigTitle || '';
  document.getElementById('input-signatory-subtitle').value = state.footer.sigSubtitle || '';

  const showImgEl = document.getElementById('toggle-show-images');
  if (showImgEl) showImgEl.checked = state.calc.showImages !== false;

  document.getElementById('toggle-show-grandtotal').checked = !!state.calc.showGrandTotal;
  document.getElementById('toggle-apply-tax').checked = !!state.calc.applyTax;
  document.getElementById('input-transport-charges').value = state.calc.transport || 0;
  document.getElementById('input-discount-charges').value = state.calc.discount || 0;
}

// Saved Quotation Manager
function getSavedDrafts() {
  try {
    return JSON.parse(localStorage.getItem('gymscape_saved_drafts') || '[]');
  } catch (e) {
    return [];
  }
}

function updateSavedDraftsCount() {
  const drafts = getSavedDrafts();
  const countEl = document.getElementById('saved-count');
  if (countEl) countEl.textContent = drafts.length;
}

function saveCurrentQuote() {
  const quoteName = prompt('Enter a title or client label for this quotation draft:', `${state.client.name || 'Client'} - ${state.doc.number}`);
  if (!quoteName) return;

  const drafts = getSavedDrafts();
  drafts.unshift({
    id: Date.now().toString(),
    name: quoteName,
    savedAt: new Date().toLocaleString('en-IN'),
    data: JSON.parse(JSON.stringify(state))
  });

  localStorage.setItem('gymscape_saved_drafts', JSON.stringify(drafts));
  updateSavedDraftsCount();
  alert('Quotation saved successfully in your local drafts!');
}

function showSavedDraftsModal() {
  const drafts = getSavedDrafts();
  const listContainer = document.getElementById('saved-drafts-list');
  listContainer.innerHTML = '';

  if (drafts.length === 0) {
    listContainer.innerHTML = '<p class="text-muted" style="text-align:center; padding: 2rem;">No saved drafts found yet. Click "Save Quote" to store versions.</p>';
  } else {
    drafts.forEach((draft, idx) => {
      const row = document.createElement('div');
      row.className = 'draft-item-row';
      row.innerHTML = `
        <div class="draft-info">
          <h4>${draft.name}</h4>
          <p>Saved on ${draft.savedAt} • ${draft.data.items?.length || 0} items</p>
        </div>
        <div class="draft-actions">
          <button class="btn btn-sm btn-primary" onclick="loadDraft('${draft.id}')"><i data-lucide="folder-open"></i> Load</button>
          <button class="btn btn-sm btn-danger-outline" onclick="deleteDraft('${draft.id}')"><i data-lucide="trash"></i></button>
        </div>
      `;
      listContainer.appendChild(row);
    });
  }

  document.getElementById('saved-modal').style.display = 'flex';
  if (window.lucide) lucide.createIcons();
}

function hideSavedDraftsModal() {
  document.getElementById('saved-modal').style.display = 'none';
}

window.loadDraft = function(id) {
  const drafts = getSavedDrafts();
  const found = drafts.find(d => d.id === id);
  if (found) {
    Object.assign(state, JSON.parse(JSON.stringify(found.data)));
    syncInputsFromState();
    renderAll();
    autosaveToStorage();
    hideSavedDraftsModal();
  }
};

window.deleteDraft = function(id) {
  if (confirm('Delete this saved quotation?')) {
    let drafts = getSavedDrafts();
    drafts = drafts.filter(d => d.id !== id);
    localStorage.setItem('gymscape_saved_drafts', JSON.stringify(drafts));
    updateSavedDraftsCount();
    showSavedDraftsModal();
  }
};

// JSON Backup & Restore
function exportJSONBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Quotation_${state.doc.number.replace(/\//g, '_')}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importJSONBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedState = JSON.parse(e.target.result);
      Object.assign(state, importedState);
      syncInputsFromState();
      renderAll();
      autosaveToStorage();
      hideSavedDraftsModal();
      alert('Quotation imported successfully!');
    } catch (err) {
      alert('Invalid quotation JSON file format.');
    }
  };
  reader.readAsText(file);
}

// WhatsApp Text Generator
function generateWhatsAppSummary() {
  let subtotal = 0;
  state.items.forEach(i => subtotal += (i.qty || 1) * (i.rate || 0));
  const tax = state.calc.applyTax ? (subtotal * 0.18) : 0;
  const grandTotal = subtotal + tax + state.calc.transport - state.calc.discount;

  let text = `*${state.firm.name}* (${state.firm.sub})\n`;
  text += `Estimate No: *${state.doc.number}* | Date: ${state.doc.date}\n`;
  text += `Quoted to: *${state.client.name}* (${state.client.address})\n`;
  text += `------------------------------------\n`;
  text += `*ITEMS & SPECIFICATIONS:*\n`;

  state.items.forEach((item, idx) => {
    text += `\n*${item.code || (idx + 1)}. ${item.name}*\n`;
    if (item.specs && item.specs.length > 0) {
      item.specs.forEach(s => text += `  • ${s}\n`);
    }
    if (item.note) text += `  _${item.note}_\n`;
    text += `  Qty: ${item.qty || 1} ${item.unit || 'Unit'} @ ₹${formatINR(item.rate)} = *₹${formatINR((item.qty || 1) * (item.rate || 0))}*\n`;
  });

  text += `------------------------------------\n`;
  text += `*Items Total:* ₹${formatINR(subtotal)}\n`;
  if (state.calc.applyTax) text += `*GST (18%):* ₹${formatINR(tax)}\n`;
  if (state.calc.transport > 0) text += `*Transport/Freight:* ₹${formatINR(state.calc.transport)}\n`;
  if (state.calc.discount > 0) text += `*Discount:* -₹${formatINR(state.calc.discount)}\n`;
  text += `*Grand Total:* ₹${formatINR(grandTotal)}\n`;
  text += `_(${numberToWordsINR(grandTotal)})_\n\n`;

  text += `*Payment Details:*\n`;
  text += `A/C Name: ${state.footer.bank.accName}\n`;
  text += `Bank: ${state.footer.bank.bankName} | Branch: ${state.footer.bank.branch}\n`;
  text += `A/C No: ${state.footer.bank.accNo}\n`;
  text += `IFSC: ${state.footer.bank.ifsc}\n\n`;
  text += `_Contact: ${state.firm.prop} - ${state.firm.mobile}_\n`;

  return text;
}

function openWhatsAppModal() {
  const text = generateWhatsAppSummary();
  document.getElementById('wa-text-area').value = text;
  document.getElementById('whatsapp-modal').style.display = 'flex';
}

function copyWhatsAppText() {
  const textarea = document.getElementById('wa-text-area');
  textarea.select();
  navigator.clipboard.writeText(textarea.value).then(() => {
    alert('WhatsApp quotation text copied to clipboard!');
  });
}

function openWhatsAppDirect() {
  const text = encodeURIComponent(document.getElementById('wa-text-area').value);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// PDF Generation using html2pdf
function generatePDF() {
  const element = document.getElementById('printable-document');
  const opt = {
    margin: 0,
    filename: `Estimate_${state.doc.number.replace(/[\/\\]/g, '_')}_${state.client.name.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const originalTransform = element.style.transform;
  element.style.transform = 'none';

  html2pdf().set(opt).from(element).save().then(() => {
    element.style.transform = originalTransform;
  }).catch((err) => {
    console.error('PDF Generation error:', err);
    element.style.transform = originalTransform;
    window.print();
  });
}

// Expose helper functions on window for inline handlers
window.moveItem = moveItem;
window.duplicateItem = duplicateItem;
window.removeItem = removeItem;
window.removeImage = removeImage;
window.setZoom = setZoom;
