# Spare Oom 🚪✨

A comprehensive homeschool planning web application inspired by the magic of learning and discovery. Built with love for homeschooling families who plan entire school years.

## About

Spare Oom helps homeschooling families organize their year-long lesson plans, track daily progress, and manage multiple students with ease. Named after the magical space Mr. Tumnus refers to in The Chronicles of Narnia, this app aims to make homeschool planning feel less like work and more like an adventure.

Whether you plan your entire year in August, work month-by-month, or prefer weekly planning, Spare Oom adapts to your workflow with powerful tools that save hours of time.

## ✨ Features

### Year-Long Planning
- **Year View** - See all 12 months at a glance with lesson counts per day
- **Month Detail View** - Click any month for an expanded calendar view
- **Quick Navigation** - Jump to any week with one click
- **Visual Planning** - See your entire school year laid out before you

### Time-Saving Tools
- **Lesson Templates** - Create reusable weekly patterns and apply them instantly
- **Copy Weeks** - Duplicate any week to 1-52 future weeks at once
- **Bulk Operations** - Apply templates to entire months in seconds
- **Smart Copying** - Option to skip weekends when copying weeks

### Organization Features
- **Breaks & Holidays** - Mark and track school breaks, holidays, and vacations
- **Color-Coded Subjects** - Visually organize lessons by 8 different subjects
- **Multi-Child Support** - Manage lesson plans for unlimited students
- **Progress Tracking** - See completion rates at a glance (X/Y done)

### Daily Management
- **Weekly Calendar View** - See your entire week in a grid layout
- **Daily Checklists** - Click into any day for interactive to-do lists
- **Check-Off System** - Mark lessons complete with visual feedback
- **Easy Editing** - Add, edit, or delete lessons anytime

### Cross-Device Sync
- **Firebase Cloud Sync** - Your data follows you everywhere
- **Works Anywhere** - Desktop, tablet, phone - fully responsive
- **No Login Required** - Simple family ID system
- **Instant Updates** - Changes sync across all devices immediately

### Beautiful Themes
Customize your experience with 6 fully-realized themes inspired by beloved stories:

1. **Narnia** ❄️ - "Further Up & Further In" - Elegant serif fonts, snow motifs
2. **Star Trek** 🖖 - "Engage!" - Futuristic tech fonts, LCARS-style panels  
3. **Lord of the Rings** 🗡️ - "Not All Who Wander Are Lost" - Medieval fonts, parchment textures
4. **Stargate** 🌀 - "Chevron 7 Locked" - Military fonts, chevron symbols
5. **Anne of Green Gables** 🌸 - "Scope for Imagination" - Romantic fonts, floral patterns
6. **Little House on the Prairie** 🌾 - "A Harvest of Learning" - Rustic fonts, wood grain

Each theme includes custom Google Fonts, unique color palettes, themed button styles, and decorative elements for a completely immersive experience.

### Mobile-Friendly
- **Responsive Design** - Works perfectly on all screen sizes
- **Add to Home Screen** - Acts like a native app on phones/tablets
- **Touch-Optimized** - Easy tapping and swiping on mobile devices

## 🎯 Perfect For

- **Year-Long Planners** - Map out your entire school year in 1-2 hours
- **Template Users** - Create weekly patterns and reuse them endlessly
- **Multi-Child Families** - Manage different schedules for each student
- **Flexible Educators** - Adjust plans on the fly while maintaining structure
- **Digital Organizers** - Keep everything in one searchable place
- **Mobile Users** - Access your plans from any device, anywhere

## 🚀 Typical Workflows

### Workflow 1: Year Planning (Most Efficient)
1. Switch to Year View in August
2. Mark all breaks and holidays for the year
3. Create 2-3 templates ("Standard Week", "Light Week", "Review Week")
4. Apply templates across all school weeks
5. **Whole year planned in 1-2 hours!**
6. Weekly tweaks take just 5 minutes

### Workflow 2: Monthly Planning
1. Last week of each month, plan the next month
2. Copy successful weeks forward
3. Adjust for holidays and special events
4. Takes 10-15 minutes per month

### Workflow 3: Weekly Planning (Traditional)
1. Sunday evening, plan upcoming week
2. Apply template or copy last week
3. Customize as needed
4. 5-10 minutes per week

## 💰 Cost: $0 Forever

- Firebase free tier (generous limits - 50k reads/20k writes per day)
- Free hosting (GitHub Pages, Vercel, or Netlify)
- No subscriptions, ever
- No hidden costs
- Full data ownership

## 🎓 Educational Philosophy

Spare Oom is built on the principle that homeschool planning should empower, not overwhelm. Whether you're a structured curriculum follower or an eclectic unschooler, the app adapts to your style. The goal is simple: spend less time planning and more time learning together.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/calionestevar/spare-oom.git
cd spare-oom

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

The codebase uses themed naming conventions inspired by beloved stories and franchises:

- **`src/components/startrek/`** - UI Components (Bridge, ViewScreen, Console, PADD)
- **`src/utils/lotr/`** - Helper utilities (shire.js for date helpers)
- **`src/services/stargate/`** - Storage services (dhd.js)
- **`src/constants/narnia/`** - Constants and configuration (cairParavel.js, deepMagic.js)
- **`src/models/anne/`** - Data models (lakeOfShiningWaters.js)
- **`src/context/littlehouse/`** - State management (pantry.js)

## Deployment

### GitHub Pages

1. Update `package.json` with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/spare-oom"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Other Free Hosting Options

- **Vercel**: Connect your GitHub repo at vercel.com
- **Netlify**: Drag and drop your `build` folder at netlify.com
- **Cloudflare Pages**: Connect your repo at pages.cloudflare.com

## 🗺️ Roadmap

### ✅ Implemented (v1.0)
- [x] Weekly calendar view
- [x] Daily checklists with completion tracking
- [x] Year view with month detail
- [x] Lesson templates system
- [x] Copy weeks forward (1-52 weeks)
- [x] Breaks and holidays manager
- [x] Multi-child support
- [x] 6 fully-themed experiences
- [x] Cross-device Firebase sync
- [x] Color-coded subjects
- [x] Progress tracking
- [x] Mobile-responsive design

### 🔜 Coming Soon (v1.1-1.2)
- [ ] Daily notes and reflections
- [ ] Print-friendly weekly view
- [ ] Reading log with book tracking
- [ ] Keyboard shortcuts for power users
- [ ] Dark mode variants per theme

### 🔮 Future Enhancements
- [ ] Progress reports (weekly/monthly summaries)
- [ ] Attendance tracking with required days counter
- [ ] Assignment due dates for multi-day projects
- [ ] Photo attachments for projects
- [ ] Co-parent access with multiple logins
- [ ] Offline mode with sync when online
- [ ] Native mobile apps (iOS/Android)
- [ ] Calendar export (iCal format)
- [ ] Integration with external calendars

See [FEATURE_ENHANCEMENTS.md](FEATURE_ENHANCEMENTS.md) for the complete feature roadmap.

## Contributing

This is an open-source project! We welcome contributions from other homeschooling families. Please feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Share your experience using Spare Oom

## License

MIT License - feel free to use, modify, and share!

## Acknowledgments

Created with love for homeschooling families everywhere. Special thanks to C.S. Lewis, whose magical wardrobe inspired the name of this app.

---

*"Further up and further in!" - The Last Battle*