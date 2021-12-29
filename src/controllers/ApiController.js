module.exports = {
    async index(req, res) {       
        return res.json( { 
            title: 'Hello, welcome', 
            description: 'This is Teste',
            author: 'Murilo Henrique Garcia Rodrigues',
            country: 'Brazil' } );
    },
};