# 🎨 User Interface Preview

This document shows what each page looks like in the browser.

---

## 📄 Page 1: Exam Start Page

### URL: `http://localhost:3000/exam`

### Visual Layout:
```
╔════════════════════════════════════════════════════════════╗
║                    Purple Gradient Background               ║
║                                                            ║
║    ┌─────────────────────────────────────────────────┐   ║
║    │          📚 M.I.L Online Exam                   │   ║
║    │    Media and Information Literacy               │   ║
║    │                                                  │   ║
║    │  ┌──────────────────────────────────────────┐  │   ║
║    │  │ Nickname                                  │  │   ║
║    │  │ [Enter your nickname_____________]        │  │   ║
║    │  └──────────────────────────────────────────┘  │   ║
║    │                                                  │   ║
║    │  ┌──────────────────────────────────────────┐  │   ║
║    │  │ Select Your Strand                        │  │   ║
║    │  │ [-- Choose Strand ▼]                      │  │   ║
║    │  │   • EIM - B                               │  │   ║
║    │  │   • HE                                    │  │   ║
║    │  └──────────────────────────────────────────┘  │   ║
║    │                                                  │   ║
║    │  ┌──────────────────────────────────────────┐  │   ║
║    │  │         [  Start Exam  ]                  │  │   ║
║    │  │       (Purple gradient button)            │  │   ║
║    │  └──────────────────────────────────────────┘  │   ║
║    └─────────────────────────────────────────────────┘   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📄 Page 2: Quiz Interface

### After clicking "Start Exam"

### Visual Layout:
```
╔════════════════════════════════════════════════════════════╗
║                    Purple Gradient Background               ║
║                                                            ║
║    ┌─────────────────────────────────────────────────┐   ║
║    │  ▓▓▓▓▓▓░░░░░░░░░░░░░░  (Progress Bar 20%)      │   ║
║    │                                                  │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │ Question 1 of 5            [ 30 ]      │    │   ║
║    │  │                        (timer badge)   │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │                                                  │   ║
║    │  What does MIL stand for?                      │   ║
║    │                                                  │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │  Media Internet Literacy                │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │█ Media and Information Literacy █      │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │  (Selected - Purple background)                │   ║
║    │                                                  │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │  Modern Information Learning            │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │  Media Integration Literacy             │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │                                                  │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │       [  Next Question  ]               │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    └─────────────────────────────────────────────────┘   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Timer States:

**30 - 11 seconds remaining:**
```
┌──────┐
│  25  │  (White background)
└──────┘
```

**10 - 1 seconds remaining:**
```
┌──────┐
│  ⚠️ 8  │  (Red background, pulsing animation)
└──────┘
```

**Time expired:**
```
Auto-advances to next question (no answer recorded)
```

---

## 📄 Page 3: Results Page

### After completing all 5 questions

### Visual Layout:
```
╔════════════════════════════════════════════════════════════╗
║                    Purple Gradient Background               ║
║                                                            ║
║    ┌─────────────────────────────────────────────────┐   ║
║    │                                                  │   ║
║    │              🎉 Exam Completed!                 │   ║
║    │                                                  │   ║
║    │    ┌──────────────┐      ┌──────────────┐      │   ║
║    │    │              │      │              │      │   ║
║    │    │      4/5     │      │     2:35     │      │   ║
║    │    │   (Large)    │      │   (Large)    │      │   ║
║    │    │    Score     │      │  Time Taken  │      │   ║
║    │    └──────────────┘      └──────────────┘      │   ║
║    │                                                  │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │     [  View Leaderboard  ]             │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │  ┌────────────────────────────────────────┐    │   ║
║    │  │     [  Take Again  ]                   │    │   ║
║    │  └────────────────────────────────────────┘    │   ║
║    │                                                  │   ║
║    └─────────────────────────────────────────────────┘   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📄 Page 4: Leaderboard

### URL: `http://localhost:3000/leaderboard`

### Visual Layout:
```
╔════════════════════════════════════════════════════════════════════╗
║                    Purple Gradient Background                       ║
║                                                                     ║
║    ┌──────────────────────────────────────────────────────────┐   ║
║    │                  🏆 Leaderboard                           │   ║
║    │             M.I.L Online Exam Rankings                    │   ║
║    │                                                            │   ║
║    │  [All Strands ▼]  [Take Exam]  [Home]                    │   ║
║    └──────────────────────────────────────────────────────────┘   ║
║                                                                     ║
║    ┌──────────────────────────────────────────────────────────┐   ║
║    │ ┌────┬──────────┬────────┬───────┬───────┬───────────┐  │   ║
║    │ │Rank│ Nickname │ Strand │ Score │ Time  │   Date    │  │   ║
║    │ ├────┼──────────┼────────┼───────┼───────┼───────────┤  │   ║
║    │ │🥇 1 │ Charlie  │EIM - B │ 5/5   │ 1:30  │ Jan 18    │  │   ║
║    │ │    │          │(blue)  │(green)│       │           │  │   ║
║    │ ├────┼──────────┼────────┼───────┼───────┼───────────┤  │   ║
║    │ │🥈 2 │ Alice    │EIM - B │ 5/5   │ 2:00  │ Jan 18    │  │   ║
║    │ │    │          │(blue)  │(green)│       │           │  │   ║
║    │ ├────┼──────────┼────────┼───────┼───────┼───────────┤  │   ║
║    │ │🥉 3 │ Bob      │  HE    │ 4/5   │ 1:40  │ Jan 18    │  │   ║
║    │ │    │          │(pink)  │(green)│       │           │  │   ║
║    │ ├────┼──────────┼────────┼───────┼───────┼───────────┤  │   ║
║    │ │  4 │ Eve      │EIM - B │ 4/5   │ 1:50  │ Jan 18    │  │   ║
║    │ ├────┼──────────┼────────┼───────┼───────┼───────────┤  │   ║
║    │ │  5 │ Diana    │  HE    │ 3/5   │ 2:30  │ Jan 18    │  │   ║
║    │ └────┴──────────┴────────┴───────┴───────┴───────────┘  │   ║
║    └──────────────────────────────────────────────────────────┘   ║
║                                                                     ║
╚════════════════════════════════════════════════════════════════════╝
```

