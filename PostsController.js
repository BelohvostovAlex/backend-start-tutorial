import Post from "./Post.js";

class PostController {
    async create(req,res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture });
            res.json(post);
          } catch (error) {
            res.status(500).json(error.message);
          }
    }
    async getAll(req,res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    async getOne(req,res) {
        try {
            const {id} = req.params
            if(!id) {
                res.status(400).json({message:'no id'})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    async update(req,res) {
        try {
            
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    async delete(req,res) {
        try {
            
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

}

export default new PostController()