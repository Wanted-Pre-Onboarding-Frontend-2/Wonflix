import React from 'react';

const ModalStateContext = React.createContext({
  isOpen: false,
  modalData: {},
});

const ModalModifyContext = React.createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const openModal = ({ children, onCancel, onSubmit }) => {
    setIsOpen(true);
    setModalData({
      children,
      onCancel,
      onSubmit,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData({});
  };

  return (
    <ModalStateContext.Provider value={{ isOpen, modalData }}>
      <ModalModifyContext.Provider value={{ openModal, closeModal }}>{children}</ModalModifyContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = () => {
  const state = React.useContext(ModalStateContext);
  return state;
};

export const useModifyModal = () => {
  const modify = React.useContext(ModalModifyContext);
  return modify;
};
