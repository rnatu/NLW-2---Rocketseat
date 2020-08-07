const Database = require('./db');
const createProffy = require('./createProffy');

Database.then((db) => {
    //Inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars1.githubusercontent.com/u/40378126?s=460&u=2817417de7387798a3ef293272624ae695ead65d&v=4",
        whatsapp: "1122334455",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "Química",
        cost: "20",
        //o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        //o class_id virá pelo banco de dados após cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //createProffy(db, { proffyValue, classValue, classScheduleValue })

    //Consultar od dados inseridos
})