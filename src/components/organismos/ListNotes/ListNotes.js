import Masonry from "react-masonry-css";
import autosize from "autosize";
import TextareaAutosize from "react-textarea-autosize";
import {
  InputsForm,
  Wrapper,
  FijedNotes,
  WrapperNote,
  OptionsNotes,
  WrapperListNotes,
  Textarea,
} from "./Styles.jsx";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ModalNote from "../../Modals/ModalNote";
import { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";
const Note = ({ color, description, title, ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleNote, setTitleNote] = useState(title);
  const textAreaRef = useRef();
  autosize(textAreaRef.current);
  const [descriptcionNote, setDescriptcionNote] = useState(description);
  const handleClickNote = () => {
    setOpenModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <WrapperNote backgroundColor={color} {...props}>
        <div className="info-note" onClick={handleClickNote}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <OptionsNotes className="options-form-note">
          <AddAlertOutlinedIcon />
          <PaletteOutlinedIcon />
          <ImageOutlinedIcon />
          <MoreVertOutlinedIcon />
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
              <TextareaAutosize
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
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    700: 2,
    500: 1,
  };
  return (
    <WrapperListNotes>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
      </Masonry>
    </WrapperListNotes>
  );
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(ListNotes);
