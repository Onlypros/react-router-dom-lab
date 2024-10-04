import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails"

import './App.css';

const App = () => {
  // const [mailboxes, setMailboxes] = useState([])
  // const addBox = (formData) => {
  //   formData._id = mailboxes.length + 1
  //   setMailboxes([...mailboxes, formData])
  // }
  const [mailboxes, setMailboxes] = useState([]);

  // Load mailboxes from local storage when the component mounts
  useEffect(() => {
    const storedMailboxes = localStorage.getItem('mailboxes');
    if (storedMailboxes) {
      setMailboxes(JSON.parse(storedMailboxes)); // Parse and load the stored mailboxes
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  // Save the new mailbox and persist to local storage
  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    const updatedMailboxes = [...mailboxes, formData];
    setMailboxes(updatedMailboxes);
    localStorage.setItem('mailboxes', JSON.stringify(updatedMailboxes)); // Save mailboxes to local storage
  };

  const [letters, setLetters] = useState([])
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Welcome to the Post Office</h1></main>} /> 
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} /> } />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} /> } />
      </Routes>
    </>
  );
};

export default App;
