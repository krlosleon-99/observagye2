import admin from 'firebase-admin';
import config from './config'; // Asegúrate de importar tu archivo config.js

// Inicializa Firebase usando las credenciales del archivo config.js
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: config.firebase.project_id,
    privateKey: config.firebase.private_key,
    clientEmail: config.firebase.client_email,
  }),
  storageBucket: 'observa-gye3.appspot.com', // Asegúrate de usar el bucket correcto
});
// Obtén una referencia al bucket de almacenamiento
const bucket = admin.storage().bucket();

export { bucket };