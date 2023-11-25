import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
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
    blogs:[
        {
            type: Schema.Types.ObjectId,
            ref: "Blog"
        }
    ],
},
{timestamps: true}
)


const Category = models.Category || model('Category', CategorySchema);

export default Category;