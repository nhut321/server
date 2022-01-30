
const Post = require('../models/Post')

function PostController() {
	this.getPost = async function(req,res) {
		const post = await Post.find({})
	res.status(200).json(post)
	}
	this.createPost = function(req,res) {
		const {title, description, img} = req.body
		const post = new Post({title, description, img})
		post.save()
		res.status(200).json('Create successfully!!!')
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