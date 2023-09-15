There's an issue where there's no way to reference the `_invisible` route when [setting up routes in remix.config.js](https://github.com/grinkus-adapt/remix-repro_pathless-routes-in-config/blob/main/remix.config.js#L17), and because of that it's impossible to nest routes under pathless segments if setting them up programmatically.

---

This is fine (`route-A` displays correctly):

![image](https://github.com/grinkus-adapt/remix-repro_pathless-routes-in-config/assets/12794717/b1069db2-c242-4ef8-8047-14f7dc300dd2)

This is also fine (alias `route-1` for `route-A` works correctly):

![image](https://github.com/grinkus-adapt/remix-repro_pathless-routes-in-config/assets/12794717/9a4de99c-333f-41e4-beb2-d4263adbfa30)

This is also fine (`route-C` displays correctly (is nested under `_invisible` route)):

![image](https://github.com/grinkus-adapt/remix-repro_pathless-routes-in-config/assets/12794717/ea75a9b5-398d-4ede-bc41-c18ff4bebfb3)

This is **wrong** (alias `route-3` for `route-C` **is not** nested under the `_invisible` route):

![image](https://github.com/grinkus-adapt/remix-repro_pathless-routes-in-config/assets/12794717/b6d0de17-ef8b-4a2b-85aa-fde3bd945cf5)
