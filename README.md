# Czieler Works main site starter

This starter implements the agreed landing-page direction and randomly selects one of the five approved main-site color schemes once per browser session.

## Put these logo files in assets/logos

- 01_deep_navy_orange_neon_amber.png
- 02_blue_orange_electric_cyan.png
- 03_deep_cyan_burnt_orange_lime.png
- 04_light_blue_orange_neon_blue.png
- 06_amethyst_purple_teal_chartreuse.png

The JavaScript uses `sessionStorage`, so:
- navigating around or refreshing keeps the same theme;
- closing the browser tab/window and beginning a new session allows a different theme to be selected.

The PC Gamer scheme is intentionally NOT part of the normal main-page rotation yet. It remains available as a separate brand variant/easter-egg option.

## Files

- index.html
- styles.css
- app.js
- assets/logos/

## Before launch

Update:
- GitHub and LinkedIn footer links
- contact email if desired
- actual project cards/content
- any final copy


## Homepage viewport update

- Redundant header logo removed on the homepage.
- Desktop hero scales with viewport height so the header, hero, and value strip fit in a normal desktop viewport.
- Below the minimum supported viewport height, the page returns to normal scrolling instead of shrinking indefinitely.


V5: Enlarged the homepage logo substantially and rotated it 20 degrees counter-clockwise to better match the approved mockup composition.


V7: Softened the bright light-blue/orange theme to denim blue + warm orange, and changed the desktop homepage header to a true 3-column layout so the nav is centered on the page while the CTA stays right-aligned.


V9: Added full homepage copy/personality pass and standardized written brand name as CZieler Works.


V10: Restored the balanced homepage logo size and changed lower-page display headings to match the hero headline typography.


V13: Matched lower-page section heading size and weight to the hero headline typography.


V14: Added the doodled napkin to Services and generated five theme-matched variants. The napkin changes with the same per-session color theme as the site.


V15: Repositioned the Services napkin into a proper right-hand column beside the heading/copy, with service cards below both columns.


V16: Reduced napkin illustration size and bottom-aligned the Services copy with the napkin for a more balanced composition.


V18: Connected footer/social links to Carole's GitHub and LinkedIn profiles and confirmed public contact links use hello@czielerworks.app.


V19: Fixed mobile/tablet hero stacking and overflow. The hero now grows with its content instead of using the desktop fixed viewport height, preventing overlap with buttons and value cards.
