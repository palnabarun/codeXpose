import CreateUser from "../screens/createUser";
import CreateTest from "../screens/createTest";
import ViewUsers from "../screens/viewUsers";
import ViewTests from "../screens/viewTests";
import ViewQuestions from "../screens/viewQuestions";
import CreateQuestion from "../screens/createQuestion";
import Dashboard from "../screens/dashboard";
import ScheduleTest from "../screens/testMapping";

export const interviewerRoutes = [
  { path: "/create_user/", component: CreateUser },
  { path: "/create_test/", component: CreateTest },
  { path: "/view_users/", component: ViewUsers },
  { path: "/view_tests/", component: ViewTests },
  { path: "/view_questions/", component: ViewQuestions },
  { path: "/create_question/", component: CreateQuestion },
  { path: "/dashboard/", component: Dashboard },
  { path: "/schedule_test/", component: ScheduleTest }
];
