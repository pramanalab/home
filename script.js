// Data Models & Constants
const STUDIO_EMAIL = "pramanalab@gmail.com";

const INITIAL_PROJECTS = [
  {
    id: "p1",
    title: "FinTech Pulse - דשבורד פיננסי בזמן אמת",
    category: "web",
    categoryLabel: "מערכת Full Stack",
    client: "פינטק פולס בע״מ",
    description: "מערכת ניהול פיננסית מתקדמת הכוללת גרפים בזמן אמת, דוחות אוטומטיים, ואינטגרציה לצינורות תשלום וסליקה מורכבים.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/fintech-pulse",
    completionTime: "6 שבועות",
    rating: 5
  },
  {
    id: "p2",
    title: "GourmetToGo - אפליקציית משלוחים מותאמת",
    category: "mobile",
    categoryLabel: "אפליקציית מובייל",
    client: "רשת גורמה קוויק",
    description: "אפליקציית iOS & Android למשלוחי מזון מהירים עם מעקב GPS חי על השליח, תשלום ב-Apple/Google Pay ומערכת מועדון לקוחות.",
    tags: ["React Native", "Firebase", "Redux", "Node.js", "Google Maps API"],
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/gourmet-app",
    completionTime: "8 שבועות",
    rating: 5
  },
  {
    id: "p3",
    title: "UrbanFit - חנות אונליין ואיקומרס יוקרתי",
    category: "ecommerce",
    categoryLabel: "חנות איקומרס",
    client: "אורבן פיט ישראל",
    description: "חנות דיגיטלית מלאה למותג אופנת ספורט עם סליקת אשראי, ניהול מלאי אוטומטי, מנגנון קופונים וממשק ניהול חכם ומהיר.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "GraphQL", "Prisma"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/urbanfit",
    completionTime: "4 שבועות",
    rating: 5
  },
  {
    id: "p4",
    title: "MediCare Portal - פורטל זימון תורים ורפואה",
    category: "dashboard",
    categoryLabel: "מערכת ניהול & CRM",
    client: "מרפאות מדיקייר",
    description: "מערכת ניהול תורים ותיקים רפואיים מאובטחת בענן, כוללת תזכורות SMS אוטומטיות, חתימה דיגיטלית ודשבורד רופאים מתקדם.",
    tags: ["React", "Python", "FastAPI", "Docker", "AWS"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/medicare",
    completionTime: "7 שבועות",
    rating: 5
  }
];

const INITIAL_REVIEWS = [
  {
    id: "r1",
    name: "אלון ברק",
    role: "מנכ״ל",
    company: "ברק טכנולוגיות בע״מ",
    website: "https://barak-tech.co.il",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    comment: "צוות Pramana Lab בנה עבורנו אפליקציית מובייל יוצאת מן הכלל. הביצועים מהירים, חווית המשתמש מושלמת והפרויקט נמסר עוד לפני הדד-ליין. ממליץ בחום!",
    date: "2026-09-12",
    verified: true
  },
  {
    id: "r2",
    name: "מאיה שחר",
    role: "סמנכ״לית שיווק",
    company: "גלובל סטודיו",
    website: "https://globalstudio.co.il",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    comment: "העבודה מול פראמנה לאב הייתה חוויה מדהימה. הם הבינו בדיוק את צרכי העסק הקטן שלנו, בנו אתר Full Stack מודרני שהעלה את אחוז ההמרה ב-40% תוך חודש.",
    date: "2026-10-01",
    verified: true
  },
  {
    id: "r3",
    name: "יוסי כהן",
    role: "מייסד",
    company: "אורבן פיט",
    website: "https://urbanfit.co.il",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    comment: "איכות קוד ללא פשרות, מענה מהיר בכל שעה ותמיכה מלאה גם לאחר השקת האתר. ללא שום ספק הבית שלנו לפיתוח תוכנה.",
    date: "2026-10-18",
    verified: true
  }
];

// App State
let activeTab = 'home';
let currentCategoryFilter = 'all';
let reviewsList = [];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initReviews();
  renderProjects();
  initCalculator();
  initHeroCanvas();
});

