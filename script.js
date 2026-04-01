const SITE_DATA = {
    navigation: [
        { label: "Главная", href: "#hero" },
        { label: "Биография", href: "#bio-section" },
        { label: "Деятельность", href: "#activity" },
        { label: "Достижения", href: "#achievements" },
        { label: "Новости", href: "#news" },
        { label: "Контакты", href: "#contacts" }
    ],
    statistics: [
        { value: "500", suffix: " тыс.", description: "членов профсоюза", icon: "fas fa-users" },
        { value: "120", suffix: " лет", description: "профсоюзному движению", icon: "fas fa-history" },
        { value: "80", suffix: "+", description: "территориальных организаций", icon: "fas fa-map-marker-alt" },
        { value: "95", suffix: "%", description: "охват колдоговорами", icon: "fas fa-file-contract" } // Наша цифра
    ],
    timeline: [
        { year: "1946", event: "Дата рождения", description: "Родился 12 января в городе Похвистнево." },
        { year: "1978", event: "Переход на профсоюзную работу", description: "Избран председателем профкома Московского почтамта." },
        { year: "1990", event: "Председатель Профсоюза", description: "Избран главой Профсоюза работников связи России." },
        { year: "2025", event: "Очередной съезд Профсоюза", description: "Подтверждение полномочий и стратегия развития до 2030 года." }
    ],
    activities: [
        { title: "Защита прав", description: "Представление интересов работников в трудовых конфликтах и при разработке отраслевых законов.", icon: "fas fa-shield-alt" },
        { title: "Социальное партнерство", description: "Заключение и контроль выполнения Отраслевого тарифного соглашения.", icon: "fas fa-handshake" },
        { title: "Охрана труда", description: "Мониторинг условий труда и производственной безопасности на предприятиях связи.", icon: "fas fa-user-shield" }
    ],
    achievements: [
        { title: "Отраслевое тарифное соглашение", description: "Регулярное подписание ключевого документа, гарантирующего рост зарплат и расширенные соцпакеты." },
        { title: "Цифровизация профсоюза", description: "Запуск электронного профсоюзного билета и онлайн-приемной для обращений." },
        { title: "Сохранение рабочих мест", description: "Успешное ведение переговоров в периоды реструктуризации крупнейших компаний отрасли." },
        { title: "Развитие молодежного совета", description: "Привлечение молодых специалистов к активной защите своих трудовых прав." }
    ],
    news: [
        { title: "РТРС и Профсоюз подписали новый коллективный договор", date: "25.03.2026", summary: "Ключевой документ, гарантирующий защиту прав работников на ближайшие три года.", img: "news_rtrs.jpg" },
        { title: "В Казани выбрали лучших мастеров своего дела!", date: "23.03.2026", summary: "Прошел конкурс профессионального мастерства среди ИТР РТРС в ПФО.", img: "news_kazan_masters.jpg" },
        { title: "Встреча в Центральном комитете Профсоюза", date: "24 марта 2026", summary: "Анатолий Назейкин встретился с Аркадием Недбаем (НПФ «Альянс»).", img: "news_meeting_alliance.jpg" },
        { title: "«Единая Россия» выступает за быстрое решение проблем почты", date: "19.03.2026", summary: "Анатолий Назейкин обсудил насущные вопросы с Евгением Ревенко.", img: "news_meeting_edro.jpg" },
        { title: "В Москве состоялся III Всероссийский форум трудящихся женщин", date: "17.03.2026", summary: "ГК «Измайлово» стал точкой притяжения для активных женщин из профсоюзов.", img: "news_women_forum.jpg" },
        { title: "Молодежь за учебу!", date: "17.03.2026", summary: "Активисты Калининградской профсоюзной организации работников почты.", img: "news_kaliningrad_study.jpg" }
    ],
    gallery: [
        { img: "news_rtrs.jpg", alt: "Подписание коллективного договора РТРС", category: "events" },
        { img: "news_kazan_masters.jpg", alt: "Конкурс профессионального мастерства в Казани", category: "events" },
        { img: "news_meeting_alliance.jpg", alt: "Встреча с Аркадием Недбаем", category: "meetings" },
        { img: "news_meeting_edro.jpg", alt: "Встреча с Евгением Ревенко", category: "meetings" },
        { img: "news_women_forum.jpg", alt: "III Всероссийский форум трудящихся женщин", category: "events" },
        { img: "news_kaliningrad_study.jpg", alt: "XV Зимняя молодежная профсоюзная школа", category: "events" },
        { img: "news_rtrs_bowling.jpg", alt: "Корпоративный турнир по боулингу", category: "events" },
        { img: "news_kalmykia_sport.jpg", alt: "Связисты Калмыцкого филиала ПАО «Ростелеком»", category: "events" }
    ],
    contacts: [
        { type: "Адрес", value: "119119, г. Москва, Ленинский проспект, д. 42" },
        { type: "Телефон", value: "+7 (495) 938-77-55" },
        { type: "Электронная почта", value: "rs@profsvyaz.ru" }
    ],
    resources: [
        { label: "Официальный сайт Профсоюза", href: "https://www.profsvyazy.ru" },
        { label: "Нормативные документы", href: "#" },
        { label: "Архив новостей", href: "#" }
    ],
    socials: [
        { label: "VK", icon: "fab fa-vk", href: "#" },
        { label: "Telegram", icon: "fab fa-telegram-plane", href: "#" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initContent();
    initModals();
    initScrollAnimations();
    initGalleryFilters();
    initBurgerMenu();
});

function initContent() {
    document.getElementById("nav-items").innerHTML = SITE_DATA.navigation.map(item => `
        <li><a href="${item.href}" class="hover:text-[#B8975E] transition-colors duration-300 font-medium text-xs xl:text-sm uppercase tracking-wider">${item.label}</a></li>
    `).join("");

    document.getElementById("mobile-nav-items").innerHTML = SITE_DATA.navigation.map(item => `
        <li><a href="${item.href}" class="block py-2 px-4 hover:bg-[#B8975E]/10 hover:text-[#B8975E] transition-colors duration-300 font-medium text-sm uppercase tracking-wider mobile-link">${item.label}</a></li>
    `).join("");

    document.getElementById("statistics-grid").innerHTML = SITE_DATA.statistics.map(item => `
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center reveal">
            <div class="text-[#B8975E] mb-4"><i class="${item.icon} fa-2x"></i></div>
            <div class="text-4xl md:text-5xl font-serif font-bold mb-2 text-[#010B1A]">${item.value}${item.suffix}</div>
            <div class="text-gray-500 text-sm font-sans">${item.description}</div>
        </div>
    `).join("");

    document.getElementById("timeline-list").innerHTML = SITE_DATA.timeline.map((item, index) => `
        <div class="relative pl-10 pb-12 last:pb-0 reveal">
            <div class="absolute left-[9px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-[#B8975E] to-[#B8975E]/20 
                ${index === SITE_DATA.timeline.length - 1 ? 'hidden' : ''}"></div>
            <div class="absolute left-0 top-1.5 w-5 h-5 flex items-center justify-center">
                <div class="absolute w-full h-full rounded-full bg-[#B8975E]/30 animate-ping"></div>
                <div class="relative w-3 h-3 rounded-full bg-[#B8975E] border-2 border-white shadow-md"></div>
            </div>
            <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 -mt-1">
                <div class="mb-3"><span class="text-xl font-serif font-bold text-[#B8975E]">${item.year}</span></div>
                <h4 class="text-lg font-serif font-bold mb-2 text-[#010B1A]">${item.event}</h4>
                <p class="text-gray-600 text-sm leading-relaxed font-sans">${item.description}</p>
            </div>
        </div>
    `).join("");

    document.getElementById("activity-grid").innerHTML = SITE_DATA.activities.map(item => `
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center reveal">
            <div class="text-[#B8975E] mb-4"><i class="${item.icon} fa-3x"></i></div>
            <h4 class="text-xl font-serif font-bold mb-3 text-[#010B1A]">${item.title}</h4>
            <p class="text-gray-600 text-sm leading-relaxed font-sans">${item.description}</p>
        </div>
    `).join("");

    document.getElementById("achievements-list").innerHTML = SITE_DATA.achievements.map(item => `
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
            <h4 class="text-lg font-serif font-bold mb-2 text-[#010B1A]">${item.title}</h4>
            <p class="text-gray-600 text-sm leading-relaxed font-sans">${item.description}</p>
        </div>
    `).join("");

    document.getElementById("news-grid").innerHTML = SITE_DATA.news.map(item => `
        <div class="flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden reveal">
            <div class="h-48 md:h-56 overflow-hidden">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-all duration-500 hover:scale-110" loading="lazy">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="text-xs text-[#B8975E] font-semibold mb-2 font-sans">${item.date}</div>
                <h4 class="text-lg font-serif font-bold mb-2 text-[#010B1A] line-clamp-2">${item.title}</h4>
                <p class="text-gray-600 text-sm leading-relaxed font-sans line-clamp-3">${item.summary}</p>
            </div>
        </div>
    `).join("");

    const categories = ['all', ...new Set(SITE_DATA.gallery.map(i => i.category))];
    const categoryNames = { all: "Все", events: "Мероприятия", meetings: "Встречи" };
    document.getElementById("gallery-filters").innerHTML = categories.map(cat => `
        <button class="filter-btn border border-gray-200 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all hover:border-[#B8975E] font-sans ${cat === 'all' ? 'bg-[#B8975E] text-white border-[#B8975E]' : ''}" data-target="${cat}">${categoryNames[cat] || cat}</button>
    `).join("");

    renderGallery('all');

    document.getElementById("footer-content").innerHTML = `
        <div>
            <h4 class="text-xl font-serif mb-6 text-[#B8975E] font-bold">Контакты</h4>
            <ul class="space-y-4 text-gray-400 text-sm font-sans">
                ${SITE_DATA.contacts.map(c => `<li><span class="block text-xs uppercase text-[#B8975E] font-semibold mb-1 font-sans">${c.type}</span>${c.value}</li>`).join('')}
            </ul>
        </div>
        <div>
            <h4 class="text-xl font-serif mb-6 text-[#B8975E] font-bold">Официальные ресурсы</h4>
            <ul class="space-y-3 text-gray-400 text-sm font-sans">
                ${SITE_DATA.resources.map(r => `<li><a href="${r.href}" class="hover:text-[#B8975E] transition-colors">${r.label}</a></li>`).join('')}
            </ul>
        </div>
        <div>
            <h4 class="text-xl font-serif mb-6 text-[#B8975E] font-bold">Социальные сети</h4>
            <ul class="flex gap-4">
                ${SITE_DATA.socials.map(s => `<li><a href="${s.href}" class="text-2xl hover:text-[#B8975E] transition-colors" title="${s.label}"><i class="${s.icon}"></i></a></li>`).join('')}
            </ul>
        </div>
    `;
}

function renderGallery(filter) {
    const grid = document.getElementById("gallery-grid");
    const items = SITE_DATA.gallery.filter(item => filter === 'all' || item.category === filter);
    
    grid.innerHTML = items.map(item => `
        <div class="relative overflow-hidden rounded-lg shadow-sm group h-40 md:h-56 reveal relative">
            <div class="absolute inset-2 border-2 border-white/50 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="${item.img}" alt="${item.alt}" class="w-full h-full object-cover grayscale-0 transition-all duration-700 hover:scale-110" loading="lazy">
            <div class="absolute inset-0 bg-[#010B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20">
                <p class="text-white text-xs md:text-sm text-center font-sans font-medium">${item.alt}</p>
            </div>
        </div>
    `).join("");
    
    setTimeout(initScrollAnimations, 100);
}

function initGalleryFilters() {
    document.getElementById("gallery-filters").addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        
        document.querySelectorAll('#gallery-filters button').forEach(b => {
            b.className = "border border-gray-200 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium font-sans transition-all hover:border-[#B8975E]";
        });
        btn.className = "border border-gray-200 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium font-sans transition-all hover:border-[#B8975E] bg-[#B8975E] text-white border-[#B8975E]";
        
        const target = btn.getAttribute('data-target');
        renderGallery(target);
    });
}

function initBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-icon');

    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        if (isOpen) {
            burgerIcon.classList.remove('fa-bars');
            burgerIcon.classList.add('fa-times');
        } else {
            burgerIcon.classList.remove('fa-times');
            burgerIcon.classList.add('fa-bars');
        }
    });

    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            burgerIcon.classList.remove('fa-times');
            burgerIcon.classList.add('fa-bars');
        });
    });
}

function initModals() {
    const modal = document.getElementById('bio-modal');
    const openBtn = document.getElementById('bio-btn');
    const closeBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn'), document.getElementById('modal-backdrop')];

    openBtn.onclick = () => { modal.classList.remove('hidden'); document.body.style.overflow = 'hidden'; };
    closeBtns.forEach(btn => {
        if (btn) btn.onclick = () => { modal.classList.add('hidden'); document.body.style.overflow = 'auto'; };
    });

    document.getElementById("contact-btn").onclick = () => {
        document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", function(e) {
        const link = e.target.closest("a[href^='#']");
        if (!link || link.getAttribute("href") === "#") return;
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
}

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.05 });

    reveals.forEach(el => observer.observe(el));
}
