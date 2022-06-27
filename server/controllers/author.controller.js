const Author = require('../models/author.model');




module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then((authors) => {
            console.log(authors);
            res.json(authors);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


module.exports.createAuthor = (req, res) => {
    const{body} = req;
    Author.create(body)
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
}


module.exports.getAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}


module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updateAuthor =>res.json(updateAuthor))
        .catch(err => res.status(400).json(err));
}


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
}