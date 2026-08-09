# Deploy guide — yvonneyifan.com on GitHub Pages

## 1. Buy the domain
1. Go to a registrar — Namecheap or Cloudflare Registrar are the cheapest, no-markup options (roughly $10–15/yr for `.com`).
2. Search `yvonneyifan.com`. If it's still yours from before, it may just need renewal at your old registrar instead — check there first (login with the email you used originally) since transferring/re-registering an expired domain you still technically own is unnecessary.
3. Buy it. Skip upsells (site builder, email, privacy protection is often free now — keep that one).

## 2. Create the GitHub repo
First, on github.com: while logged in as `soursake`, click the "+" in the top right → "New repository" → name it `portfolio` → leave it empty (no README, no .gitignore, no license, since you already have files) → Create repository. Leave that tab open; GitHub will show you the same commands below after creating it.

Then, on your Mac: open the **Terminal** app (Spotlight search → "Terminal"). Paste these commands one line at a time, pressing enter after each:
```
cd ~/Desktop/Portfolio2026/portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/soursake/portfolio.git
git push -u origin main
```
The `cd` line moves Terminal into the site folder — that's why it has to come first. If `git` isn't installed, macOS will pop up a prompt to install the Xcode Command Line Tools; accept it, wait for it to finish, then re-run the commands.

### If `git push` fails with "Invalid username or token. Password authentication is not supported"
GitHub stopped accepting your GitHub password for this back in 2021. Easiest fix — install GitHub CLI and let it handle login:
```
brew install gh
gh auth login
```
Pick: GitHub.com → HTTPS → "Login with a web browser" → follow the on-screen one-time code, it'll open your browser to confirm. Once that's done, re-run:
```
git push -u origin main
```
It should go through now — `gh` sets up Git to authenticate automatically from then on.

(No Homebrew? Install it first with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, then retry the `brew install gh` line above.)

## 3. Turn on GitHub Pages
1. Repo → Settings → Pages.
2. Source: "Deploy from a branch" → branch `main`, folder `/ (root)`.
3. Save. Your site will be live at `https://soursake.github.io/portfolio/` within a minute or two.

## 4. Point your custom domain at it
The repo already includes a `CNAME` file containing `yvonneyifan.com` — that's what tells GitHub Pages which domain to serve.

At your domain registrar's DNS settings, add:

**For the root domain (yvonneyifan.com):**
| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www (optional, recommended):**
| Type | Host | Value |
|------|------|-------|
| CNAME | www | soursake.github.io |

Then back in GitHub → Settings → Pages: enter `yvonneyifan.com` as the custom domain, save, and check "Enforce HTTPS" once the certificate provisions (can take up to 24 hrs, usually much faster).

## 5. Verify
- `https://yvonneyifan.com` loads the site
- HTTPS padlock is active
- Old Squarespace subscription can now be safely cancelled (once DNS has fully switched over — give it 24–48 hrs to avoid downtime)

## Ongoing edits
Any time you want to update the site: edit the HTML/CSS files, then in Terminal (still inside the `portfolio-site` folder — `cd ~/Desktop/Portfolio2026/portfolio-site` if you're not):
```
git add .
git commit -m "update"
git push
```
Live in under a minute. No hosting bill, ever.
