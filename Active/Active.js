require('express');
  
 
const activeShema = new mongoose.Schema({
    active_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'active'
    },

    active_utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'utilisateur'
    },
    active_tache_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tache'
    },
})