// 1. تعريف بيانات المنيو (تم التحديث بناءً على الصور المرفقة)
const menu = [
    // --- الأطباق الرئيسية (Main Dishes) ---
    {
        id: 1,
        name: "تاكو اللحم أو الدجاج",
        category: "أطباق رئيسية",
        price: "48 ريال",
        desc: "ثلاث قطع من التاكو المقرمش محشوة باللحم المفروم أو الدجاج المتبل، تقدم مع البطاطس المقلية.",
        img: "images/BeeforChickenTacos.jpg"
    },
    {
        id: 2,
        name: "كلاسيك تشيز برجر",
        category: "أطباق رئيسية",
        price: "55 ريال",
        desc: "شريحة لحم بقري فاخر، جبنة شيدر ذائبة، خس، بصل، وطماطم، في خبز السمسم المحمص.",
        img: "images/ClassicCheeseburger.jpg"
    },
      {
        id: 3,
        name: "كلاسيك تشيز برجر",
        category: "أطباق رئيسية",
        price: "55 ريال",
        desc: "شريحة لحم بقري فاخر، جبنة شيدر ذائبة، خس، بصل، وطماطم، في خبز السمسم المحمص.",
        img: "images/ClassicCheeseburger.jpg"
    },
      {
        id: 4,
        name: "كلاسيك تشيز برجر",
        category: "أطباق رئيسية",
        price: "55 ريال",
        desc: "شريحة لحم بقري فاخر، جبنة شيدر ذائبة، خس، بصل، وطماطم، في خبز السمسم المحمص.",
        img: "images/ClassicCheeseburger.jpg"
    },
    
    // --- مقبلات (Appetizers) ---
    {
        id: 5,
        name: "ناتشوز اللحم والجبن",
        category: "مقبلات",
        price: "35 ريال",
        desc: "رقائق ناتشوز مقرمشة مغطاة بصلصة الجبن الغنية وحبيبات اللحم والفلفل الهالبينو الحار.",
        img: "images/BeefCheeseNachos.jpg"
    },
    
    // --- الحلويات (Desserts) ---
    {
        id: 6,
        name: "كوكيز سكيلت",
        category: "حلويات",
        price: "38 ريال",
        desc: "كوكيز شوكولاتة طازج مخبوز في مقلاة حديدية، يقدم ساخنًا مع آيس كريم فانيلا وصوص الشوكولاتة.",
        img: "images/Cookie Skillet.jpg"
    },
    {
        id: 7,
        name: "كلاسيك تيراميسو",
        category: "حلويات",
        price: "32 ريال",
        desc: "طبقات من بسكويت ليدي فينجر المنقوع بالقهوة مع جبنة الماسكربون الكريمية ورشة كاكاو.",
        img: "images/ClassicTiramisu.jpg"
    },
    {
        id: 8,
        name: "تشيز كيك شوكولاتة وفستق",
        category: "حلويات",
        price: "40 ريال",
        desc: "تشيز كيك بارد مغطى بصوص الشوكولاتة الغامقة وقطع الفستق الحلبي المجروش.",
        img: "images/ChocolatePistachioCheesecake.jpg"
    },
    
    // --- المشروبات الباردة (Cold Drinks) ---
    {
        id: 9,
        name: "سموذي فراولة كلاسيك",
        category: "مشروبات باردة",
        price: "28 ريال",
        desc: "مزيج منعش من الفراولة الطازجة، الزبادي، والعسل.",
        img: "images/ClassicStrawberrySmoothie.jpg"
    },
    {
        id: 10,
        name: "مياه بيرين فوارة",
        category: "مشروبات باردة",
        price: "10 ريال",
        desc: "مياه معدنية فوارة من بيرين، تقدم باردة مع شريحة ليمون.",
        img: "images/Bireen.jpg"
    },
    
    // --- المشروبات الساخنة (Hot Drinks) ---
    {
        id: 11,
        name: "كلاسيك لاتيه",
        category: "مشروبات ساخنة",
        price: "18 ريال",
        desc: "قهوة إسبريسو غنية مع حليب مبخر ورغوة حليب ناعمة.",
        img: "images/ClassicLatte.jpg"
    },
    {
        id: 12,
        name: "كلاسيك إسبريسو",
        category: "مشروبات ساخنة",
        price: "12 ريال",
        desc: "جرعة مركزة وغنية من القهوة الداكنة، محضرة بعناية.",
        img: "images/ClassicEspresso.jpg"
    }
];

// ... (بقية كود JavaScript يبقى كما هو لتشغيل الفلاتر) ...
const menuContainer = document.getElementById('menu-items');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item" data-category="${item.category}">
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <div class="item-header">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
            </div>
        </article>`;
    });
    menuContainer.innerHTML = displayMenu.join("");
}

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.category;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const menuCategory = menu.filter(function (menuItem) {
            if (category === "الكل") {
                return true;
            }
            return menuItem.category === category;
        });

        displayMenuItems(menuCategory);
    });
});
