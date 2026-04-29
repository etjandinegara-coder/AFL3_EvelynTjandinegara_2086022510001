// contact
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();
      let alertBox = document.getElementById("alertBox");

      if (name === "" || email === "" || message === "") {
        alertBox.className = "alert alert-danger mt-3";
        alertBox.innerText = "Semua field harus diisi!";
        return;
      }

      if (!email.includes("@")) {
        alertBox.className = "alert alert-warning mt-3";
        alertBox.innerText = "Email tidak valid!";
        return;
      }

      alertBox.className = "alert alert-success mt-3";
      alertBox.innerText = "Pesan berhasil dikirim!";

      form.reset();
    });
  }

});


// index
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("dateNumber");

    // ambil tanggal hari ini
    const today = new Date().getDate();
    el.textContent = today;

    // animasi muncul
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";

    setTimeout(() => {
        el.style.transition = "all 1s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    }, 100);

    // animasi floating
    let pos = 0;
    let direction = 1;

    setInterval(() => {
        pos += direction * 0.3;

        if (pos > 10 || pos < -10) {
            direction *= -1;
        }

        el.style.transform = `translateY(${pos}px)`;
    }, 30);
});
