// =====================================================================
//  GAYLE'S FLOWER SHOP — products, options, prices and the cart
//  Used by index.html, gayles-flower-shop.html and shop.html
// =====================================================================

// ===== EDIT YOUR PRODUCTS HERE =====
// price:   starting price in pesos (a number). Use null to show "Message for price".
// image:   path or URL to the photo (leave "" to show a placeholder)
// badge:   short label on the photo, e.g. "Bestseller" or "New" (leave "" for none)
// desc:    shown when a customer opens the item
// options: groups of choices shown when a customer opens the item
//   type "one"  = customer picks exactly one (the first choice is selected by default)
//   type "many" = optional extras, customer can pick any
//   each choice: { label: "...", add: 300 }  ← pesos added to the price (0 = no extra)
//
// ⚠ SAMPLE PRICES — replace every price and "add" amount with your real prices.

const GIFT_ADDONS = {
  name: "Add a gift", type: "many", choices: [
    { label: "Chocolate box",    add: 350 },
    { label: "Small teddy bear", add: 450 },
    { label: "Balloon",          add: 250 },
    { label: "Greeting card",    add: 50 }
  ]
};
// Looks for bouquets: each choice has a photo so customers can see how it will look.
// To add a look, add a line here with its own photo, then it can be used below.
const LOOKS = {
  white:    { label: "Classic white wrap",       image: "images/classic-red-roses.jpg",    add: 0 },
  cream:    { label: "Cream wrap, plum ribbon",  image: "images/red-and-blush-roses.jpg",  add: 0 },
  pink:     { label: "Soft pink wrap",           image: "images/pink-blush-bouquet.jpg",   add: 0 },
  burlap:   { label: "Dusty pink & burlap wrap", image: "images/red-roses-blush-wrap.jpg", add: 150 },
  handtied: { label: "Hand-tied, pink ribbon",   image: "images/orchid-luxe-bouquet.jpg",  add: 0 }
};
// lookOptions("pink") = all looks, with the pink one first (selected by default)
const lookOptions = first => ({
  name: "Look & wrapping", type: "one",
  choices: [LOOKS[first], ...Object.keys(LOOKS).filter(k => k !== first).map(k => LOOKS[k])]
});

const RIBBON = {
  name: "Extras", type: "many", choices: [
    { label: "Printed ribbon with message", add: 200 }
  ]
};

const PRODUCTS = [
  { cat: "Gift set", name: "Sunflower Love Bear", price: 1500, image: "images/sunflower-teddy-bear.jpg", badge: "Bestseller",
    desc: "Bright sunflowers paired with a sweet gift. Choose the flowers and the gift you want inside.",
    options: [
      { name: "Flowers", type: "one", choices: [
        { label: "3 sunflowers", add: 0 },
        { label: "5 sunflowers", add: 400 },
        { label: "Sunflowers & red roses", add: 600 },
        { label: "Sunflowers & pink roses", add: 600 }
      ]},
      { name: "Gift", type: "one", choices: [
        { label: "Teddy bear", add: 0 },
        { label: "Chocolate box", add: 150 },
        { label: "Teddy bear & chocolates", add: 500 }
      ]},
      { name: "Extras", type: "many", choices: [
        { label: "Balloon", add: 250 },
        { label: "Greeting card", add: 50 }
      ]}
    ]},
  { cat: "Bouquet", name: "Pink Blush Bouquet", price: 1200, image: "images/pink-blush-bouquet.jpg", badge: "",
    desc: "Soft pink blooms wrapped in a romantic blush palette. Sweet, gentle and perfect for someone special.",
    options: [
      lookOptions("pink"),
      { name: "Size", type: "one", choices: [
        { label: "Small (6 stems)", add: 0 },
        { label: "Medium (12 stems)", add: 600 },
        { label: "Large (24 stems)", add: 1500 }
      ]},
      GIFT_ADDONS
    ]},
  { cat: "Bouquet", name: "Classic Red Roses", price: 1500, image: "images/classic-red-roses.jpg", badge: "Bestseller",
    desc: "Timeless red roses, hand-tied and wrapped. The classic way to say I love you.",
    options: [
      lookOptions("white"),
      { name: "Size", type: "one", choices: [
        { label: "6 roses", add: 0 },
        { label: "12 roses", add: 700 },
        { label: "24 roses", add: 1800 }
      ]},
      GIFT_ADDONS
    ]},
  { cat: "Bouquet", name: "Red & Blush Roses", price: 1600, image: "images/red-and-blush-roses.jpg", badge: "",
    desc: "Deep red and blush roses arranged together for a bouquet that is bold and tender at once.",
    options: [
      lookOptions("cream"),
      { name: "Size", type: "one", choices: [
        { label: "6 roses", add: 0 },
        { label: "12 roses", add: 700 },
        { label: "24 roses", add: 1800 }
      ]},
      GIFT_ADDONS
    ]},
  { cat: "Bouquet", name: "Orchid Luxe Bouquet", price: 2500, image: "images/orchid-luxe-bouquet.jpg", badge: "",
    desc: "Elegant orchids styled into a luxe bouquet. Made for milestones and grand gestures.",
    options: [
      lookOptions("handtied"),
      { name: "Orchid color", type: "one", choices: [
        { label: "Purple", add: 0 },
        { label: "White", add: 300 },
        { label: "Pink", add: 300 }
      ]},
      GIFT_ADDONS
    ]},
  { cat: "Standee", name: "Grand Celebration Standee", price: 3500, image: "images/grand-celebration-standee.jpg", badge: "",
    desc: "A tall floral standee for openings, launches and big celebrations. Made to stand out.",
    options: [
      { name: "Height", type: "one", choices: [
        { label: "4 ft", add: 0 },
        { label: "5 ft", add: 1000 },
        { label: "6 ft", add: 2000 }
      ]},
      RIBBON
    ]},
  { cat: "Sympathy", name: "White Daisy Wreath", price: 2800, image: "images/white-daisy-wreath.jpg", badge: "",
    desc: "A serene wreath of white daisies to honor a loved one and offer comfort to the family.",
    options: [
      { name: "Flowers", type: "one", choices: [
        { label: "White daisies", add: 0 },
        { label: "White daisies & chrysanthemums", add: 500 }
      ]},
      { name: "Size", type: "one", choices: [
        { label: "Standard", add: 0 },
        { label: "Large", add: 1200 }
      ]},
      RIBBON
    ]},
  { cat: "Sympathy", name: "Orchid & Anthurium Tribute", price: 4000, image: "images/orchid-and-anthurium-tribute.jpg", badge: "",
    desc: "Graceful orchids and anthuriums arranged as a dignified tribute of sympathy and remembrance.",
    options: [
      { name: "Size", type: "one", choices: [
        { label: "Standard", add: 0 },
        { label: "Grand", add: 1500 }
      ]},
      RIBBON
    ]}
];

