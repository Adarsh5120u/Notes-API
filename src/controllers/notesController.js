function getNotes(req,res){
    res.send("Fetching all notes");
}

function createNotes(req,res){
    res.send('Creating a new note');
}
module.exports={getNotes,createNotes};
