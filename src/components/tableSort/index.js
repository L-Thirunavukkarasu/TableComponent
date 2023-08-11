import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../customTable";
import "../customTable/customTable.css";
import { DataHeading, DataBody } from "../../store/data";
import "./index.css";
import BtnImage from "../btnImage";

//Table sorting component
const TableSort = () => {
  const [updatedData, setUpdatedData] = useState(DataBody);
  const [isAscending, setIsAscending] = useState(false);
  return (
    <div className="table">
      <Table>
        <Thead>
          <Tr>
            {DataHeading?.map((head, index) => (
              <Th>
                <Th>{head}</Th>
                <Th>
                  <BtnImage
                    imgPath={
                      index === 0
                        ? require(!isAscending
                            ? "../../assets/images/ic_sort_down.png"
                            : "../../assets/images/ic_sort_up.png")
                        : index === 1
                        ? require("../../assets/images/ic_sort_neutral.png")
                        : ""
                    }
                    imgOnClick={() => {
                      //sorting the table
                      if (index === 0) {
                        //added validation to trigger the sorting for 'operator' only
                        const sortedData = updatedData.sort((a, b) => {
                          let orderDirection;
                          if (a[index]?.value < b[index]?.value) {
                            orderDirection = isAscending ? -1 : 1;
                            setIsAscending(!isAscending);
                          } else {
                            orderDirection = isAscending ? 1 : -1;
                            setIsAscending(!isAscending);
                          }
                          return orderDirection;
                        });
                        setUpdatedData(sortedData);
                      }
                    }}
                    imgSize={18}
                  />
                </Th>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {updatedData?.map((row) => (
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

export default TableSort;
