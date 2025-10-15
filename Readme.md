# Assignment 7 - Redux (Repository Overview)

This repository contains the materials for "Assignment 7 - Redux" from the React Beyond Basics course. It includes the written questions, written answers, and a small practical project demonstrating a Redux Toolkit example.

Below is a guide to the repository structure and how to find the question, theoretical answers, and the working practical project.

## Repository layout

- `Question.text` - The assignment questions (theoretical / short-answer questions). Open this file to view all questions for the assignment.
- `Answer.text` - The written answers to the questions in `Question.text`.
- `Question-5-Answer/` - A practical Vite + React project that implements the coding part (Question 5) using Redux Toolkit.
  - `Question-5-Answer/README.md` - Boilerplate README for the Vite project.
  - `Question-5-Answer/src/` - Source code for the practical project (React + Redux Toolkit). The implementation for the Redux slice and store is under:
	 - `Question-5-Answer/src/Components/UserSlice/store.js`
	 - `Question-5-Answer/src/Components/UserSlice/UserSlice.js`
  - `Question-5-Answer/package.json` - Project scripts and dependencies used to run the example.

Other files at the repository root may include `package.json` (if present) and small helper files for the assignment.

## Quick file map

- Questions (plain text): `Question.text`
- Answers (plain text): `Answer.text`
- Practical project (React + Vite + Redux Toolkit): `Question-5-Answer/`

## How to run the practical project (Question-5-Answer)

Prerequisites:
- Node.js (v16+ recommended) and npm installed.

Steps to run locally:

1. Open a terminal and change directory to the practical project:

	cd Question-5-Answer

2. Install dependencies:

	npm install

3. Start the development server:

	npm run dev

This will start Vite's dev server and open the React app in your browser (or show a local URL to open). The project demonstrates the Redux Toolkit slice and a basic store setup used to answer Question 5.

Available npm scripts (from `Question-5-Answer/package.json`):

- `npm run dev` - start development server (vite)
- `npm run build` - build production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Where to look inside the practical project

- Entry point: `Question-5-Answer/src/main.jsx`
- Root component: `Question-5-Answer/src/App.jsx`
- Redux slice and store: `Question-5-Answer/src/Components/UserSlice/` (look for `UserSlice.js` and `store.js`)

Open these files to see the implementation that answers Question 5 (initial state with a user object and a reducer to update the `isLoggedIn` flag).

## Notes and tips

- The written questions and answers are plain text files so you can quickly copy them for study or submission.
- The practical project is a small Vite React app configured with `@reduxjs/toolkit` and `react-redux`. It is self-contained in the `Question-5-Answer` folder so you can run it separately from the rest of the repo.
- If you make changes to the practical project, run `npm install` again if you add new dependencies.

If you want, I can also add a short summary of where the specific code that implements the `LOGIN` action is (line numbers or snippet) — tell me if you'd like that and I'll open the files and add a short pointer.
