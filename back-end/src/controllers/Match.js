const Match = require('../models/Match');
exports.createMatch = async ()=>{
    const newMatch = new Match({
        senderid:req.params.senderid,
        senderlike:true,
    });
    console.log(newMatch);

}
exports.updateMatch= async()=>{
    const 
}