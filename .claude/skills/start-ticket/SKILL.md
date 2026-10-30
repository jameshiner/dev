---
name: start-ticket
description: Start work on a Linear ticket. Reads the ticket, moves it to In Progress, creates the ticket branch off an up-to-date default branch, and restates scope before any code is written.
argument-hint: <ticket-id, e.g. BOX-6>
disable-model-invocation: true
---

Start work on Linear ticket `$ARGUMENTS`. If no ticket ID was given, ask for one and stop.

Repo conventions (branch and PR format, check commands) live in the repo's `CLAUDE.md`.
Roadmap and decisions live in Linear: the issue's project description and the project's
"Decisions" document. Follow those where they differ from the steps below. A bare number
(e.g. `13`) uses the team prefix from the repo's PR title convention.

## 1. Check the repo is ready

- Run `git status`. If there are uncommitted changes or you're on a branch other than the
  default branch, stop and ask how to handle them. Don't stash, discard or commit anything
  on your own.
- Switch to the default branch and `git pull --prune`.

## 2. Read the ticket

- Fetch the ticket with the Linear tools (title, description, status, branch name, project).
- If it's already Done or Canceled, or its project doesn't match this repo, stop and ask.
- Read the project description and the "Decisions" document for context that applies.

## 3. Move it to In Progress

- Set the status to In Progress (if it isn't already) and assign it to me if unassigned.

## 4. Create the branch

- Use Linear's branch name exactly (`gitBranchName`); it carries the ticket ID that links
  the branch and PR to the ticket.
- `git switch -c <branch>`. If the branch already exists locally or on the remote, stop and
  ask whether to resume it.

## 5. Restate scope

Reply with:

- **Goal:** one sentence.
- **In scope:** the concrete deliverables, from the ticket.
- **Out of scope:** anything nearby that the ticket or roadmap defers to a later ticket.
- **Open questions:** decisions needed before building, including any the ticket or the
  project leaves open.
- **Plan:** a short, ordered list of steps. Don't commit while building; changes are
  reviewed, then committed, during `/wrap-up-ticket`.

Push back on anything that looks overbuilt or that conflicts with the conventions in
`CLAUDE.md`. Then wait for a go-ahead before writing code.
