import styled from "styled-components";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const WrapperImagenPreview = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background: transparent;
  object-fit: contain;

  img {
    border: 1px solid rgb(218, 220, 224);
    box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
    -webkit-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
    -moz-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
    border-radius: 5px;

    max-width: 677px;
    object-fit: contain;
  }
  .delete-btn-image {
    width: 24px;
    height: 24px;
    background: #fff;
    dispaly: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: -10px;
    cursor: pointer;
    top: -10px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export default function ImagePreview({ url, id, onDeleteImage }) {
  return (
    <WrapperImagenPreview>
      <img src={url} alt="" />
      <div className="delete-btn-image" onClick={() => onDeleteImage(id)}>
        <CancelOutlinedIcon />
      </div>
    </WrapperImagenPreview>
  );
}
