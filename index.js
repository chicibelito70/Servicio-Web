const { collection, getDocs, addDoc } = require('firebase/firestore/lite');
const express = require('express');
const cors = require('cors');
const db = require('./config');
const app = express();
const port = 4000;
const contactsCollection = collection(db, 'contacts');
// middleware
app.use(express.json());
app.use(cors());



// routes connetion
app.get('/', async (req, res) => {
  const contactsSnapshot = await getDocs(contactsCollection);
  const contactList = contactsSnapshot.docs.map(contact => contact.data());
  res.send(contactList);

});

app.post('/a', async (req, res) => {
  const data = req.body;
  const docRef = await addDoc(contactsCollection, data);
  res.send(`Contact added with ID :(${docRef.id})`);
});

app.listen(port, () => { console.log(`running in port ${port}`) });