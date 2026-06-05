import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  LogOut, Plus, Pencil, Trash2, Save, X, Github,
  FolderKanban, LayoutDashboard, ChevronDown, AlertCircle,
} from 'lucide-react';
import { logout } from './auth';
import { getProjects, saveProjects, STATUS_OPTIONS, type Project } from './projectsStore';

const EMPTY_PROJECT: Project = {
  status: 'BUILDING',
  statusColor: 'bg-[#FF6B2B]',
  title: '',
  subtitle: '',
  desc: '',
  stack: [],
  repo: '',
};

export function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Project>(EMPTY_PROJECT);
  const [stackInput, setStackInput] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  function handleLogout() {
    logout();
    navigate('/admin');
  }

  function startEdit(idx: number) {
    setIsAdding(false);
    setEditingIdx(idx);
    setEditForm({ ...projects[idx] });
    setStackInput(projects[idx].stack.join(', '));
  }

  function startAdd() {
    setEditingIdx(null);
    setIsAdding(true);
    setEditForm({ ...EMPTY_PROJECT });
    setStackInput('');
  }

  function cancelEdit() {
    setEditingIdx(null);
    setIsAdding(false);
    setEditForm(EMPTY_PROJECT);
    setStackInput('');
  }

  function handleStatusChange(label: string) {
    const opt = STATUS_OPTIONS.find((s) => s.label === label);
    setEditForm((f) => ({ ...f, status: label, statusColor: opt?.color ?? 'bg-[#6B7280]' }));
  }

  function saveEdit() {
    const stack = stackInput.split(',').map((s) => s.trim()).filter(Boolean);
    const updated = { ...editForm, stack };
    let next: Project[];
    if (isAdding) {
      next = [...projects, updated];
    } else {
      next = projects.map((p, i) => (i === editingIdx ? updated : p));
    }
    setProjects(next);
    saveProjects(next);
    cancelEdit();
    flashSaved();
  }

  function confirmDelete(idx: number) {
    setDeleteIdx(idx);
  }

  function doDelete() {
    if (deleteIdx === null) return;
    const next = projects.filter((_, i) => i !== deleteIdx);
    setProjects(next);
    saveProjects(next);
    setDeleteIdx(null);
    flashSaved();
  }

  function flashSaved() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const isFormValid = editForm.title.trim() && editForm.subtitle.trim() && editForm.desc.trim();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0FF]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-[#0D0D14]/90 backdrop-blur border-b border-[#1E1E2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-5 h-5 text-[#00D4FF]" />
            <span className="font-mono font-bold text-sm text-[#F0F0FF] tracking-wide">ADMIN PANEL</span>
            <span className="hidden sm:block font-mono text-xs text-[#3a3a4a]">/ Portfolio Control</span>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="font-mono text-xs text-[#00FF88] animate-pulse">✓ Saved</span>
            )}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#6B7280] hover:text-[#00D4FF] transition-colors hidden sm:block"
            >
              View Site ↗
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#1E1E2E] rounded-md font-mono text-xs text-[#6B7280] hover:text-red-400 hover:border-red-500/40 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Active', value: projects.filter((p) => p.status === 'ACTIVE').length },
            { label: 'Building', value: projects.filter((p) => ['BUILDING','IN PROGRESS'].includes(p.status)).length },
            { label: 'Shipped', value: projects.filter((p) => p.status === 'SHIPPED').length },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-4">
              <div className="font-mono text-xs text-[#6B7280] mb-1">{stat.label}</div>
              <div className="font-mono font-bold text-2xl text-[#00D4FF]">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-[#00D4FF]" />
            <h2 className="font-mono font-bold text-lg text-[#F0F0FF]">Projects</h2>
          </div>
          <button
            onClick={startAdd}
            disabled={isAdding || editingIdx !== null}
            className="flex items-center gap-2 px-4 py-2 bg-[#00D4FF] text-[#0A0A0F] font-mono font-bold text-xs rounded-lg hover:bg-[#00b8d9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Project
          </button>
        </div>

        {/* Add Form */}
        {isAdding && (
          <ProjectForm
            form={editForm}
            stackInput={stackInput}
            isNew
            isFormValid={!!isFormValid}
            onChange={(f) => setEditForm(f)}
            onStackChange={setStackInput}
            onStatusChange={handleStatusChange}
            onSave={saveEdit}
            onCancel={cancelEdit}
          />
        )}

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.length === 0 && (
            <div className="text-center py-16 font-mono text-[#3a3a4a]">
              No projects yet. Click "Add Project" to get started.
            </div>
          )}
          {projects.map((project, idx) => (
            <div key={idx}>
              {editingIdx === idx ? (
                <ProjectForm
                  form={editForm}
                  stackInput={stackInput}
                  isNew={false}
                  isFormValid={!!isFormValid}
                  onChange={(f) => setEditForm(f)}
                  onStackChange={setStackInput}
                  onStatusChange={handleStatusChange}
                  onSave={saveEdit}
                  onCancel={cancelEdit}
                />
              ) : (
                <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 sm:p-6 group hover:border-[#2a2a3e] transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${project.statusColor} ${project.status === 'ACTIVE' ? 'animate-pulse' : ''}`} />
                        <span className="font-mono text-xs text-[#6B7280]">{project.status}</span>
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 font-mono text-xs text-[#6B7280] hover:text-[#00D4FF] transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            Repo ↗
                          </a>
                        )}
                      </div>
                      <h3 className="font-mono font-bold text-base sm:text-lg text-[#F0F0FF] truncate">{project.title}</h3>
                      <p className="font-mono text-xs text-[#00D4FF] mb-1">{project.subtitle}</p>
                      <p className="font-mono text-xs text-[#6B7280] line-clamp-2">{project.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.stack.map((t) => (
                          <span key={t} className="font-mono text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#0A0A0F] px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => startEdit(idx)}
                        disabled={isAdding || editingIdx !== null}
                        className="p-2 border border-[#1E1E2E] rounded-lg text-[#6B7280] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors disabled:opacity-30"
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => confirmDelete(idx)}
                        disabled={isAdding || editingIdx !== null}
                        className="p-2 border border-[#1E1E2E] rounded-lg text-[#6B7280] hover:text-red-400 hover:border-red-500/40 transition-colors disabled:opacity-30"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Delete Confirm Modal */}
      {deleteIdx !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setDeleteIdx(null)}
        >
          <div
            className="bg-[#111118] border border-red-500/30 rounded-2xl p-6 max-w-sm w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <h3 className="font-mono font-bold text-[#F0F0FF]">Delete Project?</h3>
            </div>
            <p className="font-mono text-sm text-[#6B7280] mb-6">
              "<span className="text-[#F0F0FF]">{projects[deleteIdx]?.title}</span>" will be permanently removed from your portfolio.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteIdx(null)}
                className="flex-1 py-2 border border-[#1E1E2E] rounded-lg font-mono text-sm text-[#6B7280] hover:text-[#F0F0FF] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={doDelete}
                className="flex-1 py-2 bg-red-500/20 border border-red-500/40 rounded-lg font-mono text-sm text-red-400 hover:bg-red-500/30 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Project Form ────────────────────────────────────────────────────────────

interface FormProps {
  form: Project;
  stackInput: string;
  isNew: boolean;
  isFormValid: boolean;
  onChange: (f: Project) => void;
  onStackChange: (v: string) => void;
  onStatusChange: (label: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

function ProjectForm({ form, stackInput, isNew, isFormValid, onChange, onStackChange, onStatusChange, onSave, onCancel }: FormProps) {
  return (
    <div className="bg-[#111118] border border-[#00D4FF]/40 rounded-xl p-5 sm:p-6 mb-4 shadow-[0_0_20px_rgba(0,212,255,0.07)]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-mono font-bold text-sm text-[#00D4FF]">
          {isNew ? '+ NEW PROJECT' : '✎ EDIT PROJECT'}
        </h3>
        <button onClick={onCancel} className="text-[#6B7280] hover:text-[#F0F0FF] transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">Title *</label>
          <input
            value={form.title}
            onChange={(e) => onChange({ ...form, title: e.target.value })}
            placeholder="e.g. PHYSAGENT"
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] transition-colors"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">Subtitle *</label>
          <input
            value={form.subtitle}
            onChange={(e) => onChange({ ...form, subtitle: e.target.value })}
            placeholder="e.g. Embodied AI Agent Platform"
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] transition-colors"
          />
        </div>

        {/* Status */}
        <div>
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">Status</label>
          <div className="relative">
            <select
              value={form.status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none cursor-pointer"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.label} value={opt.label}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>
        </div>

        {/* Repo */}
        <div>
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">GitHub Repo URL</label>
          <input
            value={form.repo}
            onChange={(e) => onChange({ ...form, repo: e.target.value })}
            placeholder="https://github.com/..."
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] transition-colors"
          />
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">Description *</label>
          <textarea
            value={form.desc}
            onChange={(e) => onChange({ ...form, desc: e.target.value })}
            placeholder="Describe the project..."
            rows={3}
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
          />
        </div>

        {/* Tech Stack */}
        <div className="sm:col-span-2">
          <label className="font-mono text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">
            Tech Stack <span className="text-[#3a3a4a] normal-case">(comma separated)</span>
          </label>
          <input
            value={stackInput}
            onChange={(e) => onStackChange(e.target.value)}
            placeholder="Python, FastAPI, ESP32, RPi5"
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] transition-colors"
          />
          {/* Preview tags */}
          {stackInput && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {stackInput.split(',').map((s) => s.trim()).filter(Boolean).map((t) => (
                <span key={t} className="font-mono text-xs text-[#6B7280] border border-[#1E1E2E] bg-[#0A0A0F] px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-5 pt-5 border-t border-[#1E1E2E]">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-[#1E1E2E] rounded-lg font-mono text-xs text-[#6B7280] hover:text-[#F0F0FF] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={!isFormValid}
          className="flex items-center gap-2 px-5 py-2 bg-[#00D4FF] text-[#0A0A0F] font-mono font-bold text-xs rounded-lg hover:bg-[#00b8d9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Save className="w-3.5 h-3.5" />
          {isNew ? 'Add Project' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
