
// @mui material components
import Icon from "@mui/material/Icon";

// Pages

import ContactUs from "layouts/pages/landing-pages/contact-us";
import Agent from "./pages/LandingPages/Agent/index"
import LoanApplication from "./pages/LandingPages/LoanApplication/index"

import BanquierIndex from "pages/LandingPages/Banquier/BanquierIndex";
import Dashboard from "pages/LandingPages/Client/Dashboard";
import Presentation from "layouts/pages/presentation";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
/* import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography"; */
const routes = [
 /*{
    name: "Acceuil",
    icon: <Icon>dashboard</Icon>,
    route: "/",
    component: <Presentation />
<<<<<<< HEAD
  }, */
=======



    /*collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],*/
  },
>>>>>>> master
  {
    name: "Demande de crédit",
    icon: <Icon>view_day</Icon>,
    route: "/pages/LandingPages/LoanApplication/index",
    component: <LoanApplication />,

  },
  {
    name: "Se connecter",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Espace Client",
        route: "/dashboardC",
        component: <Dashboard />,

      },
      {
        name: "Espace Agent",
        route: "/Agent",
        component: <Agent />,

      },
      {
        name: "Espace Banquier",
        route: "/Dashboard", 
        component:<BanquierIndex />
      },
    ],
  },
  {
    name: "Simuler votre crédit",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />
  },
];

export default routes;
