import express from "express";

const app = express();

const students = [
    'ahmed',
    'ysser',
    'muhammed',
    'eman',
    'muhammed'
]

app.get('/students', (request, response) => {

    let result = '<ul>';

    for (let i = 0; i < students.length; i++) {
        result += '<li>' + students[i] + '</li>'
    }

    result += '</ul>';

    response.send(result)
})


app.listen(5000);