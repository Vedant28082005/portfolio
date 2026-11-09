import { SITE_URL, NAME, ROLE, GITHUB, LINKEDIN, HOME_TITLE, HOME_DESCRIPTION } from './site';
import { PROJECT_PAGES, getProjectPage } from './content/projectPages';

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  jsonLd: object[];
}

export const PRERENDER_ROUTES = ['/', ...PROJECT_PAGES.map((p) => `/projects/${p.slug}/`)];

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: NAME,
  alternateName: ['Sutariya Vedant', 'Vedant S'],
  url: `${SITE_URL}/`,
  email: 'vedant@vedantsutariya.com',
  jobTitle: ROLE,
  description: HOME_DESCRIPTION,
  image: `${SITE_URL}/og-image.png`,
  knowsAbout: ['Embedded C', 'ESP32', 'RTOS', 'Zephyr', 'ROS2', 'IoT'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Pandit Deendayal Energy University',
    alternateName: 'PDEU',
  },
  sameAs: [GITHUB, LINKEDIN],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: NAME,
  url: `${SITE_URL}/`,
};

export function normalizePath(pathname: string) {
  const p = pathname.split('?')[0].split('#')[0];
  if (p === '/' || p === '') return '/';
  return p.replace(/\/+$/, '') + '/';
}

export function getRouteMeta(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  const m = path.match(/^\/projects\/([^/]+)\/$/);
  const page = m ? getProjectPage(m[1]) : undefined;

  if (page) {
    const url = `${SITE_URL}${path}`;
    return {
      title: page.seoTitle,
      description: page.seoDescription,
      canonical: url,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: page.title,
          description: page.seoDescription,
          url,
          ...(page.repo ? { codeRepository: page.repo } : {}),
          author: { '@id': `${SITE_URL}/#person` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: NAME, item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: page.title, item: url },
          ],
        },
      ],
    };
  }

  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonical: `${SITE_URL}/`,
    jsonLd: [person, website],
  };
}
