import { join } from "https://deno.land/std/path/mod.ts";

/**
 * Recursively read a directory
 */
export async function recursiveReaddir(path: string) {
  const files: string[] = [];
  const getFiles = async (path: string) => {
    for await (const dirEntry of Deno.readDir(path)) {
      if (dirEntry.isDirectory) {
        await getFiles(join(path, dirEntry.name));
      } else if (dirEntry.isFile) {
        files.push(join(path, dirEntry.name));
      }
    }
  };
  await getFiles(path);
  return files;
}
