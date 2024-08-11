import { Day1, Day2,Day3,Day4, Sorting,QuickSort,SortingQuestion,DSAIntro } from "../pages/index";

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
    path: "/day4",
    component: Day4,
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
  {
    path: "/dsa-introduction",
    component: DSAIntro,
  },
];

export default publicRoutes;
