import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityPage from './page';

describe('CommunityPage', () => {
  it('renders the heading', () => {
    render(<CommunityPage />);
    const heading = screen.getByRole('heading', { name: /Community Hub/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    render(<CommunityPage />);
    const welcomeMessage = screen.getByText(/Welcome to Our Community!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the "Get Involved" link', () => {
    render(<CommunityPage />);
    const getInvolvedLink = screen.getByRole('link', { name: /Get Involved/i });
    expect(getInvolvedLink).toBeInTheDocument();
    expect(getInvolvedLink).toHaveAttribute('href', '#'); // Placeholder link
  });

  it('renders the "Learn More" link', () => {
    render(<CommunityPage />);
    const learnMoreLink = screen.getByRole('link', { name: /Learn More/i });
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '#'); // Placeholder link
  });
});
