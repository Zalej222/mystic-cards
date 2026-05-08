# Mystic Cards

Tarotová React aplikace zaměřená na:

* přehled tarotových karet,
* denní kartu,
* tarotové výklady,
* práci s tarotovými významy.

Projekt vzniká jako studijní React aplikace se zaměřením na:

* React komponenty,
* práci s daty,
* routing,
* state management,
* organizaci projektu.

---

# Použité technologie

* React
* JavaScript
* CSS
* React Router DOM

---

# Struktura projektu

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│
├── pages/
│   ├── CardList.jsx
│   ├── CardList.css
│   ├── DailyCard.jsx
│   ├── Reading.jsx
│
├── data/
│   ├── data.js
│   ├── dailyCardMeanings.js
│
├── App.js
├── index.js
├── index.css
```

---

# Aktuální funkcionalita

## Přehled tarotových karet

Aplikace aktuálně obsahuje:

* zobrazení tarotových karet,
* detail karty,
* obrázek karty,
* základní význam karty.

---

## Tarotová data

Každá karta obsahuje:

```js
{
   id,
   name,
   arcana,
   number,
   element,
   description,
   imageUrl
}
```

---

## Denní významy karet

Soubor:

```txt
src/data/dailyCardMeanings.js
```

obsahuje:

* energii dne,
* zprávu,
* doporučení,
* afirmaci.

Významy jsou propojeny pomocí `id` karty.

---

# Plánované funkce

* Homepage
* Navbar navigace
* Denní karta
* Random tahání karet
* Výklad 3 karet
* Tarotové spready
* Animace karet
* Responsivní design
* Filtrace karet
* Temný mystický design

---

# Spuštění projektu

## Instalace

```bash
npm install
```

---

## Spuštění vývojového serveru

```bash
npm start
```

---

# Git workflow

## Přidání změn

```bash
git add .
```

---

## Commit

```bash
git commit -m "Create tarot app structure and daily card meanings"
```

---

## Push na GitHub

```bash
git push origin main
```

---

# Autor

Jana Zálešáková
