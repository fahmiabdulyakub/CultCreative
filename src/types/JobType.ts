import {CompanyType} from './CompanyType';

export interface JobListType {
  [key: string]: JobType;
}

export interface JobType {
  companyInfo: CompanyType;
  applicants: number;
  createdDate: string;
  description: string;
  title: string;
  type: string;
}
