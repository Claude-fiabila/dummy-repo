# Dummy Repo — Git Exercise

A minimal repository used to practice Git workflows: staging, committing,
branching, merging, conflict resolution, history navigation.

## Structure

- `README.md` — this file
- `index.html` — landing page
- `styles.css` — page styling
- `app.js` — page behavior
- `notes.txt` — scratch notes
- `data/users.csv` — sample data
- `.gitignore` — ignored paths

## Suggested exercises

1. Modify `notes.txt`, run `git status` / `git diff`.
2. Create a `feature/hello` branch, edit `app.js`, commit.
3. On `main`, edit the **same line** of `app.js`, commit, then merge to trigger a conflict.
4. Use `git log --oneline --graph --all` to inspect history.
5. Try `git restore`, `git reset`, `git revert` on dummy commits.
