import React from "react";

export interface LinkedinCertificationProps {
    certificationName: string,
    organizationName: string,
    issuedMonth?: number,
    issuedYear?: number,
    expirationYear?: number,
    expirationMonth?: number,
    certificateId?: string,
    certificateURL?: string,
    newTab?: boolean,
    customButton?: React.ReactNode
}