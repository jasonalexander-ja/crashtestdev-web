import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./Shared/Layout.tsx", [
        index("./routes/Home/index.tsx"),
        route("/tools/finger-box-generator", "./routes/FingerBoxCreator/index.tsx")
    ])
] satisfies RouteConfig;
