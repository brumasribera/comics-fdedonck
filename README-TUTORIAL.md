# Tutorial: How to Add New Content to Your Portfolio

This guide will walk you through using Cursor's AI to add new comics to your portfolio. The key is: **place your files in the root folder and let Cursor do the work!**

---

## 📋 Table of Contents

- [Installing Cursor](#installing-cursor)
- [Setting Up the Project](#setting-up-the-project)
- [Adding New Comics (The Easy Way)](#adding-new-comics-the-easy-way)
- [Pushing Changes to GitHub](#pushing-changes-to-github)
- [Checking Vercel Deployments](#checking-vercel-deployments)
- [Troubleshooting](#troubleshooting)

---

## 🖥️ Installing Cursor

Cursor is an AI-powered code editor that will do most of the work for you.

### Step 1: Download Cursor

1. Visit [cursor.sh](https://cursor.sh)
2. Click "Download" and choose **Mac**
3. Run the installer and follow the setup instructions

### Step 2: Understanding Cursor's AI

- Press `Cmd+K` to open the AI chat (this is your main tool!)
- You can ask Cursor to:
  - Add new comics to collections
  - Move files to the right places
  - Update the code automatically
  - Fix any issues

---

## 🚀 Setting Up the Project

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - Usually pre-installed on Mac, or [download here](https://git-scm.com/)

### Installation Steps

#### Step 1: Create a Folder

1. Open **Finder**
2. Navigate to where you want to store the project (e.g., `Documents` or `Desktop`)
3. Create a new folder called `comics-portfolio` or similar

#### Step 2: Clone the Repository Using Cursor

1. **Launch Cursor**

2. **Clone the repository**:
   - Press `Cmd+Shift+P` to open the command palette
   - Type "Git: Clone" and select it
   - Or go to: **File** → **Clone Repository**

3. **Paste the Git URL**:
   - Cursor will ask for the repository URL
   - Copy and paste this URL:

```bash
https://github.com/fdedonck/comics-fdedonck.git
```

4. **Select the folder you created**:
   - Cursor will ask where to clone the repository
   - Navigate to and select the folder you created in Step 1
   - Click "Select Repository Location"

5. **Open the cloned project**:
   - After cloning, Cursor will ask if you want to open the repository
   - Click "Open" or "Open in New Window"

#### Step 3: Install Dependencies

1. **Open the terminal in Cursor**:
   - Press `` Cmd+` `` (backtick) or go to **View** → **Terminal**

2. **Install dependencies**:
   ```bash
   npm install
   ```

#### Step 4: Run the Development Server

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   - Navigate to [http://localhost:4000](http://localhost:4000)
   - You should see your portfolio!

> 💡 **Tip**: Keep the terminal window open while developing. Press `Ctrl+C` to stop the server when you're done.

---

## ➕ Adding New Comics (The Easy Way)

The easiest way to add new comics is to **place your files in the root folder and ask Cursor to do the rest!**

### Method 1: Adding a Comic to an Existing Collection

#### Step 1: Place Your Image Files

1. **Find the root folder** in your project (the main `comics-fdedonck` folder)
2. **Navigate to the appropriate collection folder**:
   - `Figure 1A 2025/` - For Figure 1A comics
   - `No Plane Adventures/` - For travel comics
   - `Other comics/` - For standalone comics
   - `Posters/` - For poster artwork
3. **Copy your image files directly into that folder**
   - Use JPG or PNG format
   - Name them clearly (e.g., `MyNewComic.jpg`)

#### Step 2: Ask Cursor to Add the Comic

1. **Open Cursor's AI chat**: Press `Cmd+K`

2. **Give Cursor a prompt like this**:

```
I've added a new comic image called "MyNewComic.jpg" to the "Other comics" folder. 
Please add it to the "Other Comics" collection with:
- Title: "My New Comic"
- Description: "A brief description of my comic"
```

Or for a more detailed request:

```
I've placed a new image file "SummerReflections.jpg" in the "Other comics" folder. 
Can you:
1. Copy it to the public/Other comics/ folder
2. Add it to the "Other Comics" collection in components/Collections/index.tsx
3. Use the title "Summer Reflections" and description "A comic about summer memories"
```

3. **Cursor will automatically**:
   - Copy the file to the correct `public/` folder
   - Update the `components/Collections/index.tsx` file
   - Add the comic to the collection with the correct format

4. **Check your browser** at [http://localhost:4000](http://localhost:4000) to see the new comic!

### Method 2: Adding Multiple Comics at Once

1. **Place all your image files** in the appropriate root folder

2. **Open Cursor's AI chat** (`Cmd+K`) and say:

```
I've added 3 new comic images to the "Other comics" folder:
- "Comic1.jpg" - Title: "First Comic", Description: "Description 1"
- "Comic2.jpg" - Title: "Second Comic", Description: "Description 2"  
- "Comic3.jpg" - Title: "Third Comic", Description: "Description 3"

Please add all of them to the Other Comics collection.
```

### Method 3: Creating a New Collection

1. **Create a new folder** in the root directory (e.g., `My New Collection/`)
2. **Add your images** to that folder
3. **Open Cursor's AI chat** (`Cmd+K`) and say:

```
I've created a new folder called "My New Collection" in the root directory with some comic images.
Please:
1. Create a corresponding folder in public/
2. Copy the images there
3. Create a new collection in components/Collections/index.tsx with:
   - Title: "My New Collection"
   - Subtitle: "Optional subtitle"
   - Description: "Description of this collection"
   - Add all the images from the folder as items
```

### Method 4: Adding Comics with PDF Downloads

If your comic has downloadable PDFs (like "No Plane Adventures"):

1. **Place both the image and PDF files** in the appropriate root folder
2. **Ask Cursor**:

```
I've added "MyTravelComic.png" and "MyTravelComic-FR.pdf" and "MyTravelComic-ENG.pdf" 
to the "No Plane Adventures" folder. Please add it to the collection with download links 
for both French and English PDFs.
```

---

## 📤 Pushing Changes to GitHub

Once you've added your new content and tested it locally, push your changes to GitHub.

### Step 1: Check What Changed

1. **Open the terminal in Cursor**: Press `` Cmd+` `` (backtick)
2. **Run**:
   ```bash
   git status
   ```
   This shows which files have been modified or added.

### Step 2: Add, Commit, and Push

You can do this manually or ask Cursor to help:

**Option A: Manual (in terminal)**
```bash
git add .
git commit -m "Add new comic: [Your Comic Title]"
git push origin main
```

**Option B: Ask Cursor**
1. Press `Cmd+K`
2. Say: "Please commit and push all changes with the message 'Add new comic: [Your Comic Title]'"

> 💡 **Tip**: Replace `[Your Comic Title]` with a brief description of what you added.

**Examples:**
- `git commit -m "Add new comic: Summer Reflections"`
- `git commit -m "Add new poster: Paris 2025"`
- `git commit -m "Update Other Comics collection"`

---

## 🚀 Checking Vercel Deployments

After pushing to GitHub, Vercel will automatically deploy your changes.

### Step 1: Go to Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click on your project (comics-fdedonck)

### Step 2: View Deployments

1. You'll see a list of deployments at the bottom of the page
2. The most recent deployment will show:
   - **Status**: Building, Ready, or Error
   - **Commit message**: The message you used when committing
   - **Time**: When it was deployed

### Step 3: Check Deployment Status

- **Building** (yellow): Vercel is currently building your site
- **Ready** (green): Your site has been successfully deployed!
- **Error** (red): Something went wrong - click to see error details

### Step 4: Visit Your Live Site

1. Once the deployment shows "Ready", click on it
2. Click "Visit" or use the URL shown at the top of your project dashboard
3. Your changes should now be live!

> 💡 **Tip**: Vercel deployments usually take 1-3 minutes. You'll get an email notification when it's done (if you have notifications enabled).

---

## 🆘 Troubleshooting

### Images Not Showing?

1. **Ask Cursor**: Press `Cmd+K` and say "The image [filename] isn't showing up. Can you check the file paths?"
2. **Check file names**: File names are case-sensitive (e.g., `MyImage.jpg` ≠ `myimage.jpg`)
3. **Restart the dev server**: Press `Ctrl+C` in terminal, then run `npm run dev` again

### Changes Not Appearing?

1. **Save the file**: Make sure you've saved the file in Cursor (`Cmd+S`)
2. **Check the browser**: Refresh the page (`Cmd+R`)
3. **Ask Cursor**: Press `Cmd+K` and describe the issue - Cursor can help debug!

### Git Push Not Working?

1. **Check you're in the right directory**: Make sure you're in the `comics-fdedonck` folder
2. **Check your internet connection**
3. **Verify GitHub authentication**: You might need to set up a Personal Access Token
4. **Ask Cursor**: Press `Cmd+K` and say "I'm having trouble pushing to GitHub. Can you help?"

### Vercel Deployment Failed?

1. **Check the error message**: Click on the failed deployment to see what went wrong
2. **Ask Cursor**: Press `Cmd+K` and paste the error message - Cursor can help fix it!
3. **Common issues**:
   - Build errors (check the build logs)
   - Missing dependencies
   - Image path errors

### Need More Help?

- **Ask Cursor's AI**: Press `Cmd+K` and describe your issue - this is often the fastest way!
- Check the [Cursor documentation](https://docs.cursor.sh)
- Check the [Vercel documentation](https://vercel.com/docs)
- Contact: fien.a.c.de.doncker[at]gmail.com

---

## 📝 Quick Reference

### Cursor AI Commands (Press `Cmd+K`)

**Adding a comic:**
```
I've added [filename] to [collection folder]. Please add it to the collection with title "[Title]" and description "[Description]".
```

**Adding multiple comics:**
```
I've added several images to [folder]. Please add them all to the [collection name] collection.
```

**Creating a new collection:**
```
I've created a new folder "[Folder Name]" with images. Please create a new collection for them.
```

**Fixing issues:**
```
[Describe the problem]. Can you help fix it?
```

### Common Terminal Commands

```bash
# Start development server
npm run dev

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main
```

### Important Folders

- **Root folders** (`Figure 1A 2025/`, `Other comics/`, etc.) - **Place your new files here first!**
- `public/` - Cursor will copy files here automatically
- `components/Collections/index.tsx` - Cursor will update this automatically

---

## 💡 Pro Tips

1. **Always place files in root folders first** - Then ask Cursor to handle the rest
2. **Use descriptive prompts** - The more details you give Cursor, the better it can help
3. **Test locally first** - Check [http://localhost:4000](http://localhost:4000) before pushing
4. **Let Cursor do the work** - Don't manually edit files if Cursor can do it for you!
5. **Ask Cursor for help** - If something seems complicated, just ask (`Cmd+K`)

---

*Happy creating! 🎨 Remember: Place files in root folders, then let Cursor do the magic!*
