import Modal from "./ModalBasic";
export default function MyModalShared({ handleCloseModal, openModal }) {
  return (
    <Modal handleCloseModal={handleCloseModal} openModal={openModal}>
      Modal para la conmpartir elenmetso
    </Modal>
  );
}
