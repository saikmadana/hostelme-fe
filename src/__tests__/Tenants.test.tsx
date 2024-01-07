import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

import store from "../store";
import { tenants } from '../mocks/Tenants.json';
import Tenants from "../components/Tenant/Tenants";


describe("Test tenants component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve(tenants)
      })
    ) as jest.Mock;
  });

  it("should render tenants", async () => {
    await act(async () => render(
      <Provider store={store}>
        <Tenants />
      </Provider>
    ));

    const tenants = screen.getByTestId("tenants");

    expect(tenants).toBeInTheDocument();

    const tenantCards = screen.getAllByTestId("tenant-card");

    expect(tenantCards).toHaveLength(3);
  })
});