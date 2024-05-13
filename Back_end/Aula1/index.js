const express = require('express');
const server = express();
server.use(express.json());

const cursos = ['Node JS', 'Python', 'React Show', 'JavaScript', 'PHP', 'React', 'VueJS'];

function checkCurso(req, res, next){
    if(!req.body.novo_curso){
        return res.status(400).json({error:
        "Nome do curso é obrigatório nesse formato {'novo_curso' : 'Nome'}"});
    }
    
    return next();
};

function checkIDCurso(req, res, next){
    const curso = cursos[req.params.index];
    if(!curso){
        return res.status(400).json({error:
        "O curso não existe no ID solicitado"});
    }
    
    return next();
};

function checkUpdateParams(req, res, next){
        if(!req.body.curso){
        return res.status(400).json({error:
        "Não foi informado nenhum parâmetro de atualização"});
    }
    
    return next();
};

function deleteCourse(req, res, next) {
    const { index } = req.params;
    if (isNaN(index) || index < 0 || index >= cursos.length) {
        return res.status(400).json({ error: "ID do curso inválido" });
    }
    return next();
}

function deleteMessage(req, res, next){
    const { index } = req.params;
    cursos.splice(index, 1);
    console.log("Lista atualizada após deletar um curso:", cursos); 
    return res.json({ message: "Curso deletado com sucesso" });
};


function listAddedCursos(req, res, next) {    
    next();
    console.log("Lista atualizada após adicionar um curso:", cursos);
}

server.get('/curso', (req, res)=>{
    return res.json(cursos);
});

server.get('/curso/:index', checkIDCurso, (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

server.post('/curso', checkCurso, listAddedCursos, (req, res)=>{
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    return res.json(cursos);
});

server.put('/curso/:index', checkUpdateParams, checkIDCurso, (req, res)=>{
    const { index } = req.params;
    const { curso } = req.body;

    cursos[index] = curso;

    return res.json(cursos);
});

server.delete('/curso/:index', deleteCourse, deleteMessage, (req, res)=>{
    const { index } = req.params;    
});

server.listen(3000);
