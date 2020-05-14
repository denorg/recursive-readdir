import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { recursiveReaddir } from "./mod.ts";

Deno.test("test starter function", async (): Promise<void> => {
  const result = await recursiveReaddir("testfiles");
  assertEquals(result, ["testfiles/file.txt", "testfiles/to/file.txt"]);
});
