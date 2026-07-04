import { test, expect } from "@playwright/test";

test("GET post returns 200 status", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  await expect(response.status()).toBe(200);
});
