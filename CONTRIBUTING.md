# Contributing to Software Blueprints

Welcome! This guide explains how our platform works and how you can add new architecture blueprints or UI components to the project.

## What Are We Using?
- **Framework**: [Docusaurus v3](https://docusaurus.io/) (React-based documentation site)
- **Content**: Written in **Markdown (`.md`)** and **MDX (`.mdx`)**.
- **Diagrams**: Native support for **Mermaid.js** diagrams inside code blocks.
- **Interactive Code**: We use `@docusaurus/theme-live-codeblock` to run React code live in the browser.

---

## 1. Local Setup

To get the site running on your computer:

```bash
# 1. Clone the repository
git clone https://github.com/software-blueprints-hq/software-blueprints.git
cd software-blueprints

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```
The site will open at `http://localhost:3000`. Any changes you make to the files will instantly refresh in the browser.

---

## 2. How to Add an Architecture Blueprint

All content lives inside the `docs/` folder, categorized by stack (e.g., `docs/mern`, `docs/django`).

To add a new blueprint:
1. Navigate to the relevant folder (or create a new one).
2. Create a `.md` file.
3. Add the **Front Matter** at the very top of the file to define the title and sidebar position:
   ```markdown
   ---
   sidebar_position: 1
   title: "My New Architecture"
   ---
   ```
4. Write your markdown! You can include Mermaid diagrams like this:
   <pre>
   ```mermaid
   graph TD;
       Frontend-->Backend;
       Backend-->Database;
   ```
   </pre>

---

## 3. How to Add Interactive UI Templates (Preview & Code)

If you are adding frontend code (React components) that people should be able to preview and copy, **use an `.mdx` file** and our **Tabbed UI** approach.

We want users to see the visual preview first, and click a tab to see the code.

**Step-by-step:**
1. Create a `.mdx` file (e.g., `ui-templates.mdx`).
2. Import the Tab components at the top:
   ```jsx
   import Tabs from '@theme/Tabs';
   import TabItem from '@theme/TabItem';
   ```
3. Use the following structure to render your component in the Preview tab, and show the raw code in the Code tab:

<pre>
&lt;Tabs&gt;
  &lt;TabItem value="preview" label="Preview" default&gt;
    
    {/* 1. Put the actual running React component here */}
    &lt;div style={{ padding: '20px', background: 'blue', color: 'white' }}&gt;
      Hello World Component!
    &lt;/div&gt;

  &lt;/TabItem&gt;
  &lt;TabItem value="code" label="Code"&gt;

    {/* 2. Put the code snippet here inside a markdown block */}
    ```jsx
    function MyComponent() {
      return (
        &lt;div className="bg-blue text-white p-5"&gt;
          Hello World Component!
        &lt;/div&gt;
      );
    }
    ```

  &lt;/TabItem&gt;
&lt;/Tabs&gt;
</pre>

---

## 4. Git Workflow (Pulling & Pushing)

Since you are collaborating with a team, you need to make sure you have the latest code before you start working, and you need to push your changes properly when you are done.

### Before you start working (Always Pull!)
Always pull the latest changes from the main repository so you don't get merge conflicts:
```bash
git pull origin main
```

### When you are done making changes
Once you have tested your new blueprint or template locally, upload it to GitHub:
```bash
# 1. Stage all your changed files
git add .

# 2. Commit your changes with a descriptive message
git commit -m "Added a new E-Commerce architecture blueprint"

# 3. Push your changes to the GitHub organization
git push origin main
```

The live website will automatically update once the code reaches the `main` branch on GitHub!

---

## 5. Enterprise UI Standards (For Collaborators)

If you are a developer contributing new UI components to this repository, your code **MUST** adhere to our strict enterprise standards before it will be accepted. Please use this checklist when writing your React/CSS code:

### 1. Semantic HTML
Do not use `<div>` soup. Use proper HTML5 semantic tags wherever possible:
- Wrap cards and widgets in `<article>` or `<section>`.
- Wrap navigation links in `<nav>`.
- Use `<figure>` and `<figcaption>` for testimonials or images.
- Wrap forms securely in `<form>` tags.

### 2. Strict Accessibility (A11y)
Our components must be usable by screen readers.
- **Forms**: Every `<input>` must have a corresponding `<label>`. They must be linked using `htmlFor="some-id"` and `id="some-id"`. If a visual label breaks the design, hide it using a visually-hidden `.sr-only` CSS class.
- **Buttons/Icons**: Any button that only contains an icon (e.g., `X`, `⚙`) MUST have an `aria-label="Action description"` attribute.
- **Interactive States**: Use `aria-hidden="true"` on decorative elements (like background svgs or stars) so screen readers ignore them.

### 3. Keyboard Navigation
Users must be able to navigate our UI using the `Tab` key seamlessly.
- **Action Required**: Every interactive element (`<button>`, `<a>`, `<input>`) must have an explicit `:focus-visible` CSS rule.
- Example: `.my-btn:focus-visible { box-shadow: 0 0 0 3px #4f46e5; outline: none; }`
- Do not just use `:focus`, as it triggers on mouse clicks. Always use `:focus-visible`.

### 4. Flawless Mobile Responsiveness
Every component must look mathematically perfect on a 320px mobile screen.
- Use CSS Flexbox with `flex-wrap: wrap` or CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(...))` for natural reflowing.
- Add explicit `@media (max-width: 600px)` breakpoint queries to handle complex layouts (like Navbars or Split-Screen Heroes).
- Use `clamp()` for typography scaling.

**If your contributed code does not meet these 4 criteria, it will be rejected during Code Review.**

---

## 6. AI Prompt Template (For Generating Components)

If you are using an AI (like ChatGPT, Claude, GitHub Copilot, or Cursor) to generate components for this repository, do **not** use generic prompts. The AI will likely give you bad, inaccessible code that fails our enterprise standards.

Instead, copy and paste this **Master Prompt** into your AI before asking it to build a component.

### The Master Prompt:

```text
Act as a Staff Frontend Engineer building an enterprise-grade React component library.
I am going to ask you to generate UI components. When you do, you MUST adhere to the following strict industry standards:

1. Semantic HTML: Never use generic <div> tags if a semantic HTML5 tag exists. Use <article>, <section>, <nav>, <figure>, <footer>, or <main>.
2. Accessibility (a11y): Include `aria-label` attributes for icon-only buttons or ambiguous elements. Use `role` attributes where appropriate. Ensure all `<form>` elements use strict `htmlFor` and `id` linking for their inputs. Use `.sr-only` classes to hide text meant for screen readers.
3. Interactive States: Every interactive element (a, button, input) MUST have an explicit `:focus-visible` CSS pseudo-class to ensure a highly visible outline for keyboard navigation. Do not just use `:focus`.
4. Mobile Responsiveness: The component must scale flawlessly down to a 320px screen. Use CSS Grid/Flexbox with `auto-fit` or `flex-wrap`, and include `@media (max-width: 600px)` breakpoint queries to stack elements on mobile. Use `clamp()` for typography scaling.
5. Zero Dependencies: Write the code in pure React (`.jsx`) and plain CSS. Do not use TailwindCSS or external component libraries.
6. Format: Output the exact code needed for Docusaurus MDX Tabs. One tab for 'Preview' (the running component with scoped `<style>`) and one tab for 'Code' (showing the raw `.jsx` and `.css`).

Now, generate a [INSERT COMPONENT NAME] component using these rules.
```
