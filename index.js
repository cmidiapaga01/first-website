const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/processar-formulario', function(req, res) {
  const nome = req.body.nome;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'SEU_EMAIL_AQUI',
      pass: 'SUA_SENHA_AQUI',
    },
  });

  const mailOptions = {
    from: 'SEU_EMAIL_AQUI',
    to: 'tbusprp@gmail.com',
    subject: 'Dados do Formulário de Contato',
    text: `Nome: ${nome}`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send('Ocorreu um erro ao enviar o formulário');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send('Formulário enviado com sucesso!');
    }
  });
});

app.listen(port, function() {
  console.log(`Servidor iniciado na porta ${port}`);
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
