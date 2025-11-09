import {render,screen,fireEvent} from "@testing-library/react";
import Counter from "./Counter";

test ("increment count when increment button is clicked",()=>{
    render((<Counter/>));
    const button =  screen.getByTestId(/Increment/i);
    const countDisplay = screen.getByTestId('count');

    expect(countDisplay.textContent).toBe('0');
    fireEvent.click(button);
    expect(countDisplay.textContent).toBe('1');
});