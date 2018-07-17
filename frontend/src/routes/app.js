import DashBoard from "../views/DashBoard/DashBoard";
import Categories from "../views/Categories/Categories";
import Products from "../views/Products/Products";

const appRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Dashboard Page",
        icon: "dashboard",
        component: DashBoard
    },
    {
        path: "/categories",
        sidebarName: "Category",
        navbarName: "Category Management",
        icon: "category",
        component: Categories
    },
    {
        path: "/products",
        sidebarName: "Product",
        navbarName: "Product Management",
        icon: "business_center",
        component: Products
    },
    {
        redirect: true,
        path: "/",
        to: "/dashboard"
    }
];

export default appRoutes;
