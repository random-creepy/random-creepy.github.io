// Random Shop - Step 5: Real Images & Final Polish

/* =====================================================================
   🚨 بخش ویرایش دستی محصولات (EDIT ZONE) 🚨
   ===================================================================== */
const PRODUCTS = [
  // --- ۱ تا ۱۵: کاملاً معمولی ---
  { id: "p1", price: 14, img: "images/mug.jpg", name: { en: "Ceramic Mug", fa: "لیوان سرامیکی" }, desc: { en: "A perfect mug for your coffee.", fa: "یک لیوان عالی برای قهوه." }, reviews: [{name: "Sarah", text: "Love the color!"}, {name: "Ali", text: "Good quality."}] },
  { id: "p2", price: 9, img: "images/Socks.jpg", name: { en: "Cozy Socks", fa: "جوراب نرم" }, desc: { en: "Very soft and warm.", fa: "خیلی نرم و گرم." }, reviews: [{name: "John", text: "Keeps my feet warm."}, { name: "Maria" , text: "I can't get the socks off!"} ] },
  { id: "p3", price: 22, img: "images/Light.jpg", name: { en: "Night Light", fa: "چراغ‌خواب" }, desc: { en: "Soft glowing light.", fa: "نور نرم و ملایم." }, reviews: [{name: "Mary", text: "Perfect for kids room."} , {name: 'nina', text: "It shows shadows that shouldn't be there!"}] },
  { id: "p4", price: 11, img: "images/Notebook.jpg", name: { en: "Notebook", fa: "دفترچه" }, desc: { en: "100 pages for your thoughts.", fa: "۱۰۰ صفحه برای افکار شما." }, reviews: [{name: "Reza", text: "Paper is very smooth."} , { name: "Arti" , text: "When I open it, I hear a woman crying..." } ] },
  { id: "p5", price: 34, img: "images/Teapot.jpg", name: { en: "Teapot", fa: "قوری" }, desc: { en: "Classic ceramic teapot.", fa: "قوری سرامیکی کلاسیک." }, reviews: [{name: "Emma", text: "Makes great tea."}] },
  { id: "p6", price: 6, img: "images/Magnet.jpg", name: { en: "Fridge Magnet", fa: "آهنربای یخچال" }, desc: { en: "Holds your lists.", fa: "لیست‌های شما را نگه می‌دارد." }, reviews: [{name: "Tom", text: "A bit small but cute."}, {name: 'unknown' , texte: "I think they move..." } ] },
  { id: "p7", price: 18, img: "images/Candle.jpg", name: { en: "Soy Candle", fa: "شمع سویا" }, desc: { en: "Smells like vanilla.", fa: "بوی وانیل می‌دهد." }, reviews: [{name: "Nina", text: "Smells amazing."}] },
  { id: "p8", price: 8, img: "images/spoon.jpg", name: { en: "Wooden Spoon", fa: "قاشق چوبی" }, desc: { en: "Hand-carved from oak.", fa: "دست‌ساز از چوب بلوط." }, reviews: [{name: "David", text: "Solid wood."}] },
  { id: "p9", price: 12, img: "images/Coffee.jpg", name: { en: "Coffee Cup", fa: "فنجان قهوه" }, desc: { en: "For your morning coffee.", fa: "برای قهوه صبحگاهی." }, reviews: [] },
  { id: "p10", price: 15, img: "images/Lotion.jpg", name: { en: "Lotion", fa: "لوسیون" }, desc: { en: "Soft skin.", fa: "پوست نرم." }, reviews: [] },
  { id: "p11", price: 4, img: "images/Pen.jpg", name: { en: "Blue Pen", fa: "خودکار آبی" }, desc: { en: "Writes smoothly.", fa: "روان می‌نویسد." }, reviews: [] },
  { id: "p12", price: 3, img: "images/Clips.jpg", name: { en: "Paperclips", fa: "گیره کاغذ" }, desc: { en: "Pack of 50.", fa: "بسته ۵۰ عددی." }, reviews: [ { name: 'sara', text: "I feel like their number keeps increasing. WTF!?"} ] },
  { id: "p13", price: 20, img: "images/Bear.jpg", name: { en: "Teddy Bear", fa: "خرس عروسکی" }, desc: { en: "Soft and huggable.", fa: "نرم و بغل‌کردنی." }, reviews: [] },
  { id: "p14", price: 2, img: "images/Balloon.jpg", name: { en: "Balloon", fa: "بادکنک" }, desc: { en: "Red balloon.", fa: "بادکنک قرمز." }, reviews: [] },
  { id: "p15", price: 5, img: "images/Keys.jpg", name: { en: "Keychain", fa: "جاکلیدی" }, desc: { en: "Metal keychain.It opens every door. But it’s better not to open just any door with it—because you might not be able to close it again!", fa: "جاکلیدی فلزی.همه درها رو باز می‌کنه. ولی بهتره هر دری رو باهاش باز نکنید چون ممکنه دیگه نتونید ببندینش!" }, reviews: [] },

  // --- ۱۶ تا ۲۵: کم‌کم عجیب ---
  { id: "p16", price: 25, img: "images/Frame.jpg", name: { en: "Empty Frame", fa: "قاب خالی" }, desc: { en: "No picture. It watches.", fa: "بدون عکس. تماشا می‌کند." }, reviews: [{name: "????", text: "I didn't buy this. It's on my wall."} ] }  ,
  { id: "p17", price: 40, img: "images/Clock.jpg", name: { en: "Old Clock", fa: "ساعت قدیمی" }, desc: { en: "Ticks backwards at night, after 12.", fa: "شب‌ها عقب‌گرد می‌کند، بعد از ساعت 12." }, reviews: [{name: "LostSoul", text: "It keeps waking me up at 3 AM."}] },
  { id: "p18", price: 12, img: "images/Brush.jpg", name: { en: "Hair Brush", fa: "برس مو" }, desc: { en: "Warm to the touch. Hairs are not yours.They probably grow from the inside.", fa: "گرم است. موها مال شما نیستند. احتمالا از داخل رشد میکنند." }, reviews: [{name: "Scared1", text: "I live alone. Why are there long black hairs?"}] },
  { id: "p19", price: 15, img: "images/Mirror.jpg", name: { en:"Broken Mirror", fa: "آینه شکسته" }, desc: { en: "The door is open in the reflection.", fa: "درِ خانه در انعکاس باز است." }, reviews: [{name: "Dread", text: "I saw someone standing behind me."}] },
  { id: "p20", price: 55, img: "images/Box.jpg", name: { en: "Whisper Box", fa: "جعبه پچ‌پچ" }, desc: { en: "It breathes. Do not open. evenif it called your name...", fa: "نفس می‌کشد. بازش نکن.حتی اگه اسمتو صدا کرد..." }, reviews: [{name: "Unknown", text: "It knows my name."}] },
  { id: "p21", price: 60, img: "images/Rug.jpg", name: { en: "Red Rug", fa: "فرش قرمز" }, desc: { en: "The stain keeps spreading.", fa: "لکه مدام پخش می‌شود." }, reviews: [{name: "Terrified", text: "The blood won't wash off."}, { name: 'mio' , text: " it's fucking bleeding!"}  ] },
  { id: "p22", price: 30, img: "images/Tooth.jpg", name: { en: "Tooth Necklace", fa: "گردنبند دندان" }, desc: { en: "They are real.", fa: "واقعی هستند." }, reviews: [{name: "NoName", text: "I woke up with one under my pillow."}] },
  { id: "p23", price: 20, img: "images/Bear.jpg", name: { en: "Wet Bear", fa: "خرس خیس" }, desc: { en: "Always damp. Smells like river water.", fa: "همیشه خیس. بوی آب رودخانه می‌دهد." }, reviews: [{name: "Wet", text: "I hear water dripping at night."} , {name: "Aida" , text: "Why isn't it drying?" }   ] },
  { id: "p24", price: 5, img: "images/Key.jpg", name: { en: "Basement Key", fa: "کلید زیرزمین" }, desc: { en: "Your house doesn't have a basement? After buying this key, it'll have one.", fa: "خانه شما زیرزمین ندارد؟ بعد از خریدن این کلید خواهد داشت." }, reviews: [{name: "Basement", text: "I found the door. It fits."}] },
  { id: "p25", price: 80, img: "images/Photo.jpg", name: { en: "Polaroid", fa: "پولاروید" }, desc: { en: "Pictures show you sleeping.It changes every time you sleep.Indestructible, Trust me.", fa: "عکس‌ها شما را در خواب نشان می‌دهند. هربار بخوابید تغییر میکند. از بین نمیرود، به من اعتماد کنید." }, reviews: [{name: "Lens", text: "I was alone in the room."}] },

  // --- ۲۶ تا ۳۵: وحشتناک ---
  { id: "p26", price: 99, img: "images/Eye.jpg", name: { en: "The Eye", fa: "چشم" }, desc: { en: "It blinks when you do. they can see you.", fa: "وقتی پلک بزنی، پلک می‌زند. اونها شمارو میبینن." }, reviews: [{name: "It", text: "WE SEE YOU."}] },
  { id: "p27", price: 15, img: "images/Paint.jpg", name: { en: "Red Paint", fa: "رنگ قرمز" }, desc: { en: "It is warm. Great for having a red room. ", fa: "گرم است. عالی برای داشتن یک اتاق قرمز." }, reviews: [{name: "Warm", text: "It dries dark."}] },
  { id: "p28", price: 45, img: "images/Bone.jpg", name: { en: "Small Bone", fa: "استخوان کوچک" }, desc: { en: "Human. Child.", fa: "انسانی. کودک." }, reviews: [{name: "Bone", text: "There are more in the garden."}] },
  { id: "p29", price: 120, img: "images/Door.jpg", name: { en: "The Door", fa: "در" }, desc: { en: "Does your room lack sufficient space? Purchasing this door will multiply your available space. It always opens into the same room, yet leads to an infinite expanse. ", fa: " اتاقتون فضای کافی نداره؟ بعد از خریدن این در برای اتاق فضاتون چند برابر میشه. همیشه به همون اتاق باز میشه و بی‌نهایت ادامه داره. " }, reviews: [{name: "Lost", text: "I can't find the exit anymore."}] },
  { id: "p30", price: 0, img: "images/Hole.jpg", name: { en: "A Hole", fa: "یک چاله" }, desc: { en: "It is growing.It can be moved wherever you want.", fa: "دارد بزرگ می‌شود.به هرجا که بخواید منتقل میشه." }, reviews: [{name: "Falling", text: "Please help me."}] },
  { id: "p31", price: 10, img: "images/Guest.jpg", name: { en: "The Guest", fa: "مهمان" }, desc: { en: "Feeling lonely? Invite The Guest, and you will never feel alone again. Never!", fa: "احساس تنهایی می‌کنید؟ مهمان رو دعوت کنید، و دیگه هرگز احساس تنهایی نخواهید کرد. هرگز!" }, reviews: [{name: "Host", text: "He won't leave. HELP! "}] },
  { id: "p32", price: 33, img: "images/Phone.jpg", name: { en: "Old Phone", fa: "تلفن قدیمی" }, desc: { en: "It only rings when you are alone.", fa: "فقط وقتی تنهایی زنگ می‌خورد." }, reviews: [{name: "Alone", text: "Someone is breathing on the line."}] },
  { id: "p33", price: 200, img: "images/Grave.jpg", name: { en: "Your Grave", fa: "قبر شما" }, desc: { en: "The date is almost here.", fa: "تاریخ شما تقریباً رسیده است." }, reviews: [{name: "Tomorrow", text: "See you soon."}] },
  { id: "p34", price: 0, img: "images/Reflection.jpg", name: { en: "Your Reflection", fa: "انعکاس شما" }, desc: { en: "Tired of yourself? Order another 'you! It moves differently!", fa: " از خودتون خسته شدین؟ یک «خود» دیگه سفارش بدین! متفاوت‌ حرکت میکنه!" }, reviews: [{name: "Me", text: "I am not typing this."}] },
  { id: "p35", price: 999, img: "images/Guest1.jpg", name: { en: "You", fa: "شما" }, desc: { en: " We'll add you to the store soon—unless you pay the cost yourself! ", fa: "  به زودی شمارو به فروشگاه اضافه میکنیم. مگر این که هزینشو خودتون بپردازید! " }, reviews: [{name: "Buyer", text: "Sold."}] }
];

