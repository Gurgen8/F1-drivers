export interface LoadableData<T extends object | null> {
  data: T;
  error: null | unknown;
  status: 'loading' | 'idle' | 'failed';
}

export type TParsedXmlDriverInfoData = {
  MRData: {DriverTable: {Driver: TDriverListItem}};
};
export type TParsedXmlDriverListData = {
  MRData: {DriverTable: {Driver: TDriverListItem[]}; '@_total': number};
};

export type TDriverListItem = {
  GivenName: string;
  FamilyName: string;
  PermanentNumber: number;
  DateOfBirth: Date | string;
  Nationality: string;
  '@_driverId': string;
  '@_url': string;
};
