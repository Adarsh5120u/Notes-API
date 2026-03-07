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
    res.json(newNote);
}
module.exports={getNotes,createNotes,getNoteById};
