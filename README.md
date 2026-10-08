# Peaks and Professors UW website

A free, simple website hosted on GitHub Pages. Five pages: Home, Events, About, Our Team, FAQ.

Most of the site updates itself:
- **Events** come from the club's Google Calendar.
- **Recent adventures** on the home page come from Instagram (once the widget is connected).

## One-time setup

### 1. Save the photos (do this before Squarespace is cancelled)
Run `get-photos.sh` once. It downloads the logo and photos from the old site into `images/`.
- **Mac:** open Terminal, type `sh ` (with a space), drag `get-photos.sh` into the window, press Enter.
- Or download them by hand from the old site and save them in `images/` as
  `logo.png`, `hero.jpg`, `group.jpg`, `about.jpg`, `trail-1.jpg`, `trail-2.jpg`.

### 2. Put the site on GitHub
1. Create a free GitHub account (a club account is best, so it doesn't belong to one person).
2. Click **New repository**, name it `peaksandprofessorsuw`, set it to **Public**, and create it.
3. Click **uploading an existing file**, drag in everything in this folder (keep the folders), and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch" pick `main` and `/ (root)`, then **Save**.
5. After a minute the site is live at `https://<account-name>.github.io/peaksandprofessorsuw/`.

### 3. Connect the Google Calendar
1. In Google Calendar: **Settings →** click the club calendar → tick **Make available to public**.
2. Under **Integrate calendar**, copy the **Calendar ID**.
3. On GitHub, open `js/config.js`, click the pencil icon, paste the ID between the quotes, and **Commit changes**.

### 4. Connect the Instagram feed
1. The Instagram account must be a **Professional** account (Instagram app → profile → Account type and tools → Switch to professional account). It's free.
2. Sign up for a free Instagram feed widget (e.g. SociableKIT or Tagembed), connect the account, and copy the embed code.
3. On GitHub, open `index.html`, find `INSTAGRAM FEED`, and replace the dashed placeholder box with the code.

### 5. Keep the old web address (optional)
To keep `www.peaksandprofessorsuw.org`:
1. In **Settings → Pages → Custom domain**, enter `www.peaksandprofessorsuw.org` and save.
2. Wherever the domain is registered (often Squarespace Domains), change the DNS:
   a `CNAME` record for `www` pointing to `<account-name>.github.io`.
   GitHub's guide: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Make sure the **domain** stays registered even after the Squarespace **website** plan is cancelled (it's a separate yearly fee, around $20).

## Everyday updates

| What | Where |
|---|---|
| Add a hike or event | Google Calendar. Put the sign-up link in the event description. |
| Share photos | Post on Instagram |
| Add/remove a team member | `team.html` (instructions at the top of the file) |
| Team photos | Save in `images/team/` as `first-last.jpg` (e.g. `gavin-ginn.jpg`) |
| Add a professor review | `about.html`, look for `PROFESSOR REVIEWS` |
| Edit FAQ or gear checklist | `faq.html` |

To edit any file on GitHub: open it, click the pencil icon, make the change, click **Commit changes**. The site updates within a minute or two.
