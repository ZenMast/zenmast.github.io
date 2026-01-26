---
title: This website
description: Why I made this website and how.
date: 2026-01-26
categories: [Tech]
tags: [tech]
hideToc: true
---

# The why

I decided to build a personal website for the following reasons:

- I think having a personal website is cool
- Sometimes I think about stuff and write it into files that eventually disappear, why not write it here
- Because it's been a while since I coded and I thought it's a nice opportunity to remember a bit of it
- I never did web dev and was curious
- I wanted to properly try vibe coding and used this website as a project
- I had free time on my hands since at the moment of this writing I am unemployed but financially secure enough to not panic about it

# The how

## Base

My initial consulting expert on them typical modern static website solutions was ChatGPT. I found [Astro framework](https://astro.build/) that fits very well personal static websites, allows to use TypeScript and builds HTML and everything else for you. I did the tutorial and between doing entire website on my own, I decided to pick a free template and customize it. Since I am not a web developer, I wasn't in the mood of going into the entire CSS rabbithole to make things look pretty and responsive, I wanted it to be preconfigured that would allow me to do some customization. I went for the [Astrogon theme](https://astro.build/themes/details/astrogon/) made by [Reed Nelson](https://reednel.com). I sent him some coffee money as a thank you for this.

## On the template

The template is very well documented. The content & collections are customizable fairly easy, albeit this template had some critical vulnerabilities immediately reported by the npm, and seems that quite a few of the dependencies are heavily outdated. I do appreciate the privacy concerns Reed took when picking a library for embedding YouTube videos that prevent tracking by YT (usually when you see thumbnail of a YT video somewhere, even before you click on it there's already communication happening between you and YT with data transfer). The template uses mainly Astro, Node and npm.

## Customization

Took me some time to get familiar with the theme code, then I decided what sections I want it to have, also it seemed weird that blog entries were coded to be sorted in ascending order by date instead of descending. Removed extra content that I don't need, added Reviews and Videos sections - this is where vibe coding came in, I tried the GitHub Copilot integrated into VS Code, it's pretty cool and addictive. Also changed backgrounds, fonts and voila. Also had some problems with Youtube embed npm library, updating it to the latest version fixed the issue.

## Hosting

GitHub Pages. Easy enough to do, and it's free 1 per user. Could have picked Cloudflare but I didn't want to create another account for that.

## TODOs

I didn't have time yet to do this, but I'd like to go over the dependency list and check what's the state of these libraries, which ones can be removed or upgraded. Also photo gallery would be nice. And I should find a convenient way to add blog entries from the phone.

![Ski](/blog/ski.jpg)