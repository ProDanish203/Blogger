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
    desc: {
        type: String,
        required: [true, "Description is required"],
    },
    image: String,
    views: Number,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // cat: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Category"        
    // },
    cat: String,
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