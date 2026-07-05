import { test, expect } from "@playwright/test";

test("GET post returns 200 status", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  await expect(response.status()).toBe(200);
  const body = await response.json();

  await expect(body.userId).toBe(1);
  await expect(body.title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  );
  await expect(body.body).toBe(
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  );
});
