import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';  // Make sure to adjust this import according to your project's folder structure

describe('Header', () => {
  it('renders the header with expected text', () => {
    const { container } = render(<Header />);

    const title = screen.getByRole('heading', {
      name: /Animals React Example/i,
    });
    const subtitle = screen.getByText(/We love Animals/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    expect(title.tagName.toLowerCase()).toEqual('h1');

    expect(container).toMatchSnapshot();
  });
});



// import { render, screen } from '@testing-library/react'
// import Header from '@components/Header'  // adjust import as per your folder structure
//
// describe('Header', () => {
//   it('renders a heading', () => {
//     render(<Header />)
//
//     const heading = screen.getById("header-title")
//
//     expect(heading).toBeInTheDocument()
//   })
// })
