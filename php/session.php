<?php
    session_start();

    $_SESSION['cor'] = "verder";
    $_SESSION['carro'] = "camaro";
    
    echo $_SESSION['cor']."<br/>".$_SESSION['carro']."<br/>";
?>