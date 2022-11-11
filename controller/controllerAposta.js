const aposta = require('../models/aposta');
const Aposta = require('../models/aposta');


module.exports = {
  async getCreate(req, res){
    res.render('aposta/apostaCreate', )
  },
  async postCreate(req, res){
    const aposta = new Aposta()
    await aposta.save()
    res.redirect('home')
  },
  async getList(req, res) {
    Aposta.find().then((apostas) => {
      res.render('aposta/apostaList', {
        apostas: apostas.map(apostas => apostas.toJSON())
      })
    })
  }
  
}