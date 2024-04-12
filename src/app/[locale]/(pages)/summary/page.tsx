'use client'
import { Fragment, useCallback, useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

import { FileNumbers, Text, Title } from '@/components/core';
import useCustomTranslations from '@/hooks/useCustomTranslations';

import { ProfessionalHistoryType, ProfessionalResumeType } from '@/types/summary-api.type';
import { PageProps } from '@/types/page-type';

import { getDataSummary } from '@/services/summary-api';

import * as S from './styles';

interface HandleDatesProps {
  start: Date
  end: Date
  isCurrent: boolean
}

export default function SummaryPage(pageProps: PageProps) {
  const t = useCustomTranslations('General');

  const [professionalResume, setProfessionalResume] = useState<ProfessionalResumeType>()
  const [professionalHistory, setProfessionalHistory] = useState<ProfessionalHistoryType>()

  const fetchDataSummary = useCallback(async () => {
    const data = await getDataSummary(pageProps.params.locale);

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
    const years = verifyYears !== '' ? `${verifyYears} ${verifyYears === 1 ? `${t('year')} ${t('and')}` : `${t('years')} ${t('and')}` }` : '';

    const verifyMonths = getIntervals.months !== 0 ? getIntervals.months : '';
    const months = verifyMonths !== '' ? `${verifyMonths} ${verifyMonths === 1 ? `${t('month')}` : `${t('months')}` }` : '';

    const date = `${years} ${months}`;

    return date
  }

  const RenderProfessionalResume = () => {
    if(professionalResume){
      return (
        <>
          <FileNumbers>
            <Title type='md' description={professionalResume.title} />
          </FileNumbers>

          <FileNumbers />

          <FileNumbers>
            <Text type='md' description={professionalResume.aboutMe.me} descriptionType='default'/>
          </FileNumbers>

          <FileNumbers>
            <S.WrapperText>
              <Text type='md' description={professionalResume.aboutMe.details} descriptionType='default'/>

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
            <Text type='md' description={professionalResume.aboutMe.conclusion} descriptionType='default'/>
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
            <Title type='md' description={professionalHistory.title} />
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

                  <Text type='md' description={company.function} descriptionType='ocean'/>
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
