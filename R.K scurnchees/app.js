/* ==========================================================================
   SATIN LOOP SCRUNCHIES & BOWS - JAVASCRIPT APPLICATION CORE
   Owner: Renuka Doddipatla | Phone/WhatsApp: 9182212271 | renukadoddipatla002@gmail.com
   ========================================================================== */

// Store Configuration & Contacts (Prices removed per boutique request)
const STORE_CONFIG = {
  name: "Satin Loop Scrunchies & Bows",
  shortName: "Satin Loop",
  owner: "Renuka Doddipatla",
  phone: "9182212271",
  whatsappNumber: "919182212271",
  email: "renukadoddipatla002@gmail.com",
  location: "Satin Loop Scrunchies, 66HJ+85R, Dharmavaram, Andhra Pradesh 533430"
};

// Curated Products Data: Luxury Scrunchies & Satin Bows (The Pink Romance Deluxe Gift Box removed)
const PRODUCTS = [
  {
    id: "sl-01",
    name: "Aurelia Pearl Satin Bow Clip",
    category: "bows",
    categoryLabel: "Satin Bow",
    image: "assets/images/satin_bow_luxe.jpg",
    badge: "Trending Bow",
    rating: 5.0,
    reviewsCount: 54,
    description: "An exquisite handcrafted blush pink satin bow barrette adorned with delicate golden filigree embroidery and a sturdy French clip closure. Elevates half-up hairstyles, ponytails, and party looks effortlessly without snagging.",
    benefits: ["Snag-free French metal barrette", "Double-layered lustrous satin", "Zero hair pulling or creases"],
    sizes: ["Classic Barrette"]
  },
  {
    id: "sl-07",
    name: "Royal Teal Satin Bow Duo Set",
    category: "bows",
    categoryLabel: "Satin Bow Duo",
    image: "assets/images/teal_satin_bow_duo.jpg",
    badge: "New Arrival",
    rating: 5.0,
    reviewsCount: 38,
    description: "Handcrafted in rich, lustrous peacock teal satin. This matching pair features 1 oversized statement bow with fluid draping ribbon tails plus 1 adorable petite companion bow clip. Fitted with snag-free barrettes for effortless styling.",
    benefits: ["2-in-1 matching oversized & petite bow pair", "High-luster rich peacock teal satin", "Anti-slip snag-free French barrette clips"],
    sizes: ["Duo Set (Large & Mini)"]
  },
  {
    id: "sl-02",
    name: "Blush Silk Cloud Scrunchie",
    category: "silk",
    categoryLabel: "Pure Silk",
    image: "assets/images/pink_silk.jpg",
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 142,
    description: "Crafted from 100% pure 22-Momme Mulberry silk in a dreamy baby blush pink. Eliminates hair friction, preventing hair breakage, frizz, and split ends while keeping natural moisture intact.",
    benefits: ["Zero hair pulling or creases", "Maintains hair hydration", "Hypoallergenic pure silk"],
    sizes: ["Regular", "Jumbo"]
  },
  {
    id: "sl-03",
    name: "Duchess Draping Silk Ribbon Bow",
    category: "bows",
    categoryLabel: "Satin Bow",
    image: "assets/images/french_silk_bow.jpg",
    badge: "Luxury Bow",
    rating: 4.9,
    reviewsCount: 41,
    description: "An oversized statement French silk bow in ivory white and champagne hues, adorned with a central crystal pearl cluster and flowing fluid ribbon tails. Perfect for bridal events, parties, and romantic chic styling.",
    benefits: ["Fluid draping silk ribbon tails", "Center pearl jewel embellishment", "Secure anti-slip clasp"],
    sizes: ["Oversized Statement"]
  },
  {
    id: "sl-04",
    name: "Pearl White Organza Scrunchie",
    category: "organza",
    categoryLabel: "Sheer Organza",
    image: "assets/images/white_organza.jpg",
    badge: "Trending",
    rating: 4.9,
    reviewsCount: 98,
    description: "An ethereal sheer snow white organza ruffle scrunchie creating a voluminous halo cloud around your bun or high ponytail. Perfect for bridal events, festive parties, and everyday chic styling.",
    benefits: ["Feather-light cloud volume", "Breathable delicate sheer fabric", "Gentle tight-hold elastic core"],
    sizes: ["Jumbo Cloud"]
  },
  {
    id: "sl-05",
    name: "Dusty Rose Velvet Luxe Scrunchie",
    category: "velvet",
    categoryLabel: "Velvet Luxe",
    image: "assets/images/rose_velvet.jpg",
    badge: "Luxe Pick",
    rating: 5.0,
    reviewsCount: 86,
    description: "Rich, plush dusty rose velvet with ultra-soft deep folds. Adds an immediate touch of royalty and cozy glamour to any hair type, from thick curls to sleek straight locks.",
    benefits: ["Super-soft plush velvet texture", "No-slip grip without tugging", "Extra durable reinforced seam"],
    sizes: ["Regular", "Jumbo"]
  },
  {
    id: "sl-06",
    name: "Champagne & Blush Satin Duo Set",
    category: "sets",
    categoryLabel: "Duo Set",
    image: "assets/images/champagne_satin.jpg",
    badge: "Value Pack",
    rating: 4.9,
    reviewsCount: 115,
    description: "A match made in heaven: 1 Champagne Gold Satin scrunchie + 1 Soft Rose Pink Satin scrunchie tied with our signature gold seal. The ultimate everyday luxury combo.",
    benefits: ["2-in-1 matching aesthetic set", "High-gloss smooth satin finish", "Perfect hair accessory gift"],
    sizes: ["Regular Duo"]
  },
  {
    id: "sl-08",
    name: "Ethereal Blossom Silk Collection",
    category: "silk",
    categoryLabel: "Silk & Satin",
    image: "assets/images/hero.jpg",
    badge: "Artisan Handcrafted",
    rating: 4.8,
    reviewsCount: 63,
    description: "A signature blend of rose petal blush and ivory white scrunchies designed by Renuka Doddipatla for daily glam and restorative overnight hair care.",
    benefits: ["Gentle overnight protective styling", "Premium imported silk blend", "Anti-frizz technology"],
    sizes: ["Regular"]
  },
  {
    id: "sl-10",
    name: "Pearl-Corner Satin Bow Trio",
    category: "bows",
    categoryLabel: "Pearl Embellished Bows",
    image: "assets/images/pearl_beaded_satin_bows.jpg",
    badge: "Handmade Trio",
    rating: 5.0,
    reviewsCount: 42,
    description: "A boutique trio of handcrafted satin ribbon bow clips in dreamy lavender lilac and rich chocolate espresso. Each bow corner is delicately hand-sewn with luminous faux pearls for a timeless, regal finish.",
    benefits: ["Hand-stitched corner pearl detailing", "Anti-crease French barrette clips", "Versatile 3-piece mix & match set"],
    sizes: ["Set of 3"]
  },
  {
    id: "sl-11",
    name: "Blush Floral Sequin Lace Bow Pair",
    category: "bows",
    categoryLabel: "Embroidered Lace",
    image: "assets/images/embroidered_lace_bows.jpg",
    badge: "Boutique Exclusive",
    rating: 5.0,
    reviewsCount: 36,
    description: "Delicate sheer blush pink organza and floral sequin embroidered lace hair bows with flowing draping ribbons. Handcrafted with shimmering accents, perfect for bridal showers, weddings, and party occasions.",
    benefits: ["Intricate floral embroidery & sequins", "Lightweight flowing ribbon tails", "Gentle snag-free clip hold"],
    sizes: ["Pair of 2"]
  },
  {
    id: "sl-12",
    name: "The Festive Artisan Boutique Hamper",
    category: "sets",
    categoryLabel: "Festive Hamper",
    image: "assets/images/artisan_festive_hamper.jpg",
    badge: "Luxury Hamper",
    rating: 5.0,
    reviewsCount: 58,
    description: "A curated celebratory hamper featuring artisanal silk scrunchies, pearl-embellished satin hair bows, handcrafted golden pearl jhumka earrings, and a statement choker necklace presented in our signature gift box.",
    benefits: ["All-in-one festive accessories hamper", "Handcrafted premium jewelry & hair accessories", "Ready-to-gift luxury packaging"],
    sizes: ["Deluxe Gift Hamper"]
  },
  {
    id: "sl-13",
    name: "Lilac Pearl Center Satin Bows (Set of 4)",
    category: "bows",
    categoryLabel: "Satin Bow Set",
    image: "assets/images/lilac_pearl_bow_set.jpg",
    badge: "Set of 4",
    rating: 4.9,
    reviewsCount: 47,
    description: "Four charming baby lilac satin bows with shimmering center pearl clusters. Designed to be styled in twin braids, pigtails, accent half-up hairstyles, or shared with your besties.",
    benefits: ["4-piece matching lilac satin bow set", "Sparkling center pearl cabochon", "Gentle non-slip hair clips"],
    sizes: ["Set of 4 Mini Bows"]
  },
  {
    id: "sl-14",
    name: "Watercolor Sunset Blossom Silk Scrunchie",
    category: "silk",
    categoryLabel: "Pure Silk",
    image: "assets/images/watercolor_silk_scrunchie.jpg",
    badge: "Hand-Dyed",
    rating: 5.0,
    reviewsCount: 29,
    description: "Hand-dyed Mulberry silk scrunchie featuring a painterly watercolor sunset pattern of coral, rose gold, and soft blush blossoms. Soft as a petal with zero pull or hair creases.",
    benefits: ["100% natural Mulberry silk feel", "Artisanal watercolor floral dye print", "Protects hair from frizz & friction"],
    sizes: ["Regular", "Jumbo"]
  },
  {
    id: "sl-15",
    name: "Aqua Sky Crinkle Scrunchies & Silver Bow Set",
    category: "sets",
    categoryLabel: "Scrunchie & Bow Set",
    image: "assets/images/aqua_scrunchie_sequin_bow_set.jpg",
    badge: "4-Piece Set",
    rating: 5.0,
    reviewsCount: 34,
    description: "A vibrant 4-piece styling set featuring 2 aqua blue crinkled textured scrunchies paired with 2 shimmering silver sequin organza bow clips. Soft, bouncy, snag-free, and ideal for poolside, brunch, and everyday glam.",
    benefits: ["4-piece combo: 2 crinkle scrunchies + 2 sequin bow clips", "Lustrous crinkle-texture aqua organza", "Non-slip lightweight hair grip with zero crease"],
    sizes: ["4-Piece Set"]
  },
  {
    id: "sl-16",
    name: "Lavender Lilac Cloud Scrunchie & Silver Bow Duo",
    category: "sets",
    categoryLabel: "Scrunchie & Bow Set",
    image: "assets/images/lavender_scrunchie_sequin_bow_set.jpg",
    badge: "3-Piece Set",
    rating: 5.0,
    reviewsCount: 41,
    description: "An ethereal luxury styling set featuring 1 oversized plush lavender satin scrunchie paired with 2 shimmering silver sequin organza bow clips. Glides effortlessly over hair with zero creasing.",
    benefits: ["Jumbo cloud satin scrunchie + 2 sequin bow clips", "Ultra-smooth high-gloss lavender satin", "Protects against hair breakage and tangles"],
    sizes: ["3-Piece Combo"]
  },
  {
    id: "sl-17",
    name: "Rosewood Cranberry Satin Scrunchies & Silver Bow Set",
    category: "sets",
    categoryLabel: "Scrunchie & Bow Set",
    image: "assets/images/rosewood_scrunchie_sequin_bow_set.jpg",
    badge: "4-Piece Set",
    rating: 4.9,
    reviewsCount: 39,
    description: "A rich, romantic 4-piece set featuring 2 cranberry rosewood satin scrunchies with luxurious gathered folds, complemented by 2 sparkling silver sequin organza bow clips.",
    benefits: ["4-piece styling pack: 2 scrunchies + 2 sequin bow clips", "Deep cranberry rosewood high-sheen satin", "Snag-free hold for thick or fine hair"],
    sizes: ["4-Piece Set"]
  },
  {
    id: "sl-18",
    name: "Regal Quad Pearl & Sequin Bow Barrette Collection",
    category: "bows",
    categoryLabel: "Embellished Bows",
    image: "assets/images/artisan_quad_pearl_bow_set.jpg",
    badge: "Set of 4",
    rating: 5.0,
    reviewsCount: 52,
    description: "An exquisite 4-piece artisan bow collection: Crimson Scarlet Satin with hand-beaded corner pearls, Rich Chocolate Satin with corner pearls, Pastel Lilac Satin with corner pearls, and 1 Shimmering Silver Sequin Lace Bow.",
    benefits: ["4 distinct handcrafted boutique bow clips", "Hand-stitched faux pearl corner embellishments", "Sturdy French barrette & clip mechanisms"],
    sizes: ["Set of 4 Bows"]
  },
  {
    id: "sl-19",
    name: "Scarlet Empress Royal Satin Trio",
    category: "sets",
    categoryLabel: "Royal Satin Trio",
    image: "assets/images/scarlet_red_royal_trio.jpg",
    badge: "Royal Suite",
    rating: 5.0,
    reviewsCount: 65,
    description: "A head-turning 3-piece luxury scarlet red satin suite: 1 oversized statement bow with cascading long ribbon tails, 1 classic tailored satin bow clip, and 1 matching rich red satin scrunchie.",
    benefits: ["Complete 3-in-1 matching red satin hair suite", "Oversized statement bow with flowing tails", "High-luster festive bridal & party glam"],
    sizes: ["3-Piece Royal Suite"]
  },
  {
    id: "sl-20",
    name: "Ivory Silk Cascading Ribbon Bow Pair",
    category: "bows",
    categoryLabel: "Silk Bow Pair",
    image: "assets/images/ivory_silk_draping_bows.jpg",
    badge: "Boutique Pair",
    rating: 5.0,
    reviewsCount: 45,
    description: "A breathtaking matching pair of handcrafted ivory cream silk statement hair bows with accordion-pleated centers and elegant cascading ribbon tails. Lightweight and fitted with snag-free barrettes, ideal for bridal styling, celebrations, half-up styles, or twin accents.",
    benefits: ["Matching 2-piece ivory silk bow set", "Cascading fluid draping ribbon tails", "Snag-free anti-slip French clips"],
    sizes: ["Pair of 2 Statement Bows"]
  }
];

