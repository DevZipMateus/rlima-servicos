# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2cc50cde-64e0-4938-9c2a-6fe74c99e08f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2cc50cde-64e0-4938-9c2a-6fe74c99e08f) and start prompting.

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

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
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

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy via Lovable (Recommended)
Simply open [Lovable](https://lovable.dev/projects/2cc50cde-64e0-4938-9c2a-6fe74c99e08f) and click on Share -> Publish.

### Deploy to Hostinger or other hosting providers

This is a React SPA (Single Page Application) that needs to be built before deployment.

**Step 1: Build the project locally**
```sh
# Install dependencies
npm install

# Create production build
npm run build
```

**Step 2: Upload to your hosting provider**
1. After running `npm run build`, you'll have a `dist/` folder with all compiled files
2. Upload the **contents** of the `dist/` folder (not the folder itself) to your hosting provider's public folder:
   - **Hostinger**: Upload to `public_html/` folder
   - **cPanel**: Upload to `public_html/` or `www/` folder
   - **Other providers**: Check their documentation for the correct public folder

**Step 3: Important files included**
- `.htaccess` file (in public folder) - Handles React Router routing and optimizations
- All compiled HTML, CSS, and JavaScript files
- Images and other assets

**Troubleshooting:**
- Make sure to upload the **contents** of `dist/`, not the `dist/` folder itself
- Ensure `.htaccess` file is uploaded (it might be hidden in your file manager)
- Check that your hosting provider supports `.htaccess` files (Apache servers)
- If using Nginx, you'll need to configure routing rules in your server config

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
