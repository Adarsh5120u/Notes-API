let notes =[];  

function getNotes(req,res){
    res.send("Fetching all notes");
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
module.exports={getNotes,createNotes};
