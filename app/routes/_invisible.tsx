import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <div>
      <p>This is the invisible/pathless route, not nested.</p>
      <div style={{ paddingLeft: "1em" }}>
        <Outlet />
      </div>
    </div>
  );
}
