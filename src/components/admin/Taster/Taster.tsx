/* eslint-disable react/jsx-key */
import { DatagridConfigurable, Edit, List, Show, SimpleForm, SimpleShowLayout, TextField } from "react-admin";

export const TasterList = () => {
    return (
      <List >
        <DatagridConfigurable rowClick="show" omit={["id"]}>
            <TextField source="id" />
        </DatagridConfigurable>
      </List>
    );
  };
  
export const TasterShow = () => {
    return (
      <Show>
        <SimpleShowLayout>
            <TextField source="id" />
        </SimpleShowLayout>
      </Show>
    );
  };
  
export const TasterEdit = () => {
    return (
      <Edit>
        <SimpleForm>
            <TextField source="id" />
        </SimpleForm>
      </Edit>
    );
  };