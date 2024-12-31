export interface AgreementsType {
  termsOfService: boolean;
  personalInfo: boolean;
  locationInfo: boolean;
  thirdParty: boolean;
  marketing: boolean;
}

export const agreements: AgreementsType = {
  termsOfService: false,
  personalInfo: false,
  locationInfo: false,
  thirdParty: false,
  marketing: false,
};

// agreementData 전체 타입
export type AgreementData = AgreementDataItem[];

// JSON 데이터 타입
export interface AgreementDataItem {
  id: keyof AgreementsType;
  label: string;
  title: string;
  required: boolean;
  description: string;
}
