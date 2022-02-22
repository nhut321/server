
const Post = require('../models/Post')

function PostController() {
	this.getPost = async function(req,res) {
		const userId = req.user.userId
		const post = await Post.find({userId})
	res.status(200).json(post)
	}
	this.createPost = function(req,res) {
		const {title, description, img, userId} = req.body
		console.log(req.body)
		const post = new Post({title, description, img, userId})
		// post.save()
		res.status(200).json({
			data: post
		})
	}
	this.getOnePost = async function(req,res) {
		const id = req.params._id
		await Post.findOne({_id: id})
				.then(data => res.json(data))
	}
	this.deletePost = function(req,res) {
		
	}
}

module.exports = new PostController