// TESTING: every branch sends to the test profile.
// Real links to restore after testing:
//   Cavite:    https://www.facebook.com/groups/351630443651243/user/100063697824285/
//   Imus:      https://www.facebook.com/groups/351630443651243/user/100078109568096/
//   Boni-EDSA: https://www.facebook.com/groups/351630443651243/user/61555185975524/
const TEST_LINK = "https://www.facebook.com/phoebekate.tapales";
const BRANCH_LINKS = {
  "Cavite": TEST_LINK,
  "Imus": TEST_LINK,
  "Boni-EDSA": TEST_LINK
};

// ===== HELPERS (no need to edit below) =====
const TONES = ["#F6C9D4", "#F3DCC8", "#E9B4C3", "#DCE8DF"];
const ICON = '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>';
const $ = id => document.getElementById(id);
const peso = n => "₱" + n.toLocaleString("en-PH");
const media = p => p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : `${ICON}[Catalog photo]`;
const pick = (group, choice) => `${group.name}: ${choice.label}`;

// "From ₱1,500" on cards
function priceLabel(p) {
  if (p.price == null) return "Message for price";
  const extra = (p.options || []).some(g => g.choices.some(c => c.add));
  return (extra ? "From " : "") + peso(unitPrice(p, defaultPicks(p)));
}
// Default choices: the first option of every "pick one" group
function defaultPicks(p) {
  return (p.options || []).filter(g => g.type === "one").map(g => pick(g, g.choices[0]));
}
// Price of one item with the chosen options (null = priced in chat)
function unitPrice(p, picks) {
  if (p.price == null) return null;
  let total = p.price;
  (p.options || []).forEach(g => g.choices.forEach(c => { if (picks.includes(pick(g, c))) total += c.add || 0; }));
  return total;
}

// ===== CART =====
// Cart is saved as { key: quantity }, where key = JSON of [product name, [chosen options]]
let cart = {};
try { cart = JSON.parse(localStorage.getItem("gayles-cart")) || {}; } catch (e) {}
function saveCart() {
  try { localStorage.setItem("gayles-cart", JSON.stringify(cart)); } catch (e) {}
}
function readKey(key) {
  let name = key, picks = null;
  try { [name, picks] = JSON.parse(key); } catch (e) {} // older carts stored just the name
  const p = PRODUCTS.find(x => x.name === name);
  if (!p) return null;
  if (!Array.isArray(picks)) picks = defaultPicks(p);
  return { p, picks, unit: unitPrice(p, picks) };
}
let cartKeys = []; // keys in the order they're shown, so buttons can refer to them by number
function cartLines() {
  return Object.keys(cart).map(key => ({ key, qty: cart[key], ...readKey(key) })).filter(l => l.p);
}
function cartTotal(lines) {
  const priced = lines.filter(l => l.unit != null);
  return { sum: priced.reduce((s, l) => s + l.unit * l.qty, 0), unpriced: lines.length - priced.length };
}

function addToCart(i, picks, qty, btn) {
  const key = JSON.stringify([PRODUCTS[i].name, picks]);
  cart[key] = (cart[key] || 0) + qty;
  saveCart(); renderCart();
  const count = $("cartCount");
  count.classList.remove("bump"); void count.offsetWidth; count.classList.add("bump");
  if (btn) {
    const text = btn.textContent;
    btn.textContent = "Added ✓";
    setTimeout(() => { btn.textContent = text; }, 1200);
  }
}

