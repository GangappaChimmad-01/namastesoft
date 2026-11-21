/**
 * Real last-modified dates for the sitemap, taken from git history of the files that make up a page.
 * - A file with uncommitted changes counts as modified today (the build contains the new content).
 * - In a shallow clone (common on CI) history is incomplete, so no date is returned rather than a wrong one.
 * Runs only at build time, while pages are prerendered.
 */
import { execFileSync } from 'node:child_process';

function git(args: string[]) {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

const historyAvailable = git(['rev-parse', '--is-shallow-repository']) === 'false';
const today = new Date().toISOString().slice(0, 10);

/** Latest change date (YYYY-MM-DD) of any of the given files, or undefined when it can't be known reliably. */
export function lastModified(files: string[]): string | undefined {
  if (!historyAvailable) return undefined;
  const specs = files.map((f) => `:(literal)${f}`); // literal: route folders like [service=service] are not globs
  if (git(['status', '--porcelain', '--', ...specs])) return today;
  return git(['log', '-1', '--format=%cs', '--', ...specs]) || undefined;
}
