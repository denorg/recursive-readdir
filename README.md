# 📁 Recursive Readdir

Recursively read a directory in Deno.

[![Deno CI](https://github.com/denorg/recursive-readdir/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/recursive-readdir/actions)
[![GitHub](https://img.shields.io/github/license/denorg/recursive-readdir)](https://github.com/denorg/recursive-readdir/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/recursive-readdir)](https://github.com/denorg/recursive-readdir/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/recursive-readdir)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

```ts
import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";

const files = await recursiveReaddir("path/to/dir"); // string[]
```

Required permissions:

1. `--allow-read`

## 💡 Recipes

Search for all markdown files in the `content` folder:

```ts
import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";
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

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
