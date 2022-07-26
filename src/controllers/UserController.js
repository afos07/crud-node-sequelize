const User = require('../models/User');

module.exports = {

  async store(req, res){
    try{
      const { nome, email } = req.body;

      const verficaUser = await User.findOne({where: {email}});

      if(verficaUser){
        res.status(401).json({message: 'Já existe um usuário com o mesmo e-mail cadastrado!'});
      }else{
        const user = await User.create({nome, email});
    
        res.status(200).json(user);
      }
    }catch(error){
      res.status(500).json({error:"Estamos passando por instabilidade"});
    }
    
  },

  async update(req, res){
    try{
      const { id } = req.params;
      const {nome, email} = req.body;
  
      const buscaUser = await User.findOne({where: {id}});
  
      if(!buscaUser){
        res.satus(401).json({message: 'Nenhum usuário encontrado!'});
      }else{
         const user = await User.update({nome, email}, {where:{id}});
         res.status(200).json(user);
      }
    }catch(error){
      res.status(500).json({error:"Estamos passando por instabilidade"});
    }
  },

  async read(req, res){
    try{
      const users = await User.findAll();
      res.status(200).json(users);
    }catch(error){
      res.status(500).json({error:"Estamos passando por instabilidade"});
    }
  },

  async delete(req, res){
    try{
      const { id } = req.params;
      const buscaUser = await User.findOne({where: {id}});

      if(!buscaUser){
        res.status(401).json({message: 'Nenhum usuário encontrado!'});
      }else{
        await User.destroy({where:{id}});
        res.status(200).json({success: true});
      }
    }catch(error){
      res.status(500).json({error:"Estamos passando por instabilidade"});
    }
  }

}