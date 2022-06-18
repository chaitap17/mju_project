const routes = [
    {
        path: "/",
        name: "app",
        component: () => import("../components/Index.vue"),
    },
    {
        path: "/index2",
        name: "index2",
        component: () => import("../components/index2.vue"),
    },
];

export default routes;
