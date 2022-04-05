import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { WrapperImagenPreview } from "./ImagePreviewStyles.jsx";
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
