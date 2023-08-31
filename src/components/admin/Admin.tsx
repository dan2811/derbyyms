/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Admin,
  Resource,
  List,
  TextField,
  useRecordContext,
  type LayoutProps,
  Show,
  Layout,
  DatagridConfigurable,
  SimpleShowLayout,
} from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { getDataProvider } from "./dataprovider";
import { AppBar, TitlePortal, InspectorButton } from "react-admin";
import { api } from "~/utils/api";

export const MyLayout = (props: LayoutProps) => (
  <>
    <Layout {...props} appBar={MyAppBar} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);

const UserList = () => {
  return (
    <List>
      <DatagridConfigurable rowClick="show" omit={["id"]}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="fName" />
        <TextField source="lName" />
        <TextField source="description" />
      </DatagridConfigurable>
    </List>
  );
};

const UserShow = () => {
  const record = useRecordContext();
  console.log(record);
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
      </SimpleShowLayout>
    </Show>
  );
};

const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <InspectorButton />
  </AppBar>
);

const AdminApp = () => {
  const dataProvider = getDataProvider();


  const apiCallConstructor = (route: keyof typeof api, method: string) => {
    const { data } = api[route][method].useQuery();
    return data;
  };

  // THIS IS THE CORRECT CALL SYNTAX FOR ROUTES CREATED SPECIFICALLY FOR REACT ADMIN
  // const res = api.user.getOne.useQuery({
  //   id: "cllncmw5v0004ls7mgtpvqyyo",
  //   select: ["id"],
  // });
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
      <Resource name="user" show={UserShow} list={UserList} />
    </Admin>
  );
};

export default AdminApp;
