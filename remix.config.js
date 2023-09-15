/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/route-1", "routes/route-A.tsx", { id: "/route-1" }, () => {
        route("route-2", "routes/route-A.route-B.tsx", {
          id: "/route-1/route-2",
        });
      });

      route(
        "/route-3",
        "routes/_invisible.route-C.tsx",
        { id: "/route-3" },
        () => {
          route("route-4", "routes/_invisible.route-C.route-D.tsx", {
            id: "/route-3/route-4",
          });
        }
      );
    });
  },
};
