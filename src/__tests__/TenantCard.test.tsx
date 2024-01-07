import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TenantCard from "../components/Tenant/TenantCard";
import { tenant } from '../mocks/TenantCard.json';

describe("Test tenant card component", () => {

  it("should render tenant component", () => {
    render(<TenantCard tenant={tenant} />);
    expect(screen.getByTestId("tenant-card")).toBeInTheDocument();
  });

  it("should render tenant component data", () => {
    render(<TenantCard tenant={tenant} />);
    expect(screen.getByText(tenant.name, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(tenant.designation, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(tenant.city)).toBeInTheDocument();
    expect(screen.getByText(tenant.phone)).toBeInTheDocument();
    expect(screen.getByText(tenant.email)).toBeInTheDocument();
    expect(screen.getByText(tenant.joindate)).toBeInTheDocument();
  });

});