// Application State
let cart = JSON.parse(localStorage.getItem("rk_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("rk_wishlist")) || [];
let currentActiveView = "home";

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderHomeFeatured();
  renderProducts("all");
  populateCustomOrderDropdown();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  setupFAQ();
  setupHeaderScroll();
  setupViewRouting();
});

/* ==========================================================================
   VIEW ROUTING: SHOW SELECTED VIEW ONLY (NO ENDLESS SCROLLING)
   ========================================================================== */
function setupViewRouting() {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash && document.getElementById(`view-${hash}`)) {
      switchView(hash, false);
    }
  });

  const initialHash = window.location.hash.replace("#", "").trim();
  if (initialHash && document.getElementById(`view-${initialHash}`)) {
    switchView(initialHash, false);
  } else {
    switchView("home", false);
  }
}

function switchView(viewName, updateHistory = true) {
  const target = document.getElementById(`view-${viewName}`);
  if (!target) return;

  const allViews = document.querySelectorAll(".page-view");
  allViews.forEach(v => v.classList.remove("active"));

  target.classList.add("active");
  currentActiveView = viewName;

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    if (link.getAttribute("data-view") === viewName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "instant" });

  if (updateHistory) {
    history.pushState(null, "", `#${viewName}`);
  }
}

function filterFromFooter(category) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(b => {
    if (b.getAttribute("data-category") === category) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  renderProducts(category);
}

/* ==========================================================================
   HOME VIEW: CURATED BEST SELLERS & NEW ARRIVALS (NO PRICES SHOWN)
   ========================================================================== */
function renderHomeFeatured() {
  const container = document.getElementById("homeFeaturedGrid");
  if (!container) return;

  // Pick top 4 trending items
  const featured = PRODUCTS.slice(0, 4);

  container.innerHTML = featured.map(product => {
    const isWishlisted = wishlist.includes(product.id);

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-badge">${product.badge}</span>
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  title="Save to Wishlist"
                  aria-label="Save ${product.name} to Wishlist">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
          <div class="quick-view-overlay">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
              Quick View
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.name}</h3>
          
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>

          <div class="product-actions" style="margin-top: 1rem;">
            <button class="btn-add-cart" onclick="addToCart('${product.id}')">
              🛍️ Add to Bag
            </button>
            <button class="btn-whatsapp-order" onclick="orderSingleViaWhatsApp('${product.id}')">
              💬 Inquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   COLLECTION VIEW: FULL CATALOG (NO PRICES SHOWN)
   ========================================================================== */
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter || (filter === "sets" && p.categoryLabel.includes("Duo")));

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-badge">${product.badge}</span>
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  title="Save to Wishlist"
                  aria-label="Save ${product.name} to Wishlist">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
          <div class="quick-view-overlay">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
              Quick View
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.name}</h3>
          
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>

          <div class="product-actions" style="margin-top: 1rem;">
            <button class="btn-add-cart" onclick="addToCart('${product.id}')">
              🛍️ Add to Bag
            </button>
            <button class="btn-whatsapp-order" onclick="orderSingleViaWhatsApp('${product.id}')">
              💬 Inquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   EVENT LISTENERS & NAVIGATION
   ========================================================================== */
function setupEventListeners() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderProducts(category);
    });
  });

  const cartTrigger = document.getElementById("cartTrigger");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("mobile-open");
      if (navOverlay) navOverlay.classList.toggle("active", isOpen);
      mobileToggle.textContent = isOpen ? "✕" : "☰";
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileNav);
  }
}

