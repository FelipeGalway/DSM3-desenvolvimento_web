const express = require('express');
const server = express();
server.use(express.json());

const cursos = ['Node JS', 'Python', 'React Show', 'JavaScript', 'PHP', 'React', 'VueJS'];

// Middleware Local
function checkCurso(req, res, next){
    if(!req.body.novo_curso){
        return res.status(400).json({error:
        "Nome do curso é obrigatório nesse formato {'novo_curso' : 'Nome'}"});
    }
    
    return next();
};

// Middleware Local
function checkIDCurso(req, res, next){
    const curso = cursos[req.params.index];
    if(!curso){
        return res.status(400).json({error:
        "O curso não existe no ID solicitado"});
    }
    
    return next();
};

server.get('/curso', (req, res)=>{
    return res.json(cursos);
});

server.get('/curso/:index', checkIDCurso, (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

server.post('/curso', checkCurso, (req, res)=>{
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    return res.json(cursos);
});

server.put('/curso/:index', checkIDCurso, (req, res)=>{
    const { index } = req.params;
    const { curso } = req.body;

    cursos[index] = curso;

    return res.json(cursos);
});

server.delete('/curso/:index', (req, res)=>{
    const { index } = req.params;
   
    cursos.splice(index, 1);
    return res.json({message: "Curso deletado com sucesso"});
});

server.listen(3000);
