const hari = document.getElementById("hari");
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");



// Mengatur waktu akhir perhitungan mundur
let countDownDate = new Date("mar 11, 2023 09:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
let x = setInterval(function () {

    // Untuk mendapatkan tanggal dan waktu hari ini
    let now = new Date().getTime();

    // Temukan jarak antara sekarang dan tanggal hitung mundur
    const distance = countDownDate - now;

    // Perhitungan waktu untuk hari, jam, menit dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Keluarkan hasil dalam elemen dengan id = "demo"
    hari.innerHTML = days;
    jam.innerHTML = hours;
    menit.innerHTML = minutes;
    detik.innerHTML = seconds;

    // Jika hitungan mundur selesai, tulis beberapa teks 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

