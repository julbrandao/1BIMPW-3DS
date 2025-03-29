const express = require('express');
const router = express.Router();
const { Aluno } = require('../models');

//Listar categoria
router.get("/", async (req, res) => {
    const alunos = await Aluno.findAll();
    res.render(
        "base", {
            title: "Listar Alunos",
            view: "alunos/show",
            alunos,
    });
});

//add nova categoria - formulário
router.get("/add", async (req, res) => {
    res.render(
        "base", {
            title: "Adicionar Aluno",
            view: "alunos/add",
    });
});

//add nova categoria - no bd
router.post("/add", async(req, res) =>{
    await Aluno.create({nome: req.body.nome, idade: req.body.idade,});
    res.redirect("/alunos")
});

//edit categoria - formulário
router.get("/edit/:id", async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id);
    res.render(
        "base", {
            title: "Editar Aluno",
            view: "alunos/edit",
            aluno,
    });
});

//edit categoria - no bd
router.post("/edit/:id", async(req, res) =>{
    await Aluno.update(
        {nome: req.body.nome, idade:req.body.idade,},
        {where:{id: req.params.id}}
    );
    res.redirect("/alunos")
});

//excluir categoria
router.post("/delete/:id", async(req, res) =>{
    await Aluno.destroy({where:{id: req.params.id}});
    res.redirect("/alunos")
});

module.exports = router;