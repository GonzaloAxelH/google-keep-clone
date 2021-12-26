import {
  InputsForm,
  Wrapper,
  FijedNotes,
  OtherNotes,
  TitleNotes,
  WrapperNote,
  OptionsNotes,
} from "./Styles.jsx";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ModalNote from "./ModalNote";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
const Note = ({ color, description, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleNote, setTitleNote] = useState(title);
  const [descriptcionNote, setDescriptcionNote] = useState(description);
  const handleClickNote = () => {
    setOpenModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <WrapperNote
        onClick={handleClickNote}
        backgroundColor={color}
        witdh={"240px"}
      >
        <h4>{title}</h4>
        <p>{description}</p>
        <OptionsNotes>
          <div className="options-form-note">
            <AddAlertOutlinedIcon />

            <PaletteOutlinedIcon />
            <ImageOutlinedIcon />

            <MoreVertOutlinedIcon />
          </div>
        </OptionsNotes>
      </WrapperNote>
      <ModalNote
        handleCloseModal={() => setOpenModal(false)}
        openModal={openModal}
      >
        <WrapperNote backgroundColor={color} witdh="600px">
          <form onSubmit={handleSubmit}>
            <InputsForm>
              <input
                type="text"
                value={titleNote}
                onChange={(e) => setTitleNote(e.target.value)}
              />
              <input
                type="text"
                value={descriptcionNote}
                onChange={(e) => setDescriptcionNote(e.target.value)}
              />
            </InputsForm>

            <OptionsNotes>
              <AddAlertOutlinedIcon />
              <PersonAddOutlinedIcon />
              <PaletteOutlinedIcon />
              <ImageOutlinedIcon />
              <ArchiveOutlinedIcon />
              <MoreVertOutlinedIcon />
              <UndoOutlinedIcon />
              <RedoOutlinedIcon />
            </OptionsNotes>
          </form>
        </WrapperNote>
      </ModalNote>
    </>
  );
};

function ListNotes({ notes }) {
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    setAllNotes(notes);
  }, [notes]);
  return (
    <>
      <Wrapper>
        <TitleNotes>Fijadas</TitleNotes>
        <FijedNotes>
          {allNotes.map((note) => {
            return (
              <Note
                key={note.id}
                color={note.valueBackground}
                description={note.valueDescription}
                title={note.valueTitle}
              />
            );
          })}
        </FijedNotes>
        <TitleNotes>Others</TitleNotes>
        <OtherNotes></OtherNotes>
      </Wrapper>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(ListNotes);
