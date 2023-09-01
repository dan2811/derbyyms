/* eslint-disable react/jsx-key */
import { DatagridConfigurable, DateField, Edit, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput} from "react-admin";

const pupilFilters = [
    <TextInput source="fName" label="First name" />,
    <TextInput source="mName" label="Middle name" />,
    <TextInput source="lName" label="Last name" />,
    <TextInput source="email" />,
    <TextInput source="phone" />,
    <TextInput source="addressLine1" />,
    <TextInput source="addressLine2" />,
    <TextInput source="postcode" />,
]

export const PupilList = () => {
    return (
      <List filters={pupilFilters}>
        <DatagridConfigurable rowClick="show" omit={["id"]}>
            <TextField source="id" />
            <TextField source="fName" label="First name"/>
            <TextField source="mName" label="Middle name"/>
            <TextField source="lName" label="Last name"/>
            <DateField source="dob" label="Date of birth" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="extraNeeds" />
            <TextField source="addressLine1" />
            <TextField source="addressLine2" />
            <TextField source="postcode" />
            <DateField source="enrolled" label="Enrolled date" emptyText="Not yet enrolled"/>
            <DateField source="droppedOut" label="Drop out date" emptyText="Not dropped out"/>
            <TextField source="paymentType" />
                {/* <ReferenceArrayField source="tasterEnquiry" reference="tasterEnquiry" /> */}
        </DatagridConfigurable>
      </List>
    );
  };
  
export const PupilShow = () => {
    return (
      <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="fName" />
            <TextField source="lName" />
        </SimpleShowLayout>
      </Show>
    );
  };
  
export const PupilEdit = () => {
    return (
      <Edit>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="fName" />
        </SimpleForm>
      </Edit>
    );
  };