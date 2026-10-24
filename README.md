# Everywhere Harness

Everywhere Harness (`ewh`) is an open-source, extensible AI agent harness built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis).

## Quick Start

### Run with `npm` / `npx`

Requires `Node.js >= 24.9.0`:

```sh
npx @everywhere-harness/ewh web
```

This starts the Web UI at `http://127.0.0.1:3080` and opens it in your default browser.

To run without automatically opening the browser:

```sh
npx @everywhere-harness/ewh web --no-open
```

### Run from source

```sh
git clone https://github.com/everson-junior/everywhere-harness.git
cd everywhere-harness
pnpm install
pnpm run build
pnpm ewh web
```

- `pnpm run build` prepares the workspace artifacts.
- `pnpm ewh web` launches the application from source.

## Profiles & Capabilities

Everywhere Harness uses modular profiles to support different agent runtime environments:

- **Web Profile (`ewh web`)**: Interactive full-stack web chat and tool execution interface.
- **Headless Profile (`ewh --profile headless "task"`)**: Executes an agent task in terminal/batch mode and exits with the result.
- **ACP Profile (`ewh --profile acp`)**: Automation Client Protocol runner over stdio.
- **SDK Profile (`ewh --profile sdk`)**: JSON-RPC interface for external integrations.

## Development

For developers contributing to or extending Everywhere Harness:

- Start with the [development guide](docs/development.md) and [architecture documentation](docs/architecture.md).
- To run the development server with hot-reload:
  ```sh
  pnpm run dev:web
  ```

## Issues & Support

- Submit issues or feature requests on [GitHub Issues](https://github.com/everson-junior/everywhere-harness/issues).
- Pull requests are welcome!

## License

[MIT](LICENSE)

Third-party dependencies and their licenses are disclosed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
