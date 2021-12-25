import React, { useMemo } from "react";
import styled from "styled-components";
import { ICheckout } from "../../models/checkout";
import { ITableRow, Table } from "../Table";

export interface ICheckoutData {
  shops: Array<ICheckout>;
}

const SCheckoutData = styled.section`
  padding: 3em;
`;

export default function CheckoutData({ shops }: ICheckoutData) {
  const { tableRows } = useMemo(() => {
    const _shops: any = shops.map(({ items, id, createdAt }) => ({
      id,
      "items in shop": items,
      "date created": createdAt,
    }));

    let count = 0;

    const tableRows: ITableRow<ICheckout> = new Map();

    for (const shop of _shops) {
      const shopElements: Array<JSX.Element> = Object.keys(shop).map(
        (shopKey) => {
          const shopData: ICheckout = shop[shopKey];
          return <>{shopData}</>;
        }
      );

      tableRows.set(shop + count, {
        data: shop,
        elements: shopElements,
      });

      count += 1;
    }

    return { tableRows };
  }, [shops]);

  return (
    <SCheckoutData>
      <Table<ICheckout> key="" data={tableRows} url="checkout/" />
    </SCheckoutData>
  );
}
