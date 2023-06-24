import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { LinkedInCertificationProps } from "./models/linkedin-certificate";
import styles from "./css/style";
import LinkedInIcon from "./assets/linkedin-icon";

/**
 * Renders a button that can be customized to add a certification to LinkedIn
 * @param {LinkedInCertificationProps} props The props of the component
 * @returns {JSX.Element} Returns a button that can be customized to add a certification to LinkedIn
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
const LinkedInCertification: React.FC<LinkedInCertificationProps> = (props) => {
  const generateLink = useCallback(
    (
      certificationName: string,
      organizationName?: string,
      organizationId?: number,
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
        }
      }

      let urlString = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
        certificationName
      )}`;

      if (organizationId !== undefined) {
        // Your organization ID (if your organization has an existing page on LinkedIn)
        urlString += `&organizationId=${organizationId.toString()}`;
      } else if (organizationName !== undefined) {
        // Your organization name (if your organization does not have an existing page on LinkedIn)
        urlString += `&organizationName=${encodeURIComponent(
          organizationName
        )}`;
      } else {
        throw new Error(
          "Either organizationName or organizationId must be defined"
        );
      }

      urlString += `&issueYear=${issuedYear?.toString()}&issueMonth=${issuedMonth?.toString()}&expirationYear=${expirationYear?.toString()}&expirationMonth=${expirationMonth?.toString()}`;

      if (certificateURL !== undefined) {
        urlString =
          urlString +
          `&certUrl=${encodeURIComponent(certificateURL as string)}`;
      }

      if (certificateId !== undefined) {
        urlString = urlString + `&certId=${certificateId as string}`;
      }

      return urlString;
    },
    Object.keys(props)
  ); //end

  return (
    <>
      <a
        href={generateLink(
          props.certificationName,
          props.organizationName,
          props.organizationId,
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

/**
 * Checks if the organization props are valid
 * @param {LinkedInCertificationProps} props
 * @returns {Error|null} - Returns an error if the props are invalid
 */
const orgPropCheck = (props: LinkedInCertificationProps): Error | null => {
  if (
    props.organizationId !== undefined &&
    props.organizationName !== undefined
  ) {
    return new Error(
      "Either organizationName or organizationId must be defined"
    );
  }

  if (
    props.organizationId === undefined &&
    props.organizationName === undefined
  ) {
    return new Error(
      "Either organizationName or organizationId must be defined"
    );
  }

  if (props.organizationId !== undefined) {
    if (isNaN(props.organizationId)) {
      return new Error("organizationId must be a number");
    }
  }

  if (props.organizationName !== undefined) {
    if (props.organizationName.length > 100) {
      return new Error("organizationName must be a string");
    }
  }

  return null;
};

LinkedInCertification.propTypes = {
  certificationName: PropTypes.string.isRequired,
  organizationName: orgPropCheck,
  organizationId: orgPropCheck,
  issuedMonth: PropTypes.number,
  issuedYear: PropTypes.number,
  expirationMonth: PropTypes.number,
  expirationYear: PropTypes.number,
  certificateURL: PropTypes.string,
  certificateId: PropTypes.string,
  newTab: PropTypes.bool,
  customButton: PropTypes.element,
};

export default LinkedInCertification;