function renderCart() {
  const lines = cartLines();
  cartKeys = lines.map(l => l.key);
  $("cartCount").textContent = lines.reduce((s, l) => s + l.qty, 0);
  $("cartItems").innerHTML = lines.length ? lines.map((l, n) => `
    <div class="cart-item">
      <img src="${l.p.image}" alt="">
      <div class="info">
        <strong>${l.p.name}</strong>
        ${l.picks.length ? `<span class="cart-opts">${l.picks.join("<br>")}</span>` : ""}
        <span class="cart-price">${l.unit == null ? "Message for price" : peso(l.unit * l.qty)}</span>
        <div class="qty">
          <button type="button" data-dec="${n}" aria-label="Fewer">&minus;</button>
          <span>${l.qty}</span>
          <button type="button" data-inc="${n}" aria-label="More">+</button>
        </div>
        <button type="button" class="cart-remove" data-rm="${n}">Remove</button>
      </div>
    </div>`).join("") : '<p class="cart-empty">Your cart is empty.<br>Add an arrangement from the catalog.</p>';
  const t = cartTotal(lines);
  $("cartTotal").hidden = !lines.length;
  $("cartTotal").innerHTML = `<span>Estimated total</span><strong>${peso(t.sum)}${t.unpriced ? " + items priced in chat" : ""}</strong>`;
  $("cartCheckout").disabled = !lines.length;
  if (!lines.length) showStep("cart");
}

// "cart" = review items, "checkout" = fill out the order form
function showStep(step) {
  const checkout = step === "checkout";
  $("cartTitle").textContent = checkout ? "Checkout" : "Your cart";
  $("cartItems").hidden = checkout;
  $("checkoutForm").hidden = !checkout;
  $("cartCheckout").hidden = checkout;
  $("cartSend").hidden = !checkout;
  $("cartNote").textContent = checkout
    ? "We'll copy your order. Paste it in the branch's Facebook chat to confirm the final price."
    : "Final prices are confirmed by the branch in the Facebook chat.";
  $("cartBody").scrollTop = 0;
}

function openCart(open) {
  $("cart").classList.toggle("open", open);
  $("cartOverlay").classList.toggle("open", open);
  $("cart").setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
  if (open) showStep("cart");
}

function initCart() {
  // Estimated total row above the Checkout button
  const total = document.createElement("p");
  total.className = "cart-total";
  total.id = "cartTotal";
  $("cartCheckout").before(total);

  $("cartItems").addEventListener("click", e => {
    const d = e.target.dataset;
    const key = cartKeys[d.inc ?? d.dec ?? d.rm];
    if (key == null) return;
    if (d.inc) cart[key]++;
    else if (d.dec) { if (--cart[key] < 1) delete cart[key]; }
    else delete cart[key];
    saveCart(); renderCart();
  });

  $("cartOpen").addEventListener("click", () => openCart(true));
  $("cartClose").addEventListener("click", () => openCart(false));
  $("cartOverlay").addEventListener("click", () => openCart(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") openCart(false); });
  $("cartCheckout").addEventListener("click", () => showStep("checkout"));
  $("cartBack").addEventListener("click", () => showStep("cart"));

  // Show the address box only for delivery
  const form = $("checkoutForm");
  form.addEventListener("change", e => {
    if (e.target.name !== "method") return;
    const delivery = e.target.value === "Delivery";
    $("addressField").hidden = !delivery;
    $("coAddress").required = delivery;
  });

  // Earliest date is today
  const now = new Date();
  $("coDate").min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    const branch = f.branch;
    const date = new Date(f.date + "T00:00").toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" });
    const items = cartLines();
    const t = cartTotal(items);
    const lines = [`Hi Gayle's Flower Shop (${branch})! I'd like to order:`];
    items.forEach(l => {
      lines.push(`- ${l.p.name} x${l.qty}` + (l.unit == null ? "" : ` (${peso(l.unit * l.qty)})`));
      l.picks.forEach(o => lines.push(`    ${o}`));
    });
    lines.push(
      `Estimated total: ${peso(t.sum)}${t.unpriced ? " + items priced in chat" : ""}`,
      "",
      `Name: ${f.name}`,
      `Mobile: ${f.phone}`,
      f.method === "Delivery" ? `Delivery to: ${f.address}` : `Pick-up at ${branch} branch`,
      `Date needed: ${date}`,
      `Flower color: ${f.color}`
    );
    if (f.message.trim()) lines.push(`Message: ${f.message}`);
    const text = lines.join("\n");
    try {
      await navigator.clipboard.writeText(text);
      $("cartNote").textContent = "Order copied! Paste it in the Facebook chat to confirm.";
    } catch (e) {
      $("cartNote").textContent = "Copy this into the Facebook chat: " + text.replace(/\n/g, " ");
    }
    const win = window.open(BRANCH_LINKS[branch], "_blank");
    if (win) win.opener = null;
  });

  renderCart();
}
