import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from '../components/FormComponent';

describe('FormComponent', () => {
  const mockHandleSearchSubmit = jest.fn();
  const mockHandleSearchChange = jest.fn();
  const mockHandleLinkClick = jest.fn();
  const mockLoading = true;
  const mockShowLink = true;
  const mockSearchValue = 'test';

  beforeEach(() => {
    render(
      <FormComponent
        handleSearchSubmit={mockHandleSearchSubmit}
        handleSearchChange={mockHandleSearchChange}
        handleLinkClick={mockHandleLinkClick}
        loading={mockLoading}
        showLink={mockShowLink}
        searchValue={mockSearchValue}
      />
    );
  });

  it('renders the form inputs and button', () => {
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
  });

  it('calls handleSearchSubmit when the form is submitted', () => {
    fireEvent.submit(screen.getByRole('button', { name: 'Buscar' }));

    expect(mockHandleSearchSubmit).toHaveBeenCalled();
  });

  it('calls handleSearchChange when the input value changes', () => {
    const input = screen.getByPlaceholderText('Buscar');

    fireEvent.change(input, { target: { value: 'new value' } });

    expect(mockHandleSearchChange).toHaveBeenCalled();
  });

  it('calls handleLinkClick when the "Recientes" link is clicked', () => {
    const link = screen.getByRole('link', { name: 'Recientes' });

    fireEvent.click(link);

    expect(mockHandleLinkClick).toHaveBeenCalled();
  });

  it('disables the submit button when loading is true or searchValue is empty', () => {
    const submitButton = screen.getByRole('button', { name: 'Buscar' });

    expect(submitButton).toBeDisabled();
  });
});
