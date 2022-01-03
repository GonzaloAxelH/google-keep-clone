import Modal from "./ModalBasic";
import styled from "styled-components";

const ModalConfigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 1em 0;
  }
`;

export default function MyModalConfig({ handleCloseModal, openModal }) {
  return (
    <Modal
      handleCloseModal={handleCloseModal}
      openModal={openModal}
      width="300px"
      height="96vh"
    >
      <ModalConfigWrapper>
        <h3>Configuracion</h3>
      </ModalConfigWrapper>
    </Modal>
  );
}
