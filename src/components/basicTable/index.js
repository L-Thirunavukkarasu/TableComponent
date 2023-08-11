import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../customTable";
import "../customTable/customTable.css";
import { DataHeading, DataBody } from "../../store/data";
import "./index.css";

//Basic Table component
const TableCustom = () => {
  return (
    <div className="table">
      <Table>
        <Thead>
          <Tr>
            {DataHeading?.map((head) => (
              <Th>{head}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {DataBody?.map((row) => (
            <Tr>
              {row?.map((res) => (
                <Td>{res?.value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TableCustom;
