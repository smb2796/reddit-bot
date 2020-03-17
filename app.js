require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
const { CommentStream, SubmissionStream, InboxStream } = require("snoostorm");

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

// const commentStream = new CommentStream(r, { subreddit: "all", results: 25 });

// commentStream.on("item", comment => {
//     console.log(comment)
// })

const postStream = new SubmissionStream(r, { subreddit: "AskReddit", limit: 10, pollTime: 2000 });

postStream.on("item", post => {
    console.log(post.title)
})