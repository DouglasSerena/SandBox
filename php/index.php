<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>curso php</title>
    <style>
        h2 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>testando ph</h1>
    <div>
        <?php
        $n = 4;
        $n2 = 21;
        $soma = $n + $n2;
        $nome = (string)"douglas";
        echo "$nome tem $n anos. soma = $soma"."<br/>multiplicação = ".($n*$n2)."<br/>divisao = ".($n/$n2);
        echo "<br/>blz azul como voce esta blz? sua soma deu ".(123/412*123-214);
        ?>
    </div>
</body>
</html>