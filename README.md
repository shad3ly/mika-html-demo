# Mika — GitHub Pages Demo Landing

این پکیج برای قرار گرفتن مستقیم در ریشه یک GitHub Repository آماده شده است.

ساختار:
- `index.html` — لندینگ اصلی دمو
- `project/fa/` — نسخه فارسی RTL
- `project/en/` — نسخه انگلیسی LTR
- `assets/mika-preview.png` — تصویر پیش‌نمایش ارائه‌شده
- `assets/css/landing.css` و `assets/js/landing.js` — فایل‌های لندینگ

چهار حالت دمو:
- `project/fa/index.html?theme=light`
- `project/fa/index.html?theme=dark`
- `project/en/index.html?theme=light`
- `project/en/index.html?theme=dark`

برای انتشار:
1. تمام محتویات این پوشه را در ریشه Repository قرار دهید.
2. از Settings → Pages، گزینه Deploy from a branch را انتخاب کنید.
3. Branch را روی `main` و Folder را روی `/ (root)` قرار دهید.
4. لینک GitHub Pages نمایش داده‌شده را باز کنید.

در فایل‌های JavaScript اصلی فقط امکان تعیین اولیه پوسته با پارامتر `theme` اضافه شده و رفتار اصلی تغییر پوسته و localStorage حفظ شده است.
