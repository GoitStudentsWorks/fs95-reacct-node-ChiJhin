import Modal from 'react-modal';
import css from './Modal.module.css';

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(100, 100, 100, 0.55)',
  },
};

export default function Modals({ styleVariant, isOpen, closeModal, children }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css[styleVariant]}
      >
        {children}
        <button type="button" className={css.closeBtn} onClick={closeModal}>
          x
        </button>
      </Modal>
    </>
  );
}
