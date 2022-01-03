import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState } from "react";
import styled from "styled-components";
import { File, InputFile, LabelInputFile } from "../FileUpload/FileUpload";
import ColorPicker from "../ColorPicker/ColorPicker";

const OptionsNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  .list-options {
    display: flex;
  }
`;
const WrapperIconOption = styled.div`
  cursor: pointer;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5em;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function FormOptions({ handleFile, getColor, color }) {
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <>
      <OptionsNotes>
        <div className="list-options">
          <WrapperIconOption>
            <File getFile={handleFile}>
              <InputFile />
              <LabelInputFile>
                <ImageOutlinedIcon />
              </LabelInputFile>
            </File>
          </WrapperIconOption>

          <WrapperIconOption>
            <AddAlertOutlinedIcon />
          </WrapperIconOption>

          <WrapperIconOption>
            <PersonAddOutlinedIcon />
          </WrapperIconOption>

          <WrapperIconOption onClick={() => setOpenPicker(!openPicker)}>
            <PaletteOutlinedIcon />
          </WrapperIconOption>

          <WrapperIconOption>
            <MoreVertOutlinedIcon />
          </WrapperIconOption>
        </div>
      </OptionsNotes>

      {openPicker ? <ColorPicker getColor={getColor} color={color} /> : null}
    </>
  );
}
