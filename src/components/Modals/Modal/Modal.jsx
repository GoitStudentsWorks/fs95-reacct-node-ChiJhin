import ReactModal from 'react-modal';
import css from './Modal.module.css';

// Set the app element for screen reader accessibility
ReactModal.setAppElement('#root');

export default function Modal({ styleVariant, isOpen, closeModal, children }) {
  // Helper function to retrieve specific styles based on styleVariant
  // function getModalStyles(variant) {
  //   switch (variant) {
  //     case 'modalSetting':
  //       //return css.modalSetting;
  //       return {
  //         height: '1302px',
  //       };
  //     case 'modalDelete':
  //     //return css.modalDelete;

  //     case 'modalLogOut':
  //     //return css.modalLogOut;

  //     default:
  //       return {}; //Default to empty string if styleVariant not found
  //   }
  // }

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(100, 100, 100, 0.55)',
    },
    // content: {
    //   inset: 'inherit',
    //   ...getModalStyles(styleVariant),
    // },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
      className={css[styleVariant]}
    >
      {children}
      <button type="button" className={css.closeBtn} onClick={closeModal}>
        x
      </button>
    </ReactModal>
  );
}
