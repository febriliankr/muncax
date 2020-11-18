# Muncax 🗻

Typescript, NextJS, Bootstrap deployed in Vercel

Demo is moved to Vercel. vercel.muncax.app

## To Be Worked On ⚒

### REST API To Do List

[x] addSeller (POST send full json)
[x] getSellers
[x] getSellers/:id
[x] sellerAuth (POST send username and password)
[x] updateSeller (POST send one line json with property and value)
[x] deleteSeller/:id (GET request the :id)

### Frontend todo List

[ ] Dashboard for Seller
### Images are still not Optimized 🖼

Convert to webp format or optimize with lazy loading

### Login Modal 🔑

Use modal, and firebase auth

### Responsive Design 🎈

Use media query for css for responsive design

## Dependencies 🎃

- Language: [Typescript](https://www.typescriptlang.org/) --dev
- Library: React.js v17.0.1
- Framework: Next.js
- Styling: [Sass](https://sass-lang.com/) --dev
- Search Bar: [react-select](https://react-select.com)
- Serverless Functions: serverless-mysql

## Starting Server

```
yarn
yarn dev
```

## Useful tutorial for building this project

https://www.youtube.com/watch?v=PxiQDo0CmDE&t=773s


INSERT INTO sellers ( nama_seller, tgllahir_seller, kota_seller, alamat_seller, nohp_seller, gender_seller, email_seller, username_seller, password_seller)
  VALUES ("Kristiawan", "1999-01-01","Salatiga","Perumahan Kota Baru","0918232138","Male","febrilian@outlook.com","fb12","pasword1")