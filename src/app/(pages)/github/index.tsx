'use client'
import { Fragment, useCallback, useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

import { FileNumbers } from '@/components/FileNumbers';
import Text from '@/components/Text';
import Title from '@/components/Title';

import { getDataSummary } from '@/services/summary-api';

import { ProfessionalHistoryType, ProfessionalResumeType } from '@/types/summary-api.type';

import * as S from './styles';

interface HandleDatesProps {
  start: Date
  end: Date
  isCurrent: boolean
}

export default function GitHubPage() {
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
            <Title type='md' description={professionalResume.title} />
          </FileNumbers>

          <FileNumbers />

          <FileNumbers>
            <Text type='md' description={professionalResume.aboutMe.me} descriptionType='default'/>
          </FileNumbers>

          <FileNumbers>
            <div>
             
            </div>
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
                  aaa
                </FileNumbers>

                <FileNumbers>
                  qqqqq
                </FileNumbers>

                <FileNumbers>
                 cxcc
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
    <div>
      { RenderProfessionalResume() }

      <FileNumbers />

      { RenderProfessionalHistory() }
    </div>
  )
}
