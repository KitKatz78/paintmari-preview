# Repository Guidelines

This repository contains the source code for **paintmari.com**, a multilingual (English and Japanese) artist portfolio website for Mari Ochi Moosreiner.

## Project Structure & Module Organization

The project is a static website organized by language:

- **`eng/`**: Contains the English version of the site (`.htm` files and language-specific scripts).
- **`jap/`**: Contains the Japanese version of the site (`.htm` files and language-specific scripts).
- **`css_files/`**: Contains global stylesheets, primarily `style.css`.
- **`images/`**: Contains shared and language-specific image assets.
- **`js/`**: Contains shared JavaScript utilities, such as `copyright.js`.
- **`drag_images/`**: Assets for UI interactions.
- **`index.htm`**: Root entrance page for language selection.

## Build, Test, and Development Commands

This is a static HTML/CSS/JS project and does not use a modern build system or package manager.

- **Development**: Open any `.htm` file directly in a web browser to preview changes.
- **Testing**: Manual verification in multiple browsers is required as there is no automated test suite.

## Coding Style & Naming Conventions

- **HTML**: Uses XHTML 1.0 Transitional doctype in many files. Stick to table-based layouts where existing, or use IDs defined in `style.css` for structural elements.
- **CSS**: Enforced via `css_files/style.css`. Use IDs (e.g., `#box1`, `#wrapper`) for layout and classes (e.g., `.maintext`, `.footerlink`) for typography.
- **JavaScript**: 
  - Uses a custom menu system (`xaramenu.js` and `paintmari_menueng.js` / `paintmari_menujap.js`).
  - Automatic copyright updates are handled by `js/copyright.js` using `data-copyright-year` attributes.
- **Naming**: Language-specific files follow the pattern `[name][lang].htm` (e.g., `indexeng.htm`, `indexjap.htm`).

## Testing Guidelines

- There are no automated tests.
- Verify all links, especially cross-language links and menu items.
- Ensure the copyright year updates correctly across all pages.
- Check layout responsiveness (the site uses a fixed 750px width `wrapper` but includes a zoom factor for better visibility).
