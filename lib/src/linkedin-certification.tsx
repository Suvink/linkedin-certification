import React, {useCallback} from "react";
import { LinkedinCertificationProps } from "./models/linkedin-certificate";
import styles from "./css/style";
import LinkedInIcon from "./assets/linkedin-icon";

/**
 * Renders a button that can be customized to add a certification to Linkedin
 * 
 * @param certificationName - The name of the certificate
   @param organizationName - The name of the organizaion
   @param issuedMonth - Certification issued month
   @param issuedYear - Certification issued year
   @param expirationMonth - Certification expiry month
   @param expirationYear - Certification expiry year
   @param certificateId - Unique ID of the certification
   @param certificateURL - URL for the certification
   @param newTab - If you want to open in a new tab or in the existing tab
   @param customButton - Lets you use your own button
 * 
 * @example
 * <LinkedinCertification 
     certificationName="My Sample Certification"
     organizationName="My Awesome Organization"
     issuedMonth={12}
     issuedYear={2021}
     expirationMonth={3}
     expirationYear={2023}
     certificateId="29c2e87e-5c1c-11ec-bf63-0242ac130002"
     certificateURL="https://www.google.com"
     newTab={true}
     customButton={<button className="button is-primary">My Custom Button</button>}
    /> 
 */

const LinkedinCertification: React.FC<LinkedinCertificationProps> = (props) => {

  const generateLink = useCallback((
    certificationName: string,
    organizationName: string,
    issuedYear?: number,
    issuedMonth?: number,
    expirationYear?: number,
    expirationMonth?: number,
    certificateURL?: string,
    certificateId?: string
  ): string => {
    if (issuedYear !== undefined && expirationYear !== undefined) {
      if (issuedYear > expirationYear) {
        throw new RangeError(
          "Expiration year should be greater than the issued year"
        );
        return "#";
      }
    }

    let urlString = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME
    &name=${encodeURIComponent(
      certificationName
    )}&organizationName=${encodeURIComponent(
      organizationName
    )}&issueYear=${issuedYear?.toString()}&issueMonth=${issuedMonth?.toString()}&expirationYear=${expirationYear?.toString()}&expirationMonth=${expirationMonth?.toString()}&certUrl=${encodeURIComponent(
      certificateURL as string
    )}&certId=${certificateId as string}`;
    )}&issueYear=${issuedYear?.toString()}&issueMonth=${issuedMonth?.toString()}&expirationYear=${expirationYear?.toString()}&expirationMonth=${expirationMonth?.toString()}`;

    if (certificateURL !== undefined) {
      urlString =
        urlString + `&certUrl=${encodeURIComponent(certificateURL as string)}`;
    }

    if (certificateId !== undefined) {
      urlString = urlString + `&certId=${certificateId as string}`;
    }

    console.log(urlString);
    return urlString;
  },[...props]);

  return (
    <>
      <a
        href={generateLink(
          props.organizationName,
          props.certificationName,
          props.issuedYear,
          props.issuedMonth,
          props.expirationYear,
          props.expirationMonth,
          props.certificateURL,
          props.certificateId
        )}
        target={props.newTab ? "_blank" : "_self"}
      >
        {props.customButton ? (
          props.customButton
        ) : (
          <button style={styles.button}>
            <LinkedInIcon />
            Add to LinkedIn
          </button>
        )}
      </a>
    </>
  );
};

export default LinkedinCertification;
