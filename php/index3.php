<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>formulario</title>
</head>
<body>
    <?php
        if (isset($_POST['from-enviado'])) {
            /*
            if (!$idade = filter_input(INPUT_POST, 'idade', FILTER_VALIDATE_INT)) {
                $erros = "valor de idade invalido";
            }
            if (!$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL)) {
                $erros[] = "Email invalido"; 
            }
            if (!$peso = filter_input(INPUT_POST, "peso", FILTER_VALIDATE_FLOAT)) {
                $erros[] = "peso invalido";
            }
            if (!$ip = filter_input(INPUT_POST, "ip", FILTER_VALIDATE_IP)) {
                $erros[] = "ip invalido";
            }
            if (!$url = filter_input(INPUT_POST, "url", FILTER_VALIDATE_URL)) {
                $erros[] = "url invalida";
            }
            */
            $erros = array();
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);

            $idade = filter_input(INPUT_POST, "idade", FILTER_SANITIZE_NUMBER_INT);
            if (!filter_var($idade, FILTER_VALIDATE_INT)) {
                $erros[] = "IDADE INVALIDA";
            }

            $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $erros[] = "EMAIL INVALIDO";
            }

            $url = filter_input(INPUT_POST, "url", FILTER_SANITIZE_URL);
            if (!filter_var($url, FILTER_VALIDATE_URL)) {
                $erros[] = "URL INVALIDA";
            }

            if (!empty($erros)) {
                foreach ($erros as $erro) {
                    echo "<li>$erro</li>";
                }
            }else {
                echo "PARABENS TUDO OCORREU CERTO!";
            }
        }
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        <p>Nome: <input type="text" name="name" id="name"></p>
        <p>idade: <input type="text" name="idade" id="idade"></p>
        <p>Email: <input type="email" name="email" id="email"></p>
        <!--<p>peso: <input type="text" name="peso" id="peso"></p>
        <p>ip: <input type="text" name="ip" id="ip"></p>-->
        <p>url: <input type="text" name="url" id="url"></p>
        <p><button type="submit" name="from-enviado"> Enviar </button></p>
    </form>
</body>
</html>