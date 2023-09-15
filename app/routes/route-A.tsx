import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div>
      <p>This is the A route (aliased as route-1), not nested.</p>
      <div style={{ paddingLeft: "1em" }}>
        <Outlet />
      </div>
    </div>
  );
}
