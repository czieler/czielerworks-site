# CZieler Works

Site for **CZieler Works**, currently closed to new client projects while Carole focuses on work at her day job.

The site is intentionally lightweight: semantic HTML, vanilla CSS, and a small amount of JavaScript. It shares the shop's current status and links to Carole's GitHub profile and Where I'm Watching app.

## Highlights

- Responsive single-page status page
- Five brand color themes selected once per browser session
- Theme-matched logo and illustration assets
- Accessible semantic structure and keyboard-friendly controls
- No framework or build step required

## Tech

- HTML5
- CSS
- Vanilla JavaScript
- Google Fonts (Inter and Bungee)

## Theme behavior

`app.js` selects one of five approved themes and stores the selection in `sessionStorage`. Refreshing or navigating during the same browser session keeps the current theme; a new browser session may receive a different theme.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any simple static web server.

## Deployment

The production site is deployed as a static site on Render.

## Links

- Website: https://czielerworks.app
- GitHub: https://github.com/czieler
- LinkedIn: https://www.linkedin.com/in/carole-zieler-a0594b4/
- Contact: hello@czielerworks.app


V21: Added a subtle theme-aware 1px divider beneath the main navigation/header.

V22: Header divider now appears only beneath the left navigation links, not beneath the right-side CTA.

V23: Aligned the desktop header/nav with the main 1240px content shell and strengthened the nav-only divider using the active theme color.

V24: Refined desktop nav divider: 1px theme-colored rule, closer to nav labels, extending modestly past Contact without reaching the CTA.

V25: Mobile/tablet header fix — hamburger moved to the left and the Let's Connect CTA remains visible on the right, with compact mobile spacing.

V26: Added a little extra spacing below the large hero logo on mobile.

V27: Applies the session theme in the document head before first paint to prevent the brief default-color flash.
