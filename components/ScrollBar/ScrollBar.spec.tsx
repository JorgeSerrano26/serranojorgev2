import { render, screen } from '@testing-library/react';
import ScrollBar from './ScrollBar';

describe('ScrollBar', () => {
    // Tests that the ScrollBar component renders without errors.
    it("test_scroll_bar_renders_without_errors", () => {
        const { container } = render(<ScrollBar />);
        expect(container).toMatchSnapshot();
    });

    // Tests that the function handles the edge case where the scrollable height is 0.
    it("test_scrollable_height_is_0", () => {
        Object.defineProperty(document.documentElement, 'scrollHeight', { value: 0, configurable: true });
        
        window.innerHeight = 500;
        const { container } = render(<ScrollBar />);

        const scrollBar = container.querySelector('span');

        expect(scrollBar?.style.width).toBe('0.01%');
    });

    // Tests that the function handles the edge case where the window height is 0.
    it("test_window_height_is_0", () => {
        Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true });
        window.innerHeight = 0;
        const {container} = render(<ScrollBar />);
        const scrollBar = container.querySelector('span');
        expect(scrollBar?.style.width).toBe('0.01%');
    });

    // Tests that the width state is set to 100 when the user has scrolled to the bottom of the page.
    it.skip("test_width_state_is_set_to_100_when_scrolled_to_bottom", () => {
        Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true });

        window.innerHeight = 500;
        window.scrollY = 500;
        const { container } = render(<ScrollBar />);
        const scrollBar = container.querySelector('span');
        expect(scrollBar?.style.width).toBe('100%');
    });

    // Tests that the function handles the edge case where the scrolled height is negative.
    it("test_scrolled_height_is_negative", () => {
        Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true });

        window.innerHeight = 500;
        window.scrollY = -100;
        const { container } = render(<ScrollBar />);
        const scrollBar = container.querySelector('span');
        expect(scrollBar?.style.width).toBe('0.01%');
    });
}); 