import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FormModal from "./components/formModal";
import SearchModal from "./components/searchModal";
import Board from "./components/Board";

function App() {


  const [showFormModal, setShowFormModal] = useState(false);

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };



  const [showSearchModal, setShowSearchModal] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };



  const [noteMainTitle, setNoteMainTitle] = useState("");

  const handleNoteMainTitle = (e) => {
    setNoteMainTitle(e.target.value);
  };

  const [noteSubTitle, setNoteSubTitle] = useState("");

  const handleNoteSubTitle = (e) => {
    setNoteSubTitle(e.target.value);
  };



  const [noteDescription, setNoteDescription] = useState("");

  const handleNoteDescription = (e) => {
    setNoteDescription(e.target.value);
  };



  const [notes, setNotes] = useState([]);

  const handleNoteSubmission = (e) => {
    e.preventDefault();
    setNotes([...notes, { noteMainTitle, noteSubTitle, noteDescription }]);
    setNoteMainTitle("");
    setNoteSubTitle("");
    setNoteDescription("");
  };

  

  const handleClearNotes = () => {
    setNotes("");
  };

  

  const [searchNoteQuery, setSearchNoteQuery] = useState("");

  const handleNoteSearchFunction = (e) => {
    setSearchNoteQuery(e.target.value);
  };

  const handleSearchFunction = (e) => {
    e.preventDefault();
    const searchedNotes = notes.filter((obj) => {
      return obj.noteMainTitle.includes(searchNoteQuery);
    });
    setNotes(searchedNotes);
    console.log(searchedNotes);
  };

  return (
    <Fragment>
      <NavBar
       
        showFormModalFunction={openFormModal}
        showSearchModalFunction={openSearchModal}
        noteClearanceFunction={handleClearNotes}
      />
      <FormModal
        
        noteModalShowStatement={showFormModal}
        closeFormModalFunction={closeFormModal}
       
        noteMainTitleFunction={handleNoteMainTitle}
        noteSubTitleFunction={handleNoteSubTitle}
        noteDescriptionFunction={handleNoteDescription}
       
        noteMainTitleValue={noteMainTitle}
        noteSubTitleValue={noteSubTitle}
        noteDescriptionValue={noteDescription}
        
        noteSubmissionFunction={handleNoteSubmission}
      />
      <SearchModal
        
        searchModalShowStatement={showSearchModal}
        closeSearchModalFunction={closeSearchModal}
        
        noteSearchFunction={handleSearchFunction}
        searchQueryValue={searchNoteQuery}
        noteSearchQueryFunction={handleNoteSearchFunction}
      />
      <Board notesData={notes} />
    </Fragment>
  );
}

export default App;
