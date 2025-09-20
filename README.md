<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Better Gov Mailer</h3>

  <p align="center">
    <a href="https://github.com/IamIsthill/better-gov-mailer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/IamIsthill/better-gov-mailer/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/IamIsthill/better-gov-mailer/issues">Request Feature</a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The Better Gov Mailer backend server is responsible for receiving reports from concerned citizens about changes to government hotlines. These reports are automatically forwarded to the BetterGov.ph dedicated Discord server, where project maintainers can quickly review and verify the information.

By centralizing these reports, maintainers can ensure that the BetterGov.ph website always provides the most accurate and up-to-date hotline information, improving communication between the public and government services.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project is built using the following tech stack:

- [![Express][express.js]][express-url] - Web framework
- [![Node][Node.js]][node-url] - JavaScript runtime
- [![Docker][Docker]][docker-url] - Containerization platform
- [![Type][typescript]][ts-url] - Type-safe JavaScript
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Following are the instructions for setting up the project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (for containerized deployment)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/IamIsthill/better-gov-mailer
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Change git remote url to avoid accidental pushes to base project

   ```sh
   git remote set-url origin your_github_username/repo_name
   git remote -v # confirm the changes
   ```

4. Create a `.env.dev` file at the root of the project with the following contents:

   ```sh
   PORT= <port-number-to-expose-the-app>
   DISCORD_WEBHOOK=<discord-webhook-url>
   WHITELIST=<comma-separated-domains-for-prod-or-* -for-dev>
   ```

   A [sample environment file](.env.sample) is provided for reference.

### Running the Server

To run the server, you have multiple options.  
Make sure you’ve created your `.env.dev` file before starting.

1. Run the development server using Node:

   ```sh
   npm run dev
   ```

2. Or run using Docker Compose:

   ```sh
    docker compose build
    docker compose up
   ```

3. Using plain Docker:

   ```sh
   docker build -t better-gov-mailer .
   docker run -d \
    --name better-gov-mailer \
    --restart always \
    -p 5000:3000 \
    --env-file .env.dev \
    better-gov-mailer
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ### Top contributors: -->

<!-- <a href="https://github.com/othneildrew/Best-README-Template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=othneildrew/Best-README-Template" alt="contrib.rocks image" />
</a> -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE.md](LICENSE.md) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Charles Bercasio - [LinkedIn](www.linkedin.com/in/charles-bercasio-a6b00a347) - charles.bercasio@icloud.com

Project Link: [https://github.com/IamIsthill/better-gov-mailer](https://github.com/IamIsthill/better-gov-mailer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Express.js](https://expressjs.com) – Web framework for Node.js
- [Docker](https://www.docker.com) – Containerization platform
- [Img Shields](https://shields.io) – For creating badges
- [Choose an Open Source License](https://choosealicense.com) – Helpful resource for picking a license
- [Discord Webhooks](https://discord.com/developers/docs/resources/webhook) – Used for sending reports to our server

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[express-url]: https://expressjs.com/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/en
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docs.docker.com/
[typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org/
