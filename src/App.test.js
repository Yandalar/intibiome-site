import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the default page", () => {
  render(<App />);
  const heroText = screen.getByText(/we're here to help/);
  expect(heroText).toBeInTheDocument();
});

test("shows menu when hover", () => {
  render(<App />);
  const navButton = screen.getByText("about us");
  fireEvent.mouseEnter(navButton);
  const aboutUsMenu = screen.getByTestId("child_navbar");
  expect(aboutUsMenu).toBeInTheDocument();
});

test("does not show menu when not hover", () => {
  render(<App />);
  const navButton = screen.getByText("about us");
  fireEvent.mouseLeave(navButton);
  const aboutUsMenu = screen.getByTestId("child_navbar");
  expect(aboutUsMenu).not.toBeVisible();
});

test("shows sidebar when menu icon is clicked", () => {
  render(<App />);
  const menuButton = screen.getByTestId("menu_button");
  fireEvent.click(menuButton);
  const aboutUsMenu = screen.getByTestId("sidebar_content");
  expect(aboutUsMenu).toBeVisible();
});

test("closes sidebar when close icon is clicked", () => {
  render(<App />);
  const menuButton = screen.getByTestId("menu_button");
  fireEvent.click(menuButton);
  const closeButton = screen.getByTestId("close_button");
  fireEvent.click(closeButton);
  const aboutUsMenu = screen.getByTestId("sidebar_content");
  expect(aboutUsMenu).not.toBeVisible();
});
