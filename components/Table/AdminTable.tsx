import Link from "next/link";
import React, { ReactChild, ReactFragment, ReactPortal, useMemo } from "react";
import styled from "styled-components";
import {
  bg_deep,
  color,
  light,
  mute,
  secondary_deep_color_100,
  secondary_deep_color_600
} from "../../constants";
import { camelCaseToSentence } from "../../helpers/string";
import { IProps } from "../../models/default_props";
import Align from "./../Align";

export interface ITableCell<T> {
  data: T;
  elements: Array<JSX.Element>;
}

export type ITableRow<T> = Map<string, ITableCell<T>>;

export interface ITableProps<T> extends IProps {
  title?: string;
  path?: string;
  data: ITableRow<T>;
}

const STable = styled.table`
  border-collapse: collapse;
  margin: 2em 0;
  font-size: 1rem;
  min-width: 400px;
  margin: auto;

  tbody tr {
    color: ${mute};
    border-bottom: 1px solid ${secondary_deep_color_100};
    cursor: pointer;
    transition: transform 1s;
  }

  tbody {
    background-color: ${secondary_deep_color_600};
    transition: background-color 0s;
  }

  tbody:hover {
    background-color: ${secondary_deep_color_100};
    transition: background-color 0s;
  }

  tr {
    background-color: ${secondary_deep_color_600};
  }

  tbody tr:nth-of-type(even) {
    background-color: ${bg_deep};
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid ${bg_deep};
  }

  td {
    color: inherit;
    padding: 1em 2em;
    font-weight: normal !important;
    transition: none;
  }

  th {
    background-color: ${bg_deep};
    color: ${color};
    text-align: left;
    padding: 1em 2em;
    width: fit-content;
    text-transform: uppercase;
  }

  tbody tr:first-child {
    color: ${mute};
    padding: 1em 2em;
    font-weight: normal !important;
    transition: none;
  }

  tr td {
    color: ${mute} !important;
  }

  tbody tr:hover {
    background-color: ${secondary_deep_color_100};
    transform: scale(1.01);
    transition: transform 0.8s;
    * {
      color: ${light} !important;
    }
    p {
      color: ${color} !important;
    }
  }
`;

export function Table<T>({ data, title, path }: ITableProps<T>) {
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
          headers.push(camelCaseToSentence(e));
        }
      }
    }

    return [headers, rows, user];
  }, [data]);

  return (
    <>
      <br />
      <br />

      <Align alignment={"center"}>
        <h2 className="text_light">{title || ""}</h2>
      </Align>
      <br />
      <br />
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
              <Link passHref={true} key={rowIndex} href={path + user}>
                <tr>
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
              </Link>
            );
          })}
        </tbody>
      </STable>
    </>
  );
}
