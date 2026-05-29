export interface GitHubStats {
  yearsBuilding: number;
  publicRepos: number;
  appsShipped: number;
  contributions: number;
}

const USERNAME = "TheLameOne";
// Languages that represent shipped apps (not scripts/notebooks/configs)
const APP_LANGUAGES = new Set(["Dart", "TypeScript"]);
const CACHE = { next: { revalidate: 86400 } } as const; // cache 24 hours

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: { Accept: "application/vnd.github.v3+json" },
        ...CACHE,
      }),
      fetch(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`,
        {
          headers: { Accept: "application/vnd.github.v3+json" },
          ...CACHE,
        }
      ),
      fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
        ...CACHE,
      }),
    ]);

    if (!userRes.ok) return null;
    const user = await userRes.json();

    // Years building from account creation date
    const created = new Date(user.created_at as string);
    const now = new Date();
    const yearsBuilding =
      now.getFullYear() -
      created.getFullYear() -
      (now < new Date(now.getFullYear(), created.getMonth(), created.getDate())
        ? 1
        : 0);

    // Apps shipped = non-fork repos in app-building languages (Dart + TypeScript)
    let appsShipped = 0;
    if (reposRes.ok) {
      const repos: Array<{ fork: boolean; language: string | null }> =
        await reposRes.json();
      appsShipped = repos.filter(
        (r) => !r.fork && r.language !== null && APP_LANGUAGES.has(r.language)
      ).length;
    }

    // Contributions from public contributions graph (no auth needed)
    let contributions = 0;
    if (contribRes.ok) {
      const contribData = await contribRes.json();
      contributions = (contribData?.total?.lastYear as number) ?? 0;
    }

    return {
      yearsBuilding,
      publicRepos: user.public_repos as number,
      appsShipped,
      contributions,
    };
  } catch {
    return null;
  }
}
