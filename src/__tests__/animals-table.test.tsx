import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AnimalsTable from '@/components/business/AnimalsTable';
import { useAnimals } from '@/store/hooks/useAnimals';

// Mock the useAnimals custom hook
jest.mock('@/store/hooks/useAnimals', () => ({
  useAnimals: jest.fn(),
}));


describe('AnimalsTable', () => {
  beforeEach(() => {
    (useAnimals as jest.Mock).mockReturnValue({
      animalsList: [
        { _id: '1', name: 'Dog', age: 2, color: 'Brown' },
        { _id: '2', name: 'Cat', age: 1, color: 'Black' },
      ],
      loading: false,
      searchAnimals: jest.fn(),
    });
  });

  it('renders the search input', () => {
    render(<AnimalsTable />);
    const searchInput = screen.getByLabelText(/Search by Name:/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders table cells based on animals data', () => {
    render(<AnimalsTable />);
    const nameCell = screen.getByText('Dog');
    const ageCells = screen.getAllByText('2');
    expect(ageCells[0]).toBeInTheDocument();
    const colorCell = screen.getByText('Brown');
    expect(nameCell).toBeInTheDocument();
    expect(colorCell).toBeInTheDocument();
  });

});
