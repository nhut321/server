
const Post = require('../models/Post')

function PostController() {
	this.getPost = async function(req,res) {
		const userId = req.user.userId
		const post = await Post.find({userId})
	res.status(200).json(post)
	}
	this.createPost = function(req,res) {
		const {title, description, img, userId} = req.body
		const post = new Post({title, description, img, userId})
		post.save()
		res.status(200).json({
			data: post
		})
	}
	this.getOnePost = async function(req,res) {
		const id = req.params._id
		await Post.findOne({_id: id})
				.then(data => res.json(data))
	}
	this.deletePost = async function(req,res) {
		const id = req.params._id
		const chat = await Post.deleteOne({_id: id})
		res.json(chat)

	}
}

module.exports = new PostController