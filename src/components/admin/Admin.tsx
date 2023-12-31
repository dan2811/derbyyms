/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Admin, Resource, type LayoutProps, Layout } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppBar, TitlePortal, InspectorButton } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";
import { DayEdit, DayList, DayShow } from "./Days/Days";
import { PupilEdit, PupilList, PupilShow } from "./Pupils/Pupils";
import {
  InstrumentEdit,
  InstrumentList,
  InstrumentShow,
} from "./Instruments/instruments";
import { TeacherEdit, TeacherList, TeacherShow } from "./Teachers/Teachers";
import PianoIcon from "@mui/icons-material/Piano";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import {
  TasterCreate,
  TasterEdit,
  TasterList,
  TasterShow,
} from "./Taster/Taster";
import { useSession } from "next-auth/react";
import { Role } from "~/types";

export const MyLayout = (props: LayoutProps) => (
  <>
    <Layout {...props} appBar={MyAppBar} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);

const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <InspectorButton />
  </AppBar>
);

const AdminApp = () => {
  const session = useSession();
  if (session.status !== "authenticated") {
    return null;
  }

  const isSuperAdmin = session.data.user.role === Role.superAdmin;

  return (
    <Admin dataProvider={dataProvider("/api")} layout={MyLayout}>
      <Resource
        name="instrument"
        recordRepresentation="name"
        show={InstrumentShow}
        list={InstrumentList}
        edit={InstrumentEdit}
        icon={PianoIcon}
      />
      {isSuperAdmin ?? (
        <Resource
          name="day"
          show={DayShow}
          list={DayList}
          edit={DayEdit}
          recordRepresentation="name"
          icon={AccessTimeIcon}
        />
      )}
      <Resource
        recordRepresentation={(record) => `${record.fName} ${record.lName}`}
        name="pupil"
        show={PupilShow}
        list={PupilList}
        edit={PupilEdit}
        icon={SchoolIcon}
      />
      <Resource
        recordRepresentation={(record) => `${record.fName} ${record.lName}`}
        name="teacher"
        show={TeacherShow}
        list={TeacherList}
        edit={TeacherEdit}
        icon={GroupsIcon}
      />
      <Resource
        options={{ label: "Taster Enquiries" }}
        name="tasterEnquiry"
        show={TasterShow}
        list={TasterList}
        edit={TasterEdit}
        create={TasterCreate}
        icon={EmojiPeopleIcon}
      />
    </Admin>
  );
};

export default AdminApp;
