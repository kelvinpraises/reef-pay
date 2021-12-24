import React, { useMemo } from "react";
import styled from "styled-components";
import { ITransaction } from "../../models/transactions";
import { ITableRow, Table } from "../Table";

export interface ITransactionsData {
  transactions: Array<ITransaction>;
}

const STransactionsData = styled.section`
  padding: 3em;
`;

const SBox = styled.div`
  height: calc(100vh - 100px - 4.6rem);
  max-height: 400px;
  display: grid;
  place-items: center;
`;

export default function TransactionsData({ transactions }: ITransactionsData) {
  const { tableRows } = useMemo(() => {
    const _transactions: any = transactions.map(
      ({ amount, id, createdAt }, index) => ({
        no: index + 1,
        id,
        amount,
        date: createdAt,
      })
    );

    let count = 0;

    const tableRows: ITableRow<ITransaction> = new Map();

    for (const investment of _transactions) {
      const investmentElements: Array<JSX.Element> = Object.keys(
        investment
      ).map((investmentKey) => {
        const investmentData: ITransaction = investment[investmentKey];
        return <>{investmentData}</>;
      });

      tableRows.set(investment + count, {
        data: investment,
        elements: investmentElements,
      });

      count += 1;
    }

    return { tableRows };
  }, [transactions]);

  if (transactions.length < 1) {
    return (
      <STransactionsData>
        <SBox>
          <div>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              Hi there, you have no transactions yet.
            </h1>
            <br />
            <h5
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              Your transactions show up when they&apos;re made
            </h5>
          </div>
        </SBox>
      </STransactionsData>
    );
  } else {
    return (
      <STransactionsData>
        <Table<ITransaction> key="" data={tableRows} />
      </STransactionsData>
    );
  }
}
