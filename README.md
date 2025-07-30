# 📋 ToDo Fusion
ToDo Fusion adalah aplikasi manajemen tugas pintar yang menggabungkan To-Do List tradisional berbasis localStorage dengan integrasi AI dari IBM Granite. Aplikasi ini memungkinkan pengguna menambahkan, mengedit, dan menghapus tugas secara manual, serta menampilkan daftar tugas tambahan dari sumber eksternal (`task.json`) yang didukung AI.

### 🚀 Description
ToDo Fusion dirancang sebagai solusi hybrid untuk pengelolaan tugas harian. Pengguna dapat:
- Mengelola tugas secara manual dan lokal.
- Melihat daftar tugas yang dihasilkan atau dianalisis oleh model AI IBM Granite.
- Mendapatkan tampilan user-friendly menggunakan framework DaisyUI + Tailwind CSS.

### 🛠️ Tecnologies used
- **HTML**, **CSS**, **JavaScript**
- **DaisyUI + Tailwind CSS** (untuk UI responsif dan modern)
- **IBM Granite AI** (melalui data `task.json`)
- **localStorage** (untuk penyimpanan lokal browser)
- **Fetch API** (untuk memuat data dari file JSON)

### 🌟 Features
- Menambahkan tugas baru.
- Mengedit dan menyimpan tugas yang ada.
- Menghapus tugas.
- Menampilkan tugas dari file `task.json` (hasil AI).
- Status penyelesaian ditandai dengan ✅ atau ❌.
- Tahun otomatis pada footer.

### ⚙️ Setup Instructions
1. **Clone repositori ini**  
   git clone https://github.com/asaaaofficial/todo-fusion.git
   cd todo-fusion

### AI Support Explanation
Integrasi AI dalam ToDo Fusion terwujud melalui file task.json, yang dapat dihasilkan oleh model IBM Granite. Model Granite digunakan untuk:
1. Menyusun tugas berdasarkan deskripsi pengguna.
2. Menentukan prioritas, kategori, dan status penyelesaian (done).

- Contoh format:
[
  {
        "title": "Belajar dasar prompt engineering AI untuk malam ini",
        "description": "Pembelajaran penting untuk meningkatkan skill membuat prompt di AI seperti Granite.",
        "priority": "Tinggi",
        "category": "Pembelajaran",
        "done": false
    }
]

Pengguna dapat mengembangkan integrasi lebih lanjut dengan menyambungkan Granite AI langsung menggunakan API di masa depan.

### 📌 Catatan: Pastikan browser mengizinkan akses ke file lokal (untuk fetch('task.json')). Jika mengalami masalah, gunakan ekstensi Live Server atau jalankan melalui localhost.
