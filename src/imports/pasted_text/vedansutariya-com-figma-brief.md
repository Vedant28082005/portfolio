# vedansutariya.com — Figma AI Design Brief
**Full instructions + prompts to build the portfolio site in Figma Make**

---

## 1. What This Site Actually Is

`vedansutariya.com` is NOT just a portfolio. It is a **personal engineering hub** with three roles:

| Layer | What it does |
|---|---|
| **Portfolio** | Showcases Vedant as a builder — hardware, AI, robotics, startups |
| **MCP Gateway** | Hosts and exposes Model Context Protocol servers for PhysAgent and FactoryMind |
| **Permanent Tunnel Endpoint** | Solves the ngrok restart problem by giving a stable public URL via Cloudflare Tunnel (free, permanent) |

Figma should only design the **portfolio frontend**. The MCP server and tunnel sections are backend infra — they still need a **landing/status page** on the site so visitors can see what's running.

---

## 2. Aesthetic Direction

### Concept: **"Dark Hardware Lab"**

Think: a high-end electronics workbench at midnight. Precise, technical, beautiful. Like if a firmware engineer and a product designer built a site together.

### Color Palette

```
Background:       #0A0A0F  (near-black, very dark navy)
Surface cards:    #111118  (slightly lighter)
Border/grid:      #1E1E2E  (subtle dark border)
Primary accent:   #00D4FF  (electric cyan — solder glow)
Secondary accent: #FF6B2B  (warm orange — PCB trace warmth)
Text primary:     #F0F0FF  (near-white with blue tint)
Text muted:       #6B7280  (gray for descriptions)
Green status:     #00FF88  (terminal green — "system online")
```

### Typography

- **Display / Hero:** `Space Grotesk` Bold — technical without being boring
- **Headings:** `JetBrains Mono` — because he writes code
- **Body:** `Inter` — readable, clean
- **Labels/Tags:** `IBM Plex Mono` — chip label aesthetic

### Visual Language

- Thin grid lines in background (PCB-style circuit grid, very subtle, 5% opacity)
- Glowing cyan borders on hover states
- Cards have very subtle inner glow
- Sections separated by thin horizontal rules with circuit-corner decorations
- Hardware images should be on dark matte surfaces, slightly lit from top-left
- Status indicators use blinking green dots (like LEDs)

---

## 3. Site Structure (Pages / Sections)

### Single Page App — 7 Sections

```
[ HERO ]
[ ABOUT ]
[ HARDWARE TOOLKIT ]   ← Arduino, ESP32, RPi 5 — with high-quality photos
[ PROJECTS ]
[ MCP / SERVICES STATUS ]
[ CONTACT ]
[ FOOTER ]
```

---

## 4. Section-by-Section Design Specifications

---

### SECTION 1 — HERO

**Layout:** Full viewport height. Two columns (60/40 split).

**Left column content:**
```
SUTARIYA VEDANT
━━━━━━━━━━━━━━━━━━━━━━
Builder. Engineer. Founder in the making.

B.Tech ICT @ PDEU · Jamnagar, India
Embedded Systems · AI/ML · Robotics · IoT
━━━━━━━━━━━━━━━━━━━━━━
[ View Projects ]   [ Connect ]
```

**Right column:** Animated terminal window (dark card, green text) showing fake live sensor data:
```
$ phys-agent status --verbose
[OK]  ESP32 Node #1 ......... ONLINE
[OK]  RPi5 Core ............. RUNNING
[OK]  TG30 LiDAR ............ SCANNING
[OK]  MCP Server ............ ACTIVE
> Temp: 31.4°C | Humidity: 68% | eCO2: 412ppm
> Bearing FFT: [Normal] Kurtosis=2.1 ✓
$ _
```

**Background:** Subtle animated circuit grid lines slowly scrolling upward. Cyan glow behind the terminal window.

**Figma Prompt for Hero:**
> Design a full-height hero section for a personal portfolio site with a dark hardware lab aesthetic. Background is #0A0A0F with a subtle PCB circuit grid pattern (5% opacity, #00D4FF grid lines). Left side: large stacked typography in white/cyan. Name "SUTARIYA VEDANT" in 72px Space Grotesk Bold with a thin cyan underline divider. Below it role text in JetBrains Mono 16px. Two CTA buttons: primary with solid cyan (#00D4FF) fill, secondary with transparent fill and cyan border. Right side: a floating terminal window card in #111118 with a 1px #00D4FF border and a soft cyan inner glow. Terminal shows green (#00FF88) monospaced text simulating live sensor output. Card has a top status bar with three colored dots (red/yellow/green) like a MacOS window. Overall feel: premium dark tech, like a cyberpunk engineering lab.

