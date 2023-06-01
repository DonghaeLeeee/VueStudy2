import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListView.vue';
import HomeView from './components/HomeView.vue';
import Detail from './components/DetailView.vue';
import Author from './components/AuthorView.vue';
import Comment from './components/CommentView.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children : [
        {
            path: "author",
            component: Author,
          },
          {
            path: "comment",
            component: Comment,
          },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;