/* =====================================================================
   متن‌های عجیب
   ===================================================================== */
const ABOUT_TEXTS = {
  normal: { en: "Random Shop began in a spare room, with a cardboard box and a very good idea. We sell a small selection of ordinary things, chosen one by one, by someone who cares.", fa: "رندوم شاپ توی یه اتاق اضافی شروع شد، با یه جعبه‌ی مقوایی و یه فکر خیلی خوب. ما یه انتخاب کوچیک از چیزهای معمولی می‌فروشیم، که یکی‌یکی توسط کسی که اهمیت می‌ده انتخاب شدن." },
  creepy: { en: "We don't remember starting this shop. The boxes were already here. We don't choose the products. They arrive. We don't sleep anymore. We just wait for you to buy them.", fa: "ما یادمون نیست این فروشگاه رو چطور شروع کردیم. جعبه‌ها از قبل اینجا بودن. ما محصولات رو انتخاب نمی‌کنیم. اونا میان. ما دیگه نمی‌خوابیم. ما فقط منتظریم تو اونا رو بخری." }
};

const SUPPORT_TEXTS = {
  normal: { en: "Questions, complaints, or something else entirely? Write to us. A real person reads every message.", fa: "سؤال، شکایت، یا یه چیز کاملاً دیگه؟ برامون بنویس. هر پیام رو یه آدم واقعی می‌خونه." },
  creepy: { en: "Stop writing to us. We see you through the screen.", fa: "دیگه به ما پیام نده. ما از پشت صفحه تو رو می‌بینیم." }
};

