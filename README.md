# Backend API Documentation

Dokumentasi ini berisi langkah-langkah untuk menjalankan Backend API secara lokal, mulai dari konfigurasi environment, instalasi dependency, setup database, migrasi, seeding, sampai menjalankan server backend.

---

## Prasyarat

Sebelum menjalankan project, pastikan sudah menginstall:

- **Node.js** versi **18+**
- **npm**
- Database yang digunakan oleh project, misalnya **MySQL / PostgreSQL / MariaDB** sesuai konfigurasi project
- Sequelize CLI

Cek versi Node.js:

```bash
node -v
```

Cek versi npm:

```bash
npm -v
```

Jika Node.js belum terinstall, silakan install terlebih dahulu dari website resmi Node.js.

---

## 1. Clone Repository

Clone repository backend API ke local machine:

```bash
git clone <repository-url>
```

Masuk ke folder project:

```bash
cd <nama-folder-project>
```

---

## 2. Buat File Environment

Buat file `.env` di folder root project.

Contoh isi dan struktur environment bisa dilihat dari file:

```bash
.env.example
```

Silakan copy file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Untuk Windows PowerShell:

```bash
copy .env.example .env
```

Setelah itu, sesuaikan value di file `.env` dengan konfigurasi local masing-masing, seperti:

```env
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
DB_DIALECT=
PORT=
```

> Catatan: Pastikan nama database, username, password, host, dan konfigurasi lainnya sudah sesuai dengan database lokal yang digunakan.

---

## 3. Install Package

Install seluruh dependency project dengan command:

```bash
npm install
```

Atau bisa juga menggunakan:

```bash
npm i
```

---

## 4. Create Database

Setelah konfigurasi `.env` selesai, buat database menggunakan Sequelize CLI:

```bash
npx sequelize-cli db:create
```

Command ini akan membuat database sesuai konfigurasi yang ada di file `.env`.

---

## 5. Jalankan Migrasi Database

Setelah database berhasil dibuat, jalankan migrasi untuk membuat table-table yang dibutuhkan:

```bash
npx sequelize-cli db:migrate
```

---

## 6. Jalankan Seeder Database

Setelah migrasi selesai, jalankan seeder untuk mengisi data awal ke database:

```bash
npx sequelize-cli db:seed:all
```

---

## 7. Jalankan Backend API

Untuk menjalankan Backend API dalam mode development, gunakan command:

```bash
npm run dev
```

Jika berhasil, server akan berjalan sesuai port yang sudah diatur di file `.env`.

Contoh:

```bash
Server running on port 8080
```

---

## 8. Jalankan Frontend

Setelah Backend API berhasil berjalan, jalankan project Frontend sesuai dokumentasi atau command yang tersedia di repository Frontend.

Biasanya command yang digunakan:

```bash
npm install
npm run dev
```

Setelah Frontend berjalan, buka browser dan akses URL yang muncul di terminal.

Contoh:

```bash
http://localhost:5173
```

---

## Alur Setup Singkat

Berikut ringkasan command yang perlu dijalankan:

```bash
cp .env.example .env
npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```

Untuk Windows PowerShell:

```bash
copy .env.example .env
npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev
```

---

## Troubleshooting

### 1. Command `sequelize-cli` tidak dikenali

Gunakan command dengan `npx`:

```bash
npx sequelize-cli db:create
```

Jika masih error, install Sequelize CLI:

```bash
npm install --save-dev sequelize-cli
```

---

### 2. Database gagal dibuat

Pastikan konfigurasi `.env` sudah benar:

```env
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
DB_DIALECT=
```

Pastikan juga database server sudah aktif.

---

### 3. Migrasi gagal

Cek kembali:

- Koneksi database
- Konfigurasi `.env`
- File migration
- Database sudah berhasil dibuat

Jalankan ulang:

```bash
npx sequelize-cli db:migrate
```

---

### 4. Seeder gagal

Cek kembali file seeder dan pastikan struktur table sudah sesuai dengan hasil migrasi.

Jalankan ulang:

```bash
npx sequelize-cli db:seed:all
```

---

## Catatan

- Jangan push file `.env` ke repository.
- Gunakan `.env.example` sebagai template environment.
- Pastikan database sudah berjalan sebelum menjalankan command Sequelize.
- Gunakan Node.js versi 18 atau lebih baru untuk menghindari masalah compatibility.

---

## Development Command

| Command | Fungsi |
|---|---|
| `npm install` | Install dependency project |
| `npx sequelize-cli db:create` | Membuat database |
| `npx sequelize-cli db:migrate` | Menjalankan migrasi database |
| `npx sequelize-cli db:seed:all` | Menjalankan seeder database |
| `npm run dev` | Menjalankan backend dalam mode development |

---

## Author

Backend API Project
