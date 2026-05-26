import { appendFileSync } from "node:fs";
import { chromium, firefox, webkit } from "playwright";
import { escapeMarkdownTableCell, logError } from "./utils.mjs";

const URL = process.env.URL;
const BROWSER = process.env.BROWSER || "chromium";
const TIMEOUT = parseInt(process.env.TIMEOUT || "30000", 10);
const GITHUB_STEP_SUMMARY = process.env.GITHUB_STEP_SUMMARY;

const BROWSERS = { chromium, firefox, webkit };

async function run() {
  if (!URL) {
    logError("URL environment variable is required");
    process.exit(1);
  }

  const browserType = BROWSERS[BROWSER];
  if (!browserType) {
    logError(
      `Unknown browser: ${BROWSER}. Must be chromium, firefox, or webkit.`,
    );
    process.exit(1);
  }

  const errors = [];

  const browser = await browserType.launch();
  const page = await browser.newPage();

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push({ type: "Console error", message: message.text() });
    }
  });

  page.on("pageerror", (error) => {
    errors.push({ type: "Uncaught exception", message: error.message });
  });

  page.on("crash", () => {
    errors.push({ type: "Page crash", message: "The page crashed" });
  });

  page.on("response", (response) => {
    if (response.status() >= 400) {
      errors.push({
        type: "Failed request",
        message: `${response.status()} ${response.url()}`,
      });
    }
  });

  try {
    await page.goto(URL, { waitUntil: "networkidle", timeout: TIMEOUT });
  } catch (error) {
    errors.push({ type: "Navigation error", message: error.message });
  } finally {
    await browser.close();
  }

  const passed = errors.length === 0;

  for (const { type, message } of errors) {
    logError(`${type}: ${message}`);
  }

  if (GITHUB_STEP_SUMMARY) {
    const status = passed ? "✅ Passed" : "❌ Failed";
    let summary = `## Page Test

| Field | Value |
| :--- | :--- |
| **Status** | ${status} |
| **URL** | ${escapeMarkdownTableCell(URL)} |
| **Browser** | ${escapeMarkdownTableCell(BROWSER)} |

`;

    if (!passed) {
      summary += `### Errors

| Error Type | Error Message |
| :--- | :--- |
`;
      for (const { type, message } of errors) {
        summary += `| ${escapeMarkdownTableCell(type)} | ${escapeMarkdownTableCell(message)} |
`;
      }
    }

    appendFileSync(GITHUB_STEP_SUMMARY, summary);
  }

  if (passed) {
    console.log(`✅ No errors found on ${URL}`);
  } else {
    console.log(`❌ Found ${errors.length} error(s) on ${URL}`);
    process.exit(1);
  }
}

run().catch((error) => {
  logError(`Unexpected error: ${error.message}`);
  process.exit(1);
});
