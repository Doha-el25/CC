require('express');


const tacheShema = new mongoose.Schema({
    tache_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tache'
    },
    tache_titre:{
        type:String,
        required:true
    },
    tache_description:{
        type:string,
        required:true
        },
    tache_date_echeance:{
        type:Date,
        required:true
    },
    tache_priorite:{
        type:Integer,
        required:true
    }
})