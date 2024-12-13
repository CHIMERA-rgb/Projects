document.addEventListener("DOMContentLoaded", function () {
    // Şifreyi gösterme/gizleme işlevi
    const showPasswordBtn = document.getElementById('showPassword');
    const passwordField = document.getElementById('inputPassword');
    
    showPasswordBtn.addEventListener('click', function() {
        const icons = showPasswordBtn.querySelectorAll('ion-icon');
        if (passwordField.type === "password") {
            passwordField.type = "text";
            icons[0].style.display = "none"; // göz simgesi
            icons[1].style.display = "inline"; // göz kapalı simgesi
        } else {
            passwordField.type = "password";
            icons[0].style.display = "inline"; // göz simgesi
            icons[1].style.display = "none"; // göz kapalı simgesi
        }
    });

    // Giriş Yap butonuna tıklama işlevi
    const signInButton = document.querySelector('.signIn button');
    signInButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('inputPassword').value;
        const email = document.getElementById('email').value;

        if (!username || !password || !email) {
            alert("Lütfen tüm alanları doldurduğunuzdan emin olun.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Geçerli bir e-posta adresi girin.");
            return;
        }

        // Burada giriş bilgileri sunucuya gönderilebilir
        alert("Giriş başarılı!");
    });

    // E-posta formatı doğrulama fonksiyonu
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Giriş yapılmışsa, giriş bilgilerini hatırlama işlevi
    const rememberMeCheckbox = document.getElementById('rememberMe');
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("username", document.getElementById('username').value);
        } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("username");
        }
    });

    // Sayfa yüklendiğinde, "Beni hatırla" özelliğini kontrol et
    if (localStorage.getItem("rememberMe") === "true") {
        document.getElementById('username').value = localStorage.getItem("username");
    }
});
