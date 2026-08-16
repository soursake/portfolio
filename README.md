# Portfolio site — replica of yvonneyifan.com

Plain HTML/CSS/JS, no build step, no framework. Deployed on GitHub Pages (free) instead of Squarespace.

## Structure
```
index.html          — home page (hero, intro, work grid, about, footer)
css/style.css        — main styles
css/project.css       — project detail page styles
js/script.js         — tiny JS (footer year)
projects/*.html       — 6 individual project pages (placeholders — see below)
assets/*.jpg          — images
CNAME                — tells GitHub Pages to serve yvonneyifan.com
DEPLOY.md            — step-by-step domain + GitHub Pages setup
```

## Replace these placeholder images with your real exports
The images in `/assets` right now are cropped from your screenshots, as a stand-in so the layout renders correctly. Swap in your actual exported files (same filenames, or update the `src` in index.html) for full quality:

| File | Used for |
|---|---|
| assets/hero.jpg | Top banner photo |
| assets/about-portrait.jpg | About section photo |
| assets/project-toast-cogs.jpg | Data Insights for Restaurants card |
| assets/project-joor-app.jpg | Fashion Retailer Shopping iOS App card |
| assets/project-toast-finance.jpg | Restaurant Finance Growth Design card |
| assets/project-joor-workflow.jpg | Streamline Fashion Buyers Workflow card |
| assets/project-smb-dashboard.jpg | SMB Management Dashboard card |
| assets/project-criterion.jpg | Criterion Channel card |

## Project detail pages
`/projects/*.html` are placeholders with the same title/blurb as your cards, plus a note where full case study content should go. Your original Squarespace project pages likely have process breakdowns, more screenshots, etc. — worth pulling that content over before launch, especially since 2 of the 6 projects currently dead-end (password wall, "in progress").

## Run locally before deploying
```
cd portfolio-site
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

See `DEPLOY.md` for buying the domain and going live on GitHub Pages.

