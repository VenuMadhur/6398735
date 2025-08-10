
# Git Hands-on 5: Clean Up & Push to Remote

## Objective
Verify the local master/main branch is clean, pull from the remote repository, push any pending changes, and confirm that updates are reflected on the remote.

---

## Prerequisites
- Git installed and configured.
- Local repository at `C:\Users/choll\GitDemo`.
- Remote repository linked (GitLab or GitHub).

---

## Steps

### 1. Ensure You Are on master/main and Working Tree is Clean

```bash
cd /c/Users/choll/GitDemo
git status
```

<img width="737" height="443" alt="image" src="https://github.com/user-attachments/assets/effb144b-cf37-4293-9af0-9ba7de4b29f1" />


---

### 2. List All Local and Remote Branches

```bash
git branch -a
```

<img width="744" height="446" alt="image" src="https://github.com/user-attachments/assets/518bacbb-0931-4cee-993e-af4f298f07cd" />


---

### 3. Pull the Latest Changes from Remote

```bash
git pull origin master   # or: git pull origin main
```

<img width="743" height="451" alt="image" src="https://github.com/user-attachments/assets/fb52384e-a58a-4e46-b735-7e07cea3f28d" />


---

### 4. Push Any Pending Changes to Remote

```bash
git push origin main
```

<img width="742" height="447" alt="image" src="https://github.com/user-attachments/assets/9f1b71d5-367d-4d9d-867a-80ce7f80f7a4" />


---

### 5. Verify Changes on Remote

* Open your GitLab/GitHub repository in a web browser.
* Confirm that commits and files from recent labs are visible.

<img width="1909" height="1022" alt="image" src="https://github.com/user-attachments/assets/3f3ba967-b727-4393-a895-fdb6ad4c5dd0" />


---


