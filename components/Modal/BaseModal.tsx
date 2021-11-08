import React from "react";
// import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import { almostBlack } from "../../constant/colors";

interface IModal {
  show: boolean;
  title: string;
  children: any;
  setShow: any;
}

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  max-width: 500px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  color: black;
`;

const ModalBody = styled.div``;

const SClose = styled.div`
  background-color: transparent;
  border-radius: 50%;
  min-width: 50px;
  min-height: 50px;
  display: grid;
  place-items: center;

  :hover {
    background-color: ${almostBlack};
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
  }
`;

export default function BaseModal({ show, setShow, title, children }: IModal) {
  if (!show) {
    return null;
  }

  return (
    <Modal onClick={() => setShow(!show)}>
      <div onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <SClose onClick={() => setShow(!show)}>close</SClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </div>
    </Modal>
  );
}
