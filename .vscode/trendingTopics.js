// trendingTopics.js
const ExcelJS = require('exceljs');

async function fetchTrendingTopics(industry) {
    // Mock trending topics based on industry
    const topics = {
        tech: ["AI in Healthcare", "Quantum Computing", "Web3 Trends"],
        fashion: ["Sustainable Fashion", "Metaverse Fashion", "2024 Trends"],
        finance: ["Cryptocurrency Regulations", "Green Investments", "AI in Banking"]
    };

    const trendingTopics = topics[industry] || ["Topic 1", "Topic 2", "Topic 3"];

    // Save topics to an Excel file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Trending Topics');
    worksheet.addRow(["Trending Topics"]);
    trendingTopics.forEach(topic => worksheet.addRow([topic]));

    await workbook.xlsx.writeFile('trending_topics.xlsx');
    console.log("Trending topics saved to trending_topics.xlsx");

    return trendingTopics;
}

module.exports = { fetchTrendingTopics };