const I18N = {
  en: { announce: "Free shipping over $40 · 30-day returns", navHome: "Home", navShop: "Shop", navAbout: "About", navSupport: "Support", cart: "Cart", heroTitle: "Everything you never knew you needed.", heroSub: "A small shop of small things. Carefully picked. Mostly harmless.", heroCta: "Start browsing", shopTitle: "All products", aboutTitle: "About us", supportTitle: "Support", disclaimer: "Random Shop is a fictional hobby project. No real products are sold, no payments are taken.", copy: "Random Shop — a small art project.", langBtn: "فا", addToCart: "Add to cart", reviewsTitle: "Reviews", leaveReview: "Leave a review", submitReview: "Submit" },
  fa: { announce: "ارسال رایگان بالای ۴۰ دلار", navHome: "خانه", navShop: "فروشگاه", navAbout: "درباره ما", navSupport: "پشتیبانی", cart: "سبد خرید", heroTitle: "هر چیزی که نمی‌دونستی بهش نیاز داری.", heroSub: "یه فروشگاه کوچیک از چیزهای کوچیک. با دقت انتخاب شده. تقریباً بی‌خطر.", heroCta: "شروع خرید", shopTitle: "همه محصولات", aboutTitle: "درباره ما", supportTitle: "پشتیبانی", disclaimer: "رندوم شاپ یه پروژه‌ی سرگرمی است. محصول واقعی فروخته نمی‌شه.", copy: "رندوم شاپ — یه پروژه‌ی هنری کوچیک.", langBtn: "EN", addToCart: "افزودن به سبد", reviewsTitle: "نظرات", leaveReview: "ثبت نظر جدید", submitReview: "ارسال" }
};

