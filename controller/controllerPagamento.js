const Pagamento = require('../models/pagamento')

module.exports = {
  async getCreate(req, res) {
    res.render('pagamento/pagamentoCreate')
  },
  async postCreate(req, res) {
    const {
      valor
    } = req.body
    const pagamento = new Pagamento({
      valor
    })
    await pagamento.save()
    res.redirect('/home')
  },
  async getList(req, res) {
    Pagamento.find().then((pagamentos) => {
      res.render('pagamento/pagamentoList', {
        pagamentos: pagamentos.map(pagamentos => pagamentos.toJSON())
      })
    })
  }
}