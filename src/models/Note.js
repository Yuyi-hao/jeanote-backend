import mongoose from "mongoose";

// 1- schema

const noteSchema = new mongoose.Schema(
    {
        title:{
        type:String,
        required:true,
        },
        content:{
            type:String,
            required:true,
        },
    },
    {timestamps: true} // auto createdAt, updatedAt
);

// 2- Model
const Note = mongoose.model("Note", noteSchema);

export default Note;
