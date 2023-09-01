import { DatagridConfigurable, Edit, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, TimeInput } from "react-admin";

export const DayList = () => {
    return (
      <List>
        <DatagridConfigurable rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="openingTime" />
          <TextField source="closingTime" />
        </DatagridConfigurable>
      </List>
    );
  };
  
export const DayShow = () => {
    return (
      <Show>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
        </SimpleShowLayout>
      </Show>
    );
  };
  
export const DayEdit = () => {
    return (
      <Edit>
        <SimpleForm>
          <TextField source="id" />
          <TextInput source="name" />
          {/* <TimeInput source="openingTime" /> */}
          {/* <TimeInput
            source="closingTime"
            format={(value: number) => {
              const date = new Date(new Date().setMinutes(value));
              console.log(date);
              return value;
            }}
            parse={(value: string) => {
              const [hours, minutes]: string[] = value.split(":");
              const date = new Date();
              date.setHours(hours);
              date.setMinutes(minutes);
              return date.toLocaleTimeString({
                hour: true,
                minute: true,
              });
            }}
          /> */}
        </SimpleForm>
      </Edit>
    );
  };