import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
    slug: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Slug should be unique"]
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    image: String,
    views: Number,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    cat: {
        type: Schema.Types.ObjectId,
        ref: "Category"        
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
    ],
},
{timestamps: true}
)


const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;