function load(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch (e) { return fallback; } }
function save(key, value) { try { localStorage.setItem(key, value); } catch (e) { } }

const state = { lang: load("rs_lang", "en"), cart: Number(load("rs_cart", 0)) || 0 };
let currentProductId = null;

const grid = document.getElementById("grid");
const langBtn = document.getElementById("langBtn");
const cartCount = document.getElementById("cartCount");
const overlay = document.getElementById("dreadOverlay");
const modal = document.getElementById("productModal");

function renderProducts() {
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(function (p, index) {
    let creepyClass = "";
    if (index >= 15 && index < 25) creepyClass = "creepy-1";
    if (index >= 25 && index < 30) creepyClass = "creepy-2";
    if (index >= 30) creepyClass = "creepy-3";

    let visual = "";
    if (p.img) {
      visual = '<img src="' + p.img + '" class="thumb-img">';
    } else {
      visual = '<div class="thumb">' + p.emoji + '</div>';
    }

    return '<article class="card ' + creepyClass + '" data-id="' + p.id + '">' +
      visual +
      '<h3 class="pname">' + p.name[state.lang] + '</h3>' +
      '<div class="row">' +
        '<span class="price">$' + p.price + '</span>' +
        '<button class="btn-add" data-id="' + p.id + '">' + I18N[state.lang].addToCart + '</button>' +
      '</div>' +
    '</article>';
  }).join("");
}

