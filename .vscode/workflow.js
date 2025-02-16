
const { LangGraph } = require('langgraph');
const { fetchTrendingTopics } = require('./trendingTopics');
const { generateBlog } = require('./blogGenerator');
const { publishToWordPress } = require('./wordpressPublisher');

async function runWorkflow(industry) {
   
    const topics = await fetchTrendingTopics(industry);
    console.log("Trending Topics:", topics);

    
    for (const topic of topics) {
        const blogContent = await generateBlog(topic);
        console.log(`Generated Blog for "${topic}":`, blogContent);

    
        await publishToWordPress(topic, blogContent, [industry], [topic]);
    }
}


runWorkflow('tech');