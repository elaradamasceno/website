'use client'
import { format } from "date-fns";

import { FileNumbers, Text, Title } from "@/components/core";
import { GetRepositoriesProps } from "@/types/github-services.type";

import * as S from './styles';

interface GithubRepositoriesProps {
  repositories: GetRepositoriesProps[]
}

export default function GithubRepositories({ repositories }: GithubRepositoriesProps){
  const handleDateFormatting = (date: string) => {
    const result = format(new Date(date), 'dd/MM/yyyy')

    return result;
  }

  return (
    <>
      <FileNumbers>
        <Title type="md" description="Meus Projetos" />
      </FileNumbers>

      <FileNumbers>
        <Text type="md" description="Abaixo estão meus projetos de estudo 📘 " descriptionType="default" />
      </FileNumbers>
      
      { repositories.map((repo, index) => {
        if(repo.name || repo.full_name){
          return (
            <S.Container key={index}>          
              <FileNumbers>
                <Text type="md" description={ repo.name ?? repo.full_name} descriptionType="ocean" />
              </FileNumbers>
  
              <FileNumbers>
                <Text type="md" description={ repo.description ? `Descrição: ${repo.description}` : 'Descrição: Projeto de estudo' } descriptionType="default" />
              </FileNumbers>
  
              <FileNumbers>
                <Text type="md" description={ `Data de criação: ${handleDateFormatting(repo.created_at)}` } descriptionType="default"/>
              </FileNumbers>
  
              <FileNumbers>
                <Text type="md" description={ `Data de atualização: ${handleDateFormatting(repo.updated_at)}` } descriptionType="default"/>
              </FileNumbers>
  
              <FileNumbers>
                <Text type="md" description={ repo.html_url } descriptionType="default"/>
              </FileNumbers>
              <br />
            </S.Container>
          )
        }
      })}
    </>
  )
}