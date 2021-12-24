import React, { ReactChild, ReactFragment, ReactPortal, useMemo } from "react";
import styled from "styled-components";
import { darkBlue } from "../constant/colors";
import { IProps } from "../models/default_props";
import Link from "next/link";

export interface ITableCell<T> {
  data: T;
  elements: Array<JSX.Element>;
}

export type ITableRow<T> = Map<string, ITableCell<T>>;

export interface ITableProps<T> extends IProps {
  data: ITableRow<T>;
  url?: string;
}

const STable = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
  min-width: 400px;
  margin: auto;
  width: 100%;

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

export function Table<T>({ data, url }: ITableProps<T>) {
  const [headers, rows, id] = useMemo(() => {
    const headers: Array<string> = [];
    const rows: Array<any> = [];
    const id: Array<any> = [];

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
        if (data["id"]) id.push(data["id"]);
      }

      if (headers.length === 0) {
        for (const e of Object.keys(row!.data)) {
          headers.push(e);
        }
      }
    }

    return [headers, rows, id];
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
            if (!url) {
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
                    ) => (
                      <td key={cellIndex + rowIndex}>{cell}</td>
                    )
                  )}
                </tr>
              );
            } else {
              return (
                <Link passHref={true} href={url + id[rowIndex]}>
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
                      ) => (
                        <td key={cellIndex + rowIndex}>{cell}</td>
                      )
                    )}
                  </tr>
                </Link>
              );
            }
          })}
        </tbody>
      </STable>
    </>
  );
}