---

### SECTION 2 — ABOUT

**Layout:** Two columns. Left: short bio text. Right: two stat cards + one achievement badge.

**Bio text:**
```
I build things that connect the physical world to intelligent systems.

From motor-driver firmware to RAG pipelines — I work across the full stack of 
hardware + AI. Currently building PhysAgent (Embodied AI Platform) and 
FactoryMind (Industrial AI Copilot) while finishing my B.Tech at PDEU.

Hackathon winner. Drummer. Long-term goal: build something that scales.
```

**Stat cards (horizontal row):**
```
[ 🏆  Hackathon Winner ]  [ ⚡ 5+ Live Projects ]  [ 🌐 vedansutariya.com ]
```

**Figma Prompt for About:**
> Design an About section on a #0A0A0F background. Left column has a short bio paragraph in Inter 16px, #F0F0FF text, with a subtle left-border accent in #00D4FF (4px solid). Right column has three small stat cards in a row, each #111118 with a rounded corner (8px), 1px border #1E1E2E, an icon in cyan, a bold number/title, and a subtitle. One card highlights a hackathon trophy, one shows project count, one shows the domain. Below the cards, a single badge-style chip reads "B.Tech ICT · PDEU · Graduating 2027" with an orange (#FF6B2B) accent border. Clean, minimal, technical.

---

### SECTION 3 — HARDWARE TOOLKIT

**This is the most visually important section.**

**Layout:** Full-width section. Title at top. Then a 3-column card grid.

**Section Title:**
```
HARDWARE TOOLKIT
The physical layer I work with daily
```

**3 Cards — one per hardware item:**

---

#### Card 1 — Arduino UNO

**Image source for Figma:** Use this high-quality image URL:
`https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg`

Or search Unsplash/Pexels for: **"Arduino UNO board top view dark background"**

**Card content:**
```
Arduino UNO Rev3
━━━━━━━━━━━━━━━
AVR ATmega328P · 14 Digital I/O
6 PWM Channels · 6 Analog Inputs
Used for: Motor control, sensor prototyping,
          CNC monitoring, I/O testing
```

---

#### Card 2 — ESP32

**Image source for Figma:**
`https://upload.wikimedia.org/wikipedia/commons/2/28/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg`

Or search: **"ESP32 DevKit V1 board close-up dark background"**

**Card content:**
```
ESP32 DevKitC
━━━━━━━━━━━━━━━
Dual-core 240MHz · Wi-Fi + Bluetooth
GPIO / I2C / SPI / UART / ADC
Used for: IoT nodes, sensor fusion,
          micro-ROS, capacitive sensing
```

---

#### Card 3 — Raspberry Pi 5

**Image source for Figma:**
`https://www.raspberrypi.com/app/uploads/2023/10/raspberry-pi-5-hero.png`

Or search: **"Raspberry Pi 5 official product photo"**

**Card content:**
```
Raspberry Pi 5
━━━━━━━━━━━━━━━
Cortex-A76 · 4-core · PCIe 2.0
Runs Ubuntu 24.04 + ROS2 Jazzy
Used for: PhysAgent core, SLAM,
          camera streaming, MCP server
```

---

