import { render } from "@testing-library/react";
import FirstApp from "../FirstComponent";

describe('First component testing', () => { 
    test('First component should show "Holardo"', () => { 
        const greetingExpected = 'Holardo';
        // const wrapper = render(< FirstApp greeting={ greetingExpected } />);
        const { getByText } = render(< FirstApp greeting={ greetingExpected } />);
        expect( getByText(greetingExpected) ).toBeInTheDocument();
    });
});