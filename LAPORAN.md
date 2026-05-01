# Laporan Proyek Membangun Website Personal dengan HTML & CSS - Fatih Alfarisi

## 1. Deskripsi Proyek
Proyek ini adalah sebuah website portofolio personal yang dirancang untuk menampilkan profil profesional, keahlian, dan karya-karya proyek secara interaktif. Website ini dibangun dengan fokus pada estetika modern, performa yang ringan, dan pengalaman pengguna yang mulus.

### Tujuan
* **Personal Branding:** Membangun kehadiran digital yang profesional.
* **Showcase:** Menyediakan platform untuk memamerkan proyek-proyek terbaru secara terorganisir.
* **Interaksi:** Memudahkan calon klien atau perekrut untuk menghubungi melalui formulir kontak yang tervalidasi.
* **Penugasan:** Tugas Proyek untuk pembuatan website personal Pemrograman Web.

### Fitur Utama
1.  **Dark & Light Mode:** Dukungan tema gelap dan terang yang tersimpan secara permanen melalui `localStorage`.
2.  **Portfolio Filtering:** Sistem penyaringan proyek berdasarkan kategori (Web, App, Design) dengan animasi transisi (scale & opacity).
3.  **Responsive Design:** Tata letak yang adaptif menggunakan CSS Grid dan Flexbox untuk berbagai ukuran layar.
4.  **Interactive UI:** Efek animasi *hover*, *floating image*, dan *scroll spy* untuk navigasi otomatis.
5.  **Dynamic Wave Background:** Latar belakang menggunakan elemen SVG animasi untuk kesan visual yang modern.

### Teknologi yang Digunakan
* **HTML5:** Struktur semantik untuk aksesibilitas.
* **CSS3:** Styling kustom menggunakan CSS Variables, Animations, dan Glassmorphism (backdrop-filter).
* **JavaScript (Vanilla):** Logika murni untuk manipulasi DOM, manajemen tema, dan fungsionalitas filter tanpa library eksternal.
* **Font Awesome:** Library ikon untuk elemen visual.

---

## 2. Struktur Folder dan File
Berikut adalah organisasi file dalam repository proyek ini:

```text
├── laporan-assets/             #Aset gambar untuk kebutuhan laporan
│   ├──index.html-W3C.png       #Hasil screenshot dari W3C HTML Validator untuk file index.html
│   ├──portofolio.html-W3C.png  #Hasil screenshot dari W3C HTML Validator untuk file portofolio.html
│   ├──kontak.html-W3C.png      #Hasil screenshot dari W3C HTML Validator untuk file kontak.html
│   ├──style.css-W3C.png        #Hasil screenshot dari W3C CSS Validator untuk file style.css
│   ├──konfigurasi-SSH.png      #Hasil screenshot dari bukti konfigurasi SSH
│   └──lighthouse-score.png     #Hasil screenshot dari bukti skor lighthouse
├── assets/                     # Aset gambar dan ikon
│   ├── favicon-32x32.png       # Ikon untuk tab browser
│   └── images/                 # Dokumentasi gambar proyek
├── index.html                  # Halaman utama (Beranda & Skills)
├── portofolio.html             # Halaman galeri proyek dengan fitur filter
├── kontak.html                 # Halaman formulir kontak
├── style.css                   # stylesheet utama dan variabel tema
├── script.js                   # Logika interaktivitas (Filter & Theme)
└── LAPORAN.md                  # Dokumentasi proyek (file ini)

3. Link Website (Hosting)
Website telah berhasil di-deploy dan dapat diakses secara online melalui tautan berikut:

👉 LINK WEBSITE KAMU DI SINI

4. Bukti Konfigurasi SSH
Berhasil mengonfigurasi koneksi SSH ke GitHub menggunakan kunci publik (public key).
Perintah: ssh -T git@github.com

![Bukti SSH](laporan-assets/konfigurasi-SSH.png)

5. Hasil Validasi W3C
Validasi HTML
Telah divalidasi menggunakan W3C HTML Validator untuk memastikan struktur markup mengikuti standar web.

(Status: No errors or warnings to show)

Validasi CSS
Telah divalidasi menggunakan W3C CSS Validator (Jigsaw) untuk memastikan tidak ada kesalahan sintaksis pada stylesheet.

(Status: Congratulations! No Error Found)

6. Hasil Analisis Lighthouse (Bonus)
Pengujian performa menggunakan Google Lighthouse untuk memastikan optimasi website.

Performance: [Isi Skor]

Accessibility: [Isi Skor]

Best Practices: [Isi Skor]

SEO: [Isi Skor]