### Strand Filter:
```
When selecting "EIM - B" from dropdown:
→ Only shows students who selected EIM - B strand
→ Rankings recalculated for filtered results
```

### Visual Elements:

**Medals:**
- 🥇 1st Place - Gold, larger size
- 🥈 2nd Place - Silver, larger size
- 🥉 3rd Place - Bronze, larger size
- 4+ - Just number

**Strand Badges:**
```
┌──────────┐        ┌──────────┐
│ EIM - B  │        │    HE    │
│  (Blue)  │        │  (Pink)  │
└──────────┘        └──────────┘
```

---

## 🎨 Color Scheme

### Primary Colors:
- **Purple Gradient:** `#667eea` → `#764ba2`
- **White:** `#ffffff` (containers)
- **Light Gray:** `#f8f9fa` (question cards)

### Accent Colors:
- **Timer Warning:** `#ff6b6b` (red)
- **Score:** `#28a745` (green)
- **Selected Option:** Purple gradient
- **Hover:** `#f0f4ff` (light purple)

### Strand Badges:
- **EIM - B:** Blue (`#1976d2` on `#e3f2fd`)
- **HE:** Pink (`#c2185b` on `#fce4ec`)

---

## 📱 Responsive Design

### Desktop (> 768px):
```
┌─────────────────────────────────────────┐
│         Full width container            │
│         (max-width: 800px)              │
│         Centered with margins           │
└─────────────────────────────────────────┘
```

### Mobile (< 768px):
```
┌──────────────────────┐
│  Stacked layout      │
│  Smaller fonts       │
│  Touch-friendly      │
│  Full width          │
└──────────────────────┘
```

---

## 🎭 Animations

### Hover Effects:
```
Option boxes:
  Normal: White with gray border
  Hover:  Light purple background + purple border
  Selected: Purple background + white text
```

### Button Effects:
```
Normal: Purple gradient
Hover:  Lifts up 2px (transform: translateY(-2px))
Click:  Ripple effect
```

### Timer Warning:
```
At 10 seconds or less:
  - Background turns red
  - Pulses (opacity 1 → 0.6 → 1)
  - Animation repeats every 1 second
```

### Progress Bar:
```
Smooth width transition (0.3s)
Gradient fill left-to-right
```

---

## 🖱️ Interactive Elements

### Start Form:
- **Nickname input:** Text field with focus border
- **Strand dropdown:** Hover highlights options
- **Start button:** Disabled until both fields filled

### Quiz:
- **Options:** Clickable, shows selected state
- **Next button:** Disabled until answer selected
- **Timer:** Updates every second

### Results:
- **View Leaderboard:** Purple button
- **Take Again:** Gray button (reloads page)

### Leaderboard:
- **Strand filter:** Dropdown reloads page with filter
- **Table rows:** Hover effect (light gray background)
- **Take Exam:** Links to `/exam`
- **Home:** Links to `/`

---

## 📊 Data Display Formats

### Time Format:
```
Seconds → MM:SS
90s     → 1:30
125s    → 2:05
3661s   → 61:01
```

### Score Format:
```
correct/total
4/5
5/5
3/5
```

### Date Format:
```
JavaScript Date → Localized date string
2026-01-18T... → 1/18/2026 (US)
```

---

## 🎯 User Experience Flow

```
┌─────────────┐
│ Visit /exam │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ Fill form       │ (Nickname + Strand)
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Start Exam      │ (Button becomes enabled)
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Question 1      │ (Timer starts at 30)
│ Select answer   │
│ Click Next      │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Questions 2-5   │ (Same process)
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ View Results    │ (Score + Time)
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│ Leaderboard     │ (Auto-redirect or button)
└─────────────────┘
```

---

## 🎨 Visual States Summary

| Element | Normal | Hover | Active/Selected | Disabled |
|---------|--------|-------|----------------|----------|
| Button | Purple gradient | Lifted | Pressed | Faded |
| Option | White, gray border | Purple tint | Purple bg | - |
| Timer | White bg | - | - | Red bg (< 10s) |
| Input | Gray border | Purple border | Purple border | - |
| Table Row | White | Gray bg | - | - |

---

This is how your exam system will look and feel in the browser! 🎨
