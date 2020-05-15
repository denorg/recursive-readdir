# 📁 Recursive Readdir

Simply recursively read a directory in Deno.

[![Test CI](https://github.com/denorg/recursive-readdir/workflows/Test%20CI/badge.svg)](https://github.com/denorg/recursive-readdir/actions)

```ts
import { recursiveReaddir } from "https://raw.githubusercontent.com/denorg/recursive-readdir/master/mod.ts";

const files = await recursiveReaddir("path/to/dir"); // string[]
```

Required permissions:

1. `--allow-read`

## 💡 Recipes

Search for all markdown files in the `content` folder:

```ts
import { recursiveReaddir } from "https://raw.githubusercontent.com/denorg/recursive-readdir/master/mod.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";

const markdownFiles = (await recursiveReaddir(join(".", "content"))).filter(
  (file: string) => extname(file) === ".md"
);
```

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)