// Tab Switching
function switchTab(tabId) {
  activeTab = tabId;
  const tabs = ['home', 'services', 'portfolio', 'calculator', 'clients', 'about', 'quote'];
  
  tabs.forEach(t => {
    const pageEl = document.getElementById(`page-${t}`);
    const navBtn = document.getElementById(`nav-${t}`);
    const mobileBtn = document.getElementById(`mobile-nav-${t}`);
    
    if (pageEl) {
      if (t === tabId) {
        pageEl.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        pageEl.classList.add('hidden');
      }
    }
    
    if (navBtn) {
      if (t === tabId) {
        navBtn.className = "px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-500/25 transition";
      } else {
        navBtn.className = "px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition";
      }
    }

    if (mobileBtn) {
      if (t === tabId) {
        mobileBtn.className = "w-full text-right p-3 rounded-xl bg-purple-600/30 text-cyan-300 font-bold border border-purple-500/30 transition";
      } else {
        mobileBtn.className = "w-full text-right p-3 rounded-xl text-slate-300 hover:bg-white/5 transition";
      }
    }
  });

  closeMobileMenu();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// Portfolio Section Logic
function filterProjects(category) {
  currentCategoryFilter = category;
  
  const buttons = document.querySelectorAll('.portfolio-filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.className = "portfolio-filter-btn px-5 py-2 rounded-full bg-purple-600 text-white font-semibold text-xs shadow-md shadow-purple-600/30 transition";
    } else {
      btn.className = "portfolio-filter-btn px-5 py-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 text-xs transition";
    }
  });

  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = currentCategoryFilter === 'all' 
    ? INITIAL_PROJECTS 
    : INITIAL_PROJECTS.filter(p => p.category === currentCategoryFilter);

  container.innerHTML = filtered.map(p => `
    <div class="glass-panel glass-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col group border border-white/10" onclick="openProjectModal('${p.id}')">
      <div class="relative h-48 w-full overflow-hidden bg-slate-800">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-[#07050e] via-transparent to-transparent opacity-90"></div>
        <span class="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/80 text-purple-200 border border-purple-500/40 backdrop-blur-md">
          ${p.categoryLabel}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="text-xs text-cyan-400 font-semibold mb-1">לקוח: ${p.client}</div>
          <h3 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">${p.title}</h3>
          <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">${p.description}</p>
        </div>
        <div class="space-y-3 pt-3 border-t border-white/5">
          <div class="flex flex-wrap gap-1.5">
            ${p.tags.map(t => `<span class="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5 font-mono">${t}</span>`).join('')}
          </div>
          <div class="flex justify-between items-center text-xs text-slate-400 pt-1">
            <span>זמן ביצוע: <strong class="text-white">${p.completionTime}</strong></span>
            <span class="text-purple-400 font-bold group-hover:translate-x-[-4px] transition-transform flex items-center gap-1">פרטים נוספים ←</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function openProjectModal(id) {
  const project = INITIAL_PROJECTS.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');

  body.innerHTML = `
    <div class="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
      <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d091a] via-transparent to-transparent"></div>
      <span class="absolute top-4 right-4 text-xs font-bold px-3.5 py-1.5 rounded-full bg-purple-600 text-white shadow-lg">
        ${project.categoryLabel}
      </span>
    </div>
    <div class="space-y-4 text-right">
      <div class="text-sm font-semibold text-cyan-400">עבור: ${project.client}</div>
      <h2 class="text-2xl font-bold text-white">${project.title}</h2>
      <p class="text-slate-300 text-sm leading-relaxed">${project.description}</p>
      
      <div class="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-xs text-slate-400">
        <div>זמן פיתוח: <strong class="text-white">${project.completionTime}</strong></div>
        <div>דירוג לקוח: <strong class="text-amber-400">★★★★★</strong></div>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-400 mb-2">סטאק טכנולוגי:</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(t => `<span class="text-xs px-3 py-1 rounded-lg bg-purple-950/60 text-purple-300 border border-purple-500/30 font-mono">${t}</span>`).join('')}
        </div>
      </div>

      <div class="pt-6 flex gap-3">
        <button onclick="closeProjectModal(); switchTab('quote'); prefillQuote('${project.category}');" class="flex-1 gradient-btn py-3 rounded-xl text-white font-bold text-sm shadow-lg glow-primary">
          ✨ מעוניין בפרויקט דומה? צור קשר
        </button>
        <button onclick="closeProjectModal()" class="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm">
          סגור
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
}

// Interactive Price & Cost Calculator Logic
function initCalculator() {
  const typeRadios = document.querySelectorAll('input[name="calc-type"]');
  const pagesSlider = document.getElementById('calc-pages');
  const designRadios = document.querySelectorAll('input[name="calc-design"]');
  const mobileCheck = document.getElementById('calc-mobile');
  const cmsCheck = document.getElementById('calc-cms');

  typeRadios.forEach(r => r.addEventListener('change', updateCalculator));
  if (pagesSlider) {
    pagesSlider.addEventListener('input', () => {
      document.getElementById('calc-pages-val').innerText = pagesSlider.value;
      updateCalculator();
    });
  }
  designRadios.forEach(r => r.addEventListener('change', updateCalculator));
  if (mobileCheck) mobileCheck.addEventListener('change', updateCalculator);
  if (cmsCheck) cmsCheck.addEventListener('change', updateCalculator);

  updateCalculator();
}

