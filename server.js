require ('mongoos');
require('bcrypt');
 const mongoURI='mongodb://localhost:27017';
mongoose.connect(mongoURI, options)
  .then(() => console.log('Connexion réussie'))
  .catch(err => console.error('Erreur de connexion ', err));

  router.post('/adduser', async (req, res) => {
    try {
        const { nom, email, login, mdp } = req.body;}
    });
  
    router.post('/addtache', async (req, res) => {
        try {
            const { titre, description, date_echeance, priorite } = req.body;}
        })
    
    
    