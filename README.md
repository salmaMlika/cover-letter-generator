# AI Cover Generator

AI Cover Generator is a web application that helps users quickly generate professional, job-tailored cover letters using artificial intelligence. Built with Angular and integrated with a local LLM (Large Language Model) backend, it streamlines the job application process by analyzing your résumé and job details to create a personalized cover letter in seconds.

## Features
- **AI-powered cover letter generation**: Enter your résumé, job title, company, and job description to generate a custom cover letter.
- **Step-by-step form**: Simple 3-step process for inputting your information.
- **Tone selection**: Choose between professional, friendly, or confident tones.
- **Edit and export**: Edit the generated letter, copy to clipboard, or export as PDF.
- **Google authentication**: Sign in with Google to personalize your experience.
- **Modern, responsive UI**: Built with Angular and Tailwind CSS for a smooth user experience.

## How It Works
1. **Add your résumé**: Paste or upload your résumé.
2. **Add job details**: Enter the job title, company, and (optionally) the job description.
3. **Generate and review**: The AI creates a cover letter tailored to your inputs. You can edit, copy, or export the result.

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ai-cover-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser at [http://localhost:4200](http://localhost:4200)

> **Note:** The app expects a local LLM API (default: `http://localhost:11434/api/generate`). See `src/app/services/llm.service.ts` for details.

## Usage
- Navigate to the home page and click "Try It For Free".
- Follow the steps to input your résumé and job details.
- Select your preferred tone and generate your cover letter.
- Edit, copy, or export your letter as needed.

## Technologies Used
- Angular 21
- Tailwind CSS
- Firebase Authentication (Google sign-in)
- Local LLM API (TinyLlama or compatible)
- RxJS, TypeScript, jsPDF, html2canvas

---

# AiCoverGenerator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
