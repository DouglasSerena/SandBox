<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>UPload de arquivos</title>
</head>
<body>

    <?php

    if (isset($_POST["Enviado"])) {
        $formatos = array("png", "jpeg", "jpg", "gif");
        $quantidade = count($_FILES['arquivo']['name']);
        $numeroArquivo = 1;
        for ($i = 0;$i < $quantidade;$i++) {
            $extencao = pathinfo($_FILES['arquivo']['name'][$i], PATHINFO_EXTENSION);
            
            if (in_array($extencao, $formatos)) {
                $paste = "arquivos/";
                $temporario = $_FILES['arquivo']['tmp_name'][$i];
                $novoNome = uniqid(rand(), true).".$extencao";
                if (move_uploaded_file($temporario, $paste.$novoNome)) {
                    echo "ARQUIVO $numeroArquivo: UPLOAD CONCLUIDO com sucesso para $paste $novoNome. <br/>";
                }else {
                    echo "ARQUIVO $numeroArquivo: ERRO UPLOAD FALIAD do arquivo $temporario. <br/>";
                }
            }else {
                echo "ARQUIVO $numeroArquivo: A extenção .$extencao não é permitida. <br/>";
            }
            $numeroArquivo++;
        }
    }

    ?>

    <form action="/" method="POST" enctype="multipart/form-data">
        <input type="file" name="arquivo[]" multiple id=""><br/>
        <button type="submit" name="Enviado"> Enviar </button>
    </form>
</body>
</html>