import Modal from "./ModalBasic";
import styled from "styled-components";

const ModalUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 1em 0;
  }
`;

export default function MyModalUserInfo({ handleCloseModal, openModal }) {
  return (
    <Modal
      handleCloseModal={handleCloseModal}
      openModal={openModal}
      width="300px"
      height="96vh"
    >
      <ModalUserInfoWrapper>
        <h3>User</h3>
      </ModalUserInfoWrapper>
    </Modal>
  );
}
