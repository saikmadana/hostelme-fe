import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

import RoomCard from "../components/Room/RoomCard";
import MOCKDATA from '../mocks/RoomCard.json';

describe('Test Room Card Component', () => {
  it("should render room card", () => {
    render(<RoomCard room={MOCKDATA} />);
    expect(screen).toMatchSnapshot();
  });

  it("should render room card data", () => {
    render(<RoomCard room={MOCKDATA} />);
    expect(screen.getByText("Room Number:")).toBeInTheDocument();
    expect(screen.getByText(MOCKDATA.id)).toBeInTheDocument();
    expect(screen.getByText("Rent:")).toBeInTheDocument();
    expect(screen.getByText(MOCKDATA.rent)).toBeInTheDocument();
    expect(screen.getByText("Room Type:")).toBeInTheDocument();
    expect(screen.getByText(MOCKDATA.type)).toBeInTheDocument();
    expect(screen.getByText("Sharing:")).toBeInTheDocument();
    expect(screen.getByText(MOCKDATA.sharing)).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText(MOCKDATA.desc)).toBeInTheDocument();
  });
});