import {createRouter, createWebHashHistory} from "vue-router";

const hashRouter = createWebHashHistory()

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Tab from './views/TabDoc.vue'
import Switch from './views/SwitchDoc.vue'
import Button from './views/ButtonDoc.vue'
import Introduce from './views/IntroduceDoc.vue'
import Fast from './views/FastDoc.vue'
import Use from './views/UseDoc.vue'
import FindQuestion from "./views/FindQuestion.vue";
import Modal from './views/ModalDoc.vue'
import Table from './views/TableDoc.vue'
import CheckboxDoc from "./views/CheckboxDoc.vue"
import FormDoc from "./views/FormDoc.vue"
import carouselDoc from "./views/carouselDoc.vue"
import treeDoc from "./views/treeDoc.vue"

import NavDoc from "./views/NavDoc.vue";
import UploadDoc from "./views/UploadDoc.vue";
import ScrollDoc from "./views/ScrollDoc.vue";
import DatePickerDoc from "./views/DatePickerDoc.vue";
import VLoadingDoc from "./views/VLoadingDoc.vue";
import TableSearchDoc from "./views/TableSearchDoc.vue";


const router = createRouter({
  history: hashRouter,
  linkActiveClass: "link-active",
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "introduce", component: Introduce },
        { path: "fast", component: Fast },
        { path: "use", component: Use },
        { path: "find-question", component: FindQuestion },
        { path: "tab", component: Tab },
        { path: "switch", component: Switch },
        { path: "button", component: Button },
        { path: "modal", component: Modal },
        { path: "table", component: Table },
        { path: "checkbox", component: CheckboxDoc },
        { path: "form", component: FormDoc },
        { path: "carousel", component: carouselDoc },
        { path: "tree", component: treeDoc },

        { path: "nav", component: NavDoc },
        { path: "upload", component: UploadDoc },
        { path: "scroll", component: ScrollDoc },
        { path: "v-loading", component: VLoadingDoc },
        { path: "date-picker", component: DatePickerDoc },
        { path: "table-search", component: TableSearchDoc },
      ],
    },
  ],
});

export {
  router
}
