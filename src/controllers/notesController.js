import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    try{
        const notes = await Note.find();
        res.status(201).json({
            message: "Notes fetched successfully",
            data: {
                "notes": notes
            },
            success: true
        });
    }catch(error){
        console.error(`Error in getAllNotes controller ${error}`);
        res.status(500).json({
            message: "Internal server error",
            data: {},
            success: false
        });
    }
};

export const createNote = async (req, res) => {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json({
            message: "created note successfully",
            data: {
                "note": savedNote
            },
            success: true
        });
    }
    catch(error){
        console.error(`Error in createNote controller ${error}`);
        res.status(500).json({
            message: "Internal server error",
            data: {},
            success: false
        });
    }
};

export const getOneNote =  async (req, res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){ 
            return res.status(404).json({
                message: "Note not found",
                data: {},
                success: true
            });
        }
        res.status(201).json({
            message: "Fetched note successfully",
            data: {
                "note": note
            },
            success: true
        });
    }
    catch(error){
        console.error(`Error in getOneNote controller ${error}`);
        res.status(500).json({
            message: "Internal server error",
            data: {},
            success: false
        });
    }
};


export const updateNote =  async (req, res) => {
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title: title, content: content}, {new:true});
        if (!updatedNote){
            return res.status(404).json({
                message: "Note not found",
                data: {},
                success: true
            });
        };

        return res.status(200).json({
            message: "Note updated Successfully",
            data: {
                "note": updatedNote
            },
            success: true
        });
    }catch(error){
        console.error(`Error in updateNote controller ${error}`);
        return res.status(500).json({
            message: "Internal server error",
            data: {},
            success: false
        });
    }
};

export const deleteNote = async (req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({
                message: "Note not found",
                data: {},
                success: true
            });
        }
        res.status(200).json({
            message: "Note deleted Successfully",
            data: {
                "note": deletedNote
            },
            success: true
        });
    }catch(error){
        console.error(`Error in deleteNote controller ${error}`);
        res.status(500).json({
            message: "Internal server error",
            data: {},
            success: false
        });
    }
};
