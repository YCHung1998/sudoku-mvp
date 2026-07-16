# AGENTS.md

Guidance for AI coding agents working in this repo (sudoku-mvp).
This file is committed, so it travels across machines — keep durable,
project-wide rules here.

## Project shape

- Static web app: a single `index.html` (HTML + CSS + JS in one file),
  plus `progress-logic.mjs` (pure logic module) and `tests/`.
- No build step, no framework, no external dependencies. UI text is
  Traditional Chinese (繁體中文).
- Deployed via GitHub Pages from `main` (root) — merging to `main` is a
  production deploy.

## Workflow

- **Plan before coding.** For any issue, first state an implementation
  plan (which CSS classes / JS functions change, acceptance checklist)
  and ask clarifying questions if the issue is ambiguous. Code only
  after the plan.
- **Never push to `main`.** Work only on a `claude/` or `fix/` branch.
  Deliver changes as a pull request and stop there — a human reviews,
  merges, and verifies on the Pages deploy. Do not merge PRs yourself.
- **PR format:** title `fix:`/`feat:` + short summary; body must contain
  Root cause → Fix → Verification steps, and `Fixes #<issue>` so the
  issue auto-closes on merge.
- **One issue, one branch, one PR.** Do not bundle unrelated changes.
- Check issue dependencies before starting (e.g. #7 depends on #5 —
  selection targeting must be correct before highlight work).

## Code style

- Keep everything in `index.html` unless pure logic can be extracted as
  a small `.mjs` module (like `progress-logic.mjs`); extracted logic
  must ship with unit tests under `tests/`.
- Vanilla JS only; no new dependencies or CDNs.
- Write docstring-style comments for all new functions and classes.
- Cell highlight visual hierarchy: selected cell > cross/box highlight
  > normal cell.

## Verification & tests

- Pure logic: add/extend Node-runnable tests under `tests/` and run
  them before opening the PR.
- UI behavior: list manual verification steps in the PR body (what to
  click, what should happen). The reviewer verifies on GitHub Pages
  after merge.

## Feature documentation

- Feature history lives in [`agent/tasks/`](agent/tasks/) — one doc per
  feature update or notable fix, plus a row in
  [`agent/tasks/README.md`](agent/tasks/README.md).

## Work-in-progress notes

- Unfinished work lives in [`agent/wip/`](agent/wip/) — one doc per WIP
  item plus an index row (no commit field). When finished and merged,
  move it to `agent/tasks/` and record the commit/PR there.

## TODO backlog

- Known-but-not-started follow-ups live in [`agent/todo/`](agent/todo/)
  — one doc per pending item plus an index row. Reference these docs
  from PRs instead of leaving TODO comments in code.

## Reference documentation

- [`doc/README.md`](doc/README.md) is the **documentation index** —
  start there. When you learn something durable and project-wide, add a
  doc under `doc/` and a row to the index. One-off change records go in
  `agent/tasks/`.
