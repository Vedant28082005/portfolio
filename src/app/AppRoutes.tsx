import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import App from './App';
import { ProjectPage } from './components/ProjectPage';
import { AdminLogin } from './admin/AdminLogin';
import { AdminDashboard } from './admin/AdminDashboard';
import { ProtectedRoute } from './admin/ProtectedRoute';
import { getRouteMeta } from './seo';

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

// Keeps <head> correct on client-side navigation (prerendered HTML already has it on first load).
function RouteMetaSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith('/admin')) {
      document.title = 'Admin | Vedant Sutariya';
      let robots = document.head.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, nofollow');
      return;
    }
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    const meta = getRouteMeta(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', meta.canonical);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', meta.canonical);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
  }, [pathname]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <RouteMetaSync />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