function closeMobileNav() {
  document.getElementById("navLinks")?.classList.remove("mobile-open");
  document.getElementById("navOverlay")?.classList.remove("active");
  const mobileToggle = document.getElementById("mobileToggle");
  if (mobileToggle) {
    mobileToggle.textContent = "☰";
    mobileToggle.setAttribute("aria-expanded", "false");
  }
}

function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   CART OPERATIONS (SHOWING SELECTED ITEMS ONLY, NO PRICES)
   ========================================================================== */
function openCart() {
  document.getElementById("cartOverlay")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay")?.classList.remove("active");
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.body.style.overflow = "";
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✨ Added "${product.name}" to your bag!`);
  openCart();
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
    showToast("Item removed from bag");
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from bag");
}

function saveCart() {
  localStorage.setItem("rk_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const itemsContainer = document.getElementById("cartItemsBody");
  const cartBadge = document.getElementById("cartBadgeCount");
  const totalCountEl = document.getElementById("cartTotalItemsCount");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (totalCountEl) {
    totalCountEl.textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🌸</div>
        <h4 style="font-family: var(--font-heading); margin-bottom: 0.5rem;">Your Bag is Empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Discover our handmade silk scrunchies & satin bows!</p>
        <button class="btn btn-primary btn-sm" onclick="closeCart(); switchView('collection');">
          Explore Collection
        </button>
      </div>
    `;
    return;
  }

  // Render items (no price displays)
  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Remove item" aria-label="Remove item">
        ✕
      </button>
    </div>
  `).join("");
}

// Direct WhatsApp Checkout for Cart (Lists items and asks for pricing & payment confirmation)
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Your bag is empty! Add items first.");
    return;
  }

  let message = `🎀 *ORDER INQUIRY - SATIN LOOP SCRUNCHIES & BOWS*\n\n`;
  message += `Hello Renuka, I would like to order the following items from your website:\n\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (Qty: ${item.qty})\n`;
  });

  message += `\n-------------------------\n`;
  message += `📍 *Delivery Details:*\n`;
  message += `Name: \n`;
  message += `Address: \n`;
  message += `Pincode: \n`;
  message += `Phone: \n\n`;
  message += `Please confirm availability, total price, and payment QR / UPI ID. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodedMsg}`;
  window.open(whatsappUrl, "_blank");
}

// Email Cart Order (Directly redirects to Google Mail / Gmail web compose)
function checkoutViaEmail() {
  if (cart.length === 0) {
    showToast("Your bag is empty!");
    return;
  }

  let itemsText = cart.map((i, idx) => `${idx + 1}. ${i.name} (Qty: ${i.qty})`).join("\n");
  
  const subject = encodeURIComponent("Order Request - Satin Loop Scrunchies & Bows");
  const body = encodeURIComponent(`Hello Renuka,\n\nI would like to order the following items from Satin Loop:\n\n${itemsText}\n\nPlease let me know the total price, payment details, and delivery timeframe.\n\nMy Delivery Name:\nMy Phone:\nMy Address:`);
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(STORE_CONFIG.email)}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
}

// Direct Buy Single Product via WhatsApp (No price mentioned)
function orderSingleViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const msg = `🎀 *Hello Renuka!* I am interested in purchasing:\n\n*Item:* ${product.name}\n\nCould you please confirm availability, price, and delivery details? Thank you!`;
  const url = `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ==========================================================================
   QUICK VIEW MODAL (NO PRICES SHOWN)
   ========================================================================== */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalContainer = document.getElementById("quickViewModal");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal-card">
      <button class="modal-close-btn" onclick="closeQuickView()" aria-label="Close modal">✕</button>
      
      <div class="modal-image-wrapper">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="modal-content-details">
        <span class="product-category">${product.categoryLabel}</span>
        <h2 class="product-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;">${product.name}</h2>
        
        <div class="product-rating" style="margin-bottom: 1.25rem;">
          <span>★★★★★</span>
          <span class="rating-count">5.0 (${product.reviewsCount} customer reviews)</span>
        </div>

        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.25rem;">
          ${product.description}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); margin-bottom: 0.5rem;">Why Your Hair Will Love This:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);">
            ${product.benefits.map(b => `<li>✨ ${b}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-actions-row" style="display: flex; gap: 1rem; margin-top: auto;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}'); closeQuickView();">
            🛍️ Add to Bag
          </button>
          <button class="btn btn-whatsapp" onclick="orderSingleViaWhatsApp('${product.id}')">
            💬 Inquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modalContainer = document.getElementById("quickViewModal");
  if (modalContainer) {
    modalContainer.classList.remove("active");
  }
  document.body.style.overflow = "";
}

/* ==========================================================================
   WISHLIST FUNCTIONALITY
   ========================================================================== */
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(productId);
    showToast("❤️ Saved to your wishlist!");
  }
  localStorage.setItem("rk_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  
  renderHomeFeatured();
  const activeBtn = document.querySelector(".filter-btn.active");
  const currentCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";
  renderProducts(currentCategory);
}

function updateWishlistUI() {
  const badge = document.getElementById("wishlistBadgeCount");
  if (badge) {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? "flex" : "none";
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

/* ==========================================================================
   POPULATE PREFERRED ACCESSORIES DROPDOWN FROM ALL COLLECTION ITEMS
   ========================================================================== */
function populateCustomOrderDropdown() {
  const select = document.getElementById("customType");
  if (!select) return;

  const currentVal = select.value;
  let html = `<option value="Assorted / Mix & Match Collection Favors">✨ Assorted / Mix & Match (All Styles Favors)</option>`;

  const bows = PRODUCTS.filter(p => p.category === "bows");
  const silkAndOrganza = PRODUCTS.filter(p => p.category === "silk" || p.category === "organza" || p.category === "velvet");
  const sets = PRODUCTS.filter(p => p.category === "sets");

  if (bows.length) {
    html += `<optgroup label="🎀 Satin & Silk Hair Bows">`;
    bows.forEach(p => {
      html += `<option value="${p.name}">${p.name}</option>`;
    });
    html += `</optgroup>`;
  }

  if (silkAndOrganza.length) {
    html += `<optgroup label="🌸 Pure Mulberry Silk & Cloud Scrunchies">`;
    silkAndOrganza.forEach(p => {
      html += `<option value="${p.name}">${p.name}</option>`;
    });
    html += `</optgroup>`;
  }

  if (sets.length) {
    html += `<optgroup label="🎁 Matching Duo Sets & Hampers">`;
    sets.forEach(p => {
      html += `<option value="${p.name}">${p.name}</option>`;
    });
    html += `</optgroup>`;
  }

  select.innerHTML = html;
  if (currentVal) select.value = currentVal;
}

/* ==========================================================================
   CUSTOM ORDER & CONTACT FORM SUBMISSIONS
   ========================================================================== */
function handleCustomOrderForm(e) {
  e.preventDefault();
  const occasion = document.getElementById("customOccasion")?.value || "";
  const type = document.getElementById("customType")?.value || "";
  const qty = document.getElementById("customQty")?.value || "";
  const colorTheme = document.getElementById("customColorTheme")?.value || "Matching pastel theme";

  let text = `🎀 *CUSTOM EVENT INQUIRY - SATIN LOOP*\n\n`;
  text += `Hello Renuka, I would like to inquire about a custom order for our celebration:\n\n`;
  text += `• *Occasion:* ${occasion}\n`;
  text += `• *Accessories Desired:* ${type}\n`;
  text += `• *Estimated Quantity:* ${qty}\n`;
  text += `• *Color Theme / Notes:* ${colorTheme}\n\n`;
  text += `Please let me know fabric options, custom tag designs, and estimated pricing. Thank you!`;

  const url = `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  showToast("Opening WhatsApp with your custom inquiry...");
}

function handleContactForm(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value || "";
  const phone = document.getElementById("contactPhone")?.value || "";
  const message = document.getElementById("contactMsg")?.value || "";

  const text = `🌸 *New Message for Satin Loop*\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
  const url = `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  showToast("Opening WhatsApp with your enquiry...");
}

/* ==========================================================================
   TOAST NOTIFICATION COMPONENT
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
