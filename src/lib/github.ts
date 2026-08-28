import medisysImg from '../assets/projects/medisys.svg';

const USER = 'DylanZM';

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  stargazers_count: number;
}

const LANG_ICON: Record<string, string> = {
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  Python: 'python',
  Go: 'go',
  Astro: 'astro',
  HTML: 'html',
  CSS: 'css',
  'C++': 'cplusplus',
  PHP: 'github',
  Blade: 'github',
  Shell: 'github',
  Rust: 'github',
  Java: 'github',
  'C#': 'github',
};

export interface ProjectTag {
  name: string;
  icon: string;
}

export interface Project {
  img: string;
  alt: string;
  title: string;
  description: string;
  github: string;
  demo: string;
  tags: ProjectTag[];
  stars: number;
}

const DENYLIST = new Set([
  'portfolio-demo',
  'DylanZM',
  'task-manager',
  'comands-omarchy',
  'WebWorking',
  'php_crud',
  'beautyRooApi',
]);

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const encodeSvg = (svg: string) =>
  'data:image/svg+xml,' + encodeURIComponent(svg.replace(/\s{2,}/g, ' ').trim());

function langIcon(lang: string | null): string {
  return (lang && LANG_ICON[lang]) || 'github';
}

export function thumb(name: string, lang: string | null): string {
  const initial = (name.charAt(0) || '#').toUpperCase();
  const label = lang || 'Repository';
  const barWidth = Math.min(420, Math.max(120, name.length * 26));
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#c778dd' stop-opacity='0.16'/>
        <stop offset='1' stop-color='#9d4edd' stop-opacity='0.03'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='600' fill='#0b0d0e'/>
    <rect width='1200' height='600' fill='url(#g)'/>
    <circle cx='1010' cy='110' r='210' fill='#c778dd' opacity='0.06'/>
    <circle cx='150' cy='540' r='170' fill='#9d4edd' opacity='0.06'/>
    <text x='70' y='460' font-family='Inter, system-ui, sans-serif' font-size='420' font-weight='800' fill='#c778dd' opacity='0.10'>${initial}</text>
    <text x='80' y='250' font-family='Inter, system-ui, sans-serif' font-size='56' font-weight='800' fill='#f3f4f6'>${escapeXml(name)}</text>
    <rect x='82' y='282' width='${barWidth}' height='6' rx='3' fill='#c778dd'/>
    <text x='82' y='338' font-family='Inter, system-ui, sans-serif' font-size='28' font-weight='600' fill='#abb2bf'>${escapeXml(label)}</text>
    <circle cx='90' cy='430' r='8' fill='#c778dd'/>
    <text x='112' y='437' font-family='Inter, system-ui, sans-serif' font-size='22' fill='#abb2bf'>github.com/${USER}/${escapeXml(name)}</text>
  </svg>`;
  return encodeSvg(svg);
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );
    if (!res.ok) return [];
    const repos = (await res.json()) as GithubRepo[];
    return repos
      .filter((r) => !r.fork && !DENYLIST.has(r.name) && !/exercices/i.test(r.name))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map((r) => {
        const icon = langIcon(r.language);
        const tags: ProjectTag[] = [{ name: r.language || 'Code', icon }];
        const isMedisys = r.name.toLowerCase() === 'medisys';
        return {
          img: isMedisys ? medisysImg.src : thumb(r.name, r.language),
          alt: r.name,
          title: r.name,
          description: r.description || `A ${r.language || 'code'} project.`,
          github: r.html_url,
          demo: r.homepage || '#',
          tags,
          stars: r.stargazers_count,
        };
      });
  } catch {
    return [];
  }
}
