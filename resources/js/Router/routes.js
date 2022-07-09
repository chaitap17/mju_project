const routes = [
    {
        path: "/",
        name: "app",
        component: () => import("../components/Index.vue"),
    },
    {
        path: "/personnel",
        name: "personnel",
        component: () => import("../Components/personnel.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../Components/login.vue"),
    },
    {
        path: "/persom",
        name: "persom",
        component: () => import("../Components/persom.vue"),
    },
];

export default routes;
