import { CountrySummary, Page, PartnerSummary, UserSummary } from "./common";

export enum CampaignStatus {
  OPEN,
  VALIDATING,
  RUNNING,
  CLOSED,
}

export enum CampaignType {
  SIMPLE = "SIMPLE",
  RECURRENT = "RECURRENT",
}

export enum ClaimType {
  PRE_ORDER = "PRE_ORDER",
  SELECTION = "SELECTION",
}

export interface ICampaign {
  id: string;
  type: CampaignType;
  status: CampaignStatus;
  name: string;
  description: string;
  partner: PartnerSummary;
  country: CountrySummary;
  defaultZone: string;
  owner: UserSummary;
  recipients: string;
  created: string;
}

export interface ICampaignDto {
  type: CampaignType;
  partner?: string;
  owner?: string;
  country?: string;
  name?: string;
  description?: string;
  defaultZone: string;
}

export type CampaignPage = Page<ICampaignDto>;
