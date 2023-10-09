import { FilesType } from "./files.type";

type TypeActionType = 'save' | 'update' | 'close';

export interface SaveOpenPageProps {
  nameFile: string
  typeFile: FilesType
  isActive: boolean
  isOpen: boolean
}

export interface ClosePageProps {
  nameFile: string
}

export type DataPageType = {
  name: string
  typeFile: FilesType
}

export interface OnRedirectPageProps {
  typeAction: TypeActionType
  dataPage: DataPageType
}