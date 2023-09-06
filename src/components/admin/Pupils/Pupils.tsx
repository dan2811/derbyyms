/* eslint-disable react/jsx-key */
import { Chip } from "@mui/material";
import { ChipField, DatagridConfigurable, DateField, Edit, FunctionField, List, ReferenceField, ReferenceManyField, Show, SimpleForm, SimpleShowLayout, SingleFieldList, TextField, TextInput} from "react-admin";

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
          <TextField source="fName" label="First Name"/>
          <TextField source="lName" label="Last Name"/>
          <ReferenceManyField reference="pupilParent" target="pupilId" label="Parents">
                <SingleFieldList>
              <ReferenceField source="parentId" reference="pupil" link="show" >
                <FunctionField render={(record: { fName: string, lName: string; }) => <Chip label={`${record.fName} ${record.lName}`} />} />
              </ReferenceField>
            </SingleFieldList>
      </ReferenceManyField>

      <ReferenceManyField reference="pupilParent" target="parentId" label="Children">
                  <SingleFieldList  >
                    <ReferenceField source="pupilId" reference="pupil" link="show" >
                      <FunctionField render={(record: { fName: string, lName: string; }) => <Chip label={`${record.fName} ${record.lName}`} />} />
                    </ReferenceField>
                  </SingleFieldList>
              </ReferenceManyField>
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