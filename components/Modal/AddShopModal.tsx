import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { almostBlack, darkBlue } from "../../constant/colors";
import LinkedButton from "../LinkButton";
import BaseModal from "./BaseModal";

const SSignupModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  background-color: ${darkBlue};
  border-radius: 25px;
`;

const SInput = styled.input`
  border: 2px solid #ccc;
  width: 100%;
  max-width: 288px;
  font-size: 24px;
  padding: 10px 6px;
  margin-top: 0.2em;
  border-radius: 4px;
  color: #333333;
  background-color: #f8f8f8;
`;

const Label = styled.label`
  font-size: 24px;
  color: white;
`;

export default function AddShopModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  const [id, setId] = useState("");

  const onChange = useCallback((event: any, id: string) => {
    let value = event.target.value;

    switch (id) {
      case "id":
        setId(value);
        break;

      default:
        break;
    }
  }, []);

  return (
    <BaseModal show={show} setShow={setShow} title="Deposit">
      <SSignupModal>
        <div style={{ maxWidth: 300 }}>
          <Label htmlFor="id">Shop ID</Label>
          <SInput
            type="text"
            id="id"
            onChange={(e) => onChange(e, "id")}
            value={id}
          />
          <br />
          <br />
          <LinkedButton
            href={hasShopId()}
            text="Create"
            backgroundColor={almostBlack}
          />
        </div>
      </SSignupModal>
    </BaseModal>
  );

  function hasShopId(): string {
    if (id.length < 1) {
      return "";
    } else {
      let str = id.trim();
      str = str.replace(/\s+/g, "-").toLowerCase();
      return "/checkout/new/" + str;
    }
  }
}
