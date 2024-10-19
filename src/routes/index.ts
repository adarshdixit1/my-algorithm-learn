import { publicRoutesConst } from "../constant";
import { Day1, Day2,Day3,Day4, Sorting,QuickSort,SortingQuestion,DSAIntro } from "../pages/index";

const publicRoutes = [
  {
    path: publicRoutesConst.day1,
    component: Day1,
  },
  {
    path: publicRoutesConst.day2,
    component: Day2,
  },
  {
    path: publicRoutesConst.day3,
    component: Day3,
  },
  {
    path: publicRoutesConst.day4,
    component: Day4,
  },
  {
    path: publicRoutesConst.SORTING,
    component: Sorting,
  },
  {
    path: publicRoutesConst.QUICK_SORT,
    component: QuickSort,
  },
  {
    path:publicRoutesConst.Sorting_Question,
    component: SortingQuestion,
  },
  {
    path: publicRoutesConst.DSA_Intro,
    component: DSAIntro,
  },
];

export default publicRoutes;
