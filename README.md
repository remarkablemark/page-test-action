# page-test

[![GitHub Release](https://img.shields.io/github/v/release/remarkablemark/page-test)](https://github.com/remarkablemark/page-test/releases)
[![test](https://github.com/remarkablemark/page-test/actions/workflows/test.yml/badge.svg)](https://github.com/remarkablemark/page-test/actions/workflows/test.yml)
[![lint](https://github.com/remarkablemark/page-test/actions/workflows/lint.yml/badge.svg)](https://github.com/remarkablemark/page-test/actions/workflows/lint.yml)

🧪 Test your web pages for errors in GitHub Actions.

## Quick Start

```yaml
on: push
jobs:
  page-test:
    runs-on: ubuntu-latest
    steps:
      - name: Page Test
        uses: remarkablemark/page-test@v1
```

## Usage

**Basic:**

```yaml
- uses: remarkablemark/page-test@v1
```

See [action.yml](action.yml)

## Inputs

### `version`

**Optional**: The version. Defaults to `1.2.3`:

```yaml
- uses: remarkablemark/page-test@v1
  with:
    version: 1.2.3
```

## License

[MIT](LICENSE)
