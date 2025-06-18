# 🎭 7-Day Playwright Learning Journey

Hi there! 👋

Over the past 7 days, I’ve been learning **Playwright**, a powerful tool for testing web apps—built by Microsoft. This README documents what I learned, day by day, in a very real, beginner-friendly way. Whether you're new to testing or curious about what Playwright can do, I hope this helps!

---

## 🗓️ Day 1: Getting Started

I kicked things off by understanding what Playwright actually is (spoiler: it automates browsers).  
I learned how to:
- Install Playwright via npm
- Set up a basic test file
- Write and run my very first test on `https://example.com`
- Use `test`, `expect`, and `page` from the Playwright test library

✅ First test passed! Felt awesome.

---

## 🗓️ Day 2: Interacting with Web Pages

Time to click things, type stuff, and pretend I'm a user!  
I learned:
- How to use locators like `#id`, `button`, and text selectors
- How to `fill()` input fields, `click()` buttons
- How to check that navigation worked using `expect(page).toHaveURL(...)`

Tested a real login form on [saucedemo.com](https://www.saucedemo.com) and felt like a hacker (a nice one).

---

## 🗓️ Day 3: Test Generators + Debugging

This day was 🔥. I discovered:
- `npx playwright codegen` → lets you click around in a browser and auto-generates code for your test
- `page.pause()` → pauses test execution so I can inspect things live
- Headed vs. headless mode (`--headed`)

This made debugging and learning 10x easier. It was like watching my test "think."

---

## 🗓️ Day 4: Hooks + Clean Test Structure

I stopped repeating myself thanks to **hooks** like `beforeEach`.  
Also learned:
- How to organize multiple tests into separate files
- The difference between `beforeEach` and `beforeAll`
- How to share setup across tests

My code started looking clean and readable, like a mini test suite.

---

## 🗓️ Day 5: Screenshots, Traces, and Videos

Sometimes tests fail, and I don’t know why.  
That’s where today’s features came in:
- **Screenshots** on failure
- **Trace viewer** to replay exactly what the test did
- **Video recording** of test runs

Debugging became visual and intuitive. Honestly, this should be the default in every test framework.

---

## 🗓️ Day 6: API Testing (Not Just UI!)

I was surprised: Playwright can test APIs too?!  
I wrote a test to:
- Send a GET request to `jsonplaceholder.typicode.com`
- Assert that the response returned the correct data
- Parse JSON responses using `await response.json()`

Now I can combine UI + API tests in the same framework. Game-changer!

---

## 🗓️ Day 7: CI/CD with GitHub Actions

What’s the point of tests if they only run on my laptop?

I learned how to:
- Set up a GitHub Actions workflow to run tests on push
- Install dependencies and Playwright browsers in CI
- Run tests automatically on every change

It feels pro. Now my tests run every time I push to GitHub—no extra work from me.

---

## ✅ Final Thoughts

Playwright is beginner-friendly but super powerful.  
In just one week, I went from zero to:
- Writing full UI + API tests
- Debugging with visuals
- Running tests on GitHub

If you're looking to learn Playwright, I 100% recommend trying this 7-day plan.  
And if you’re already doing it—happy testing! 🧪✨