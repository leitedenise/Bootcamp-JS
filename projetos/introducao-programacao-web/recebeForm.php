
<html>
    <head>

    <!-- o que estiver dentro desse .linha(nome da classe), altera as propriedades da classe linha.-->
    <style>
        .linha{
            font-weight: bold;
            color: #696969;
            
        } 
    
        body{
             background: gainsboro;
                    
                } 

         h1 {
        display: block;
        width: 100% !important;
        text-align: center;
        font-weight: bold;
    }

    </style>

    </head>

    <body>

    <?php

    $nome= $_POST['nome'];
    $nasc= $_POST['nascimento'];
    $email= $_POST['email'];
    $tel= $_POST['telefone'];

    echo "<span class=\"linha\"><h1><br>Cadastro realizado com sucesso!</h1>";

    ?>       
    
    </body>

</html>