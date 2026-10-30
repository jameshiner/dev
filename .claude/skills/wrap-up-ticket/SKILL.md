---
name: wrap-up-ticket
description: Finish the Linear ticket on the current branch. Runs checks, gets an independent code review, updates docs, then (after approval) pushes, opens the PR and posts the Linear summary. Run again after the PR merges to clean up.
argument-hint: '[merged]'
disable-model-invocation: true
---

Wrap up the ticket for the current branch. The ticket ID comes from the branch name
(e.g. `box-6-...` → `BOX-6`); if there isn't one, ask.

Repo conventions (check commands, PR title/body format) live in the repo's `CLAUDE.md`.
Roadmap and decisions live in Linear: the issue's project description and the project's
"Decisions" document. Follow those where they differ from the steps below.

If `$ARGUMENTS` is `merged`, or the branch's PR is already merged, skip to **After merge**.

## 1. Verify

- Make sure you're on the ticket branch, not the default branch.
- Run the project's checks and production build (here: `npm run check`, `npm run build`).
  If anything fails, fix it if the cause is clear, otherwise report and stop.

## 2. Independent review

- Invoke the `code-reviewer` agent with only: "Review this branch. Repo is at <path>."
  Don't add context, intent or hints; the point is a reviewer with fresh eyes.
- Present its verdict and findings. Say which ones you agree with and why, and flag any you
  think are wrong. Let me pick which to fix.
- Apply the chosen fixes, then re-run the checks from step 1.

## 3. Docs

- `CLAUDE.md`: update if stack, structure, commands or conventions changed. Keep it free of
  personal info; it's committed.
- Linear "Decisions" document: draft a dated entry for anything this ticket settled.
- Linear: draft follow-up issues for anything deferred or discovered along the way.
- Summarize the doc changes and drafts.

## 4. Commit

- Commit remaining work in small, focused commits with plain imperative messages.
- Check `git log <default>..HEAD` for any commit with AI attribution trailers. If one isn't
  pushed yet, offer to reword it; if it's already pushed, flag it instead of rewriting.

## 5. Approval checkpoint

Show, then wait for explicit approval before anything leaves the machine:

- The commits on the branch (`git log --oneline <default>..HEAD`).
- The PR title and body, in the project's format (here: title `BOX-N: <ticket title>`,
  body starts with `Closes BOX-N`, then a short bullet list of what changed).
- The Linear summary comment: what landed, plus any changes from the ticket's original
  plan.
- Any drafted Decisions entries and follow-up issues.

## 6. Ship

- `git push -u origin HEAD`.
- `gh pr create --base <default>` with the approved title and body.
- Post the approved summary comment on the Linear ticket, add the approved Decisions
  entries, and create the approved follow-up issues.
- Report the PR URL. Check `gh pr checks <n>` and report CI and preview status; if they're
  still pending, say so.

Don't merge. Merging is my call.

## After merge

- Confirm the PR is merged (`gh pr view --json state,mergeCommit`).
- Switch to the default branch, `git pull --prune`, and delete the local ticket branch.
- Check the merge commit has no AI attribution trailers; flag it if it does.
- Confirm the Linear ticket is Done, and set it if the integration didn't.
- If the ticket finished a phase described in the project description, offer to update it.
- Name the next ticket from the project (lowest-numbered open issue in the current phase)
  and suggest starting it in a fresh session.
