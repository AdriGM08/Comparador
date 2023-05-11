import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore ,collection ,addDoc } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

window.onload = function() {

const firebaseConfig = {
    apiKey: "AIzaSyDMnOiz50FN48UniT1RTYLDWp_5QGdJSWo",
    authDomain: "reactfirebase1-7adec.firebaseapp.com",
    projectId: "reactfirebase1-7adec",
    storageBucket: "reactfirebase1-7adec.appspot.com",
    messagingSenderId: "58880147602",
    appId: "1:58880147602:web:13d3770e46f63fa28be64b",
    measurementId: "G-N8ZCZ7RF9C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

auth.signInWithEmailAndPassword("zihao@coches.com", "zihaoCoches")
  .then(() => {
    console.log("Usuario autenticado");

const coleccionCoches = collection(db,"Coches");

const datosCoche = {
    Marca: "Audi",
    Modelo: "A3",
    Potencia: "150",
    Peso: "1405",
    Precio: "36670",
    Consumo: "4.3",
    Cilindrada: "1.6",
};

addDoc(coleccionCoches, datosCoche)
    .then((docRef) => {
        console.log("Datos insertados con éxito, ID del documento:", docRef.id);
    })
    .catch((error) => {
        console.error("Error al insertar los datos:", error);
    });

  });
  
}