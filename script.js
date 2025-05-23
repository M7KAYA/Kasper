document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // إزالة الكلاس 'active' من جميع الروابط
      navLinks.forEach((l) => l.classList.remove("active"));
      // إضافة 'active' للرابط الذي تم النقر عليه
      this.classList.add("active");
    });
  });
});

//!!!!

document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("nav .fa-bars");
  let menuList = document.querySelector("nav ul");

  // عند الضغط على أيقونة القائمة
  menuIcon.addEventListener("click", function (event) {
    menuList.classList.toggle("active"); // تبديل ظهور/إخفاء القائمة
    event.stopPropagation(); // يمنع الإغلاق فور الضغط
  });

  // عند الضغط خارج القائمة، يتم إخفاؤها
  document.addEventListener("click", function (event) {
    if (!menuList.contains(event.target) && !menuIcon.contains(event.target)) {
      menuList.classList.remove("active");
    }
  });

  // عند الضغط على أي لينك داخل القائمة، يتم إخفاؤها
  menuList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      menuList.classList.remove("active");
    });
  });
});

//! !!!!

document.addEventListener("DOMContentLoaded", function () {
  let searchIcon = document.querySelector(".search-box i");
  let searchInput = document.querySelector(".search-box input");

  searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle("show-input");
    searchInput.focus(); // يجعل المؤشر داخل الـ input مباشرة
  });

  // إغلاق البحث عند النقر خارج الـ input
  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !searchIcon.contains(e.target)) {
      searchInput.classList.remove("show-input");
    }
  });
});

//!!!!

document.addEventListener("DOMContentLoaded", function () {
  // الحصول على جميع الأقسام التي لها id
  const sections = document.querySelectorAll("section[id]");
  // الحصول على جميع روابط التنقل
  const navLinks = document.querySelectorAll("nav ul li a");

  // إعدادات المراقب
  const observerOptions = {
    root: null, // مراقبة داخل viewport
    threshold: 0.6, // عند ظهور 60% من القسم
  };

  // دالة استدعاء المراقب
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // الحصول على id للقسم الذي يظهر
        const sectionId = entry.target.getAttribute("id");
        // إزالة aria-current من جميع الروابط
        navLinks.forEach((link) => {
          link.removeAttribute("aria-current");
          // إذا كان href للرابط يطابق القسم الحالي
          if (link.getAttribute("href") === "#" + sectionId) {
            link.setAttribute("aria-current", "page");
          }
        });
      }
    });
  };

  // إنشاء المراقب
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // مراقبة كل قسم
  sections.forEach((section) => observer.observe(section));
});

//!!!!

document.addEventListener("DOMContentLoaded", function () {
  let bullets = document.querySelectorAll(".bullets span");
  let landingSectionOverlay = document.querySelector(".landing");
  let rightArrow = document.querySelector(".arrow .right");
  let leftArrow = document.querySelector(".arrow .left");

  // مصفوفة الصور (تأكد من صحة المسارات)
  let backgrounds = [
    "data/imgs/landing-1-resized.jpg",
    "data/imgs/landing-2.jpg",
    "data/imgs/landing-3.jpg",
    "data/imgs/landing-4.jpg",
    "data/imgs/landing-5.jpg",
  ];

  function updateActiveBullet(newIndex) {
    // إزالة `active` من جميع الـ spans
    bullets.forEach((b) => b.classList.remove("active"));

    // إضافة `active` للعنصر الجديد
    bullets[newIndex].classList.add("active");

    // تغيير الخلفية بناءً على الـ index الجديد
    landingSectionOverlay.style.backgroundImage = `url('${backgrounds[newIndex]}')`;
  }

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", function () {
      updateActiveBullet(index);
    });
  });

  rightArrow.addEventListener("click", function () {
    let currentIndex = [...bullets].findIndex((b) =>
      b.classList.contains("active")
    );
    let newIndex = (currentIndex + 1) % bullets.length; // ينتقل إلى التالي أو يعود للأول
    updateActiveBullet(newIndex);
  });

  leftArrow.addEventListener("click", function () {
    let currentIndex = [...bullets].findIndex((b) =>
      b.classList.contains("active")
    );
    let newIndex = (currentIndex - 1 + bullets.length) % bullets.length; // ينتقل إلى السابق أو يعود للأخير
    updateActiveBullet(newIndex);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".portfolio .container ul li");
  const images = document.querySelectorAll(".portfolio .portfolio-content .img-box");

  function filterImages(category) {
      images.forEach(img => {
          img.style.display = "none"; // إخفاء جميع الصور
          if (category === "all" || img.getAttribute("data-category") === category) {
              img.style.display = "block"; // إظهار الصور التي تنتمي للفئة المحددة
          }
      });
  }

  menuItems.forEach(item => {
      item.addEventListener("click", function() {
          document.querySelector(".portfolio .container ul li.active").classList.remove("active"); // إزالة الكلاس active من العنصر الحالي
          this.classList.add("active"); // إضافة الكلاس active للعنصر الذي تم الضغط عليه
          filterImages(this.getAttribute("data-category")); // تصفية الصور بناءً على الفئة
      });
  });

  //! تصفية الصور عند تحميل الصفحة ليظهر كل المحتوى في البداية
  filterImages("all");
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".progress").forEach(bar => {
      let progressValue = bar.getAttribute("data-progress"); // جلب قيمة progress
      bar.style.width = progressValue; // تعيين العرض بناءً على القيمة
  });
});


// تحديد العناصر المطلوبة
const shuffleTeames = document.querySelectorAll('.shuffel-teames li');
const teams = document.querySelectorAll('.team');
const skillsContents = document.querySelectorAll('.skills-content');

// إضافة الحدث على الـ li
shuffleTeames.forEach((li, index) => {
  li.addEventListener('click', () => {
    // إزالة الكلاس active من كل الـ li
    shuffleTeames.forEach(item => item.classList.remove('active'));
    
    // إضافة الكلاس active للـ li اللي تم الضغط عليها
    li.classList.add('active');
    
    // إخفاء كل الفرق و الـ skills
    teams.forEach(team => team.style.display = 'none');
    skillsContents.forEach(skill => skill.style.display = 'none');
    
    // عرض الفريق و الـ skills المتوافقين مع الـ li
    teams[index].style.display = 'block';
    skillsContents[index].style.display = 'block';
  });
});