function updateCalculator() {
  const typeEl = document.querySelector('input[name="calc-type"]:checked');
  const designEl = document.querySelector('input[name="calc-design"]:checked');
  const pagesEl = document.getElementById('calc-pages');
  const mobileCheck = document.getElementById('calc-mobile');
  const cmsCheck = document.getElementById('calc-cms');

  if (!typeEl || !pagesEl || !designEl) return;

  const type = typeEl.value;
  const pages = parseInt(pagesEl.value, 10);
  const design = designEl.value;
  const needMobile = mobileCheck ? mobileCheck.checked : false;
  const needCms = cmsCheck ? cmsCheck.checked : false;

  let basePrice = 6000;
  if (type === 'mobile') basePrice = 12000;
  if (type === 'ecommerce') basePrice = 9000;
  if (type === 'dashboard') basePrice = 11000;

  const pageCost = (pages - 1) * 600;
  const designMultiplier = design === 'custom' ? 1.3 : 1.0;
  const mobileAdd = needMobile && type !== 'mobile' ? 3500 : 0;
  const cmsAdd = needCms ? 2500 : 0;

  const totalEstimate = Math.round((basePrice + pageCost + mobileAdd + cmsAdd) * designMultiplier);

  // Update DOM
  const totalDisplay = document.getElementById('calc-total-display');
  if (totalDisplay) {
    totalDisplay.innerText = `₪${totalEstimate.toLocaleString('he-IL')}`;
  }

  const breakdownEl = document.getElementById('calc-breakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = `
      <div class="flex justify-between py-1 text-slate-400"><span>בסיס פיתוח:</span><span class="text-white font-mono">₪${basePrice.toLocaleString()}</span></div>
      <div class="flex justify-between py-1 text-slate-400"><span>תוספת ${pages} מסכים/עמודים:</span><span class="text-white font-mono">₪${pageCost.toLocaleString()}</span></div>
      ${mobileAdd > 0 ? `<div class="flex justify-between py-1 text-slate-400"><span>התאמת Native Mobile:</span><span class="text-white font-mono">₪${mobileAdd.toLocaleString()}</span></div>` : ''}
      ${cmsAdd > 0 ? `<div class="flex justify-between py-1 text-slate-400"><span>מערכת ניהול CMS:</span><span class="text-white font-mono">₪${cmsAdd.toLocaleString()}</span></div>` : ''}
      <div class="flex justify-between py-1 text-slate-400"><span>רמת עיצוב (${design === 'custom' ? 'Custom 1.3x' : 'Standard'}):</span><span class="text-cyan-400 font-mono">${design === 'custom' ? '+30%' : 'רגיל'}</span></div>
    `;
  }
}

function transferEstimateToOrder() {
  const typeEl = document.querySelector('input[name="calc-type"]:checked');
  const pagesEl = document.getElementById('calc-pages');
  const designEl = document.querySelector('input[name="calc-design"]:checked');
  const totalDisplay = document.getElementById('calc-total-display');

  const type = typeEl ? typeEl.value : 'web';
  const pages = pagesEl ? pagesEl.value : 5;
  const design = designEl && designEl.value === 'custom' ? 'עיצוב אישי Custom' : 'עיצוב סטנדרטי';
  const totalText = totalDisplay ? totalDisplay.innerText : '';

  switchTab('quote');

  const projectTypeSelect = document.getElementById('order-project-type');
  if (projectTypeSelect) projectTypeSelect.value = type;

  const detailsTextarea = document.getElementById('order-details');
  if (detailsTextarea) {
    detailsTextarea.value = `פנייה על בסיס מחשבון הערכת עלויות:\n- סוג פרויקט: ${type}\n- כמות עמודים/מסכים: ${pages}\n- רמת עיצוב: ${design}\n- הערכת מחיר משוערת: ${totalText}\n\nפרטים נוספים על העסק והדרישות: `;
  }

  showToast('הערכת המחיר הועברה בהצלחה לטופס ההזמנה! ✨');
}

function prefillQuote(type) {
  const projectTypeSelect = document.getElementById('order-project-type');
  if (projectTypeSelect) projectTypeSelect.value = type;
}

// Reviews & Testimonials Logic
function initReviews() {
  try {
    const saved = localStorage.getItem('pramana_reviews');
    reviewsList = saved ? JSON.parse(saved) : [...INITIAL_REVIEWS];
  } catch (e) {
    reviewsList = [...INITIAL_REVIEWS];
  }
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = reviewsList.map(r => `
    <div class="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-5 border border-white/10 hover:border-purple-500/30 transition">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="${r.avatar || 'https://via.placeholder.com/100?text=User'}" alt="${r.name}" class="w-12 h-12 rounded-full object-cover border border-purple-500/30">
            <div>
              <h4 class="font-bold text-white text-base">${r.name}</h4>
              <div class="text-xs text-slate-400">${r.role} • <span class="text-purple-300 font-semibold">${r.company}</span></div>
            </div>
          </div>
          <div class="text-amber-400 text-sm tracking-wider">
            ${'★'.repeat(r.rating || 5)}
          </div>
        </div>
        <p class="text-slate-300 text-sm leading-relaxed">"${r.comment}"</p>
      </div>
      <div class="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
        <span>${r.date || 'לאחרונה'}</span>
        ${r.website ? `<a href="${r.website}" target="_blank" class="text-cyan-400 hover:underline">אתר החברה ↗</a>` : '<span class="text-emerald-400 font-semibold">✓ לקוח מאומת</span>'}
      </div>
    </div>
  `).join('');
}

function openAddReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.add('active');
}

function closeAddReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.remove('active');
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rev-name').value.trim();
  const company = document.getElementById('rev-company').value.trim();
  const role = document.getElementById('rev-role').value.trim() || 'לקוח';
  const rating = parseInt(document.getElementById('rev-rating').value, 10) || 5;
  const comment = document.getElementById('rev-comment').value.trim();

  if (!name || !company || !comment) {
    showToast('נא למלא את כל שדות החובה בטופס');
    return;
  }

  const newReview = {
    id: 'r_' + Date.now(),
    name,
    role,
    company,
    website: '',
    rating,
    avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&q=80&w=200`,
    comment,
    date: new Date().toISOString().split('T')[0],
    verified: true
  };

  reviewsList.unshift(newReview);
  try {
    localStorage.setItem('pramana_reviews', JSON.stringify(reviewsList));
  } catch (err) {}

  renderReviews();
  closeAddReviewModal();
  e.target.reset();
  showToast('תודה רבה! חוות הדעת שלך התווספה בהצלחה.');
}

