import { GithubRepositories } from "@/components/core";
import { getRepositories } from "@/services/github-api";

export const revalidate = 3600;

export default async function GitHubPage() {
  const repositories = await getRepositories();
  
  return (
    <div>
      <GithubRepositories repositories={repositories} />
    </div>
  )
}