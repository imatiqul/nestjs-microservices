<div id="top"></div>
<!--
*** Thanks for review Nestjs Microservices project
-->

<!-- PROJECT SHIELDS -->
<!--
*** A micro-services solution using Nestjs
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="//github.com/imatiqul/nestjs-microservices">
    <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Nestjs Microservices</h3>

  <p align="center">
    Sample Nestjs Microservices application, based on a simplified Vertical Slice Architecture and best practices using Nestjs and Nodejs.
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="//github.com/imatiqul/nestjs-microservices/issues">Report Bug</a>
    ·
    <a href="//github.com/imatiqul/nestjs-microservices/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#how-to-run">How to Run</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

While designing architecture of REST API using Nestjs, we need to consider following areas
| Areas	| Node.js	|
| ----- | ----- |
| API	Security	|	Nestjs JwtModule	|
| API Versioning	|	Nestjs URL Versioning |
| API Validation	|	Nestjs ValidationPipe |
| API Documentation	|	Nestjs OpenApi |
| Using DTOs (Object to Object Mapper)	|		TypeORM |
| CORS Policy	|	Nestjs CORS |
| Health Check	|	Healthchecks (Terminus) |
| Dependency Injection	|	Built-in DI |
| Logging	| Nestjs-OpenTelemetry |
| ORM	|	TypeORM |
| CQRS pattern	|	 Nestjs CQRS |
| JSON Serialization	|	class-transformer |
| Cross-cutting API calls	|	Nestjs ClientProxy |
| Handle Errors Globally	|	useGlobalFilters |
| Keep common code paths fast	|	Middleware |
| Caching	|	Nestjs Caching |
| Data Protection	|	Nestjs Security |
| Avoid blocking calls	| Asynchronous providers	|
| Complete long-running Tasks outside of HTTP requests	| Nestjs Schedule	|

Here's why:
* Vertical Slice Architecture
* Best practices for Microservices
* Low Code
* 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap the project.

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Nestjs](https://nestjs.com/)
* [Nest Plugin](https://nx.dev/nest/overview)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up the project locally.

### Prerequisites
* Node.js
* npm
  ```sh
  npm install npm@latest -g
  ```
* yarn
  ```sh
  npm install yarn -g
  ```

### How to Run

_Below is the instructions of how you can install and run the app._

1. Clone the repo
   ```sh
   git clone https://github.com/imatiqul/nestjs-microservices.git
   ```
2. Run project
   ```sh
   yarn
   yarn start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/mf-feature`)
3. Commit your Changes (`git commit -m 'Add some mf-feature'`)
4. Push to the Branch (`git push origin feature/mf-feature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

ATIQUL ISLAM - [@ATIQ](https://imatiqul.com/) - islam.md.atiqul@gmail.com

Project Link: [https://github.com/imatiqul/nestjs-microservices](https://github.com/imatiqul/nestjs-microservices)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/imatiqul/nestjs-microservices.svg?style=for-the-badge
[issues-url]: https://github.com/imatiqul/nestjs-microservices/issues
[license-shield]: https://img.shields.io/github/license/imatiqul/nestjs-microservices?style=for-the-badge
[license-url]: https://github.com/imatiqul/nestjs-microservices/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mdatiqulislam/
