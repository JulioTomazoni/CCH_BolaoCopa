const ChaveAposta = require('../models/chaveaposta_times')

module.exports = {
  async getCreate(req, res) {
    res.render('chaveAposta/chaveApostaCreate')
  },
  async postCreate(req, res) {
    const {
      time1,
      time2,
      time3,
      time4,
      time5,
      time6
    } = req.body
    const chaveAposta = new ChaveAposta({
      time1,
      time2,
      time3,
      time4,
      time5,
      time6
    })
    await chaveAposta.save()
    res.redirect('/home')
  },
  async getList(req, res) {
    ChaveAposta.find().then((chaveApostas) => {
      res.render('chaveAposta/chaveApostaList', {
        chaveApostas: chaveApostas.map(chaveApostas => chaveApostas.toJSON())
      })
    })
  }

}