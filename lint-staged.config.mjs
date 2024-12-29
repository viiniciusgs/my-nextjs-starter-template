import path from 'path'

const config = {
  /* This will format all files, excluding JavaScript, TypeScript,
  files in the .husky folder, and the pnpm-lock.yaml file */
  '!(*.js|*.ts|*.cjs|*.mjs|*.d.cts|*.d.mts|*.jsx|*.tsx|.husky/**|pnpm-lock.yaml)':
    (filenames) =>
      `prettier --write ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' ')}`,

  // This will lint and format TypeScript and JavaScript files
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx}': (filenames) => [
    `prettier --write ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' ')}`,
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
  ],
}

export default config
