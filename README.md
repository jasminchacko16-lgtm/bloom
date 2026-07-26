# Bloom prototype

Run a local server from this folder, then open the displayed address in a browser:

```sh
python3 -m http.server 8080
```

The app saves its sample and user-entered data only in the current browser's local storage. It is now installable as a Progressive Web App and supports an offline app shell after the first successful visit.

This prototype is not yet appropriate for production child data: authentication, encrypted server-side storage, access controls, consent, deletion/export workflows, and a privacy review are still needed.

## Hosting

This folder is ready to deploy as a static site. Connect the repository to Vercel and use this folder as the project root; no build command is required.
