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
