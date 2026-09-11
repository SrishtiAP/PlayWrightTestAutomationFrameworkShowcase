Playwright Test Automation Framework

A UI test automation framework built with Playwright and TypeScript, created as a personal practice project to demonstrate test architecture, reusable design patterns, and CI/CD-integrated automation.

Overview

This framework showcases how to structure a scalable, maintainable UI automation suite — from test organization and configuration management to CI pipeline integration and containerized execution.

Tech Stack
Automation Framework: Playwright
Language: TypeScript
CI/CD: Jenkins
Containerization: Docker

Project Structure
src/                    Core framework code (page objects, utilities, test constants)
tests/                  Test specifications
Dockerfile              Container setup for running tests in isolated environments
Jenkinsfile             CI pipeline configuration
playwright.config.ts    Playwright configuration (browsers, timeouts, reporters)
tsconfig.json           TypeScript configuration
package.json            Project dependencies and scripts

Key Features
Page Object Model (POM) design for maintainable, reusable test code
Centralized test constants and configuration
CI-integrated test execution via Jenkins
Dockerized test runs for consistent, portable environments
TypeScript for type safety and better developer experience

Prerequisites
Node.js (v16 or higher)
npm

Installation
npm install
npx playwright install

Running Tests
npx playwright test

Running Tests in Docker
docker build -t playwright-tests .
docker run playwright-tests

Viewing Test Reports
npx playwright show-report

About This Project

This repository is a personal showcase built to demonstrate automation framework design and testing best practices. It reflects patterns and practices used in professional QA/SDET work, adapted here for a demo context.

Author

Srishti Pradeep Lead QA Engineer LinkedIn
