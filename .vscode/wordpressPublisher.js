// wordpressPublisher.js
const axios = require('axios');
require('dotenv').config();

async function publishToWordPress(title, content, categories = [], tags = []) {
    const auth = {
        username: process.env.WORDPRESS_USERNAME,
        password: process.env.WORDPRESS_PASSWORD,
    };

    const data = {
        title,
        content,
        status: 'draft', // or 'publish'
        categories,
        tags,
    };

    try {
        const response = await axios.post(`${process.env.WORDPRESS_API_URL}/posts`, data, { auth });
        console.log("Blog published successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error publishing blog:", error.response ? error.response.data : error.message);
    }
}

module.exports = { publishToWordPress };