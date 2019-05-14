export default [
    {
      path: "/",
      component: () => import("components/pages/main.vue"),
      meta: {
        title: "Main"
      }
    },
    {
      path: "/cart",
      component: () => import("components/pages/cart.vue"),
      meta: {
        title: "Cart"
      }
    },
    {
      path: "/products",
      component: () => import("components/pages/products.vue"),
      meta: {
        title: "Products"
      }
    },
    {
      path: "/contacts",
      component: () => import("components/pages/contacts.vue"),
      meta: {
        title: "contacts"
      }
    },
    {
        path: "/transport",
        component: () => import("components/pages/transport.vue"),
        meta: {
          title: "Transoprting"
        }
    },
    {
        path: "/portfolio",
        component: () => import("components/pages/portfolio.vue"),
        meta: {
          title: "Portfolio"
        }
    },
    {
        path: "/product",
        component: () => import("components/pages/product.vue"),
        meta: {
          title: "Product"
        }
    },
    {
        path: "/about",
        component: () => import("components/pages/about.vue"),
        meta: {
          title: "About"
        }
      },
      {
        path: "/compare",
        component: () => import("components/pages/compare.vue"),
        meta: {
          title: "Compare"
        }
      },
      {
        path: "/favorites",
        component: () => import("components/pages/favorites.vue"),
        meta: {
          title: "Favorites"
        }
      }
  ];