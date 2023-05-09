<?php
try{
    $base=new PDO('mysql:host=http://192.168.1.188:8000/; dbname=myDb;', 'user','test');
    $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $base->exec("SET CHARACTER SET UTF8");
}catch(Exception $e){
    die('Error' . $e->getMessage());
    echo "Linea del error".$e->getLine();
  }


?>