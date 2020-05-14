import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { recursiveReaddir } from "./mod.ts";

Deno.test("test starter function", async (): Promise<void> => {
  const result = await recursiveReaddir("testfiles");
  const correctResultUnix = ["testfiles/file.txt", "testfiles/to/file.txt"];
  const correctResultWindows = [
    "testfiles\\file.txt",
    "testfiles\\to\\file.txt",
  ];
  try {
    assertEquals(result.sort(), correctResultUnix.sort());
  } catch (error) {
    assertEquals(result.sort(), correctResultWindows.sort());
  }
});
