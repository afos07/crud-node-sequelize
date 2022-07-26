const User = require('../models/User');

module.exports = {

  async store(req, res){
    try{

      const { nome, email } = req.body;

      const verficaUser = await User.findOne({where: {email}});

      if(verficaUser){
        res.status(200).json({message: 'Já existe um usuário com o mesmo e-mail cadastrado!'});
      }else{
        const user = await User.create({nome, email});
    
        res.status(200).json(user);
      }
    }catch(error){

    }
    
  }

}