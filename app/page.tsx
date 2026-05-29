import Hero       from "@/sections/Hero";
import About      from "@/sections/About";
import Projects   from "@/sections/Projects";
import Skills     from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Contact    from "@/sections/Contact";
import { fetchGitHubStats } from "@/lib/github";

export default async function Home() {
  const githubStats = await fetchGitHubStats();
  return (
    <>
      <Hero githubStats={githubStats} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
