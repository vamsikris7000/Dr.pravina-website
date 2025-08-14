# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/32af5007-6c8c-427a-bafe-1f9fbceea180

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/32af5007-6c8c-427a-bafe-1f9fbceea180) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables
cp .env.example .env
# Edit .env file with your actual values

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev

# Step 6: Start the backend server (in a separate terminal)
npm run server
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Environment Variables

This project uses environment variables for configuration. Copy `.env.example` to `.env` and fill in your values:

### Required Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `ADMIN_EMAIL`: Admin panel login email
- `ADMIN_PASSWORD`: Admin panel login password
- `PORT`: Server port (default: 5001)
- `VOICE_API_BASE_URL`: Voice integration API URL
- `VOICE_API_KEY`: Voice integration API key
- `DIFY_API_BASE_URL`: Dify chatbot API URL
- `DIFY_API_KEY`: Dify chatbot API key

### Security Note

Never commit your `.env` file to version control. It's already added to `.gitignore`.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Node.js/Express (Backend)
- MongoDB (Database)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/32af5007-6c8c-427a-bafe-1f9fbceea180) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
# Dr.pravina-website
