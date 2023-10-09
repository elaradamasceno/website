'use client'
import { Fragment, useCallback, useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

import { FileNumbers } from '@/components/FileNumbers';

import { getDataSummary } from '@/services/summary-api';

import { ProfessionalHistoryType, ProfessionalResumeType } from '@/types/summary-api.type';

import * as S from './styles';

interface HandleDatesProps {
  start: Date
  end: Date
  isCurrent: boolean
}

export default function SummaryPage() {
  const [professionalResume, setProfessionalResume] = useState<ProfessionalResumeType>()
  const [professionalHistory, setProfessionalHistory] = useState<ProfessionalHistoryType>()

  const fetchDataSummary = useCallback(async () => {
    const data = await getDataSummary();

    setProfessionalResume(data.professionalResume);
    setProfessionalHistory(data.professionalHistory);
  }, [])

  useEffect(() => {
    fetchDataSummary()
  }, [fetchDataSummary])

  const handleDates = ({ start, end, isCurrent}: HandleDatesProps) => {
    const getIntervals = intervalToDuration({
      start: new Date(start),
      end: isCurrent ? new Date() : new Date(end)
    });

    const verifyYears = getIntervals.years !== 0 ? getIntervals.years : '';
    const years = verifyYears !== '' ? `${verifyYears} ${verifyYears === 1 ? 'ano e' : 'anos e'}` : '';

    const verifyMonths = getIntervals.months !== 0 ? getIntervals.months : '';
    const months = verifyMonths !== '' ? `${verifyMonths} ${verifyMonths === 1 ? 'mês' :  'meses'}` : '';

    const date = `${years} ${months}`;

    return date
  }

  const RenderProfessionalResume = () => {
    if(professionalResume){
      return (
        <>
          <FileNumbers>
            <S.Title>
              {professionalResume.title}
            </S.Title>
          </FileNumbers>

          <FileNumbers />

          <FileNumbers>
            <S.Text>
              {professionalResume.aboutMe.me}
            </S.Text>
          </FileNumbers>

          <FileNumbers>
            <S.WrapperText>
              <S.Text>
                {professionalResume.aboutMe.details}
              </S.Text>

              { professionalResume.skills.map((skill, index) => {
                return (
                  <Fragment key={index}>
                    {''}                  
                    <S.Link 
                      href={skill.link}
                      target='_blank' 
                      $typeText='refLink'
                    > 
                      <b>[</b>{skill.name}<b>]</b>, {''}
                    </S.Link>
                  </Fragment>
                )
              })}
            </S.WrapperText>
          </FileNumbers>

          <FileNumbers>
            <S.Text>
              {professionalResume.aboutMe.conclusion}
            </S.Text>
          </FileNumbers>
        </>
      )
    }
  }

  const RenderProfessionalHistory = () => {
    if(professionalHistory){
      return (
        <>
          <FileNumbers>
            <S.Title>
              { professionalHistory.title }
            </S.Title>
          </FileNumbers>

          <FileNumbers />

          { professionalHistory.companies.map((company, index) => {
            return(
              <Fragment key={`company-${index}`}>
                <FileNumbers>
                  <S.Link 
                    href={company.link}
                    target='_blank' 
                    $typeText='refLink'
                  > 
                    <b>- {''}</b>{company.name} {''}
                  </S.Link>
                  
                  <S.Separator> - </S.Separator>

                  <S.Text $typeText='ocean'>
                    { company.function }
                  </S.Text>
                </FileNumbers>

                <FileNumbers>
                  <S.Text>
                    {company.isCurrent && <strong> Atual -  </strong>}

                    { handleDates({ start: company.workingTime.start, end: company.workingTime.end, isCurrent: company.isCurrent}) }
                  </S.Text>
                </FileNumbers>

                <FileNumbers>
                  <S.Text>
                    { company.description }
                  </S.Text>
                </FileNumbers>

                <FileNumbers />
              </Fragment>
            )
          })}
        </>
      )
    }
  }

  return (
    <S.Container>
      { RenderProfessionalResume() }

      <FileNumbers />

      { RenderProfessionalHistory() }
    </S.Container>
  )
}
