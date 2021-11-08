import React from "react";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import { secondary_deep_color_100, secondary_deep_color_400 } from "../../constants";
import Card from "../Card";

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

const ModalContent = styled(Card)`
  width: 500px;
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
    background-color: ${secondary_deep_color_400};
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
        <ModalContent hover={false}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <SClose>
              <RiCloseLine
                style={{ fill: "#8ca1ad" }}
                onClick={() => setShow(!show)}
                size="32"
              />
            </SClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </div>
    </Modal>
  );
}
