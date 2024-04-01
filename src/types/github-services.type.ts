interface OwrnerProps {
  login: string;
  id: string;
  avatar_url: string;
}

export interface GetRepositoriesProps {
  id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwrnerProps
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}