grid.addEventListener("click", function(e) {
  if (e.target.closest(".btn-add")) {
    state.cart += 1;
    if (cartCount) cartCount.textContent = state.cart;
    save("rs_cart", state.cart);
    return;
  }
  
  const card = e.target.closest(".card");
  if (!card) return;

  const p = PRODUCTS.find(item => item.id === card.dataset.id);
  if (p && modal) {
    currentProductId = p.id;
    
    let visual = "";
    if (p.img) {
      visual = '<img src="' + p.img + '" class="modal-img">';
    } else {
      visual = '<div style="font-size:80px;text-align:center;margin-bottom:20px;">' + p.emoji + '</div>';
    }
    
    document.getElementById("modalThumb").innerHTML = visual;
    document.getElementById("modalTitle").textContent = p.name[state.lang];
    document.getElementById("modalPrice").textContent = "$" + p.price;
    document.getElementById("modalDesc").textContent = p.desc[state.lang];
    
    renderReviews(p);
    modal.style.display = "block";
  }
});

function renderReviews(p) {
  const container = document.getElementById("modalReviews");
  container.innerHTML = "";
  
  let userReviews = JSON.parse(load("rs_reviews_" + p.id, "[]"));
  let allReviews = [...p.reviews, ...userReviews];

  if (allReviews.length === 0) {
    container.innerHTML = "<p style='color:#aaa;font-size:14px'>No reviews yet.</p>";
  } else {
    container.innerHTML = allReviews.map(function(r) {
      return '<div class="review-item"><strong>' + r.name + '</strong>' + r.text + '</div>';
    }).join("");
  }
}

const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.getElementById("reviewName").value;
    const textInput = document.getElementById("reviewText").value;
    if (!nameInput || !textInput) return;

    let userReviews = JSON.parse(load("rs_reviews_" + currentProductId, "[]"));
    userReviews.push({ name: nameInput, text: textInput });
    save("rs_reviews_" + currentProductId, JSON.stringify(userReviews));

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";

    const p = PRODUCTS.find(item => item.id === currentProductId);
    renderReviews(p);
    
    setTimeout(() => {
      if (userReviews.length === 1) {
        alert("Thank you. We have received your message. We know where you live.");
      }
    }, 500);
  });
}

const closeModalBtn = document.getElementById("closeModal");
if (closeModalBtn) closeModalBtn.onclick = function() { modal.style.display = "none"; };
window.onclick = function(event) { if (modal && event.target == modal) modal.style.display = "none"; };

