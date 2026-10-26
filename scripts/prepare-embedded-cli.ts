/** Prepare embedded overrides inside apps/cli for standalone npm publication. */

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = resolve(scriptDir, '..')
const targetBase = resolve(root, 'apps/cli/embedded-overrides/@deepseek-ai')

if (existsSync(targetBase)) {
  rmSync(targetBase, { recursive: true, force: true })
}
mkdirSync(targetBase, { recursive: true })

const mappings: Array<{ source: string; target: string }> = [
  {
    source: resolve(root, 'apps/web/dist'),
    target: resolve(targetBase, 'dsh-web-frontend/dist'),
  },
  {
    source: resolve(root, 'packages/client/ui-primitives/lib'),
    target: resolve(targetBase, 'dsh-client-ui-primitives/lib'),
  },
  {
    source: resolve(root, 'packages/client/locale/lib'),
    target: resolve(targetBase, 'dsh-client-locale/lib'),
  },
  {
    source: resolve(root, 'packages/bundle/web-app/lib'),
    target: resolve(targetBase, 'dsh-web-app/lib'),
  },
  {
    source: resolve(root, 'packages/core/system-prompt/lib'),
    target: resolve(targetBase, 'dsh-system-prompt/lib'),
  },
  {
    source: resolve(root, 'packages/client/ui-theme/lib'),
    target: resolve(targetBase, 'dsh-client-ui-theme/lib'),
  },
  {
    source: resolve(root, 'packages/client/ui-conversation/lib'),
    target: resolve(targetBase, 'dsh-client-ui-conversation/lib'),
  },
]

function cleanUnneededFiles(dir: string): void {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      cleanUnneededFiles(fullPath)
    } else if (entry.name.endsWith('.map') || entry.name.endsWith('.tsbuildinfo')) {
      rmSync(fullPath, { force: true })
    }
  }
}

for (const { source, target } of mappings) {
  if (existsSync(source)) {
    mkdirSync(dirname(target), { recursive: true })
    cpSync(source, target, { recursive: true })
    cleanUnneededFiles(target)
    console.log(`Copied: ${source} -> ${target}`)
  } else {
    console.warn(`Warning: source directory does not exist: ${source}`)
  }
}

console.log('Embedded overrides prepared successfully in apps/cli/embedded-overrides/@deepseek-ai')
