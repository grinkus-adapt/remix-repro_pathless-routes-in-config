import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/route-A">Route A</Link> (alias:{" "}
          <Link to="/route-1">Route 1</Link>)
          <ul>
            <li>
              <Link to="/route-A/route-B">Route B</Link> (alias:{" "}
              <Link to="/route-1/route-2">Route 2</Link>)
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/route-C">Route C</Link> (alias:{" "}
          <Link to="/route-3">Route 3</Link>)
          <ul>
            <li>
              <Link to="/route-C/route-D">Route D</Link> (alias:{" "}
              <Link to="/route-3/route-4">Route 4</Link>)
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
