# SYWYKE - Sites You Wish You Knew Earlier!

**SYWYKE** is a free and open-source site to find awesome websites in Internet using [Astro](https://astro.build).

## Runing locally

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

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

## References

[The code for rachsmith.com](https://github.com/rachsmithcodes/rachsmith.com)

## License

Licensed under the [MIT](LICENSE) license.
