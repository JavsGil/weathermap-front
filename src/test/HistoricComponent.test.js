import React from "react";
import { render, screen } from "@testing-library/react";
import Historic from "../components/Historic";

describe("Historic", () => {
  const mockHistorial = [
    {
      state: "City 1",
      country: "Country 1",
      info: [
        {
          humidity: 50,
          created_at: "2023-05-27T12:00:00Z",
        },
        {
          humidity: 60,
          created_at: "2023-05-27T13:00:00Z",
        },
      ],
    },
    {
      state: "City 2",
      country: "Country 2",
      info: [
        {
          humidity: 70,
          created_at: "2023-05-27T14:00:00Z",
        },
        {
          humidity: 80,
          created_at: "2023-05-27T15:00:00Z",
        },
      ],
    },
  ];

  test("renders the city names correctly", () => {
    render(<Historic historial={mockHistorial} />);
  
    const city1Element = screen.getByText("City 1", { selector: "span.font-weight-bold" });
    const city2Element = screen.getByText("City 2", { selector: "span.font-weight-bold" });
  
    expect(city1Element).toBeInTheDocument();
    expect(city2Element).toBeInTheDocument();
  });

  test("renders the country names correctly", () => {
    render(<Historic historial={mockHistorial} />);
  
    const country1Element = screen.getByText("Country 1", { selector: "span.font-weight-bold" });
    const country2Element = screen.getByText("Country 2", { selector: "span.font-weight-bold" });
  
    expect(country1Element).toBeInTheDocument();
    expect(country2Element).toBeInTheDocument();
  });

  test("renders the humidity values correctly", () => {
    render(<Historic historial={mockHistorial} />);

    const humidity1Element = screen.getByText("50 %");
    const humidity2Element = screen.getByText("60 %");
    const humidity3Element = screen.getByText("70 %");
    const humidity4Element = screen.getByText("80 %");

    expect(humidity1Element).toBeInTheDocument();
    expect(humidity2Element).toBeInTheDocument();
    expect(humidity3Element).toBeInTheDocument();
    expect(humidity4Element).toBeInTheDocument();
  });
});
