import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div>
      <p>
        This is the C route (aliased as route-3), should be nested under
        _invisible (and it is if looking at the route-C), but it's not, if
        looking at the (aliased) route-3.
      </p>
      <div style={{ paddingLeft: "1em" }}>
        <Outlet />
      </div>
    </div>
  );
}
