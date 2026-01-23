# Spare Oom Setup Guide

## Quick Start

Follow these steps to get Spare Oom running on your machine:

### 1. Create the React App

```bash
npx create-react-app spare-oom
cd spare-oom
```

### 2. Install Dependencies

```bash
npm install lucide-react
```

### 3. Create the Folder Structure

```bash
# Create all directories
mkdir -p src/components/startrek
mkdir -p src/utils/lotr
mkdir -p src/services/stargate
mkdir -p src/constants/narnia
mkdir -p src/models/anne
mkdir -p src/context/littlehouse
mkdir -p src/hooks/chuck
```

### 4. Copy the Files

Copy each of the provided code files into their respective locations:

**Constants (Narnia):**
- `src/constants/narnia/cairParavel.js`
- `src/constants/narnia/deepMagic.js`

**Models (Anne):**
- `src/models/anne/lakeOfShiningWaters.js`

**Utils (LOTR):**
- `src/utils/lotr/shire.js`

**Services (Stargate):**
- `src/services/stargate/dhd.js`

**Context (Little House):**
- `src/context/littlehouse/pantry.js`

**Components (Star Trek):**
- `src/components/startrek/Bridge.jsx`
- `src/components/startrek/ViewScreen.jsx`
- `src/components/startrek/Console.jsx`
- `src/components/startrek/PADD.jsx`
- `src/components/startrek/WelcomeScreen.jsx`

**Main App Files:**
- `src/App.jsx`
- `src/index.jsx`
- `README.md` (in root directory)

### 5. Update Tailwind CSS

Replace the contents of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 6. Configure Tailwind (if not already configured)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 7. Run the Development Server

```bash
npm start
```

The app should open at `http://localhost:3000`

## Deploying to GitHub Pages

### 1. Create a GitHub Repository

Go to https://github.com/calionestevar and create a new repository called `spare-oom`

### 2. Initialize Git and Push

```bash
git init
git add .
git commit -m "Initial commit - Spare Oom homeschool planner"
git branch -M main
git remote add origin https://github.com/calionestevar/spare-oom.git
git push -u origin main
```

### 3. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 4. Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://calionestevar.github.io/spare-oom",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 5. Deploy

```bash
npm run deploy
```

Your app will be live at: `https://calionestevar.github.io/spare-oom`

## Troubleshooting

### Storage API Not Available
If you get errors about `window.storage`, you're likely testing in a regular browser instead of claude.ai. For local development, you'll need to either:

1. Use localStorage instead (swap out the dhd.js implementation)
2. Test the deployed version on claude.ai where the storage API is available
3. Use a mock storage service for development

### Tailwind Classes Not Working
Make sure you've run `npx tailwindcss init -p` and your `tailwind.config.js` is configured correctly.

### Build Errors
Make sure all imports are correct and all files are in their proper locations.

## Next Steps

Once deployed, you can:
1. Share the link with your wife
2. Add it to her phone's home screen (works like an app!)
3. Start planning lessons together
4. Gather feedback for future enhancements

## Getting Feedback

After she uses it for a week or two, ask about:
- What features would make it more useful?
- Is anything confusing or hard to use?
- What would save her the most time?
- Are there workflows that feel clunky?

Use this feedback to prioritize the roadmap features!