function applyLang(lang) {
  state.lang = lang;
  save("rs_lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "fa") ? "rtl" : "ltr";

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  if (langBtn) langBtn.textContent = dict.langBtn;
  renderProducts();
  updateScrollEffect();
}

if (langBtn) langBtn.addEventListener("click", function () { applyLang(state.lang === "en" ? "fa" : "en"); });

function updateScrollEffect() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;
  
  if (overlay) overlay.style.opacity = scrollPercent * 0.7;

  const aboutEl = document.getElementById("aboutText");
  const supportEl = document.getElementById("supportText");
  
  if (aboutEl && supportEl) {
    if (scrollPercent > 0.4) {
      aboutEl.textContent = ABOUT_TEXTS.creepy[state.lang];
      supportEl.textContent = SUPPORT_TEXTS.creepy[state.lang];
      aboutEl.style.color = "#900";
      supportEl.style.color = "#900";
      document.body.style.fontFamily = "'Courier New', Courier, monospace"; 
    } else {
      aboutEl.textContent = ABOUT_TEXTS.normal[state.lang];
      supportEl.textContent = SUPPORT_TEXTS.normal[state.lang];
      aboutEl.style.color = "";
      supportEl.style.color = "";
      document.body.style.fontFamily = "";
    }
  }
}

window.addEventListener("scroll", updateScrollEffect);
applyLang(state.lang);
if (cartCount) cartCount.textContent = state.cart;
/* =====================================================================
   کدهای پرداخت و پیگیری (Checkout & Tracking)
   ===================================================================== */
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const cartBtnElement = document.getElementById("cartBtn");
const trackBtn = document.getElementById("trackBtn");
const trackingInput = document.getElementById("trackingInput");
const trackResult = document.getElementById("trackResult");

let generatedCode = "";

// باز کردن پنجره پرداخت وقتی روی سبد خرید کلیک می‌شه
if (cartBtnElement && checkoutModal) {
  cartBtnElement.addEventListener("click", function(e) {
    e.preventDefault();
    checkoutModal.style.display = "block";
  });
}

// بستن پنجره پرداخت
if (closeCheckout) {
  closeCheckout.onclick = function() { checkoutModal.style.display = "none"; };
}

// ثبت سفارش و ساخت کد پیگیری
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // ساخت یک کد پیگیری ترسناک
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    generatedCode = "RS-" + randomNum + "-666";
    
    // تغییر محتوای پنجره
    checkoutModal.innerHTML = `
      <div class="modal-content" style="text-align:center;">
        <h2 style="color:#900">Order Received</h2>
        <p>We have taken what is ours.</p>
        <p style="margin-top:20px;">Your tracking code is:</p>
        <strong style="font-size:24px; background:#eee; padding:10px 20px; display:inline-block; margin:10px 0;">${generatedCode}</strong>
        <p style="font-size:14px; color:#666;">Enter this code in the Support section to check your delivery status.</p>
        <button onclick="document.getElementById('checkoutModal').style.display='none'" class="btn-primary" style="margin-top:20px;">Close</button>
      </div>
    `;
    
    // خالی کردن سبد خرید
    state.cart = 0;
    if (cartCount) cartCount.textContent = 0;
    save("rs_cart", 0);
  });
}

// بررسی کد پیگیری در بخش پشتیبانی
if (trackBtn) {
  trackBtn.addEventListener("click", function() {
    const userCode = trackingInput.value.trim().toUpperCase();
    if (!userCode) return;
    
    trackResult.style.opacity = 0;
    setTimeout(function() {
      // اگه کد درست باشه یا با RS شروع بشه پیام ترسناک می‌ده
      if (userCode === generatedCode || userCode.startsWith("RS-")) {
        trackResult.textContent = "STATUS: We are already inside your house. Look behind you.";
      } else {
        trackResult.textContent = "Invalid code. We know you tried to lie.";
      }
      trackResult.style.opacity = 1;
    }, 800);
  });
}
