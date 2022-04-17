import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../CounterApp";

describe("Counter component testing", () => {

  const countValue = 11;
  const initRender = () => render(<CounterApp value={countValue} />);

  beforeEach(() => {
    // Other stuff
  });

  test("Counter component should show init value", () => {
    initRender();
    expect(screen.getByText(countValue)).toBeInTheDocument();
  });

  test("Counter component should increase after click +1", async () => {
    initRender();
    const increaseButton = screen.getByText("+1");
    await fireEvent.click(increaseButton);
    expect(screen.getByText(countValue + 1)).toBeInTheDocument();
  });

  test("Counter component should decrease after click -1", async () => {
    initRender();
    const decreaseButton = screen.getByText("-1");
    await fireEvent.click(decreaseButton);
    expect(screen.getByText(countValue - 1)).toBeInTheDocument();
  });

  test("Counter component should reset after click reset", async () => {
    initRender();
    const resetButton = screen.getByText("Reset");
    const increaseButton = screen.getByText("+1");
    await fireEvent.click(increaseButton);
    await fireEvent.click(increaseButton);
    const currentValue = screen.getByRole('count-value');
    expect(+currentValue.textContent).toBeGreaterThan(countValue);
    await fireEvent.click(resetButton);
    expect(screen.getByText(countValue)).toBeInTheDocument();
  });
});
