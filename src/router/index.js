import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/views/landing";
import TheContainer from "@/containers/the-container";
import Post from "@/views/post";
import Album from "@/views/album";
import Comments from "@/views/comment";
import Photos from "@/views/photos";
import Todo from "@/views/to-do";
import Users from "@/views/users";

Vue.use(VueRouter);

const routes = [];

function configRouters() {
  return [
    {
      path: "/",
      redirect: "/landing",
      name: "",
      component: TheContainer,
      children: [
        {
          path: "landing",
          component: Landing,
        },
        {
          path: "post",
          name: "post",
          component: Post,
        },
        {
          path: "album",
          name: "album",
          component: Album,
        },
        {
          path: "comments",
          name: "comments",
          component: Comments,
        },
        {
          path: "photos",
          name: "photos",
          component: Photos,
        },
        {
          path: "todo",
          name: "todo",
          component: Todo,
        },
        {
          path: "users",
          name: "users",
          component: Users,
        },
      ],
    },
  ];
}

const router = new VueRouter({
  mode: "history",
  routes: configRouters(),
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
