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
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
      <Resource name="user" show={UserShow} list={UserList} />
    </Admin>
  );
};

export default AdminApp;
