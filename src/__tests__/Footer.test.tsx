import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';  // Make sure to adjust this import according to your project's folder structure

describe('Footer', () => {
  it('renders the footer with expected elements', () => {
    const { container } = render(<Footer />);

    // Check copyright text
    const copyrightText = screen.getByText(/© 2023 Animals App/i);
    expect(copyrightText).toBeInTheDocument();

    // Check Privacy Policy link
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(privacyPolicyLink.closest('a')).toHaveAttribute('href', '/privacy');

    // Check Terms of Service link
    const termsOfServiceLink = screen.getByText(/Terms of Service/i);
    expect(termsOfServiceLink).toBeInTheDocument();
    expect(termsOfServiceLink.closest('a')).toHaveAttribute('href', '/terms');

    // Check About Us link
    const aboutUsLink = screen.getByText(/About Us/i);
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink.closest('a')).toHaveAttribute('href', '/about');

    // Optional: Check for snapshot matching
    expect(container).toMatchSnapshot();
  });
});
