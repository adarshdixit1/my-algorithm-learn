import { Day1, Day2,Day3 } from "../pages/index";

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
];

export default publicRoutes;
