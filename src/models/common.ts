export interface PageRequest {
  page?: number;
  size?: number;
  sort?: string;
  filter?: string;
}

export interface SortDescription {
  property: string;
  direction: string;
  ignoreCase: boolean;
  descending: boolean;
  ascending: boolean;
}

export interface PageableDescription {
  sort: SortDescription[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Page<T> {
  content: T[];
  pageable: PageableDescription;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
  sort: SortDescription;
}

export interface CountrySummary {
  id: string;
  name: string;
  flag: string;
  currency: string;
}
export interface PartnerSummary {
  id: string;
  name: string;
}

export interface UserSummary {
  id: string;
  fullname: string;
}
