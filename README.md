# 🧠 SenseRoute – AI-Powered Assistant for the Visually Impaired

**SenseRoute** is a smart, assistive virtual assistant designed for the visually impaired. It provides real-time environmental awareness, object recognition, voice interaction, and emergency alerting — empowering users to navigate the world independently and safely using AI and speech technologies.

---

## ✨ Key Features

- 🎯 **Object Detection**  
  **Detects and recognizes real-world objects** using **YOLOv8** and **OpenCV**.

- 🗣️ **Text-to-Speech (TTS)**  
  **Converts scene and object information into speech** for auditory feedback.

- 📧 **Emergency Email Alerts**  
  **Sends alerts** with object descriptions and timestamps to a guardian via **Gmail API**.

- 🔊 **Voice Command Integration**  
  **Responds to custom voice commands** like _"describe environment"_, _"detect object"_ etc.

- 📰 **Location-Based News Updates**  
  **Reads out the latest news headlines** relevant to the user’s city using **NewsAPI**.

- 📄 **OCR (Optical Character Recognition)**  
  **Reads and speaks text from images** using **Tesseract OCR**.

- 🎮 **Maze Game**  
  **A fun, brain-engaging game** to improve spatial reasoning and navigation.

- 📷 **Scene Description**  
  **Captures and summarizes the environment** around the user.

- 🔒 **Secure & Private**  
  **API keys and tokens are excluded** from the repository for safety.

---

## 📦 Tech Stack

- **Frontend**: React.js, Tailwind CSS, ShadCN UI, Framer Motion  
- **Backend**: Python (Flask), Node.js *(optional)*  
- **AI & Vision**: YOLOv8, OpenCV, Tesseract OCR  
- **Voice Tools**: gTTS / pyttsx3, SpeechRecognition  
- **APIs Used**:
  - **Gmail API** – For sending alerts
  - **NewsAPI** – For local headlines
  - **OpenWeather API** *(optional)* – For weather updates  
- **Other Tools**:
  - GitHub Actions (CI/CD)
  - Google OAuth (secure access)
  - Git Filter Repo (secret removal)

---

## 📂 Folder Structure

```
SenseRoute/
├── frontend/                # React UI
├── assistant-backend/      # Python Flask backend
│   ├── object_detection/   # YOLOv8 integration
│   ├── ocr_module/         # Tesseract OCR logic
│   ├── email_service/      # Gmail API handling
│   └── news_module/        # Location-based news reader
├── .spyder-py3/            # Local config (ignored in Git)
├── credentials.json        # (ignored) Google OAuth credentials
├── token.json              # (ignored) Gmail API token
├── README.md               # Project documentation
└── .gitignore              # Git ignore rules
```



---

## 🧩 Maze Game – For Visually Impaired Users

![Maze Game Screenshot](https://raw.githubusercontent.com/abhiramit02/SenseRoute/c0a02fa3943f532edb2d92781a2cd04a32ea01e1/images/image.jpg)

---

## 🔍 What It Does

**This blind-accessible maze game empowers visually impaired users** to explore and solve mazes using **audio feedback and keyboard navigation**.

---

## 🎧 Core Features

- ✅ **Spatial Audio Guidance**  
  - As the player (**👧**) gets closer to the goal (**🏠**), the **volume increases**.  
  - Bumping into walls triggers **sound effects from the direction of the wall**, aiding spatial understanding.

- ✅ **Keyboard-Based Navigation**  
  - Press **Shift** to cycle through directions (**↑ ↓ ← →**)  
  - Press **Enter** to confirm movement  
  - **No mouse or screen interaction required**

- ✅ **Maze Generation**  
  - Mazes are generated using a **depth-first search** algorithm  
  - Ensures **random, solvable mazes** each time

- ✅ **Level Progression**  
  - **4 levels** of increasing difficulty  
  - **Complete 3 mazes per level** to unlock the next (12 total)

- ✅ **Replayability**  
  - **Regenerate mazes anytime**  
  - **Replay previous levels** to improve skills

---

## 🎯 Goal

**Help visually impaired users reach the destination (🏠)** using **audio cues** and **keyboard controls**.  
This interactive game boosts **confidence**, **spatial reasoning**, and provides a **fun, skill-building experience**.
