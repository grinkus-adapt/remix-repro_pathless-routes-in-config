import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div>
      <p>
        This is the B route (aliased as route-2), nested under A (1).
        <div style={{ paddingLeft: "1em" }}>
          <Outlet />
        </div>
      </p>
    </div>
  );
}
