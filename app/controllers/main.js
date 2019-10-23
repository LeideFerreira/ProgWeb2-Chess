const index = (req, res) => {
    const conteudo = 'Página principal da aplicação';
    res.render('main/index', {
        
        conteudo: conteudo,
        layout:'main'
    });
};
const about = (req, res) => {
    const conteudo = 'Página sobre a aplicação';
    res.render('main/about', {//dentro da view main
        conteudo: conteudo,
        layout:'main'
    });
};

module.exports = { index, about }