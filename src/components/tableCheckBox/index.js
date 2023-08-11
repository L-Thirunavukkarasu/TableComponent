import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../customTable";
import "../customTable/customTable.css";
import { DataCheckBoxTableHeaders, DataCheckBoxTableBody } from "../../store/data";
import "./index.css";
import BtnImage from "../btnImage";

//Table checkbox component
const TableCheckBox = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="table">
      <Table>
        <Thead>
          <Tr>
            {DataCheckBoxTableHeaders?.map((head) => (
              <Th>{head}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {DataCheckBoxTableBody?.map((row) => (
            <Tr
              onClick={() => {
                const currentVal = row[0]?.value;
                const isExist =
                  selectedItems?.length > 0 &&
                  selectedItems?.includes(currentVal)
                    ? true
                    : false;
                if (!isExist) {
                  //if selected item not exist then add it
                  setSelectedItems([...selectedItems, currentVal]);
                } else {
                  //if selected item is exist then remove it
                  var array = [...selectedItems]; // make a separate copy of the array
                  var index = array.indexOf(currentVal);
                  if (index !== -1) {
                    array.splice(index, 1);
                    setSelectedItems(array);
                  }
                }
              }}
              className={
                selectedItems.includes(row[0]?.value) ? "rowHightLight" : ""
              }
            >
              {row?.map((res, index) => (
                <Td>
                  <Th>
                    <BtnImage
                      imgPath={
                        index === 0
                          ? require(!selectedItems.includes(res.value)
                              ? "../../assets/images/ic_check_box_un_selected.png"
                              : "../../assets/images/ic_check_box_selected.png")
                          : ""
                      }
                      imgSize={18}
                    />
                  </Th>
                  <Th className="rowCheckBoxTxt">{res?.value}</Th>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TableCheckBox;
