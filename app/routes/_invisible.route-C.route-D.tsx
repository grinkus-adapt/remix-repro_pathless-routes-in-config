import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div>
      <p>This is the D route (aliased as route-4), nested under C (3).</p>
      <div style={{ paddingLeft: "1em" }}>
        <Outlet />
      </div>
    </div>
  );
}
