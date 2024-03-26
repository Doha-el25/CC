require('express');


const utilisateurShema = new mongoose.Schema({
    utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'utilisateur'
    },
    utilisateur_nom:{
        type:String,
        required:true
    },
    utilisateur_email:{
        type:String,
        required:true
    },
    utilisateur_login:{
        type:String,
        required:true
    },
    utilisateur_mdp:{
        type:String,
        required:true
    }
})