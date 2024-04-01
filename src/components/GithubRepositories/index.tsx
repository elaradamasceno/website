'use client'
import { GetRepositoriesProps } from "@/types/github-services.type";

import { FileNumbers } from "../FileNumbers";

import * as S from './styles';
import Text from "../Text";

interface GithubRepositoriesProps {
  repositories: GetRepositoriesProps[]
}

export const GithubRepositories = ({ repositories }: GithubRepositoriesProps) => {
  return (
    <>
      { repositories.map((repo, index) => {
        return (
          <S.Container key={index}>          
            <FileNumbers>
              <Text type="md" description={ repo.name ?? repo.full_name} descriptionType="ocean" />
            </FileNumbers>
            <FileNumbers>
              <Text type="md" description={ repo.description } descriptionType="default" />
            </FileNumbers>
              { repo.description } <br />
              { repo.created_at } <br />
              { repo.html_url} <br /> <br />
          </S.Container>
        )
      })}
    </>
  )
}