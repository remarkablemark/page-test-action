# Changelog

## [1.0.3](https://github.com/remarkablemark/page-test-action/compare/v1.0.2...v1.0.3) (2026-05-27)


### Bug Fixes

* **action:** use `npm exec --prefix` to suppress playwright install warning ([#7](https://github.com/remarkablemark/page-test-action/issues/7)) ([e749f34](https://github.com/remarkablemark/page-test-action/commit/e749f344e446bc40fc9dc31a5c73b2b3581e4803))

## [1.0.2](https://github.com/remarkablemark/page-test-action/compare/v1.0.1...v1.0.2) (2026-05-27)


### Bug Fixes

* **action:** install playwright into action path to resolve ESM module ([17173d6](https://github.com/remarkablemark/page-test-action/commit/17173d6c5a2f8d5ee1d30eb78d05fc0ab57ead3c))

## [1.0.1](https://github.com/remarkablemark/page-test-action/compare/v1.0.0...v1.0.1) (2026-05-26)


### Bug Fixes

* **security:** escape markdown table cell values to prevent injection ([fd08927](https://github.com/remarkablemark/page-test-action/commit/fd089274eb63a90918e5a5cc5ba64ffe18f61f54))
* **timeout:** guard against NaN and zero timeout values ([df2ccc8](https://github.com/remarkablemark/page-test-action/commit/df2ccc80818e407a95c7baaa7eb2facd8c927c0e))

## 1.0.0 (2026-05-26)


### Features

* **action:** check page for errors with Playwright ([fa7c62b](https://github.com/remarkablemark/page-test-action/commit/fa7c62bfee8cb49143d3b60ff6d5eb3e57ca3805))
