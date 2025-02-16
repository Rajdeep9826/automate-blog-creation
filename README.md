# Automating Blog Creation Using LangGraph and LangChain in JavaScript

## Overview
This project automates the process of blog creation using **LangGraph** and **LangChain** in JavaScript. It fetches trending topics, generates blog content, categorizes and tags the posts, and publishes them to a WordPress site using the **WordPress REST API**.

## Features
- Fetch trending topics from various sources.
- Generate blog content using **LangGraph** and **LangChain**.
- Categorize and tag the blog posts automatically.
- Publish the generated blogs to WordPress via the **WordPress REST API**.
- Store and manage blog details using **ExcelJS**.

## Technologies Used
- **JavaScript**
- **LangGraph**
- **LangChain**
- **ExcelJS**
- **WordPress REST API**

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/automated-blog-creation.git
   cd automated-blog-creation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     WORDPRESS_API_URL=<Your WordPress Site API URL>
     WORDPRESS_USERNAME=<Your WordPress Username>
     WORDPRESS_PASSWORD=<Your WordPress Password>
     OPENAI_API_KEY=<Your OpenAI API Key>
     ```

## Usage
1. Run the workflow to fetch trending topics, generate blog content, and publish to WordPress:
   ```bash
   node workflow.js
   ```
2. The generated blog will be automatically categorized and tagged.
3. The blog post will be published to your WordPress site.

## Project Structure
```
/automated-blog-creation/
│
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── trendingTopics.js      # Fetch trending topics
├── blogGenerator.js       # Generate blog content using LangChain
├── wordpressPublisher.js  # Publish to WordPress using REST API
├── workflow.js            # Main script to automate the process
└── trending_topics.xlsx   # Stores fetched trending topics
```

## Upload README to GitHub
### 1. Navigate to Your Project Folder
```bash
cd /path/to/your/project
```

### 2. Initialize Git (If Not Already Initialized)
```bash
git init
```

### 3. Add the README.md File
```bash
git add README.md
```

### 4. Commit the Changes
```bash
git commit -m "Added README file"
```

### 5. Connect to Your GitHub Repository
```bash
git remote add origin https://github.com/yourusername/your-repository.git
```

Replace `yourusername` and `your-repository` with your actual GitHub username and repository name.

### 6. Push the README.md File to GitHub
```bash
git push -u origin main
```

If your default branch is `master`, use:
```bash
git push -u origin master
```

### 7. Verify on GitHub
Go to your GitHub repository URL and check if the `README.md` file is uploaded successfully.

## Future Enhancements
- Improve content generation with fine-tuned prompts.
- Integrate additional APIs for topic extraction.
- Enhance SEO optimization for generated content.

## Contributing
Feel free to contribute to this project by submitting pull requests or reporting issues.




