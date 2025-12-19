import type { Step } from './tools';

export interface Walkthrough {
    title: string;
    description: string;
    steps: Step[];
}

export interface TechStack {
    name: string;
    slug: string;
    description: string;
    tools: string[]; // slugs
    whenToUse: string[];
    whenNotToUse: string[];
    perfectFor: string;
    walkthrough: Walkthrough;
}

export const techStacks: TechStack[] = [
    {
        name: 'MERN Stack',
        slug: 'mern-stack',
        description: 'The classic full-stack JavaScript stack. Build entire applications using only JavaScript from frontend to backend. It consists of MongoDB, Express, React, and Node.js. It is perfect for developers who want to master one language (JavaScript) across the entire stack.',
        tools: ['mongodb', 'express', 'react', 'nodejs'], // slugs from tools.ts
        whenToUse: [
            'You love JavaScript/TypeScript and want a unified codebase',
            'You need a flexible, schema-less database (MongoDB)',
            'You want a massive ecosystem of libraries'
        ],
        whenNotToUse: [
            'You need complex relational data (SQL might be better)',
            'You need extreme computational performance (Go/Rust might be better)'
        ],
        perfectFor: 'Social Networks, E-commerce, Real-time Dashboards',
        walkthrough: {
            title: 'Project: Task Manager',
            description: 'We will build a full-stack Task Management app called "TaskFlow". Users can view, add, and complete tasks. We will use MongoDB for data, Express/Node for the API, and React for the UI.',
            steps: [
                {
                    title: 'Prerequisites: Node.js & Git',
                    content: 'Before writing any code, ensure you have the necessary runtime and version control tools installed.',
                    links: [
                        { text: 'Download Node.js (LTS)', url: 'https://nodejs.org', primary: true },
                        { text: 'Download Git', url: 'https://git-scm.com', primary: false }
                    ],
                    code: 'node -v\nnpm -v\ngit --version',
                    language: 'bash'
                },
                {
                    title: 'Database Setup (MongoDB Atlas)',
                    content: 'We need a place to store tasks. MongoDB Atlas provides a free cloud database that is easy to set up.',
                    links: [{ text: 'Create Atlas Account', url: 'https://www.mongodb.com/cloud/atlas', primary: true }],
                    code: '1. Create a free cluster on MongoDB Atlas.\n2. Create a database user (username/password).\n3. Get the connection string: mongodb+srv://<user>:<pass>@cluster0.net/taskflow',
                    language: 'text'
                },
                {
                    title: 'Backend Setup (Node & Express)',
                    content: 'Create the server-side application folder and initialize a new Node.js project.',
                    code: 'mkdir taskflow-backend\ncd taskflow-backend\nnpm init -y\nnpm install express mongoose cors dotenv',
                    language: 'bash'
                },
                {
                    title: 'Create API Server',
                    content: 'Create `index.js` to connect to MongoDB and define your API routes.',
                    code: `// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const TaskSchema = new mongoose.Schema({ text: String, completed: Boolean });
const Task = mongoose.model('Task', TaskSchema);

app.get('/tasks', async (req, res) => res.json(await Task.find()));
app.post('/tasks', async (req, res) => res.json(await Task.create(req.body)));

app.listen(5000, () => console.log('Server running on port 5000'));`,
                    language: 'javascript'
                },
                {
                    title: 'Frontend Setup (React + Vite)',
                    content: 'Create the user interface in a separate folder using Vite, a blazing fast build tool.',
                    code: 'npm create vite@latest taskflow-client -- --template react\ncd taskflow-client\nnpm install axios',
                    language: 'bash'
                },
                {
                    title: 'Build the UI',
                    content: 'Fetch and display tasks in `App.jsx` using the React `useEffect` hook.',
                    code: `// App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post('http://localhost:5000/tasks', { text, completed: false })
      .then(res => setTasks([...tasks, res.data]));
  };

  return (
    <div>
      <h1>TaskFlow</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(t => <li key={t._id}>{t.text}</li>)}
      </ul>
    </div>
  );
}`,
                    language: 'jsx'
                },
                {
                    title: 'Deployment',
                    content: 'Deploy the backend to Render (free web service) and the frontend to Vercel (frontend cloud).',
                    links: [
                        { text: 'Deploy Backend on Render', url: 'https://render.com', primary: true },
                        { text: 'Deploy Frontend on Vercel', url: 'https://vercel.com', primary: false }
                    ],
                    code: 'Backend:\n1. Push backend code to GitHub.\n2. Connect repo to Render Web Service.\n3. Add MONGO_URI env variable.\n\nFrontend:\n1. Push client code to GitHub.\n2. Import into Vercel.\n3. Deploy.',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'The Laravel Stack',
        slug: 'laravel-stack',
        description: 'The elegant PHP stack. Known for developer happiness, incredible documentation, and a "batteries included" philosophy.',
        tools: ['laravel', 'php', 'mysql', 'vue', 'tailwindcss'],
        whenToUse: [
            'You want to build a SaaS quickly',
            'You prefer a structured, opinionated framework',
            'You need built-in auth, queues, and scheduling'
        ],
        whenNotToUse: [
            'You strictly prefer JavaScript everywhere',
            'You are building a microservice mesh (Laravel can do it, but is often overkill)'
        ],
        perfectFor: 'SaaS Platforms, Content Management Systems, E-commerce',
        walkthrough: {
            title: 'Project: Modern Blog',
            description: 'We will build a "DevBlog" where users can read and publish articles. We will use Laravel for everything: routing, database, and providing the internal API for a Vue.js frontend (via Inertia.js).',
            steps: [
                {
                    title: 'Prerequisites: PHP Environment',
                    content: 'To run Laravel, you need PHP and Composer. \n\n**Windows**: Install XAMPP or Laragon.\n**Mac**: Install Laravel Herd or Valet.',
                    links: [
                        { text: 'Download XAMPP', url: 'https://www.apachefriends.org', primary: true },
                        { text: 'Download Composer', url: 'https://getcomposer.org', primary: false },
                        { text: 'Install Node.js', url: 'https://nodejs.org', primary: false }
                    ],
                    code: 'php -v\ncomposer -V\nnode -v\nnpm -v',
                    language: 'bash'
                },
                {
                    title: 'Database Creation',
                    content: 'Start MySQL (via XAMPP control panel) and create a database for our project.',
                    code: 'mysql -u root -p\nCREATE DATABASE devblog;',
                    language: 'bash'
                },
                {
                    title: 'Create Project',
                    content: 'Scaffold a new Laravel application. We will use the "Breeze" starter kit for instant Authentication.',
                    code: 'laravel new devblog --git --branch="main"\n# Select "Vue with Inertia" when prompted',
                    language: 'bash'
                },
                {
                    title: 'Define Data Model',
                    content: 'Create a Migration and Model for "Posts" to store our blog entries.',
                    code: 'php artisan make:model Post -m',
                    language: 'bash'
                },
                {
                    title: 'Migration Schema',
                    content: 'Edit the generated migration file in `database/migrations` to define the table structure.',
                    code: `Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->foreignId('user_id')->constrained();
    $table->timestamps();
});`,
                    language: 'php'
                },
                {
                    title: 'Build Logic (Controller)',
                    content: 'Create a controller to handle request logic and return views.',
                    code: `// PostController.php
public function index() {
    return Inertia::render('Posts/Index', [
        'posts' => Post::with('user')->latest()->get()
    ]);
}

public function store(Request $request) {
    $request->validate(['title' => 'required']);
    Auth::user()->posts()->create($request->all());
    return redirect()->route('posts.index');
}`,
                    language: 'php'
                },
                {
                    title: 'Frontend View (Vue)',
                    content: 'Laravel with Inertia allows you to write Vue components as if they were server-side views.',
                    code: `<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
defineProps({ posts: Array });
</script>`,
                    language: 'html'
                },
                {
                    title: 'Local Development',
                    content: 'Run the Vite dev server and the PHP server concurrently.',
                    code: 'npm run dev\nphp artisan serve',
                    language: 'bash'
                },
                {
                    title: 'Deployment',
                    content: 'Deploying Laravel is easy with services like Laravel Forge and DigitalOcean.',
                    links: [{ text: 'Laravel Forge', url: 'https://forge.laravel.com', primary: true }],
                    code: '1. Provision a DigitalOcean Droplet via Forge.\n2. Link your GitHub repository.\n3. Add your environment variables (DB credentials, etc).\n4. Click "Deploy Now".',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'Modern Next.js Stack',
        slug: 'nextjs-saas-starter',
        description: 'The standard for modern web development. React Server Components, TypeScript, and Edge capabilities.',
        tools: ['nextjs', 'react', 'typescript', 'supabase', 'tailwindcss', 'vercel', 'v0'],
        whenToUse: [
            'You need excellent SEO (SSR)',
            'You want the best performance and developer experience',
            'You are building a complex web application'
        ],
        whenNotToUse: [
            'You are building a very simple static site (Astro might be simpler)',
            'You dislike tight coupling with a specific hosting provider (Vercel)'
        ],
        perfectFor: 'SaaS, Marketing Sites, High-performance Web Apps',
        walkthrough: {
            title: 'Project: AI SaaS Wrapper',
            description: 'We will build a simple SaaS that uses AI to generate marketing copy. We will use Next.js for the app, Supabase for auth/db, and Vercel for hosting.',
            steps: [
                {
                    title: 'Prerequisites: Node.js',
                    content: 'Ensure you have the latest LTS version of Node.js installed.',
                    links: [{ text: 'Download Node.js', url: 'https://nodejs.org', primary: true }],
                    code: 'node -v\nnpm -v',
                    language: 'bash'
                },
                {
                    title: 'Initialize Project',
                    content: 'Start with a standard Next.js template required dependencies.',
                    code: 'npx create-next-app@latest ai-saas --typescript --tailwind --eslint',
                    language: 'bash'
                },
                {
                    title: 'Database Setup (Supabase)',
                    content: 'Create a Supabase project to handle our user authentication and database.',
                    links: [{ text: 'Create Supabase Project', url: 'https://supabase.com', primary: true }],
                    code: '1. Create project on Supabase.\n2. Go to Settings > API and copy Project URL and Anon Key.\n3. Paste them into `.env.local`.',
                    language: 'text'
                },
                {
                    title: 'Authentication',
                    content: 'Install the Supabase Auth Helpers to manage user sessions.',
                    code: 'npm install @supabase/auth-helpers-nextjs @supabase/supabase-js',
                    language: 'bash'
                },
                {
                    title: 'Server Actions (Backend Logic)',
                    content: 'With Next.js App Router, we can write backend logic directly in our components using "use server".',
                    code: `// actions.ts
'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function generateCopy(formData: FormData) {
  const prompt = formData.get('prompt')
  // Call AI API here...
  // Save to Supabase
  const supabase = createServerActionClient({ cookies })
  await supabase.from('generations').insert({ prompt })
}`,
                    language: 'typescript'
                },
                {
                    title: 'UI with v0',
                    content: 'Use v0.dev to generate a beautiful dashboard UI, then paste it into your page.',
                    code: '// Paste v0 generated code into app/page.tsx',
                    language: 'tsx'
                },
                {
                    title: 'Deployment (Vercel)',
                    content: 'Deploying Next.js to Vercel is one click.',
                    links: [{ text: 'Deploy to Vercel', url: 'https://vercel.com/new', primary: true }],
                    code: '1. Push code to GitHub.\n2. Go to Vercel and Import the repo.\n3. Add Environment Variables (Supabase keys).\n4. Deploy.',
                    language: 'text'
                }
            ]
        }
    }
];
