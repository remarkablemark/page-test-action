# page-test

[![GitHub Release](https://img.shields.io/github/v/release/remarkablemark/page-test)](https://github.com/remarkablemark/page-test/releases)
[![test](https://github.com/remarkablemark/page-test/actions/workflows/test.yml/badge.svg)](https://github.com/remarkablemark/page-test/actions/workflows/test.yml)
[![lint](https://github.com/remarkablemark/page-test/actions/workflows/lint.yml/badge.svg)](https://github.com/remarkablemark/page-test/actions/workflows/lint.yml)

🧪 Test your web pages for errors in GitHub Actions.

Detects console errors, failed network requests, page crashes, and uncaught exceptions using [Playwright](https://playwright.dev/).

## Quick Start

```yaml
on: push
jobs:
  page-test:
    runs-on: ubuntu-latest
    steps:
      - name: Page Test
        uses: remarkablemark/page-test@v1
        with:
          url: https://example.com
```

## Usage

**Basic:**

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
```

**With a local server:**

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: http://localhost:3000
    start: npm start
    wait-on: http://localhost:3000
```

See [action.yml](action.yml)

## Inputs

### `url`

**Required**: The URL of the page to test:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
```

### `browser`

**Optional**: The browser to use (`chromium`, `firefox`, or `webkit`). Defaults to `chromium`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
    browser: firefox
```

### `timeout`

**Optional**: Navigation timeout in milliseconds. Defaults to `30000`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
    timeout: "15000"
```

### `playwright-version`

**Optional**: The Playwright npm version to install. Defaults to `latest`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
    playwright-version: 1.52.0
```

### `start`

**Optional**: Shell command to start a local server in the background before running the page check:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: http://localhost:3000
    start: npm start
    wait-on: http://localhost:3000
```

### `wait-on`

**Optional**: URL to poll until available before running the page check. Used together with `start`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: http://localhost:3000
    start: npm start
    wait-on: http://localhost:3000
```

### `cache`

**Optional**: Cache Playwright browser binaries to speed up subsequent runs. Defaults to `true`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    url: https://example.com
    cache: "false"
```

## License

[MIT](LICENSE)
