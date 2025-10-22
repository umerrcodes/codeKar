# Git Commands for Branch Management

## Creating and Pushing to a New Branch

1.  Create and switch to a new branch:
    ```bash
    git checkout -b <new-branch-name>
    ```

2.  Push the new branch to the remote repository (e.g., GitHub) and set the upstream branch:
    ```bash
    git push -u origin <new-branch-name>
    ```
    *   The `-u` flag (short for `--set-upstream`) links your local branch to the remote branch. You only need to do this once per branch.

3.  For all subsequent pushes on this branch, you can simply use:
    ```bash
    git push
    ```
    npx next build
// to commit all the changes
    git add . 
// then push to main or any other branch

git push origin main 