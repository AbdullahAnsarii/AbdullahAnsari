import { db } from "./firebase";
import { collection, addDoc } from 'firebase/firestore'


const messagesRef = collection(db, 'contact');


const postMessage = async (name, phone, email, subject, message) => {

  await addDoc(messagesRef, {
    Name: name,
    Phone: phone,
    Subject: subject,
    Message: message,
    Email: email,
  })
};

export { postMessage };