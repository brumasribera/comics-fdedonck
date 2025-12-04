# Tutorial: How to Add New Content to Your Portfolio

Quick guide to adding comics using Cursor's AI. **Place files in root folders, then let Cursor do the work!**

---

## 🚀 Quick Setup

### Step 1: Install Cursor

1. Download from [cursor.sh](https://cursor.sh) (choose Mac)
2. Install and launch Cursor

### Step 2: Clone the Repository

1. **On Cursor's startup screen**, click the **"Clone repo"** button
2. Paste this repository URL:

```
https://github.com/fdedonck/comics-fdedonck.git
```

3. Select where to save the project when prompted
4. Click "Open" when Cursor asks to open the repository

### Step 3: Install Dependencies

1. Press `Cmd+K`
2. Copy and paste:

```
Install all npm dependencies for this project
```

### Step 4: Start the Development Server

Open terminal in Cursor (`Cmd+` `) and run:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

---

## ➕ Adding New Comics

### Step 1: Place Your Files

1. Find the root folder in your project (the main `comics-fdedonck` folder)
2. Copy your image files into the appropriate collection folder:
   - `Figure 1A 2025/` - For Figure 1A comics
   - `No Plane Adventures/` - For travel comics
   - `Other comics/` - For standalone comics
   - `Posters/` - For poster artwork

### Step 2: Ask Cursor to Add It

1. Press `Cmd+K`
2. Copy and paste (replace with your details):

```
I've added [filename] to the "[collection folder]" folder. Please add it to the collection with title "[Title]" and description "[Description]".
```

**Example:**
```
I've added SummerReflections.jpg to the "Other comics" folder. Please add it to the collection with title "Summer Reflections" and description "A comic about summer memories".
```

Cursor will automatically:
- Copy the file to `public/`
- Update `components/Collections/index.tsx`
- Add it to the collection

3. Check your browser at [http://localhost:4000](http://localhost:4000)

### Adding Multiple Comics

```
I've added several images to the "[folder]" folder. Please add them all to the "[collection name]" collection.
```

### Creating a New Collection

```
I've created a new folder "[Folder Name]" with images. Please create a new collection for them with title "[Title]", subtitle "[Subtitle]", and description "[Description]".
```

---

## 📤 Pushing to GitHub

### Option 1: Using Cursor (Recommended)

1. Press `Cmd+K`
2. Copy and paste:

```
Please commit all changes and push to GitHub. Generate an appropriate commit message based on what was changed.
```

Cursor will automatically generate a commit message and push your changes!

### Option 2: Manual (Terminal)

Open terminal (`Cmd+` `) and copy-paste these commands:

```bash
git add .
git commit -m "My comment"
git push origin main
```

---

## 🚀 Deployment

When you push to GitHub, the server automatically updates based on your last commit.

**After pushing:**
- The server should update automatically after about 1 minute
- If there's an error, check for build issues

**If deployment fails:**

1. **Test the build locally** - Open terminal (`Cmd+` `) and run:
   ```bash
   npm run build
   ```

2. **Fix any errors** that appear
   - Ask Cursor (`Cmd+K`) to help fix build errors if needed

3. **Commit and push again:**
   ```bash
   git add .
   git commit -m "Fix build errors"
   git push origin main
   ```

> 💡 **Remember**: Pushing to GitHub automatically triggers a server update on your last commit. Always test with `npm run build` before pushing to avoid errors!

---

## 📝 Most Important Commands

### Copy-Paste These Commands:

**Start development server:**
```bash
npm run dev
```

**Git commands (in terminal):**
```bash
git add .
git commit -m "My comment"
git push origin main
```

**Or use Cursor (`Cmd+K`):**
```
Please commit all changes and push to GitHub. Generate an appropriate commit message.
```

---

## 🆘 Quick Troubleshooting

**Images not showing?**
- Press `Cmd+K`: "The image [filename] isn't showing. Can you check the file paths?"

**Changes not appearing?**
- Save the file (`Cmd+S`) and refresh browser (`Cmd+R`)

**Need help?**
- Press `Cmd+K` and describe your issue - Cursor can help!

---

## 💡 Pro Tips

1. **Place files in root folders first** → Then ask Cursor to handle the rest
2. **Let Cursor generate commit messages** → Just ask it to commit and push
3. **Test locally first** → Check [http://localhost:4000](http://localhost:4000) before pushing
4. **Ask Cursor for help** → Press `Cmd+K` for anything!

---

*Happy creating! 🎨*
