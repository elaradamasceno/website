import { GithubRepositories } from "@/components/core";
import { getRepositories } from "@/services/github-api";

export default async function GitHubPage() {
  const repositories = await getRepositories();
  
  return (
    <div>
      <GithubRepositories repositories={repositories} />
    </div>
  )
}