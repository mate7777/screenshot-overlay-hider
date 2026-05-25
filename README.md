# No Axeptio

Chrome extension to temporarily hide visual overlays that can get in the way during screenshots or visual checks.

It toggles a small CSS rule on the current tab to hide:

- `#axeptio_overlay`;
- `.grecaptcha-badge`.

This tool is intended for temporary debugging, documentation, and screenshot preparation. It is not a production solution and should not be used to bypass consent requirements.

## Why

During visual QA or documentation work, fixed badges and consent overlays can cover parts of the interface and make screenshots harder to read.

This extension provides a quick local toggle so the page can be captured more cleanly while keeping the website source untouched.

## Features

- One-click browser action.
- Toggles overlay hiding on the active tab.
- Updates the extension icon between active and inactive states.
- Reapplies the CSS rule when a tab finishes loading while the extension is active.
- Does not modify the website code.

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the extension folder.

## Usage

1. Open the page you want to capture or inspect.
2. Click the extension icon to hide supported overlays.
3. Take your screenshot or perform your visual check.
4. Click the extension icon again to restore the default display.

## Screenshots

If you add screenshots later, place them in a `screenshots/` folder and reference them here.

Suggested screenshots:

- page before activation;
- page after activation;
- browser action active/inactive icon state.

## Permissions

The extension uses:

- `activeTab`: to apply the CSS rule to the current tab when clicked;
- `scripting`: to insert and remove CSS on the current page.

The extension does not send collected data to a remote server.

## Limits

- It only targets `#axeptio_overlay` and `.grecaptcha-badge`.
- It does not manage consent state.
- It does not remove scripts or cookies.
- It is intended for local temporary use during screenshots, QA, or debugging.
- It should not be presented as a production privacy or consent feature.

## Development Notes

The extension is implemented in `background.js` as a Manifest V3 service worker.

The inserted CSS rule is:

```css
#axeptio_overlay, .grecaptcha-badge { display: none !important; }
```

## Roadmap Ideas

- Add a configurable selector list.
- Add per-site activation state.
- Add a small popup explaining what is currently hidden.
- Add a screenshot-oriented name if publishing publicly.

## License

MIT License. See [LICENSE](LICENSE).
