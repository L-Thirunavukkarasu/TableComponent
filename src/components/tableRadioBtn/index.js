import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../customTable";
import "../customTable/customTable.css";
import { DataRadioTableHeaders, DataRadioTableBody } from "../../store/data";
import "./index.css";
import BtnImage from "../btnImage";

//Table radio btn component
const TableRadioBtn = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="table">
      <Table>
        <Thead>
          <Tr>
            {DataRadioTableHeaders?.map((head) => (
              <Th>{head}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {DataRadioTableBody?.map((row) => (
            <Tr
              onClick={() => {
                setSelectedItem(row[0]?.value);
              }}
              className={selectedItem === row[0]?.value ? "rowHightLight" : {}}
            >
              {row?.map((res, index) => (
                <Td>
                  <Th>
                    <BtnImage
                      imgPath={
                        index === 0
                          ? require(selectedItem !== res.value
                              ? "../../assets/images/ic_un_checked.png"
                              : "../../assets/images/ic_checked.png")
                          : ""
                      }
                      imgSize={18}
                    />
                  </Th>
                  <Th className={"rowRadioTxt"}>{res?.value}</Th>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TableRadioBtn;