// Order Form & Mail Handler
function handleOrderSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('order-name').value.trim();
  const email = document.getElementById('order-email').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const company = document.getElementById('order-company').value.trim() || 'לא צוין';
  const projectType = document.getElementById('order-project-type').value;
  const budget = document.getElementById('order-budget').value;
  const timeline = document.getElementById('order-timeline').value;
  const details = document.getElementById('order-details').value.trim();

  const formattedSubject = `פנייה חדשה מאתר Pramana Lab: ${name} (${company})`;
  const formattedBody = `שלום צוות Pramana Lab,

התקבלה פנייה חדשה להצעת מחיר מאתר האינטרנט:

- שם מלא: ${name}
- דוא"ל לחזרה: ${email}
- טלפון: ${phone}
- שם העסק / חברה: ${company}
- סוג הפרויקט: ${projectType}
- תקציב משוער: ${budget}
- לוח זמנים מבוקש: ${timeline}

תיאור הפרויקט והדרישות:
${details}

נשלח באמצעות האתר הרשמי pramanalab.com`;

  // Open Mail Client
  const mailtoUrl = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;
  window.location.href = mailtoUrl;

  // Show Success Message Modal with Copy button
  openOrderSuccessModal(formattedBody);
}

function openOrderSuccessModal(bodyText) {
  const modal = document.getElementById('order-success-modal');
  const detailsPreview = document.getElementById('order-success-preview');
  if (detailsPreview) detailsPreview.value = bodyText;
  if (modal) modal.classList.add('active');
}

function closeOrderSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) modal.classList.remove('active');
}

function copyOrderDetails() {
  const detailsPreview = document.getElementById('order-success-preview');
  if (detailsPreview) {
    navigator.clipboard.writeText(detailsPreview.value).then(() => {
      showToast('פרטי הפנייה הועתקו ללוח בהצלחה! 📋');
    }).catch(() => {
      detailsPreview.select();
      document.execCommand('copy');
      showToast('הועתק ללוח!');
    });
  }
}

// Toast Alert
let toastTimer = null;
function showToast(message, duration = 3500) {
  const container = document.getElementById('toast-container');
  const textEl = document.getElementById('toast-message');
  if (!container || !textEl) return;

  textEl.innerText = message;
  container.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    container.classList.remove('show');
  }, duration);
}

// Interactive Canvas Constellation Effect on Hero Banner
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 22), 55);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.18 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

