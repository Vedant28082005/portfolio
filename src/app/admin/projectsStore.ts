// Shared project store — admin writes here, ProjectsSection reads from here.
export interface Project {
  status: string;
  statusColor: string;
  title: string;
  subtitle: string;
  desc: string;
  stack: string[];
  repo: string;
}

export const DEFAULT_PROJECTS: Project[] = [
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'SENSOR DASHBOARD',
    subtitle: 'Live Sensor Visualisation · Team of 3',
    desc: 'React dashboard that reads ENS160 + AHT21 (I2C) temperature, humidity, CO and TVOC data from an Arduino over serial and renders live timestamped graphs.',
    stack: ['Arduino', 'ESP32', 'Raspberry Pi', 'React', 'Vite', 'Embedded C', 'AVR C'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'RPi AGENT',
    subtitle: 'Gemini-Powered AI Agent for Raspberry Pi GPIO',
    desc: 'Gemini-powered AI agent with an HMI for programming Raspberry Pi 5 GPIO pins, using a sandbox agent for Python library management and a separate code-generation agent.',
    stack: ['Raspberry Pi', 'Gemini API', 'Flask', 'Python', 'AI Agent'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'LLM + IoT',
    subtitle: 'ESP32 × Local LLM Integration',
    desc: 'Connected an ESP32 with DHT11 sensors to a Flask API gateway that triggers a locally hosted Ollama LLM to generate descriptive summaries of room conditions from live sensor readings.',
    stack: ['ESP32', 'Ollama', 'Flask', 'Python', 'IoT'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'IoT + ML',
    subtitle: 'Edge Weather Classifier',
    desc: 'Random Forest weather classifier behind a Flask server that predicts conditions from temperature and humidity streamed periodically by an ESP32.',
    stack: ['ESP32', 'Scikit-learn', 'Flask', 'Python', 'ML'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
];

const STORAGE_KEY = 'portfolio_projects';

export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Project[];
  } catch {
    // ignore
  }
  return DEFAULT_PROJECTS;
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  // Dispatch a custom event so ProjectsSection can re-render live
  window.dispatchEvent(new Event('projects-updated'));
}

export const STATUS_OPTIONS = [
  { label: 'ACTIVE',      color: 'bg-[#00FF88]' },
  { label: 'BUILDING',    color: 'bg-[#FF6B2B]' },
  { label: 'IN PROGRESS', color: 'bg-[#FF6B2B]' },
  { label: 'SHIPPED',     color: 'bg-[#6B7280]' },
  { label: 'PAUSED',      color: 'bg-[#6B7280]' },
];
