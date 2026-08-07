# Bloom prototype

Run a local server from this folder, then open the displayed address in a browser:

```sh
python3 -m http.server 8080
```

The app saves its sample and user-entered data only in the current browser's local storage. It is now installable as a Progressive Web App and supports an offline app shell after the first successful visit.

This prototype is not yet appropriate for production child data: authentication, encrypted server-side storage, access controls, consent, deletion/export workflows, and a privacy review are still needed.

## Holo

`holo.html` is a standalone visual, separate from the Bloom app: an identity card
that catches the light. Open it at `/holo.html` from the same local server. Move
across the card and the foil sheet above the print lags behind it, the hearts come
up on the side you turned toward, and the photo tile flips its two inks.

It is a port of the React/TypeScript component tree (`holo/engine.ts`,
`holo/HoloCard.tsx`) to one dependency-free page — the maths is unchanged, and the
ten foil materials are the same data. Its portrait is a drawn placeholder; drop a
file at `holo/kamila.webp` and the page picks it up on load.

## Hosting

This folder is ready to deploy as a static site. Connect the repository to Vercel and use this folder as the project root; no build command is required.
