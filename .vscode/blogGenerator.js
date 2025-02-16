// blogGenerator.js
const { OpenAI } = require('langchain/llms/openai');
require('dotenv').config();

async function generateBlog(topic) {
    const model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0.7,
    });

    const prompt = `Write a blog post about ${topic}. Include the following sections:
    1. Table of Contents
    2. Introduction
    3. Main Content
    4. Conclusion
    5. Relevant Categories and Tags`;

    const blogContent = await model.call(prompt);
    return blogContent;
}

module.exports = { generateBlog };