**Figma Prompt for Hardware Toolkit Section:**
> Design a Hardware Toolkit section on a near-black (#0A0A0F) background. Section title "HARDWARE TOOLKIT" in JetBrains Mono, uppercase, 32px, with a thin #00D4FF underline accent. Below it, a 3-column card grid. Each card is #111118, rounded corners 12px, 1px solid #1E1E2E border, with a subtle top-edge cyan gradient glow. Top half of each card is an image container (aspect ratio 4:3) showing a high-quality photograph of the hardware board (Arduino UNO, ESP32, Raspberry Pi 5) on a dark surface. The image should look like a professional product shot — well-lit from top-left, dark matte background, sharp detail on the PCB traces and components. Below the image, a card body with the hardware name in Space Grotesk Bold 20px white, a thin divider line, and 3-4 spec lines in IBM Plex Mono 13px #6B7280. A bottom row of small tag chips (colored by category: orange for embedded, cyan for wireless, green for Linux). On hover, card border glows cyan and lifts slightly (box-shadow). Overall feel: like a high-end hardware datasheet made beautiful.

---

### SECTION 4 — PROJECTS

**Layout:** Alternating left/right cards (big project showcase style, not a grid).

**Projects to include:**

---

#### Project 1 — PhysAgent
```
STATUS: [ ● ACTIVE ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHYSAGENT
Embodied AI Agent Platform

Natural language → GPIO/I2C/SPI commands.
MCP-based node registry. ESP32 + RPi5 mesh.
10-stage build from sensor node to full autonomous control.

Stack: Python · micro-ROS · MCP · FastAPI · ESP32 · RPi5
[ View Architecture ] [ GitHub ]
```

---

#### Project 2 — FactoryMind AI
```
STATUS: [ ● IN PROGRESS ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FACTORYMIND AI
Industrial Copilot for Small Manufacturers

Translates natural language to GPIO/PLC signals.
Edge-cloud SaaS. Targeting India + global markets.
Bearing fault detection via ML + RAG pipelines.

Stack: LLaMA-2 · QLoRA · FAISS · FastAPI · ESP32 · Django
[ View Demo ] [ GitHub ]
```

---

#### Project 3 — Autonomous Logistics Vehicle
```
STATUS: [ ● BUILDING ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUTOBOT
Autonomous Navigation Platform

ROS2 Jazzy + TG30 LiDAR + SLAM.
Odometry sync, motor control via PWMA/PWMB.
OpenManipulator-X integration in progress.

Stack: ROS2 · Python · RPi5 · LiDAR · Ubuntu 24.04
[ ROS Docs ] [ GitHub ]
```

---

#### Project 4 — YatraAI
```
STATUS: [ ✓ SHIPPED ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YATRAAI
AI Travel Planning Platform

AWS-hosted · FastAPI + Next.js · MongoDB Atlas.
Google Gemini 1.5 Pro for trip generation.
Built as cloud architecture course project @ PDEU.

Stack: AWS · Docker · FastAPI · Next.js · Gemini · MongoDB
[ Live Demo ] [ GitHub ]
```

---

**Figma Prompt for Projects Section:**
> Design a Projects showcase section on #0A0A0F. Title "PROJECTS" in JetBrains Mono uppercase with a glowing cyan underline. Below it, a vertically stacked list of 4 large project cards. Each card spans 80% of the viewport width, centered. Card background #111118, border 1px #1E1E2E, rounded 16px. Left side of card has a colored status badge (blinking green dot for active, orange for in-progress, gray check for shipped), the project name in Space Grotesk Bold 28px white, a 1-line subtitle in cyan, a 2-3 sentence description in Inter 15px muted gray, and a row of small tech-stack tag chips. Right side has a subtle abstract visualization: for hardware projects show a stylized circuit board pattern in very low opacity; for web projects show a cloud/node graph. Two CTA buttons at bottom left. The cards alternate between slightly different tints. On hover, the left border of the card changes to full cyan glowing line. Overall: clean, technical project cards that feel like a startup's feature list.

---

### SECTION 5 — MCP / SERVICES STATUS

This section shows what's running on the domain — tunnels, servers, endpoints.

**Layout:** Dark terminal-style dashboard. Grid of status cards.

**Content:**

```
LIVE INFRASTRUCTURE
vedansutariya.com — Services Running on Edge

┌─────────────────────────────────────────────────┐
│  ● MCP Server — PhysAgent Node Registry          │
│  Endpoint: vedansutariya.com/mcp/physagent       │
│  Protocol: SSE · Port: 3000                      │
│  Status: ONLINE                                  │
├─────────────────────────────────────────────────┤
│  ● Cloudflare Tunnel                             │
│  Permanent URL: stable across restarts           │
│  Replaces ngrok — free, no expiry                │
│  Status: ROUTING                                 │
├─────────────────────────────────────────────────┤
│  ● ESP32 MCP Node                                │
│  Endpoint: vedansutariya.com/mcp/esp32           │
│  Protocol: GPIO/I2C bridge via MCP               │
│  Status: STANDBY                                 │
└─────────────────────────────────────────────────┘
```

**Figma Prompt for Services Section:**
> Design a Services/Infrastructure status section styled like a server monitoring dashboard. Dark background #0A0A0F. Title "LIVE INFRASTRUCTURE" in JetBrains Mono with a blinking green dot before it. Below it, a bordered terminal panel in #0D0D14 with a 1px #00D4FF border and a very soft inner glow. Inside, a list of 3-4 service rows. Each row has: a status indicator dot (green=online, orange=standby, red=offline), a service name in IBM Plex Mono 14px white, a URL in cyan monospace, a protocol tag, and a right-aligned status badge. Rows are separated by thin 1px #1E1E2E dividers. Below the panel, a small note in muted gray: "Powered by Cloudflare Tunnel — permanent, free, zero restart issues." The section feels like a real ops dashboard but styled beautifully.

---

### SECTION 6 — CONTACT

**Layout:** Centered, minimal.

**Content:**
```
LET'S BUILD SOMETHING

If you're working on hardware+AI systems, robotics, or industrial IoT —
I'm always interested in collabs, projects, and conversations.

[ vedant@vedansutariya.com ]
[ github.com/Vedant28082005 ]
[ LinkedIn ]

Currently open to: Internships · Research Collabs · Freelance Hardware Projects
```

**Figma Prompt for Contact:**
> Design a clean contact section centered on the page. Dark background. Large heading "LET'S BUILD SOMETHING" in Space Grotesk Bold 48px, white. Below it 2 lines of body text in Inter. Then three contact link chips in a row, each styled as a monospace pill with an icon prefix — email, GitHub, LinkedIn. Each chip is #111118 with a 1px border and glows cyan on hover. At the bottom, a single line of muted text listing availability tags. Minimal, elegant, confident.

---

### SECTION 7 — FOOTER

```
VEDANT SUTARIYA
vedansutariya.com

Built with: Next.js · Tailwind · Cloudflare
MCP Endpoints: /mcp/physagent · /mcp/esp32
© 2025 — All systems operational
```

---

## 5. How to Use This in Figma Make

### Step 1 — Start a new Figma Make project
Open Figma → New Design File → Use Figma Make (AI mode)

### Step 2 — Set the canvas
- Frame type: Web (1440px width, auto height)
- Dark mode canvas background: `#0A0A0F`

### Step 3 — Paste prompts section by section
Copy each **"Figma Prompt for [Section]"** block above and paste it as the Figma Make input. Generate one section at a time. Adjust spacing after each one.

### Step 4 — Import hardware images
For Arduino, ESP32, RPi 5 cards — use **high quality** sources:

| Hardware | Best image source |
|---|---|
| Arduino UNO | `https://store-usa.arduino.cc/products/arduino-uno-rev3` (official store, use screenshot) |
| ESP32 | `https://www.espressif.com/sites/default/files/modules/esp32-devkitc.png` (official) |
| Raspberry Pi 5 | `https://www.raspberrypi.com/products/raspberry-pi-5/` (official, use their hero image) |
| Fallback | Search Google Images for each with filter: "Labeled for reuse", pick 2000px+ resolution |

In Figma: Drag the image into the hardware card image container. Set fill to "Fit" or "Fill" depending on card aspect ratio. Apply a very subtle dark overlay (gradient from transparent to 20% black) at the bottom edge so text below doesn't clash.

### Step 5 — Typography setup
Install these Google Fonts in Figma:
- `Space Grotesk` — Text > Fonts > Search
- `JetBrains Mono` — for code/headings
- `IBM Plex Mono` — for tags/labels
- `Inter` — for body text

### Step 6 — Color styles
Create these as Figma color styles so you can reuse them:
```
bg/primary      = #0A0A0F
bg/card         = #111118
border/subtle   = #1E1E2E
accent/cyan     = #00D4FF
accent/orange   = #FF6B2B
text/primary    = #F0F0FF
text/muted      = #6B7280
status/green    = #00FF88
```

### Step 7 — Export and hand off
Once all sections are done: File → Export → Export to HTML/CSS or hand off to Next.js developer (yourself). If using Figma Make's code export, check the generated Tailwind classes match the colors above.

---

## 6. Backend Setup (Not Figma — for reference only)

### Permanent Tunnel via Cloudflare (replaces ngrok, free forever)

```bash
# Install cloudflared
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb -o cloudflared.deb
sudo dpkg -i cloudflared.deb

# Login to your Cloudflare account (link your domain)
cloudflared tunnel login

# Create a named tunnel (this UUID is permanent)
cloudflared tunnel create physagent-tunnel

# Route your domain to the tunnel
cloudflared tunnel route dns physagent-tunnel mcp.vedansutariya.com

# Config file: ~/.cloudflared/config.yml
tunnel: <YOUR_TUNNEL_UUID>
credentials-file: /home/vedant/.cloudflared/<UUID>.json
ingress:
  - hostname: mcp.vedansutariya.com
    service: http://localhost:3000
  - service: http_status:404

# Run as a service (survives reboots — NO MORE ngrok restart problem)
sudo cloudflared service install
sudo systemctl enable cloudflared
sudo systemctl start cloudflared
```

**Result:** `mcp.vedansutariya.com` is now a permanent public URL. No expiry. No restart needed. Free.

### MCP Server Hosting (for PhysAgent)

Your current ngrok URL changes on every restart. With this setup:
- `vedansutariya.com` → portfolio site (static/Next.js on Vercel or Cloudflare Pages — free)
- `mcp.vedansutariya.com` → Cloudflare tunnel → your RPi5/local machine → MCP server on port 3000

This means any Claude Desktop, API call, or agent that connects to `mcp.vedansutariya.com/sse` will always reach your server — even after reboots.

---

## 7. Full Master Figma AI Prompt (Single Shot)

If you want to generate the entire site in one Figma Make prompt instead of section-by-section, use this:

---

> **Design a complete dark-themed personal portfolio website for a hardware + AI engineer named Sutariya Vedant, studying at PDEU India, who builds embedded systems, robotics (ROS2, LiDAR), and AI agents. The aesthetic is "Dark Hardware Lab" — like a PCB workbench at night. Use these exact colors: background #0A0A0F, cards #111118, borders #1E1E2E, accent cyan #00D4FF, secondary accent orange #FF6B2B, text white #F0F0FF, muted #6B7280, status green #00FF88. Fonts: Space Grotesk for display, JetBrains Mono for headings and code, Inter for body, IBM Plex Mono for labels. Background has a subtle PCB circuit grid pattern at 5% opacity.**
>
> **The site is 1440px wide with these 7 sections:**
>
> **1. HERO** — Full viewport. Left: name "SUTARIYA VEDANT" large, title, bio tags, two CTA buttons. Right: animated terminal window card showing fake live sensor output (green monospace text, status indicators for ESP32, RPi5, LiDAR, MCP Server). Cyan glow behind terminal.
>
> **2. ABOUT** — Two columns. Short bio with left cyan border accent. Right: three stat cards (Hackathon Winner, 5+ Projects, vedansutariya.com) plus a graduation badge.
>
> **3. HARDWARE TOOLKIT** — Three-column card grid. Each card has a professional product photograph (top half) of Arduino UNO, ESP32 DevKit, Raspberry Pi 5 — all shot on dark matte backgrounds with clean top lighting. Below each image: hardware name, specs in monospace, category tags. Cards glow cyan on hover.
>
> **4. PROJECTS** — Four vertically stacked wide project cards. Projects: PhysAgent (Embodied AI, ACTIVE), FactoryMind AI (Industrial Copilot, IN PROGRESS), Autonomous Vehicle (ROS2 + LiDAR, BUILDING), YatraAI (AWS travel app, SHIPPED). Each card shows status badge, name, description, tech stack chips, GitHub/demo links. Cards have left-border glow on hover.
>
> **5. LIVE INFRASTRUCTURE** — Terminal-style dashboard showing MCP server status, Cloudflare tunnel info, ESP32 node endpoint. Green blinking dots for online status. Monospaced text inside a glowing bordered panel. Feels like a real server dashboard.
>
> **6. CONTACT** — Centered. Large heading, contact chips (email, GitHub, LinkedIn) with hover glow. Availability tags row.
>
> **7. FOOTER** — Dark, minimal. Name, domain, tech stack used, copyright, system status line.
>
> **Overall feel: premium, technical, dark, precise. Like a YC startup founder who solders his own boards. Every interaction has a subtle cyan glow. No stock-photo vibes. No purple gradients. Pure hardware aesthetic.**

---

*This document was generated for vedansutariya.com — a personal engineering hub combining portfolio, MCP infrastructure, and permanent tunnel endpoints.*