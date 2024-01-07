import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../store";

import Rooms from "../components/Room/Rooms";
import { rooms } from '../mocks/Rooms.json';

describe('Test Rooms Component', () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(rooms),
      })
    ) as jest.Mock;
  })

  it('should render rooms', async () => {
    await act(async () => render(
      <Provider store={store}>
        <Rooms />
      </Provider>
    ));

    const rooms = screen.getByTestId("rooms");
    
    expect(rooms).toBeInTheDocument();

    const roomCards = screen.getAllByTestId("room-card");

    expect(roomCards).toHaveLength(3);
  });

});