## About
Tema berita bergaya klasik, dengan tampilan sederhana dan dinamis

## Table of Contents
• [Library](#library)
• [Usage](#usage)
• [Changelog](#changelog)
• [Copyrights](#copyrights)


## Library
• tailwindcss			`3.1.8`	<https://tailwindcss.com>
• chocolat			    `1.0.4`	<http://chocolat.insipi.de/>


## Usage
1) From Now
Gunakan syntax dengan format `<time class="opacity-0 from-now" datetime="YYYY-MM-DDT00:00:00">...</time>`

2) Gallery
Image pada gallery dipasang dengan format
<div class="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4 list-news chocolat-parent">
    <!-- loop start-->
    <div class=" bg-slate-100 dark:bg-slate-100/10 post">
        <div class="flex image">
            <a class="chocolat-image" href="https://source.unsplash.com/900x400/?police"title="caption image 1"> // gambar besar
                <img src="https://source.unsplash.com/600x800/?police"alt=""> // gambar kecil
            </a>
        </div>
    </div>
    <!-- loop end -->
</div>

3) Widget Cuaca
Bisa mengambil dan custom cuaca sendiri di
https://weatherwidget.org/



## Changelog
v1.0

    Sudah mendukung multilevel menu
    Mendukung darkmode
    Tersedia tampilan cuaca hari ini
    Tersedia pilihan ukuran text di setiap halaman bacaan
    Mendukung fitur atribut tanggal from now, mengubah format tanggal post menjadi baru saja, 4 menit yang lalu, 2 hari yang lalu dst
    Tersedia estimated reading time untuk memperkirakan berapa lama waktu yang diperlukan untuk membaca sebuah artikel
    Tersedia fitur reading progress untuk mengetahui sampai mana bacaan sudah dibaca


## Copyrights
Hak cipta desain dimiliki oleh Wunik. Dokumentasi ini dibuat pada tahun 2022, semoga bermanfaat! 🙏
