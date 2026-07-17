# Repository guidelines for OpenHands

Before doing anything else, read `AGENTS.md` at the repository root and
follow it exactly. Key rules (full details in AGENTS.md):

- Plan before coding; state the plan first.
- Never push to `main`; work only on the current feature branch.
- One issue, one branch, one PR; PR body needs Root cause / Fix /
  Verification and `Fixes #<issue>`.
- Formatting: `.prettierrc` (tabs + semicolons); run
  `npx prettier --check` before finishing.
- JSDoc on every function/class; document options-object fields.
- No global access outside the main loop; pass state as parameters.
- Verify with `node --test` before declaring the task complete.
- Do NOT run `git push`, `gh`, or other network write commands; the
  outer harness handles commit, push, and PR creation.
