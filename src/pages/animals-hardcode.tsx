import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";


const nodes = [
  {
    id: '0',
    name: 'cat',
    age: "12",
    color: "red"
  }
];


const Component = () => {
  let data = {
    nodes
  };

  const theme = useTheme(getTheme());

  const [search, setSearch] = React.useState("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const COLUMNS = [
    { label: "Name", renderCell: (item: any) => item.name },
    { label: "Age", renderCell: (item: any) => item.age },
    { label: "Color", renderCell: (item: any) => item.color },
    { label: "Id", renderCell: (item: any) => item?.id },
    { label: "DocId", renderCell: (item: any) => item?.documentId }
  ];

  return (
    <>
      <div style={{
        // backgroundColor: 'red',
        padding: '10vw'
      }}>
        <div style={{
          // backgroundColor: 'blue',
          borderWidth: "2px",
          borderRadius: '20px',
          borderColor: 'black',
          padding: '5vw'
        }}>
            <label htmlFor="search">
              Search by Task:&nbsp;
              <input id="search" style={{
                // backgroundColor: 'blue',
                borderWidth: "1px",
                borderRadius: '5px',
                borderColor: 'black',
                // padding: '5vw'
              }} type="text" value={search} onChange={handleSearch} />
            </label>

          <br />

          <CompactTable columns={COLUMNS} data={data} theme={theme} />
        </div>
      </div>

    </>
  );
};

export default Component;
