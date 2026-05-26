/**
 * Logs a GitHub Actions error annotation to stderr.
 *
 * @param {string} message - The error message to log.
 * @returns {void}
 */
export function logError(message) {
  console.error(`::error::${message}`);
}

/**
 * Builds a Markdown summary for the GitHub Actions step summary.
 *
 * @param {object} options
 * @param {string} options.url - The URL that was tested.
 * @param {string} options.browser - The browser that was used.
 * @param {boolean} options.passed - Whether the test passed.
 * @param {Array<{type: string, message: string}>} options.errors - The errors that were found.
 * @returns {string} - The Markdown summary.
 */
export function buildSummary({ url, browser, passed, errors }) {
  const status = passed ? "✅ Passed" : "❌ Failed";
  let summary = `## Page Test

| Field | Value |
| :--- | :--- |
| **Status** | ${status} |
| **URL** | ${escapeMarkdownTableCell(url)} |
| **Browser** | ${escapeMarkdownTableCell(browser)} |

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

  return summary;
}

/**
 * Escapes a value for safe use in a Markdown table cell.
 * Prevents newline-based row injection and pipe-based column injection.
 *
 * @param {*} value - The value to escape.
 * @returns {string} - The escaped value.
 */
function escapeMarkdownTableCell(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|");
}
