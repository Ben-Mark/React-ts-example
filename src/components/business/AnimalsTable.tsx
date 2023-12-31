import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useEffect, useState } from "react";
import { useAnimals } from "@/store/hooks/useAnimals";
import { AnimalType } from "@/store/state/animals";


export default function AnimalsTable() {

  const theme = useTheme(getTheme());
  const [search, setSearch] = React.useState("");
  const { animalsList, loading, searchAnimals } = useAnimals();
  const [animalsData, setAnimalsData] = useState<{ nodes: AnimalType[] }>({
    nodes: []
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    const _animalsData: AnimalType[] = animalsList.map((animal: AnimalType, index: number) => {
      return {
        id: index,
        documentId: animal._id,
        name: animal.name,
        age: animal.age,
        color: animal.color
      };
    });
    setAnimalsData({
      nodes: _animalsData
    });

  }, [animalsList, loading]);


  const handleSearch = (event: any) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    searchAnimals(searchValue);
  };


  const COLUMNS = [
    { label: "Name", renderCell: (item: AnimalType) => item.name },
    { label: "Age", renderCell: (item: AnimalType) => item.age },
    { label: "Color", renderCell: (item: AnimalType) => item.color },
    { label: "Id" ,renderCell: (item: AnimalType) => item?._id },
  ];


  return (
    <>
      <div style={{
        paddingTop: '4vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw'
      }}>
        <div style={{
          // backgroundColor: 'blue',
          borderWidth: "2px",
          borderRadius: "20px",
          borderColor: "black",
          padding: "2vw"
        }}>
          <label htmlFor="search" style={{ paddingRight: '1vw'}}>
            Search by Name:
          </label>
          <input
            id="search"
            style={{
              // backgroundColor: 'blue',

              borderWidth: "1px",
              borderRadius: "5px",
              borderColor: "black"
              // padding: '5vw'
            }}
            type="text"
            value={search}
            onChange={handleSearch}
          />
          <br />
          <div data-testid="animals-table">
            <CompactTable
              columns={COLUMNS}
              data={animalsData}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </>
  );
};
