const Post = require("../models/post");

const savePost = async (req,res) => {
    if (!req.body.text || !req.body.hashtag) {
        return res.status(400).send("Process failed: Imcoplete data");
    }

    const post = new Post({
        userId: req.body.userId,
        text:req.body.text,
        hashtag:req.body.hashtag
    });
    const result = await post.save();
    if (!result) return res.status(400).send("Failed to register task")
    return res.status(200).send({result});

};

module.exports = { savePost };