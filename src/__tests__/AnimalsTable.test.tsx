import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import AnimalsTable from "@/components/business/AnimalsTable";
import { AnimalType, setAnimalsList } from "@/store/state/animals";
import { store } from "@/store";


describe("AnimalsTable Component", () => {

  beforeEach(() => {

    const animalsMock: AnimalType[] = [
      { _id: "1", name: "Dog", age: 2, color: "Brown" },
      { _id: "2", name: "Cat", age: 3, color: "Red" }
    ];

    store.dispatch(setAnimalsList(animalsMock));
  });

  it("should render 2 rows", async () => {
      render(
        <Provider store={store}>
          <AnimalsTable />
        </Provider>
      );

      // Wait for table to render and use query to find rows
      await waitFor(() => {
        const table = screen.getByTestId("animals-table");
        const rows = table.querySelectorAll("tbody tr");
        expect(rows.length).toBe(2); // Assertion for 2 table rows
      });

  });

  it("renders the search input", () => {
      render(
        <Provider store={store}>
          <AnimalsTable />
        </Provider>
      );
      const searchInput = screen.getByLabelText(/Search by Name:/i);
      expect(searchInput).toBeInTheDocument();

  });
});
