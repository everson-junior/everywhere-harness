---
name: ewh-validate-embedded-overrides
description: Use whenever UI, client packages, assets, logos, or client plugins are modified or before releasing/publishing @everywhere-harness/ewh to npm. Automatically validates and enforces that all modified packages/client/* and packages/bundle/* packages are registered in scripts/prepare-embedded-cli.ts mappings and properly bundled into apps/cli/embedded-overrides.
---

# EWH Validate Embedded Overrides

Use this skill whenever any client package, asset, UI component, logo, or theme under `packages/client/*`, `packages/bundle/*`, or `apps/web/*` is created, modified, or prepared for npm release.

## Objective

Prevent "missing override" regressions where changes look correct during local development with workspace links, but fail to appear when users install `@everywhere-harness/ewh` globally via `npm install -g @everywhere-harness/ewh`.

## Core Invariant

The standalone CLI `@everywhere-harness/ewh` distributes modified UI and client behaviors using the `embedded-overrides` mechanism ([apps/cli/src/bin.ts](../../apps/cli/src/bin.ts)).

**Every client/web package with custom modifications MUST:**
1. Be registered in the `mappings` array of [scripts/prepare-embedded-cli.ts](../../scripts/prepare-embedded-cli.ts).
2. Have its build output (`lib/` or `dist/`) copied to `apps/cli/embedded-overrides/@deepseek-ai/<pkg-name>`.
3. Have its build script included in the client build step (`build:lib:client` or `build:artifacts`).

## Verification Workflow

Whenever a change touches UI or client files:

1. **Check Modified Packages:**
   Identify all modified packages in `git status`:
   - If files under `packages/client/<name>/` are modified, verify that `@deepseek-ai/dsh-client-<name>` is in `mappings`.
   - If files under `packages/bundle/<name>/` are modified, verify that `@deepseek-ai/dsh-<name>` is in `mappings`.
   - If `apps/web/` is modified, verify that `dsh-web-frontend` is in `mappings`.

2. **Auto-Add Missing Mappings:**
   If a modified package is missing from `scripts/prepare-embedded-cli.ts`:
   Add the mapping entry:
   ```ts
   {
     source: resolve(root, 'packages/client/<name>/lib'),
     target: resolve(targetBase, 'dsh-client-<name>/lib'),
   },
   ```

3. **Rebuild and Sync Overrides:**
   Run:
   ```sh
   export PATH=/home/linux/.nvm/versions/node/v24.18.1/bin:$PATH:~/.npm-global/bin
   pnpm run build:lib:client
   pnpm run build:web
   node --import tsx/esm scripts/prepare-embedded-cli.ts
   ```

4. **Verify Overrides Exist on Disk:**
   Confirm that `apps/cli/embedded-overrides/@deepseek-ai/<pkg-name>/lib/` contains the updated files and does not contain empty or missing bundles.
