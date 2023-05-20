import AllUsers from "../../components/AllUsers";
import Cottages from "../../components/BuildingTypes/Cottages";
import LuxaryRooms from "../../components/BuildingTypes/LuxaryRooms";
import OrdnaryRooms from "../../components/BuildingTypes/OrdnaryRooms";
import SecondBuilding from "../../components/Buildings/SecondBuilding";

import EmptyPlaces from "../../components/EmptyPlaces";
import HalfTime from "../../components/HalfTime";
import Home from "../../components/Home";
import Reports from "../../components/ReportsPage";
import TimeUp from "../../components/TimeUp";

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
        path: "ordnary-rooms/2",
        element: <SecondBuilding />,
      },
      { id: "4-2", path: "luxary-rooms", element: <LuxaryRooms /> },
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
