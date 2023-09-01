/* eslint-disable react/jsx-key */
import { ArrayField, ChipField, DatagridConfigurable, Edit, List, ReferenceField, ReferenceManyField, Show, SimpleForm, SimpleShowLayout, SingleFieldList, TextField, TextInput, useRecordContext} from "react-admin";

export const TeacherList = () => {
    return (
      <List>
        <DatagridConfigurable rowClick="show" omit={["id"]}>
            <TextField source="id" />
            <TextField source="fName" label="First name"/>
            <TextField source="lName" label="Last name"/>
                <ReferenceManyField reference="teacherInstrument" target="teacherId">
                    <SingleFieldList linkType={false}>
                        <ReferenceField source="instrumentId" reference="instrument">
                            <ChipField source="name" size="small" />
                        </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>
        </DatagridConfigurable>
      </List>
    );
};
  
export const TeacherShow = () => {
    const record = useRecordContext();
    console.log("RECORD: ", record);
    return (
      <Show>
        <SimpleShowLayout>
            <TextField source="fName" label="First name" />
            <TextField source="lName" label="Last name"/>
            <TextField source="email" />
            <TextField source="phone" />
            <ReferenceManyField reference="teacherInstrument" target="teacherId" label="Instruments">
                    <SingleFieldList linkType={false}>
                        <ReferenceField source="instrumentId" reference="instrument">
                            <ChipField source="name" size="small" />
                        </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleShowLayout>
      </Show>
    );
  };
  
export const TeacherEdit = () => {
    return (
      <Edit>
        <SimpleForm>
            <TextInput source="fName" />
            <TextInput source="lName" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
      </Edit>
    );
  };