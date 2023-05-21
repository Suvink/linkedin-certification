import React from "react";

interface LinkedInCertificationBaseProps {
  certificationName: string;
  issuedMonth?: number;
  issuedYear?: number;
  expirationYear?: number;
  expirationMonth?: number;
  certificateId?: string;
  certificateURL?: string;
  newTab?: boolean;
  customButton?: React.ReactNode;
}

interface LinkedInCertificationOrgIdProps
  extends LinkedInCertificationBaseProps {
  organizationId: number;
  organizationName?: never;
}

interface LinkedInCertificationOrgNameProps
  extends LinkedInCertificationBaseProps {
  organizationId?: never;
  organizationName: string;
}

export type LinkedInCertificationProps =
  | LinkedInCertificationOrgIdProps
  | LinkedInCertificationOrgNameProps;
