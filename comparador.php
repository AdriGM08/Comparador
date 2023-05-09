<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet" href="css/comparador.css"/>
    </head>



    <body> 

    

    <?php 
    
include("conexion.php");

$marca=""
$modelo=""

$sql="SELECT * FROM Comparador where Marca=$marca  and $modelo";
$caracteristicas=$conn->query($sql);

$selectMarcas="SELECT Marca from comparador"
$selectModelo="SELECT Modelo from comparador"
$marcas=$conn->query($selectMarcas)
$modelos=$conn->query($selectModelo)


?>
      <header>
         <center><div class="titulo"><H1>Auto-Search</H1></div></center>

         <center>
            <div class="menu"><a href="index.html">INICIO</a><a href="marcas.html">MARCAS</a><a href="comparador.html">COMPARADOR</a><a
                href="nosotros.html">NOSOTROS</a><a href="contactanos.html">CONTACTANOS</a></div>
          </center>
    </header>
   <div> <br>
    <center> <div class ="menu1">
        <H2>COMPARADOR</H2>
        <center><img src="img/Logo.PNG"></center>
        <hr width="80%">

        
        <table cellspacing ="30%" cellpadding="30%" width="80%">
            <tr>
              <td> <center><h3>Coche 1</h3></center></td>
              <td> <center><h3>Coche 2</h3></center></td>

       </tr>
       <tr>
        <td> <select name="" id=""></select></td>
        <td> <select name="" id=""></select></td>
       </tr>
       </table>
<!-- necesario para que el pie de pagina quede abajo ya que no hay suficiente contenido en esta web como para que coja el final de la pantalla -->
<br><br><br><br><br><br><br><br><br><br>
<!--  no mover hasta que no se instroduzca mas contenido -->
</div>
     
        <footer >

            <div class="contactos">
                <br>
              <p style="color: white;">Nuestras redes : </p>
              <a href="https://www.instagram.com/Auto-Search/"><img src="img/instag.png" width="30px" height="30px"></a>
              <a href="https://twitter.com/Auto-Search"><img src="img/twitter.png" width="30px" height="30px"></a>
              <a href="https://es-la.facebook.com/pages/category/Auto-Search/"><img src="img/facebooks.png" width="30px"></a>
              <p style="color: white;">pincha en los iconos para acceder.</p>
            </div>
        
          </footer>
</body></html>