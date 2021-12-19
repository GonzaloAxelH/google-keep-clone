import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const WrapperModal = styled(Box)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  outline: none;
  transform: translate(-50%, -50%);
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  overflow: auto;
  z-index: 100;
`;

export default function NestedModal({
  handleCloseModal,
  openModal,
  children,
  width,
  height,
}) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <WrapperModal width={width} height={height}>
          {children}
        </WrapperModal>
      </Modal>
    </div>
  );
}
