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
        $cliente = ["carlos", "marcos", "vitoria", "marcelo", "aline"];
        print_r($cliente);
        //length
        print("<br/>Tamanho da array :".count($cliente)."<br/>");

        //percorrer a array

        foreach ($cliente as $valor) {
            echo $valor."<br/>";
        }

        print("<hr/>");  

        $pessoa = array("nome" => "rodrigo", "idade" => 10, "altura" => 1.50);
        $pessoa["cidade"] =  "capao da canoa";
        print_r($pessoa);
        echo $pessoa["altura"]."<br/>";
        foreach ($pessoa as $indice => $valor) {
            echo $indice.":".$valor."<br/>";
        }

        print("<hr>");

        $time = array(
            "cariocas" => array("campeao" => "flamengo", "vice" => "vasco", "terceiro" => "botafogo"),
            "saopaulo" => array("campeao" => "santos", "vice" =>  "sao paulo", "terceiro" =>  "palmeira"),
            "baianos" => array("campeao" => "bahia", "vice" =>  "vitoria", "terceiro" =>  "itapuma")
        );
        echo "<br/>";
        foreach ($time["saopaulo"] as $indice => $valor) {
            echo $indice.":".$valor."<br/>";
        }
        echo "<br/>";
        foreach ($time["cariocas"] as $indice => $valor) {
            echo $indice.":".$valor."<br/>";
        }
        echo "<br/>";
        foreach ($time["baianos"] as $indice => $valor) {
            echo $indice.":".$valor."<br/>";
        }
        
        
        print("<hr>");

        //verifica se é um array
        echo (is_array($cliente));

        echo "<br/>";
        //verifica se a o valor dentro da array

        echo in_array("marcos", $cliente);
        
        echo "<br/>";
        //mostras os dados da array
        $key = array_keys($time["cariocas"]);
        print_r($key);

        echo "<br/>";
        //retorna um nova array com os valores da array anterio
        $test = array_values($pessoa);
        print_r($test);

        $nome = array("primo" => "carlos", "tia" => "ana");
        $valor = array_values($nome);
        print_r($valor);

        echo "<br/>";
        
        $carros = array("uno", "gol", "palho");
        $motos = array("cava", "pop100", "merced");

        $veiculos = array_merge($carros, $motos);

        print_r($veiculos);

        echo "<br/>";
        echo "antes : ";
        print_r($veiculos);
        echo "<br/>";
        //array_pop : remove a utima posição
        echo array_pop($veiculos);

        echo "<br/>";
        //array_shift : remove a primeira posução
        echo array_shift($veiculos);
        echo "<br/>";
        echo "depois : ";
        print_r($veiculos);
        echo "<br/>";
        //ARRAY_unshift : adiciona um ou mais elementos no comeco da array
        print_r(array_unshift($veiculos, "uno"));
        echo "<br/>";
        //ARRAY_push : adiciona um ou mais elementos no final da array
        echo array_push($veiculos, "merced");
        echo "<br/>";
        print_r($veiculos);
        echo "<br/>";
        //array_combine = mesclar dois arrays uma sera a key e a outra o valor
        $veic = array_combine($carros, $motos);
        print_r($veic);
        echo "<br/>";
        //array_soma : soma os valores da array
        $soma = array(5, 6, 1, 6, 3, 6, 4, 3, 1, 2);
        echo array_sum($soma);
        echo "<br/>";
        //explode : transfroma um string em array
        $string = "26/03/2001";
        $data = explode("/", $string);
        print_r($data);
        echo "<br/>";
        //implode : transforma um array em um string
        $string = implode("/", $data);
        echo $string;
        print("<hr>");
        echo 3 + 5;
        echo "<br/>";
        echo 3 - 5;
        echo "<br/>";
        echo 3 * 5;
        echo "<br/>";
        echo 3 / 5;
        echo "<br/>";
        echo 3 ** 5;
        echo "<br/>";
        
        echo "<hr>";

        $nome = "adcesfsaw";
        //trasforma em maiusculo
        echo strtoupper($nome);
        echo "<br/>";
        //transfroma em minuscuo
        echo strtolower($nome);
        echo "<br/>";
        //escole o que mostrar da mensagen
        echo substr($nome, 4, 6);
        echo "<br/>";
        //acrecenta a uma string
        echo str_pad($nome, 13, "OI", STR_PAD_BOTH/*STR_PAD_LEFT / STR_PAD_RIGHT / STR_PAD_BOTH*/);
        echo "<br/>";
        //repedi a palavra x vezes
        echo str_repeat("top do top ", 20);
        echo "<br/>";
        //mostra o tamanho do texto
        echo strlen($nome);
        echo "<br/>";
        //substtui um palavra do texto
        $as = "o mundo da escola vai fundar a argentina";
        echo str_replace("argentina", "brasil", $as);
        echo "<br/>";
        //mostrar a posição de uma plavra em um texto
        echo strpos($as, "mundo");
        echo "<br/>";

        echo "<hr/>";
        //formatar em valores de dinheiro
        $db = 51215415212.58;
        echo "O valor do produto é R$ ".number_format($db, 2, ",", ".");
        echo "<br/>";
        //round : arredonda
        //ceil : arredonda para cima
        //floor : arredonda para baixo
        //rand : e da numero aleatorios
        echo rand(0, 10);
        echo "<br/>";

        //pega qualquer variavel
        echo $GLOBALS["db"];
        echo "<br/>";
        //mostra dados 
        echo $_SERVER["PHP_SELF"];
        echo "<br/>";
        ?>
    </div>
</body>
</html>