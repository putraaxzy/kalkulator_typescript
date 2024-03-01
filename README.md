# KALKULATOR TYPESCRIPT
## Connected with MySQL

[![N|Solid](https://logowik.com/content/uploads/images/mysql.jpg)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Ini adalah project kalkulator berbasis typescript dan di gabungkan dengan
MySQL. Ini adalah ujian kejuruan dari kelas XII - RPL SMKS BATIK PERBAIK PURWOREJO
- Typescript
- Javascript
- MySQL
- Database
## Features

- Pure CLI 
- Otomatis tersimpan di database
- Run at localhost
- Dapat melihat history perhitungan

Penting!
> Ini hanyalah tugas sekolah!
> Ini berbasi terminal so tidak ada GUI/UI/UX nya!
> Feel free untuk fork atau berkontribusi ke project ini
> Mohon maaf jika ada kesalahan dalam code/program

Teknologi yang saya gunakan dalam program ini

## Tech

Kalkulator ini menggunakan teknologi open source.

- [Javascript] - Saya menggunakan javascript untuk meng koneksikan database dan MySQL
- [node.js] - Untuk menjalankan program dan installasi package/framework
- [Typescript] - Ini saya gunakan untuk program kalkulator
- [Laragon] - Saya menggunakan ini untuk membuat database dan run MySQL

## Installation

Text editor -> [vscode](https://code.visualstudio.com/)
Install Node.JS -> [node.js](https://nodejs.org)
Install laragon atau xampp -> [Laragon](https://laragon.org) & [XAMPP](https://www.apachefriends.org)

Untuk cloning repository
```sh
git clone https://github.com/putraaxzy/kalkulator_typescript.git kalku
cd kalku
```

Untuk initialisasi typescript

```sh
tsc --init
```

Untuk installasi package/library

```sh
npm i typescript
npm i inquirer
npm i @types/inquirer
```

## Development

Want to contribute? Great!

Compile typescript -> javascript

```sh
tsc
```

Installasi esrun untuk menjalankan typescript

```sh
npm i esrun
```

Jika mengalami error 'await' error

```sh
npx esrun index.ts
```

#### Building for source

Untuk installasi package node_modules

```sh
npm i
```

Jangan lupa membuat table dan database

```sh
kalku -> database
kalku_ts -> nama table
id & angka1 & angka2 & operator & hasil -> table untuk database
```

## Data type

Ikuti `data type` di bawah ini 

Buatlah column table di dalam kalku -> kalku_ts seperti di bawah ini

```sh
id -> INT & A.I & PRIMARY KEY
angka1 & angka2 -> FLOAT 
operator -> VARCHAR
hasil -> int
```

Tolong jangan merubah `tsconfig.json` `package-lock.json`

Tolong perhatikan relasi di bawah untuk memanggil database
```sh
database.js -> pool.query(`select * from kalku_ts`, function (err, result, fields)
index.ts -> pool.query("insert into kalku_ts set ?", data);
```

> Note: Jika ingin merubah relasi data tolong perhatikan 
setiap pemanggilan fungsi nya.


## License

Copyright (c) 2024 putraa.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


## Credit
Terimakasih saya ucapkan untuk 
[Raditya Jayawardana](https://github.com/radityajayawardana)
Terimakasih banyak atas ide & kontribusinya di dalam project ini.
