import { Day1, Day2,Day3, Sorting,QuickSort,SortingQuestion } from "../pages/index";

const publicRoutes = [
  {
    path: "/",
    component: Day1,
  },
  {
    path: "/day2",
    component: Day2,
  },
  {
    path: "/day3",
    component: Day3,
  },
  {
    path: "/sorting",
    component: Sorting,
  },
  {
    path: "/quick-sort",
    component: QuickSort,
  },
  {
    path: "/sort-misc",
    component: SortingQuestion,
  },
];

export default publicRoutes;
