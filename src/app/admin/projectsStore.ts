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
    status: 'ACTIVE',
    statusColor: 'bg-[#00FF88]',
    title: 'PHYSAGENT',
    subtitle: 'Embodied AI Agent Platform',
    desc: 'Natural language to GPIO/I2C/SPI commands. MCP-based node registry. ESP32 + RPi5 mesh. 10-stage build from sensor node to full autonomous control.',
    stack: ['Python', 'micro-ROS', 'MCP', 'FastAPI', 'ESP32', 'RPi5'],
    repo: 'https://github.com/Vedant28082005/physagent',
  },
  {
    status: 'BUILDING',
    statusColor: 'bg-[#FF6B2B]',
    title: 'AUTOBOT',
    subtitle: 'Autonomous Navigation Platform',
    desc: 'ROS2 Jazzy + TG30 LiDAR + SLAM. Odometry sync, motor control via PWMA/PWMB. OpenManipulator-X integration in progress.',
    stack: ['ROS2', 'Python', 'RPi5', 'LiDAR', 'Ubuntu 24.04'],
    repo: 'https://github.com/Vedant28082005/amr-ros2-workspace',
  },
  {
    status: 'SHIPPED',
    statusColor: 'bg-[#6B7280]',
    title: 'YATRAAI',
    subtitle: 'AI Travel Planning Platform',
    desc: 'AWS-hosted, FastAPI + Next.js, MongoDB Atlas. Google Gemini 1.5 Pro for trip generation. Built as cloud architecture course project @ PDEU.',
    stack: ['AWS', 'Docker', 'FastAPI', 'Next.js', 'Gemini', 'MongoDB'],
    repo: 'https://github.com/2903-adi/YatraAI',
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
