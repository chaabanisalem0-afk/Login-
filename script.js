// script.js — تلميحات بسيطة وسلوك الزر
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const btn = form.querySelector('.btn');

  // منع السلوك الافتراضي (مثال محاكاة إرسال)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // تأثير تحميل على الزر
    btn.classList.add('loading');
    btn.setAttribute('disabled', 'true');

    // محاكاة تحقق/طلب سيرفر
    setTimeout(() => {
      btn.classList.remove('loading');
      btn.removeAttribute('disabled');
      // هنا يمكنك إضافة التحقق الفعلي أو إعادة التوجيه
      alert('تم تسجيل الدخول (محاكاة) — يمكنك تعديل السلوك في script.js');
    }, 1400);
  });

  // لإظهار اللابل عند الكتابة إذا لم تستخدم placeholder
  const inputs = form.querySelectorAll('.input-group input');
  inputs.forEach(i => {
    // نضيف placeholder فارغ ليعمل :placeholder-shown في CSS
    if (!i.placeholder) i.placeholder = ' ';
  });
});