import React, { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Notes from './components/Notes';
import Backdrop from './components/Backdrop';

function App() {
  const [notes, setNotes] = useState( JSON.parse(localStorage.getItem('notes')) ?? [] );
  const [backdrop, setBackdrop] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  return (
    <div className="App">
      {<Note index={currentNote.index} show={backdrop} note={currentNote} save={(state)=>{
        let nextNotes;

        if(state.index === undefined){
          state.index = notes.length;
          nextNotes = [...notes, state];
        }else if(state.index < notes.length){
          nextNotes = [...notes];
          nextNotes[state.index] = state;
        }
        console.log(state);
        setNotes(nextNotes);
        console.log(nextNotes);
        localStorage.setItem('notes', JSON.stringify(nextNotes));
        setBackdrop(false);
        setCurrentNote({})
      }} onDelete={(index)=>{
        if(index >= 0 && index < notes.length){
          let newNotes = notes.filter(note =>{return note.index !== index}).map((note, index) =>{note.index = index; return note});
          setNotes(newNotes);
          localStorage.setItem('notes', JSON.stringify(newNotes));
        }

        setBackdrop(false);
        setCurrentNote({});
      }}></Note>}
      
      <Notes notes={notes} onAddNote={()=>{setBackdrop(true)}} onNoteClick={(note)=>{
        setCurrentNote(note);
        setBackdrop(true);
      }}></Notes>
      <Backdrop show={backdrop} resetBackdrop={()=>{
        setBackdrop(false);
        setCurrentNote({});
      }}>
      </Backdrop>
    </div>
  );
}

export default App;
