import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import { LoginForm } from "../LoginForm";

describe("LoginPage", () => {
  it("receives mocked GET", async () => {
    render(<LoginForm />);
    let cookie;
    await waitFor(() => {
      expect(screen.queryByText("Jimbo34", { exact: false })).toBeOnTheScreen();
    });
  });

  it("sends request to mocked POST and displays mocked data", async () => {
    render(<LoginForm />);
    fireEvent.changeText(
      screen.getByPlaceholderText("Enter username"),
      "Ned55"
    );
    fireEvent.press(screen.getByText("Submit"));
    await waitFor(() => {
      expect(screen.queryByText("John Maverick")).toBeOnTheScreen();
      expect(screen.queryByText("Ned55")).toBeOnTheScreen();
    });
  });
});
