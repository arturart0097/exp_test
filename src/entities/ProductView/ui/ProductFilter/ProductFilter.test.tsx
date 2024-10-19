import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ProductFilter } from './ProductFilter';
import { productFilterReducer } from '../../slice/slice';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

const renderWithRedux = (
    component: JSX.Element,
    { initialState } = {}
) => {
    const store = configureStore({
        reducer: {
            productFilter: productFilterReducer,
        },
        preloadedState: initialState,
    });

    return render(<Provider store={store}>{component}</Provider>);
};

describe('ProductFilter', () => {
    it('renders correctly', () => {
        renderWithRedux(<ProductFilter />);

        expect(screen.getByPlaceholderText(/enter product/i)).toBeInTheDocument();
        expect(screen.getByText(/min/i)).toBeInTheDocument();
        expect(screen.getByText(/max/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/All/i)).toBeInTheDocument();
    });

    it('changes category', () => {
        renderWithRedux(<ProductFilter />);

        const select = screen.getByDisplayValue(/All/i);
        fireEvent.change(select, { target: { value: 'Electronics' } });

        expect(select.value).toBe('Electronics');
    });

    it('changes sort order to ascending', () => {
        renderWithRedux(<ProductFilter />);

        const minButton = screen.getByText(/min/i);
        fireEvent.click(minButton);

        expect(minButton).toHaveStyle('border: 1px solid #fff');
    });

    it('changes sort order to descending', () => {
        renderWithRedux(<ProductFilter />);

        const maxButton = screen.getByText(/max/i);
        fireEvent.click(maxButton);

        expect(maxButton).toHaveStyle('border: 1px solid #fff');
    });

    it('updates input value', () => {
        renderWithRedux(<ProductFilter />);

        const input = screen.getByPlaceholderText(/enter product/i);
        fireEvent.change(input, { target: { value: 'New Product' } });

        expect(input.value).toBe('New Product');
    });
});
