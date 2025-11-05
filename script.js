// 1. تعريف بيانات المنيو (أضف وحرر هنا قائمة طعامك)
const menu = [
    {
        id: 1,
        name: "المنسف الأردني",
        category: "أطباق رئيسية",
        price: "45 ريال",
        desc: "طبق تقليدي فاخر من الأرز واللحم البلدي المطبوخ في اللبن (الجميد).",
        img: "images/mansaf.jpg" // تذكر تغيير المسار
    },
    {
        id: 2,
        name: "حمص بالزيت",
        category: "مقبلات",
        price: "15 ريال",
        desc: "حمص كريمي مُعد على الطريقة الشامية مع زيت الزيتون البكر.",
        img: "images/hummus.jpg"
    },
    {
        id: 3,
        name: "كنافة نابلسية",
        category: "حلويات",
        price: "25 ريال",
        desc: "كنافة خشنة بالجبنة العكاوي مع شيرة (قطر) الفستق الحلبي.",
        img: "images/kunafa.jpg"
    },
    {
        id: 4,
        name: "مقلوبة الدجاج",
        category: "أطباق رئيسية",
        price: "40 ريال",
        desc: "طبق المقلوبة الشهير مع الباذنجان والزهرة والدجاج المتبل.",
        img: "images/maqlooba.jpg"
    },
    {
        id: 5,
        name: "تبولة شامية",
        category: "مقبلات",
        price: "18 ريال",
        desc: "سلطة غنية بالبقدونس، البرغل، الطماطم، وعصير الليمون.",
        img: "images/tabbouleh.jpg"
    }
];

const menuContainer = document.getElementById('menu-items');
const filterBtns = document.querySelectorAll('.filter-btn');

// 2. وظيفة عرض عناصر المنيو
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
    // يتم دمج كل العناصر المرجعة إلى سلسلة واحدة وعرضها
    menuContainer.innerHTML = displayMenu.join("");
}

// عند تحميل الصفحة، اعرض كل العناصر
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

// 3. وظيفة فلاتر التصنيف
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // تحديد التصنيف المستهدف من زر الـ data-category
        const category = e.currentTarget.dataset.category;

        // إزالة حالة "نشط" من جميع الأزرار وإضافتها للزر الحالي
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // تصفية المصفوفة بناءً على التصنيف
        const menuCategory = menu.filter(function (menuItem) {
            if (category === "الكل") {
                return true; // عرض الكل
            }
            return menuItem.category === category;
        });

        // عرض العناصر المصفاة
        displayMenuItems(menuCategory);
    });
});