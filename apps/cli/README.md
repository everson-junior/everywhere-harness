# @everywhere-harness/ewh

Everywhere Harness (`ewh`): profile launcher, plugin manager, and agent workspace.

## Quick Start

Run the Everywhere Harness Web UI directly with `npx` (requires Node.js >= 24.9.0):

```sh
npx @everywhere-harness/ewh web
```

By default, this boots the Web interface at `http://127.0.0.1:3080` and opens it in your default browser.

Pass `--no-open` to start the server without launching a browser window:

```sh
npx @everywhere-harness/ewh web --no-open
```

## CLI Usage

Install globally (optional):

```sh
npm install -g @everywhere-harness/ewh
```

Or execute directly with `npx @everywhere-harness/ewh`:

```sh
ewh [command] [options]
```

### Entry Modes and Profiles

| Command | Purpose |
|---|---|
| `ewh web` | Start the interactive Web UI and local backend. |
| `ewh <name>` / `ewh --profile <name>` | Boot a specific named profile under `$DSH_HOME/profiles/<name>`. |
| `ewh --profile headless "task"` | Run a one-shot headless session with a task, print the response, and exit. |
| `ewh --profile acp` | Serve automation clients over ACP (Automation Client Protocol) stdio. |
| `ewh --profile sdk` | Serve SDK clients over JSON-RPC stdio. |
| `ewh --profile sdk-minimal` | Serve SDK clients with the minimal agent composition. |
| `ewh plugin --profile <name> <pnpm args>` | Manage out-of-tree plugins inside a profile directory. |
| `ewh --help` | Display command-line options and available commands. |

### Application Arguments

The launcher forwards arguments recognized by the selected profile:

```sh
ewh web --port 8080             # --port is handled by the web profile
ewh --profile headless "run checks"
ewh web --help                  # Help options for the web profile
ewh --help                      # Help options for the ewh CLI launcher
```

## Configuration & Profiles

Every profile directory manages its own plugin stack and configuration layers:
- Shipped profiles (`web`, `headless`, `sdk`, `acp`) auto-initialize on first use from built-in templates.
- Profiles can be customized via `cordis.patch.yml` and hot-reloaded automatically.
- Use `--dump-config` or `--dump-default-config` to inspect the resolved configuration tree.

## Repository & Community

- **GitHub Repository**: [https://github.com/everson-junior/everywhere-harness](https://github.com/everson-junior/everywhere-harness)
- **Issues & Discussions**: [https://github.com/everson-junior/everywhere-harness/issues](https://github.com/everson-junior/everywhere-harness/issues)

## License

[MIT](LICENSE)
