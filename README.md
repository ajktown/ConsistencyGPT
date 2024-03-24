# Consistency GPT

Master Your Daily Tasks with GitHub Commit Calendar-Style Tracking

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mlajkim)


## Table of Contents

<!-- TOC -->

- [Consistency GPT](#consistency-gpt)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [For Developers](#for-developers)
  - [Public Image](#public-image)
    - [Push image command](#push-image-command)
  - [About the starter of this project](#about-the-starter-of-this-project)
    - [Getting Started](#getting-started)
    - [Learn More](#learn-more)
    - [Deploy on Vercel](#deploy-on-vercel)

<!-- /TOC -->


## Overview
ConsistencyGPT revolutionizes daily task management by integrating the familiar and motivational visual style of a GitHub commit calendar. Designed for individuals and teams who value consistency in their workflow, this app offers a unique and engaging way to track and scale daily tasks.

## For Developers
- [Developer guide](https://github.com/ajktown/docs/tree/main/dev_consistency)

## Public Image

https://hub.docker.com/r/ajktown/consistency/tags


### Push image command
You must have permission to push to the repository.
```sh

docker build -t ajktown/consistency:latest .
docker push ajktown/consistency:latest

```

## About the starter of this project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
