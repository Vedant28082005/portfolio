// Facts here come only from the resume, the existing site copy, and the public PhysAgent README.
export interface ProjectPage {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  goal: string[];
  hardware: string[];
  built: string[];
  outcome?: string[];
  stack: string[];
  repo?: string;
}

export const PROJECT_PAGES: ProjectPage[] = [
  {
    slug: 'sensor-dashboard',
    title: 'Sensor Dashboard',
    seoTitle: 'Sensor Dashboard: Arduino I2C Sensors + React | Vedant Sutariya',
    seoDescription:
      'Live sensor dashboard: an Arduino reads ENS160 and AHT21 I2C sensors over serial and a React app plots temperature, humidity, CO and TVOC. Team of 3.',
    tagline: 'Live sensor visualisation with Arduino and React · Team of 3 · Apr–May 2026',
    goal: [
      'Read temperature, humidity, CO and TVOC values from I2C environmental sensors and show them as live, timestamped graphs in a browser.',
    ],
    hardware: [
      'ENS160 air-quality sensor (CO, TVOC) and AHT21 temperature/humidity sensor, both on the I2C bus.',
      'Arduino (AVR) as the sensor host, sending readings to the computer over a serial connection.',
      'Firmware stack: Embedded C / AVR C. Dashboard stack: React and Vite.',
    ],
    built: [
      'I built the React dashboard that reads the Arduino’s serial stream and renders live timestamped graphs of the sensor values.',
      'The sensor side runs Arduino firmware written in Embedded C / AVR C. This was a team project with three people.',
    ],
    stack: ['Arduino', 'ESP32', 'Raspberry Pi', 'React', 'Vite', 'Embedded C', 'AVR C'],
  },
  {
    slug: 'autobot',
    title: 'AUTOBOT',
    seoTitle: 'AUTOBOT: ROS2 Jazzy SLAM Robot with LiDAR | Vedant Sutariya',
    seoDescription:
      'AUTOBOT is an autonomous navigation robot built on ROS2 Jazzy, a TG30 LiDAR and SLAM, with odometry sync and PWM motor control on a Raspberry Pi 5.',
    tagline: 'Autonomous navigation platform · ROS2 Jazzy · In progress',
    goal: [
      'Build a small autonomous mobile robot that can map its surroundings and navigate using LiDAR-based SLAM.',
    ],
    hardware: [
      'Raspberry Pi 5 running Ubuntu 24.04 as the on-board computer.',
      'TG30 LiDAR for scanning and SLAM.',
      'Drive motors controlled through PWMA / PWMB signals.',
      'OpenManipulator-X arm, integration in progress.',
    ],
    built: [
      'A ROS2 Jazzy workspace combining the TG30 LiDAR and SLAM.',
      'Odometry synchronisation and motor control over PWMA / PWMB.',
    ],
    outcome: ['Status: in progress. Integration of the OpenManipulator-X arm is the current work.'],
    stack: ['ROS2', 'Python', 'Raspberry Pi 5', 'LiDAR', 'SLAM', 'Ubuntu 24.04'],
    repo: 'https://github.com/Vedant28082005/amr-ros2-workspace',
  },
  {
    slug: 'physagent',
    title: 'PhysAgent',
    seoTitle: 'PhysAgent: ESP32 MCP Server on ESP-IDF + FreeRTOS | Vedant Sutariya',
    seoDescription:
      'PhysAgent is an MCP server for the ESP32: ESP-IDF v5.2 and FreeRTOS firmware with 20 tools over WebSocket JSON-RPC, driven by a local Llama 3 agent.',
    tagline: 'A universal MCP server for the ESP32 · Natural language in, real-world outputs',
    goal: [
      'Make an ESP32 controllable by any AI agent or UI through one interface, so an instruction like “blink pin 2 every 3 seconds” turns into real GPIO output.',
    ],
    hardware: [
      'ESP32 running ESP-IDF v5.2 and FreeRTOS.',
      'Peripheral driver registry covering 6 driver families (for example GPIO and motor control).',
      'Agent host: any laptop (Windows, macOS or Linux) running Python 3.10+ and a local Llama 3 8B model via Ollama.',
    ],
    built: [
      'Firmware with 20 MCP tools across 6 driver families, exposed as WebSocket JSON-RPC 2.0, plus an autonomous task runtime with NVS persistence.',
      'A Python agent with a three-layer interface: regex fast-path, constrained JSON intent, and a deterministic dispatcher, with sandboxed host file operations.',
      'Three ways to drive the board: a terminal agent, a single-file HTML dashboard, and the raw MCP endpoint for clients such as Claude or ChatGPT.',
    ],
    stack: ['ESP-IDF', 'FreeRTOS', 'ESP32', 'MCP', 'Python', 'Ollama'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    slug: 'llm-iot',
    title: 'LLM + IoT',
    seoTitle: 'LLM + IoT: ESP32 DHT11 Sensor Summaries with Ollama | Vedant Sutariya',
    seoDescription:
      'An ESP32 with DHT11 sensors posts readings to a Flask gateway that asks a locally hosted Ollama LLM to describe room conditions in plain language.',
    tagline: 'ESP32 sensor data summarised by a local LLM · Sep 2025',
    goal: ['Turn raw temperature and humidity readings into a short, readable description of room conditions using a locally hosted LLM.'],
    hardware: ['ESP32 with DHT11 temperature and humidity sensors.', 'A computer running the Flask gateway and a local Ollama model.'],
    built: [
      'An ESP32 that sends DHT11 readings to a Flask API gateway.',
      'A gateway that triggers a locally hosted Ollama LLM to generate a descriptive summary of room conditions from each reading.',
    ],
    stack: ['ESP32', 'Ollama', 'Flask', 'Python', 'IoT'],
  },
  {
    slug: 'iot-ml',
    title: 'IoT + ML',
    seoTitle: 'IoT + ML: ESP32 Random Forest Weather Classifier | Vedant Sutariya',
    seoDescription:
      'A Random Forest weather classifier served by Flask that predicts conditions from temperature and humidity streamed periodically by an ESP32.',
    tagline: 'Weather classification from ESP32 readings · Aug 2025',
    goal: ['Classify weather conditions automatically from temperature and humidity data streamed by an ESP32.'],
    hardware: ['ESP32 streaming temperature and humidity at regular intervals.', 'A computer hosting the Flask server and the trained model.'],
    built: [
      'A Random Forest classifier trained with Scikit-learn.',
      'A Flask server that receives the ESP32’s periodic readings and returns the predicted condition.',
    ],
    stack: ['ESP32', 'Scikit-learn', 'Flask', 'Python', 'ML'],
  },
  {
    slug: 'rpi-agent',
    title: 'RPi Agent',
    seoTitle: 'RPi Agent: Gemini AI Agent for Raspberry Pi 5 GPIO | Vedant Sutariya',
    seoDescription:
      'A Gemini-powered agent environment with an HMI for programming Raspberry Pi 5 GPIO pins, using a sandbox agent and a separate code-generation agent.',
    tagline: 'Gemini-powered agent for Raspberry Pi 5 GPIO · Feb–Mar 2026',
    goal: ['Let a user program Raspberry Pi 5 GPIO pins through an AI agent and a simple human-machine interface.'],
    hardware: ['Raspberry Pi 5 and its GPIO pins.', 'Gemini API for the agents, Flask for the HMI, Python for the generated code.'],
    built: [
      'A Gemini-powered agent environment with an HMI for programming GPIO pins.',
      'A sandbox agent that manages Python libraries, and a separate code-generation agent that writes the GPIO code.',
    ],
    stack: ['Raspberry Pi', 'Gemini API', 'Flask', 'Python', 'AI Agent'],
  },
];

export function getProjectPage(slug: string | undefined) {
  return PROJECT_PAGES.find((p) => p.slug === slug);
}
