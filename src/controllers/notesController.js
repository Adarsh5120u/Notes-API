let notes =[];  

function getNotes(req,res){
    res.json(notes);
}

function getNoteById(req,res){
    const id = parseInt(req.params.id);
    const note= notes.find(n=>n.id===id);
    res.json(note);
}

function createNotes(req,res){
    const {title,content}= req.body;
    const newNote = {
        id:notes.length+1,
        title:title,
        content:content
    };
    notes.push(newNote);
    res.json({message : "Note created successfully", 
              note: newNote});
}

function updateNote(req,res){
    const id=parseInt(req.params.id);
    const note = notes.find(n=>n.id===id);
    const {title,content} = req.body;
    if(!note){return res.status(404).json("Note not found");}

    if(title){note.title=title;}
    if(content){note.content=content;}
    res.json(note);
}

function deleteNote(req,res){
    const id =parseInt(req.params.id);
    const index = notes.findIndex(n=>n.id===id);
    if(index==-1){
        return res.status(404).json("Note not found");
    }
    deletedNote=notes.splice(index,1);
    res.json({message : "Note Deleted Successfully ",
              deletedNote: deletedNote[0]});
}

module.exports={getNotes,createNotes,getNoteById,updateNote,deleteNote};
