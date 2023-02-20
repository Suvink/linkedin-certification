import React from "react";

export interface LinkedinCertificationProps {
    certificationName: string,
    organizationId?: string,
    organizationName?: string,
    issuedMonth?: number,
    issuedYear?: number,
    expirationYear?: number,
    expirationMonth?: number,
    certificateId?: string,
    certificateURL?: string,
    newTab?: boolean,
    customButton?: React.ReactNode
}