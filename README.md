![banner](./public/og.svg)

<p align="center">
  <b>SYWYKE</b> - An open-source site to find awesome websites in Internet.
</p>

<p align="center">
  <a href="https://astro.build">
    <img src="https://astro.badg.es/v1/built-with-astro.svg" alt="Built with Astro" height="20">
  </a>
  <a href="https://github.com/AREA44/SYWYKE/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@area44/sywyke is released under the MIT license.">
  </a>
</p>

## Runing locally

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |
| `pnpm format ` | Format code with Prettier                    |

## Getting started

It's simple to insert a new site to this project. Just create a `md` file in `src/data` and follow this:

```md
---
title: GitHub
site: https://github.com
description: Where the world builds software.
tags: [design]
---
```

You can find all `tag` at [`tag.css`](./src/styles/tag.css). If you have a new `tag`, you can add it to that file like this:

```css
.tag.ai:hover {
  background: #ff1900;
}

.tag.ai::before {
  background: #ff1900;
  border: 2px solid #ff1900;
}
```

## Credits

This theme is based off of the lovely [rachsmith.com](https://github.com/rachsmithcodes/rachsmith.com)

## License

Licensed under the [MIT](LICENSE) license.
