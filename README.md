# SEU Labs Website

Static HTML/CSS/JS website for the SEU Labs faculty pilot.

## Files

- `index.html` — main website
- `styles.css` — design and responsive layout
- `script.js` — mobile menu and active navigation
- `assets/stedwards-logo.png` — St. Edward's University logo

## Before publishing

Open `index.html` and replace:

```html
YOUR_GOOGLE_FORM_LINK_HERE
```

with the real SEU Labs Google Form link.

## How to host on GitHub Pages

1. Create a new GitHub repository, for example `seu-labs`.
2. Upload all files from this folder to the repository.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch: `main` and folder: `/root`.
6. Click **Save**.
7. GitHub will publish the site at a URL similar to:

```text
https://YOUR-USERNAME.github.io/seu-labs/
```

## Git command option

```bash
git init
git add .
git commit -m "Add SEU Labs website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/seu-labs.git
git push -u origin main
```
