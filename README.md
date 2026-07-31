# Academic GitHub Pages Website

A complete, zero-build academic website using HTML, CSS, JavaScript, and SVG. It can be deployed directly with GitHub Pages.

## Before committing: make these replacements

Use **Find and Replace in Files** for:

```text
YOUR NAME                 → your full name
YOUR_GITHUB_USERNAME      → your GitHub username
COAUTHOR NAMES            → the DualCount coauthor list
```

The main content file is:

```text
js/site-data.js
```

## DualCount

DualCount is already included as:

```text
DualCount: Structurally Consistent Density and Point Modeling for Zero-Shot Object Counting
```

The Paper, Code, and Project URLs are intentionally empty:

```js
{ label: "Paper", url: "", pending: true },
{ label: "Code", url: "", pending: true },
{ label: "Project", url: "", pending: true }
```

The website displays these as disabled **coming soon** labels. After publication, replace an empty string with the real URL and optionally change `pending` to `false`.

## Add your portrait

1. Put your photo at `assets/profile.jpg`.
2. In `js/site-data.js`, change:

```js
photo: "assets/profile.jpg",
```

## Add your CV and links

Put your CV in `assets/files/`, then edit:

```js
links: {
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "",
  scholar: "",
  cv: "assets/files/cv.pdf",
  email: "your-email@uark.edu"
}
```

Empty links are hidden automatically.

## Publish

1. Create a public repository named exactly `YOUR_GITHUB_USERNAME.github.io`.
2. Copy the **contents** of this folder into the repository root.
3. Commit and push to `main`.
4. Open **Settings → Pages**.
5. Choose **Deploy from a branch**, then `main` and `/(root)`.
6. Visit `https://YOUR_GITHUB_USERNAME.github.io/`.

## Preview locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Folder structure

```text
YOUR_GITHUB_USERNAME.github.io/
├── index.html
├── 404.html
├── README.md
├── LICENSE
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── css/
│   └── styles.css
├── js/
│   ├── site-data.js
│   └── main.js
└── assets/
    ├── favicon.svg
    ├── profile-placeholder.svg
    ├── social-card.svg
    ├── files/
    └── publications/
        └── dualcount.svg
```

No npm installation, build command, Jekyll theme, or external dependency is required.
