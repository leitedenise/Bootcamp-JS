<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Meu primeiro projeto em PHP</title>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> <!-- importação do js das bibliotecas jquery-->

    <!-- onde se definem os estilos css -->
    <style type="text/css">
        
        body{
            background: gainsboro;
            
           } 
          
           * {
    box-sizing: border-box;
    }

    body {
        display: flex;
        width: 100vw;
        height: 100vh;
        margin: 0;
        justify-content: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        display: block;
        width: 100% !important;
        text-align: center;
        font-weight: bold;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    input {
        width: 400px;
        height: 40px;
        padding-left: 15px;
        border: 1px solid #b4b4b4;
        border-radius: 5px;
    }

    button {
        display: block;
        width: 400px;
        height: 50px;
        margin-top: 50px;
        background: #359942;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: 0.5s;
    }

    </style> <!-- o css tbm precisa ser importado, e pode ser usado no código dentro do head, com as tag de style, ou imbutido dentro da propria tag html. --> 
   
</head>

<body>
    
<!-- Formulario -->

<form method ="post" action = "recebeForm.php"> 

    <label> <h2>Formulário de Cadastro</h2></label>

    <label> Nome: </label>
    <input type="text" name="nome" placeholder="Digite seu nome" ><br><br>

    <label> Data de Nasc.:</label>
    <input type="text" name="nascimento" placeholder="Digite sua data de nasc." ><br><br>

    <label> Email:</label>
    <input type="text" name="email" placeholder="Digite seu email" ><br><br>

    <label> Telefone: </label>
    <input type="text" name="telefone" placeholder="Digite seu telefone" ><br><br>
    

    <hr><button type ="submit"> Enviar</button><br>

</form>

</body>

<script type="text/javascript">

    $('label').css({'color': '#008080'});
    $('label').css({'font-weight': 'bold'});
    $('label').css({'font-size': '20px'});
    
</script> 
<!-- onde chama-se as funções da jquery. Passa qual elemento deseja modificar,e o tipo de modificação. -->

</html>
