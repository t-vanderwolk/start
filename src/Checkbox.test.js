import { fireEvent, render }  from "@testing-library/react"; 
import { Checkbox } from "./Checkbox";
test("Selecting checkbox should change the value true", () => {
    const { getLabelText } = render(<Checkbox />);
    const checkbox = getLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});