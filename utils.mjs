/**
 * Escapes a value for safe use in a Markdown table cell.
 * Prevents newline-based row injection and pipe-based column injection.
 *
 * @param {*} value - The value to escape.
 * @returns {string} - The escaped value.
 */
export function escapeMarkdownTableCell(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|");
}
