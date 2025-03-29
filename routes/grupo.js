const express = require('express');
const router = express.Router();

//Rota principal - index
router.get("/", (req, res) => {
    res.render("base",{
        title: "Nome do Grupo",
        view: "grupo",
    });
});

module.exports = router;