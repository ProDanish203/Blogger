import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
    desc: {
        type: String,
        required: [true, "Comment is required"],
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    postID: {
        type: Schema.Types.ObjectId,
        ref: "Post"        
    }
},
{timestamps: true}
)


const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;