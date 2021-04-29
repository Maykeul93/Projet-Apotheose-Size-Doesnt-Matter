module.exports = {
    async error404(request, response) {
        response.redirect('/page/error');
        
    }
}