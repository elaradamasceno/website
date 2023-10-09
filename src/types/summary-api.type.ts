type AboutMeType = {
  me: string,
  details: string,
  conclusion: string
}

type SkillsType = {
  name: string,
  link: string
}

export type ProfessionalResumeType = {
  title: string,
  aboutMe: AboutMeType,
  skills: SkillsType[]
}

type WorkingTimeType = {
  start: Date,
  end: Date
}

type CompaniesType = {
  name: string,
  function: string,
  workingTime: WorkingTimeType,
  isCurrent: boolean,
  link: string,
  description: string
}

export type ProfessionalHistoryType = {
  title: string,
  companies: CompaniesType[]
}

export interface GetSummaryProps {
  professionalResume: ProfessionalResumeType,
  professionalHistory: ProfessionalHistoryType
}