import { useLocation } from "react-router-dom";
import AllUsers from "../../components/AllUsers";
import Cottages from "../../components/BuildingTypes/Cottages";
import LuxaryRooms from "../../components/BuildingTypes/LuxaryRooms";
import OrdnaryRooms from "../../components/BuildingTypes/OrdnaryRooms";
import FourthBuilding from "../../components/Buildings/FourthBuilding";
import SecondBuilding from "../../components/Buildings/SecondBuilding";

import EmptyPlaces from "../../components/EmptyPlaces";
import HalfTime from "../../components/HalfTime";
import Home from "../../components/Home";
import Reports from "../../components/ReportsPage";
import TimeUp from "../../components/TimeUp";
import SixthBuilding from "../../components/Buildings/SixthBuilding";
import ThirdBuilding from "../../components/Buildings/ThirdBuilding";
import FifthBuilding from "../../components/Buildings/FifthBuilding";

export const paths = [
  {
    id: 0,
    path: "/",
    element: <Home />,
  },
  {
    id: 1,
    path: "/all-users",
    element: <AllUsers />,
  },
  {
    id: 2,
    path: "/time-up",
    element: <TimeUp />,
  },
  {
    id: 3,
    path: "/half-time",
    element: <HalfTime />,
  },
  {
    id: 4,
    path: "/empty-places",
    element: <EmptyPlaces />,
    hasChild: true,
    children: [
      {
        id: "4-1",
        path: "ordnary-rooms",
        element: <OrdnaryRooms />,
        hasChild: true,
        children: [
          {
            id: "4-1-1",
            path: "2",
            element: <SecondBuilding />,
          },
          {
            id: "4-1-2",
            path: "4",
            element: <FourthBuilding />,
          },
          {
            id: "4-1-3",
            path: "6",
            element: <SixthBuilding />,
          },
        ],
      },
      {
        id: "4-2",
        path: "luxary-rooms",
        element: <LuxaryRooms />,
        hasChild: true,
        children: [
          {
            id: "5-1-1",
            path: "3",
            element: <ThirdBuilding />,
          },
          {
            id: "4-1-2",
            path: "5",
            element: <FifthBuilding />,
          },
        ],
      },
      {
        id: "4-3",
        path: "cottages",
        element: <Cottages />,
      },
    ],
  },

  {
    id: 5,
    path: "/reports",
    element: <Reports />,
  },
];
