import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { SignInContainer } from "./SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls the onSubmit function with correct arguments", async () => {
      const signInMock = jest.fn().mockResolvedValue({
        data: { authenticate: { accessToken: "token" } },
      });
      const navigateMock = jest.fn();

      render(<SignInContainer signIn={signInMock} navigate={navigateMock} />);

      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");

      fireEvent.press(screen.getByText("Sign In"));

      await waitFor(
        () => {
          expect(signInMock).toHaveBeenCalledTimes(1);

          expect(signInMock.mock.calls[0][0]).toEqual({
            username: "kalle",
            password: "password",
          });
        },
        { timeout: 3000 },
      );

      await waitFor(
        () => {
          expect(navigateMock).toHaveBeenCalledWith("/");
        },
        { timeout: 3000 },
      );
    });
  });
});
