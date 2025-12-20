import type { Step } from './tools';

export interface Walkthrough {
    title: string;
    description: string;
    steps: Step[];
}

export type StackCategory = 'Web' | 'Mobile' | 'Backend' | 'AI' | 'Other';

export interface TechStack {
    name: string;
    slug: string;
    description: string;
    tools: string[]; // slugs
    category: StackCategory;
    whenToUse: string[];
    whenNotToUse: string[];
    perfectFor: string;
    walkthrough: Walkthrough;
}

export const techStacks: TechStack[] = [
    {
        name: 'MERN Stack',
        slug: 'mern-stack',
        category: 'Web',
        description: 'The classic full-stack JavaScript stack. Build entire applications using only JavaScript from frontend to backend.',
        tools: ['mongodb', 'express', 'react', 'nodejs'],
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
                    content: 'Ensure you have Node.js and Git installed. \n\n**Verify Installation**:\nOpen your terminal (Command Prompt or PowerShell) and run the commands below.',
                    links: [
                        { text: 'Download Node.js (LTS)', url: 'https://nodejs.org', primary: true },
                        { text: 'Download Git', url: 'https://git-scm.com', primary: false }
                    ],
                    code: 'node -v\nnpm -v\ngit --version',
                    language: 'bash'
                },
                {
                    title: 'Database Setup (MongoDB Atlas)',
                    content: 'Set up your cloud database.\n\n**UI Alternative**: Download **MongoDB Compass** to visually manage your database collections and documents instead of using the CLI.\n\n**Action Items**:\n1. Create a free cluster on MongoDB Atlas.\n2. Create a database user.\n3. **Important**: Whitelist your IP address in Network Access.\n4. Copy the connection string.',
                    links: [{ text: 'Create Atlas Account', url: 'https://www.mongodb.com/cloud/atlas', primary: true }],
                    code: '1. Get Connection String: mongodb+srv://<user>:<pass>@cluster.mongodb.net/taskflow\n2. Create a .env file locally in your backend folder.\n3. Add: MONGO_URI=your_connection_string',
                    language: 'text'
                },
                {
                    title: 'Backend Setup',
                    content: 'Initialize the server project.\n\n**Steps**:\n1. Create a folder `taskflow-backend`.\n2. Run `npm init -y`.\n3. Install dependencies.',
                    code: 'mkdir taskflow-backend\ncd taskflow-backend\nnpm init -y\nnpm install express mongoose cors dotenv',
                    language: 'bash'
                },
                {
                    title: 'Define Data Model',
                    content: 'Structure your data. **File Location**: `models/Task.js`\n\nCreate a `models` folder for better organization.',
                    code: `const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);`,
                    language: 'javascript'
                },
                {
                    title: 'Create API Server',
                    content: 'Set up the server entry point. **File Location**: `index.js`\n\nEnsure you load environment variables from the `.env` file first.',
                    code: `require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task'); // Import the model

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.get('/tasks', async (req, res) => res.json(await Task.find()));
app.post('/tasks', async (req, res) => res.json(await Task.create(req.body)));

app.listen(5000, () => console.log('Server running on port 5000'));`,
                    language: 'javascript'
                },
                {
                    title: 'Frontend Setup (React + Vite)',
                    content: 'Create the client application.\n\n**Command**:',
                    code: 'npm create vite@latest taskflow-client -- --template react\ncd taskflow-client\nnpm install axios',
                    language: 'bash'
                },
                {
                    title: 'Build the UI',
                    content: 'Connect to the backend. **File Location**: `src/App.jsx`',
                    code: `// App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Fetch tasks
  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then(res => setTasks(res.data));
  }, []);

  // Add task
  const addTask = () => {
    axios.post('http://localhost:5000/tasks', { text })
      .then(res => setTasks([...tasks, res.data]));
  };

  return (
    <div>
      <h1>TaskFlow</h1>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New Task" />
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
                    content: 'Deploy the backend to Render and frontend to Vercel.\n\n**Secrets Management**:\n- **Render**: Go to Settings > Environment and add `MONGO_URI`.\n- **Vercel**: No secrets needed for this static backend unless customizing API URLs.',
                    links: [
                        { text: 'Deploy Backend on Render', url: 'https://render.com', primary: true },
                        { text: 'Deploy Frontend on Vercel', url: 'https://vercel.com', primary: false }
                    ],
                    code: 'Render: Connect GitHub Repo -> Add Environment Variable MONGO_URI.\nVercel: Import GitHub Repo -> Deploy.',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'The Laravel Stack',
        slug: 'laravel-stack',
        category: 'Web',
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
                    ],
                    code: 'php -v\ncomposer -V',
                    language: 'bash'
                },
                {
                    title: 'Database Creation',
                    content: 'Start MySQL (via XAMPP control panel) and create a database for our project.\n\n**UI Alternative**: Open **phpMyAdmin** (usually at http://localhost/phpmyadmin) or **TablePlus** and create a new database named `devblog`.',
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
                    content: 'Create a Model and Migration. \n\n**Command**: `php artisan make:model Post -m`\n\nThis creates:\n1. Model: `app/Models/Post.php`\n2. Migration: `database/migrations/*_create_posts_table.php`',
                    code: 'php artisan make:model Post -m',
                    language: 'bash'
                },
                {
                    title: 'Migration Schema',
                    content: 'Define table structure in the migration file: `database/migrations/xxxx_create_posts_table.php`.',
                    code: `public function up() {
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->foreignId('user_id')->constrained();
        $table->timestamps();
    });
}`,
                    language: 'php'
                },
                {
                    title: 'Run Migrations',
                    content: 'Apply the schema to the database.',
                    code: 'php artisan migrate',
                    language: 'bash'
                },
                {
                    title: 'Build Logic (Controller)',
                    content: 'Create a controller: `php artisan make:controller PostController`.\n**File**: `app/Http/Controllers/PostController.php`',
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
                    content: 'Laravel with Inertia allows you to write Vue components as if they were server-side views.\n**File**: `resources/js/Pages/Posts/Index.vue`',
                    code: `<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>`,
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
                    content: 'Deploying Laravel is best done with Laravel Forge.',
                    links: [{ text: 'Laravel Forge', url: 'https://forge.laravel.com', primary: true }],
                    code: '1. Provision a Server via Forge.\n2. Link your GitHub repository.\n3. Add Environment Variables in the Forge UI (.env editor).\n4. Deploy.',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'Modern Next.js Stack',
        slug: 'nextjs-saas-starter',
        category: 'Web',
        description: 'The standard for modern web development. React Server Components, TypeScript, and Edge capabilities.',
        tools: ['nextjs', 'react', 'supabase', 'tailwindcss', 'vercel'],
        whenToUse: [
            'You need excellent SEO (SSR)',
            'You want the best performance and developer experience',
            'You are building a complex web application'
        ],
        whenNotToUse: [
            'You are building a very simple static site',
            'You dislike tight coupling with Vercel'
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
                    content: 'Create a Supabase project to handle our user authentication and database.\n\n**UI Alternative**: Use the **Supabase Table Editor** in the dashboard to visually create tables instead of using SQL Editor.\n\n**Environment Variables**:\n1. Create `.env.local` in project root.\n2. Add keys from Project Settings > API.\n`NEXT_PUBLIC_SUPABASE_URL=...`\n`NEXT_PUBLIC_SUPABASE_ANON_KEY=...`',
                    links: [{ text: 'Create Supabase Project', url: 'https://supabase.com', primary: true }],
                    code: '1. Create project on Supabase.\n2. Go to Settings > API and copy Project URL and Anon Key.\n3. Paste them into `.env.local`.',
                    language: 'text'
                },
                {
                    title: 'Server Actions (Backend Logic)',
                    content: 'With Next.js App Router, we can write backend logic directly in our components using "use server".\n**File**: `app/actions.ts`',
                    code: `// app/actions.ts
'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function generateCopy(formData: FormData) {
  const prompt = formData.get('prompt')
  // Call AI API here...
  const supabase = createServerActionClient({ cookies })
  await supabase.from('generations').insert({ prompt })
}`,
                    language: 'typescript'
                },
                {
                    title: 'UI with v0',
                    content: 'Use v0.dev to generate beautiful components, then paste them into your page.',
                    code: '// Paste v0 generated code into app/page.tsx',
                    language: 'tsx'
                },
                {
                    title: 'Deployment (Vercel)',
                    content: 'Deploying Next.js to Vercel is one click.',
                    links: [{ text: 'Deploy to Vercel', url: 'https://vercel.com/new', primary: true }],
                    code: '1. Push code to GitHub.\n2. Go to Vercel and Import the repo.\n3. Deploy (Env vars are auto-detected usually, or add them manually in Vercel settings).',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'The Hybrid Fullstack',
        slug: 'hybrid-fullstack',
        category: 'Web',
        description: 'A powerful mix of React ecosystem tools using Firebase for the frontend data layer and Express/Vercel for specialized backend logic.',
        tools: ['react', 'vite', 'tailwindcss', 'express', 'firebase', 'vercel'],
        whenToUse: [
            'You want the speed of Vite for frontend dev',
            'You need a real NoSQL backend (Firebase)',
            'You also need a custom Node API (Express) hosted serverlessly'
        ],
        whenNotToUse: [
            'You just want a simple static site',
            'You do not need a custom Express server'
        ],
        perfectFor: 'Complex Single Page Apps, Fullstack Prototyping',
        walkthrough: {
            title: 'Project: Real-time Data Platform',
            description: 'Build a dashboard that listens to live data changes using Firebase but processes heavy logic on a Vercel-hosted Express API.',
            steps: [
                {
                    title: 'Prerequisites',
                    content: 'Node.js and Git are required.',
                    links: [{ text: 'Download Node.js', url: 'https://nodejs.org', primary: true }],
                    code: 'node -v',
                    language: 'bash'
                },
                {
                    title: 'Frontend Init',
                    content: 'Start with Vite + React + Tailwind.',
                    code: 'npm create vite@latest my-app -- --template react\ncd my-app\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
                    language: 'bash'
                },
                {
                    title: 'Firebase Setup (CLI & Emulators)',
                    content: 'Initialize Firebase for Hosting, Firestore, and setup local emulators.\n\n**Commands**:\n1. `npm install -g firebase-tools`\n2. `firebase login`\n3. `firebase init` (Select Firestore, Emulators)\n4. `firebase init emulators` (Select Firestore, Auth, Functions)\n5. `firebase emulators:start` to test locally.',
                    code: 'firebase init\nfirebase emulators:start',
                    language: 'bash'
                },
                {
                    title: 'Backend (Express on Vercel)',
                    content: 'Create an `api` directory with an Express app.\n\n**Service Account Key**: For backend-side administration, generate a private key in Firebase Console > Project Settings > Service Accounts. Save as `serviceAccountKey.json`.',
                    code: `// api/index.js
const app = require('express')();
// Use serviceAccountKey.json if initializing firebase-admin
app.get('/api/hello', (req, res) => res.json({ msg: 'Hello from Vercel!' }));
module.exports = app;`,
                    language: 'javascript'
                },
                {
                    title: 'Vercel Config & Deployment',
                    content: 'Configure Vercel rewrites and secrets.\n\n**Secrets**:\nIn Vercel Dashboard, add `FIREBASE_SERVICE_ACCOUNT` (content of your JSON key) if needed.',
                    code: `// vercel.json
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}`,
                    language: 'json'
                }
            ]
        }
    },
    {
        name: 'Universal Mobile Stack',
        slug: 'universal-mobile',
        category: 'Mobile',
        description: 'Build native iOS and Android apps using React and JavaScript. Move fast with Expo.',
        tools: ['react-native', 'expo', 'firebase'],
        whenToUse: [
            'You are a Web Developer moving to Mobile',
            'You need to ship to both iOS and Android simultaneously',
            'You want Over-the-Air updates'
        ],
        whenNotToUse: [
            'You need extreme native performance (3D games)',
            'You are building a platform-specific utility'
        ],
        perfectFor: 'Consumer Apps, MVP Mobile Apps',
        walkthrough: {
            title: 'Project: Social Photo App',
            description: 'Create a "Gram-like" app where users can snap photos and share them. Powered by Expo for the app and Firebase for storage.',
            steps: [
                {
                    title: 'Prerequisites',
                    content: 'Node.js and a phone with Expo Go installed.',
                    links: [{ text: 'Get Expo Go', url: 'https://expo.dev/client', primary: true }]
                },
                {
                    title: 'Create App',
                    content: 'Initialize with Expo.',
                    code: 'npx create-expo-app@latest photo-share',
                    language: 'bash'
                },
                {
                    title: 'Firebase Storage Setup',
                    content: '1. **Console**: Go to Firebase Console > Storage > Get Started.\n2. **Rules**: Set rules to allow read/write (for development).\n3. **Config**: Copy the `firebaseConfig` object from Project Settings.\n4. **React Native**: Install SDK.',
                    code: 'npm install firebase',
                    language: 'bash'
                },
                {
                    title: 'Secure Configuration',
                    content: 'Create `firebaseConfig.js` to store your connection details. For extra security, use `app.config.js` with environment variables.',
                    code: `// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "...",
  // ...
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);`,
                    language: 'javascript'
                },
                {
                    title: 'Run on Device',
                    content: 'Scan the QR code to see your app running natively.',
                    code: 'npx expo start',
                    language: 'bash'
                }
            ]
        }
    },
    {
        name: 'The Flutter Stack',
        slug: 'flutter-stack',
        category: 'Mobile',
        description: 'Google\'s UI toolkit for building beautiful, natively compiled applications from a single codebase.',
        tools: ['flutter', 'firebase'],
        whenToUse: [
            'You want beautiful, custom UI designs',
            'You need close-to-native performance',
            'You want to target Mobile, Web, and Desktop together'
        ],
        whenNotToUse: [
            'You want to use standard HTML/CSS components',
            'You need the smallest possible app size'
        ],
        perfectFor: 'Brand-heavy Apps, Cross-platform tools',
        walkthrough: {
            title: 'Project: Travel Guide App',
            description: 'Build a visually stunning travel guide. Flutter makes it easy to create custom animations and transitions.',
            steps: [
                {
                    title: 'Prerequisites',
                    content: 'Install Flutter SDK. \n**Verify**: Run `flutter doctor`.',
                    links: [{ text: 'Flutter Install', url: 'https://docs.flutter.dev/get-started/install', primary: true }]
                },
                {
                    title: 'Create Project',
                    content: 'Generate the Flutter scaffold.',
                    code: 'flutter create travel_guide\ncd travel_guide',
                    language: 'bash'
                },
                {
                    title: 'Firebase Integration',
                    content: 'Use FlutterFire CLI to configure Firebase.\n\n**Commands**:\n1. `dart pub global activate flutterfire_cli`\n2. `flutterfire configure` (Select your project and platforms)\n3. `flutter pub add firebase_core`',
                    code: 'flutterfire configure',
                    language: 'bash'
                },
                {
                    title: 'Build UI',
                    content: 'Use Flutter Widgets. **File**: `lib/main.dart`',
                    code: 'Scaffold(body: Center(child: Text("Hello Flutter")))',
                    language: 'dart'
                }
            ]
        }
    },
    {
        name: 'Python Data & Web',
        slug: 'python-django-stack',
        category: 'Backend',
        description: 'The stack for perfectionists with deadlines. Combine the power of Python data tools with a robust web framework.',
        tools: ['python', 'django', 'postgresql'],
        whenToUse: [
            'You need a robust, secure-by-default backend',
            'You are integrating Machine Learning models',
            'You need a complex Admin interface out of the box'
        ],
        whenNotToUse: [
            'You are building a simple microservice',
            'You need async/realtime (use FastAPI instead)'
        ],
        perfectFor: 'Enterprise Apps, Data-heavy platforms, CMS',
        walkthrough: {
            title: 'Project: Employee Portal',
            description: 'Build an internal tool for managing employees, departments, and payroll using Django\'s built-in Admin.',
            steps: [
                {
                    title: 'Setup',
                    content: 'Install Django and create project.',
                    code: 'pip install django psycopg2\ndjango-admin startproject portal',
                    language: 'bash'
                },
                {
                    title: 'Data Models',
                    content: 'Define `Employee` models in `portal/models.py`.',
                    code: 'class Employee(models.Model):\n    name = models.CharField(max_length=100)\n    role = models.CharField(max_length=50)',
                    language: 'python'
                },
                {
                    title: 'PostgreSQL Connection',
                    content: 'Update `DATABASES` in `settings.py`. \n\n**UI Alternative**: Use **pgAdmin** or **DBeaver** to manage your Postgres database visually.',
                    links: [{ text: 'Postgres DL', url: 'https://postgresql.org', primary: true }]
                }
            ]
        }
    },
    {
        name: 'Modern API Stack',
        slug: 'fastapi-stack',
        category: 'Backend',
        description: 'High performance, easy to learn, fast to code, ready for production. Python + Async.',
        tools: ['fastapi', 'railway', 'python', 'postgresql'],
        whenToUse: [
            'You need extreme performance from Python',
            'You are building microservices',
            'You want automatic documentation (Swagger)'
        ],
        whenNotToUse: [
            'You need a monolithic "batteries included" framework (Use Django)',
            'You don\'t know Python type hints'
        ],
        perfectFor: 'ML Inference APIs, Real-time services',
        walkthrough: {
            title: 'Project: ML Prediction API',
            description: 'Host a simple Machine Learning model prediction endpoint that runs incredibly fast.',
            steps: [
                {
                    title: 'Setup',
                    content: 'Install FastAPI and Uvicorn. Create `requirements.txt`.',
                    code: 'pip install fastapi uvicorn',
                    language: 'bash'
                },
                {
                    title: 'Code Endpoint',
                    content: 'Write api in `main.py`.',
                    code: '@app.post("/predict")\nasync def predict(data: InputData):\n    return {"result": model.predict(data)}',
                    language: 'python'
                },
                {
                    title: 'Deploy to Railway',
                    content: 'Connect your GitHub repo to Railway. \n\n**Env Vars**: Add any secrets in Railway Dashboard.',
                    links: [{ text: 'Railway', url: 'https://railway.app', primary: true }]
                }
            ]
        }
    },
    {
        name: 'Java Enterprise',
        slug: 'java-enterprise',
        category: 'Backend',
        description: 'The backbone of the world\'s largest systems. Robust, typed, and scalable.',
        tools: ['spring-boot', 'angular', 'mysql', 'java'],
        whenToUse: [
            'You are working in a large corporate environment',
            'You need strict type safety and dependency injection',
            'You are building large-scale distributed systems'
        ],
        whenNotToUse: [
            'You are a solo founder building a quick MVP',
            'You prefer dynamic languages'
        ],
        perfectFor: 'Banking, Enterprise ERP, Large Microservices',
        walkthrough: {
            title: 'Project: Banking Service',
            description: 'Create a secure REST API for transaction processing using Spring Boot.',
            steps: [
                {
                    title: 'Spring Initializr',
                    content: 'Generate project with "Spring Web" and "Spring Data JPA".',
                    links: [{ text: 'Spring Initializr', url: 'https://start.spring.io', primary: true }]
                },
                {
                    title: 'Entity Class',
                    content: 'Define the entity. **File**: `src/main/java/com/example/demo/Transaction.java`',
                    code: '@Entity\npublic class Transaction { @Id @GeneratedValue Long id; ... }',
                    language: 'java'
                }
            ]
        }
    },
    {
        name: 'Jamstack',
        slug: 'jamstack',
        category: 'Web',
        description: 'JavaScript, APIs, and Markup. Key to faster, more secure, and easier to scale sites.',
        tools: ['vite', 'netlify', 'git'],
        whenToUse: [
            'You are building a blog, portfolio, or landing page',
            'You want free, high-performance hosting'
        ],
        whenNotToUse: [
            'You have complex server-side dynamic requirements (use SSR)'
        ],
        perfectFor: 'Portfolios, Documentation',
        walkthrough: {
            title: 'Project: Portfolio Site',
            description: 'Build a fast static portfolio site using plain HTML/JS (via Vite) and host it globally on Netlify.',
            steps: [
                {
                    title: 'Create',
                    content: 'Use Vite to scaffold a vanilla JS project.',
                    code: 'npm create vite@latest portfolio -- --template vanilla',
                    language: 'bash'
                },
                {
                    title: 'Push',
                    content: 'Push your code to a new GitHub repository.',
                    code: 'git init\ngit add .\ngit commit -m "init"\ngit push',
                    language: 'bash'
                },
                {
                    title: 'Deploy',
                    content: 'Connect Netlify to your GitHub repo. It will auto-deploy every commit.',
                    links: [{ text: 'Netlify', url: 'https://netlify.com', primary: true }]
                }
            ]
        }
    },
    {
        name: 'AI Prototyping',
        slug: 'ai-prototyping',
        category: 'AI',
        description: 'From idea to design to code in minutes using the latest generative AI tools.',
        tools: ['uxpilot', 'v0', 'lovable', 'figma'],
        whenToUse: [
            'You need to validate an idea yesterday',
            'You want to skip the "Blank Page" syndrome',
            'You are non-technical or a designer-developer'
        ],
        whenNotToUse: [
            'You need highly specific, complex custom business logic'
        ],
        perfectFor: 'MVPs, Mockups, Hackathons',
        walkthrough: {
            title: 'Project: Instant Landing Page',
            description: 'Use UXPilot to wireframe, then v0/Lovable to generate the code, and Figma to refine.',
            steps: [
                {
                    title: 'Wireframe',
                    content: 'Ask UXPilot to generate a wireframe for your idea.',
                    links: [{ text: 'UXPilot', url: 'https://uxpilot.ai', primary: true }]
                },
                {
                    title: 'Generate Code',
                    content: 'Take the concept to v0.dev and prompt it to build the actual React components.',
                    code: 'Prompt: "A modern heroic landing page with these sections..."',
                    language: 'text'
                }
            ]
        }
    },
    {
        name: 'Classic Enterprise Java',
        slug: 'classic-java',
        category: 'Other',
        description: 'The traditional set of tools for maintaining established, large-scale systems.',
        tools: ['spring-boot', 'mysql', 'java'],
        whenToUse: [
            'You are maintaining a legacy Java system',
            'You require strict open-source tooling'
        ],
        whenNotToUse: [
            'You are starting a new project (IntelliJ/VS Code is often preferred)'
        ],
        perfectFor: 'Maintenance, Legacy Enterprise',
        walkthrough: {
            title: 'Project: Legacy System Maintenance',
            description: 'Simulate an enterprise environment. Connect a Spring Boot service to a legacy MySQL database with a structured Layered Architecture.',
            steps: [
                {
                    title: 'Configuration',
                    content: 'Configure the DataSource in `src/main/resources/application.properties`.',
                    code: `spring.datasource.url=jdbc:mysql://localhost:3306/legacy_erp
spring.datasource.username=admin
spring.datasource.password=securepass
spring.jpa.hibernate.ddl-auto=update`,
                    language: 'properties'
                },
                {
                    title: 'Service Layer',
                    content: 'Implement business logic in a Service class, separating it from the Controller.\n**File**: `src/main/java/com/corp/erp/EmployeeService.java`',
                    code: `@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    public List<Employee> getActiveEmployees() {
        return repo.findByStatus("ACTIVE");
    }
}`,
                    language: 'java'
                },
                {
                    title: 'Run Application',
                    content: 'Start the application using the Maven Wrapper bundled with the project.',
                    code: './mvnw spring-boot:run',
                    language: 'bash'
                }
            ]
        }
    },
    {
        name: 'MEAN Stack',
        slug: 'mean-stack',
        category: 'Web',
        description: 'A full-stack JavaScript solution using Angular for the frontend.',
        tools: ['mongodb', 'express', 'angular', 'nodejs'],
        whenToUse: [
            'You prefer Angular structure over React',
            'You want a complete JavaScript solution'
        ],
        whenNotToUse: [
            'You need SEO (Angular Universal is complex compared to Next.js)'
        ],
        perfectFor: 'Enterprise Dashboards, Internal Tools',
        walkthrough: {
            title: 'Project: Inventory System',
            description: 'Build an inventory management system with an Angular dashboard and a robust Node.js backend.',
            steps: [
                {
                    title: 'Prerequisites',
                    content: 'Ensure Node.js and Angular CLI are installed.\n**Command**: `npm install -g @angular/cli`',
                    code: 'ng version',
                    language: 'bash',
                    links: [{ text: 'Angular CLI', url: 'https://angular.io/cli', primary: true }]
                },
                {
                    title: 'Backend API',
                    content: 'Create the backend folder and server.\n**File**: `server/index.js`',
                    code: `const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/inventory');

const Item = mongoose.model('Item', { name: String, qty: Number });

app.get('/items', async (req, res) => res.json(await Item.find()));
app.post('/items', async (req, res) => res.json(await Item.create(req.body)));

app.listen(3000, () => console.log('API running on 3000'));`,
                    language: 'javascript'
                },
                {
                    title: 'Frontend Init',
                    content: 'Generate the Angular application.',
                    code: 'ng new inventory-app --routing=false --style=css\ncd inventory-app',
                    language: 'bash'
                },
                {
                    title: 'Inventory Component',
                    content: 'Generate a component to display items.\n**Command**: `ng generate component inventory`',
                    code: `// src/app/inventory/inventory.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  template: \`
    <h1>Inventory</h1>
    <ul><li *ngFor="let item of items">{{ item.name }} ({{ item.qty }})</li></ul>
  \`
})
export class InventoryComponent implements OnInit {
  items: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/items')
      .subscribe(data => this.items = data);
  }
}`,
                    language: 'typescript'
                }
            ]
        }
    },
    {
        name: 'Docker Microservices',
        slug: 'docker-microservices',
        category: 'Backend',
        description: 'Containerized architecture for scalable, independent services.',
        tools: ['docker', 'nodejs', 'postgresql', 'express'],
        whenToUse: [
            'You need to scale services independently',
            'You have a large team working on different parts of the app'
        ],
        whenNotToUse: [
            'You are building a simple monolith (Keep it simple!)'
        ],
        perfectFor: 'Complex Scalable Cloud Apps',
        walkthrough: {
            title: 'Project: Microservices E-commerce',
            description: 'Determine architecture for scalability. We will build a "Product Service" and an "Order Service" and orchestrate them with Docker Compose.',
            steps: [
                {
                    title: 'Product Service',
                    content: 'Create a simple Node.js microservice.\n**File**: `services/product/index.js`',
                    code: `const express = require('express');
const app = express();
app.get('/products', (req, res) => res.json([{ id: 1, name: 'Laptop' }]));
app.listen(3001, () => console.log('Product Service on 3001'));`,
                    language: 'javascript'
                },
                {
                    title: 'Dockerfile',
                    content: 'Containerize the Product Service.\n**File**: `services/product/Dockerfile`',
                    code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]`,
                    language: 'dockerfile'
                },
                {
                    title: 'Docker Compose',
                    content: 'Orchestrate your services.\n**File**: `docker-compose.yml`',
                    code: `version: '3.8'
services:
  product-service:
    build: ./services/product
    ports:
      - "3001:3001"
  database:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret`,
                    language: 'yaml'
                },
                {
                    title: 'Launch',
                    content: 'Build and run everything with one command.',
                    code: 'docker-compose up --build',
                    language: 'bash'
                }
            ]
        }
    }
];
