import {render,screen,fireEvent} from "@testing-library/react";
import Counter from "./Counter";

test ("render counter with inital value0",()=>{
    render((<Counter/>));
    const countText =  screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: 0");   
});
test ("increment count when increment button is clicked",()=>{
    render((<Counter/>));
    const button =  screen.getByTestId("increment-btn");
    fireEvent.click(button);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: 1");   
});
test ("Decrement count when decrement button is clicked",()=>{
    render((<Counter/>));
    const button =  screen.getByTestId("decrement-btn");
    fireEvent.click(button);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: -1");   
});


