import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore, collection, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

window.onload = function () {

  const firebaseConfig = {
    apiKey: "AIzaSyDMnOiz50FN48UniT1RTYLDWp_5QGdJSWo",
    authDomain: "reactfirebase1-7adec.firebaseapp.com",
    projectId: "reactfirebase1-7adec",
    storageBucket: "reactfirebase1-7adec.appspot.com",
    messagingSenderId: "58880147602",
    appId: "1:58880147602:web:13d3770e46f63fa28be64b",
    measurementId: "G-N8ZCZ7RF9C"
  };

  const selectMarca1 = document.getElementById('selectMarca1');
  const selectModelo1 = document.getElementById('selectModelo1');
  const selectMarca2 = document.getElementById('selectMarca2');
  const selectModelo2 = document.getElementById('selectModelo2');
  const selectPotencia1 = document.getElementById('selectPotencia1');
  const selectPotencia2 = document.getElementById('selectPotencia2');
  const selectPrecio1 = document.getElementById('selectPrecio1');
  const selectPrecio2 = document.getElementById('selectPrecio2');
  const selectPeso1 = document.getElementById('selectPeso1');
  const selectPeso2 = document.getElementById('selectPeso2');
  const selectConsumo1 = document.getElementById('selectConsumo1');
  const selectConsumo2 = document.getElementById('selectConsumo2');
  const selectCilindrada1 = document.getElementById('selectCilindrada1');
  const selectCilindrada2 = document.getElementById('selectCilindrada2');

  // Inicializar la aplicación Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Obtener la colección de marcas
  const cochesCollection = collection(db, 'Coches');

  function cargarModelos1() {
    // Limpiar el select de modelos antes de cargar nuevos valores
    selectModelo1.innerHTML = '';

    // Obtener la marca seleccionada
    const marcaSeleccionada1 = selectMarca1.value;

    // Consultar los documentos de la colección "Coches" con la marca seleccionada
    getDocs(query(collection(db, 'Coches'), where('Marca', '==', marcaSeleccionada1)))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Acceder al campo "Modelo" de cada documento
          const modelo = doc.data().Modelo;

          // Crear una opción en el select de modelos
          const option = document.createElement('option');
          option.value = modelo;
          option.textContent = modelo;
          selectModelo1.appendChild(option);
        });
      })
      .catch((error) => {
        console.error('Error al obtener los modelos:', error);
      });

  }

  function cargarModelos2() {

    selectModelo2.innerHTML = '';

    const marcaSeleccionada2 = selectMarca2.value;

    getDocs(query(collection(db, 'Coches'), where('Marca', '==', marcaSeleccionada2)))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Acceder al campo "Modelo" de cada documento
          const modelo = doc.data().Modelo;

          // Crear una opción en el select de modelos
          const option = document.createElement('option');
          option.value = modelo;
          option.textContent = modelo;
          selectModelo2.appendChild(option);
        });
      })
      .catch((error) => {
        console.error('Error al obtener los modelos:', error);
      });
  }

  function cargarPotencia1(){

  // Obtener la marca seleccionada
  const marcaSeleccionada = selectMarca1.value;
  // Obtener el modelo seleccionado
  const modeloSeleccionado = selectModelo1.value;

    getDocs(query(cochesCollection, where('Marca', '==', marcaSeleccionada), where('Modelo', '==', modeloSeleccionado)))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Acceder al campo "Potencia" de cada documento
        const potencia = doc.data().Potencia;

        // Actualizar el contenido del label con la potencia obtenida
        selectPotencia1.textContent = `POTENCIA: ${potencia}`;
      });
    })
    .catch((error) => {
      console.error('Error al obtener las potencias:', error);
    });
  }

  function cargarPotencia2(){

    // Obtener la marca seleccionada
    const marcaSeleccionada = selectMarca2.value;
    // Obtener el modelo seleccionado
    const modeloSeleccionado = selectModelo2.value;
  
      getDocs(query(cochesCollection, where('Marca', '==', marcaSeleccionada), where('Modelo', '==', modeloSeleccionado)))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Acceder al campo "Potencia" de cada documento
          const potencia = doc.data().Potencia;
  
          // Actualizar el contenido del label con la potencia obtenida
          selectPotencia2.textContent = `POTENCIA: ${potencia}`;
        });
      })
      .catch((error) => {
        console.error('Error al obtener las potencias:', error);
      });
    }

  // Consultar las marcas únicas y cargarlas en el primer select
  getDocs(cochesCollection)
    .then((querySnapshot) => {
      const marcasSet = new Set();
      querySnapshot.forEach((doc) => {
        const marca = doc.data().Marca;
        marcasSet.add(marca);
      });

      marcasSet.forEach((marca) => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        selectMarca1.appendChild(option);
        const option2 = document.createElement('option');
        option2.value = marca;
        option2.textContent = marca;
        selectMarca2.appendChild(option2);
      });
    })
    .catch((error) => {
      console.error('Error al obtener las marcas:', error);
    });

    function modelo1() {
      cargarPotencia1();
    }

    function modelo2() {
      cargarPotencia2();
    }

    selectMarca1.addEventListener("click", cargarModelos1)
    selectMarca2.addEventListener("click", cargarModelos2)
    selectModelo1.addEventListener("click",modelo1)
    selectModelo2.addEventListener("click", modelo2)
}