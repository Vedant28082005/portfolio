import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, Lock, User, Terminal } from 'lucide-react';
import { login } from './auth';

export function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (login(username, password)) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials. Access denied.');
      }
      setLoading(false);
    }, 600);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-4"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#00D4FF] bg-[#111118] mb-4 shadow-[0_0_20px_rgba(0,212,255,0.25)]">
            <Terminal className="w-6 h-6 text-[#00D4FF]" />
          </div>
          <h1 className="font-mono font-bold text-2xl text-[#F0F0FF] tracking-tight">ADMIN ACCESS</h1>
          <p className="font-mono text-xs text-[#6B7280] mt-1 tracking-widest">PORTFOLIO CONTROL PANEL</p>
        </div>

        {/* Card */}
        <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="font-mono text-xs text-[#6B7280] tracking-widest uppercase block mb-2">
                User ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter user ID"
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg pl-10 pr-4 py-3 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="font-mono text-xs text-[#6B7280] tracking-widest uppercase block mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg pl-10 pr-12 py-3 text-[#F0F0FF] font-mono text-sm placeholder-[#3a3a4a] focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#00D4FF] transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 font-mono text-xs text-red-400">
                ⚠ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00D4FF] text-[#0A0A0F] font-mono font-bold text-sm py-3 rounded-lg hover:bg-[#00b8d9] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0A0A0F] border-t-transparent rounded-full animate-spin" />
                  AUTHENTICATING...
                </>
              ) : (
                'AUTHENTICATE'
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-xs text-[#3a3a4a] mt-6">
          Vedant Sutariya · Portfolio Admin
        </p>
      </div>
    </div>
  );
}
