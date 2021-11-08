import React, { ReactChild, ReactFragment, ReactPortal, useMemo } from "react";
import styled from "styled-components";
import { darkBlue } from "../constant/colors";
import { IProps } from "../models/default_props";

export interface ITableCell<T> {
  data: T;
  elements: Array<JSX.Element>;
}

export type ITableRow<T> = Map<string, ITableCell<T>>;

export interface ITableProps<T> extends IProps {
  data: ITableRow<T>;
}

const STable = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
  min-width: 400px;
  margin: auto;

  tbody tr {
    color: white;
    cursor: pointer;
    transition: transform 1s;
  }

  tbody {
    transition: background-color 0s;
  }

  tbody tr:nth-of-type(even) {
    background-color: ${darkBlue};
  }

  td {
    color: inherit;
    padding: 1em 2em;
    font-weight: normal;
    transition: none;
  }

  th {
    background-color: ${darkBlue};
    color: white;
    text-align: left;
    padding: 1em 2em;
    width: fit-content;
    text-transform: uppercase;
  }

  tbody tr:first-child {
    color: white;
    padding: 1em 2em;
    font-weight: normal;
    transition: none;
  }

  tr td {
    color: white;
  }
`;

export function Table<T>({ data }: ITableProps<T>) {
  const [headers, rows, user] = useMemo(() => {
    const headers: Array<string> = [];
    const rows: Array<any> = [];
    let user: any;

    const keys = data.keys();

    let isLooping = true;

    while (isLooping) {
      const key = keys.next();
      if (key.done) {
        isLooping = false;
        // return;
      }
      const row = data.get(key.value);
      if (row) rows.push(row.elements);
      if (row) {
        const data: any = row.data;
        user = data.user;
      }

      if (headers.length === 0) {
        for (const e of Object.keys(row!.data)) {
          headers.push(e);
        }
      }
    }

    return [headers, rows, user];
  }, [data]);

  return (
    <>
      <STable>
        <thead>
          <tr>
            {headers.map((e) => (
              <th key={e}>{e}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map(
                  (
                    cell:
                      | boolean
                      | ReactChild
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined,
                    cellIndex: number
                  ) => {
                    return <td key={cellIndex + rowIndex}>{cell}</td>;
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </STable>
    </>
  );
}
