# LinkedIn Certification

Lets you add your own certification to LinkedIn with a single click from your websites.

Default Button:

![React](https://i.imgur.com/l3m42aN.png)

## Install

```npm
npm install linkedin-certification
```

<i>Add the --save option to add this as a dependency in your application's `package.json`</i>

## Basic Usage

### Using Organization Name

```js
import React from "react";
import { LinkedinCertification } from "linkedin-certification";

const App = () => {
  return (
    <LinkedinCertification
      certificationName="My Sample Certification"
      organizationName="My Sample Organization"
      issuedMonth={12}
      issuedYear={2021}
      expirationMonth={3}
      expirationYear={2023}
      certificateId="29c2e87e-5c1c-11ec-bf63-0242ac130002"
      certificateURL="https://www.google.com"
      newTab={true}
    />
  );
};

export default App;
```

### Using Organization ID
```js
import React from "react";
import { LinkedinCertification } from "linkedin-certification";

const App = () => {
  return (
    <LinkedinCertification
      certificationName="My Sample Certification"
      organizationId={1337}
      issuedMonth={12}
      issuedYear={2021}
      expirationMonth={3}
      expirationYear={2023}
      certificateId="29c2e87e-5c1c-11ec-bf63-0242ac130002"
      certificateURL="https://www.google.com"
      newTab={true}
    />
  );
};

export default App;
```

## Advanced Usage

You can pass your own button component and use it to add the certification to LinkedIn.

```js
import React from "react";
import { LinkedinCertification } from "linkedin-certification";

const App = () => {
  return (
    <LinkedinCertification
      certificationName="My Sample Certification"
      organizationName="My Sample Organization"
      issuedMonth={12}
      issuedYear={2021}
      expirationMonth={3}
      expirationYear={2023}
      certificateId="29c2e87e-5c1c-11ec-bf63-0242ac130002"
      certificateURL="https://www.google.com"
      newTab={true}
      customButton={
        <button className="button is-link">
          <span className="icon">
            <i className="fab fa-linkedin"></i>
          </span>
          <span>Add to LinkedIn</span>
        </button>
      }
    />
  );
};

export default App;
```

## Options

| Property            | Type         | Description                                                       |
|---------------------|--------------|-------------------------------------------------------------------|
| `certificationName` | `string`     | The name of the certification. `[Required]`                       |
| `organizationId*`   | `string`     | The id of the organization.                                       |
| `organizationName*` | `string`     | The name of the organization.                                     |
| `issuedMonth`       | `number`     | Certification issued month                                        |
| `issuedYear`        | `number`     | Certification issued year                                         |
| `expirationMonth`   | `number`     | Certification expiry month                                        |
| `expirationYear`    | `number`     | Certification expiry year                                         |
| `certificateId`     | `number`     | Unique ID of the certification                                    |
| `certificateURL`    | `string`     | URL for the certification                                         |
| `newTab`            | `boolean`    | Set `true` to open the LinkedIn Certification window in a new tab |
| `customButton`      | `React Node` | Lets you pass your own custom button.                             |

*When using the component, please pick between ‘organizationId’ and ‘organizationName’.The two cannot be included at the
same time. If your organization has an existing page on LinkedIn, it is recommended to use the ‘organizationId’ property.
If your organization does not have an existing page on LinkedIn, use the ‘organizationName’ property instead.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Donations
<a href="https://www.buymeacoffee.com/suvink" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 30px !important;width: 108px !important;" height="30"></a>

## License
[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0) © Suvin Nimnaka
