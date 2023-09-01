import { Datagrid, DatagridConfigurable, Edit, List, ReferenceArrayInput, ReferenceInput, ReferenceManyField, SelectArrayInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, TimeInput } from "react-admin";

export const InstrumentList = () => {
    return (
        <List>
            <DatagridConfigurable rowClick="show" omit={["id"]}>
                <TextField source="id" />
                <TextField source="name" />
            </DatagridConfigurable>
        </List>
    );
};

export const InstrumentShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <ReferenceManyField label="Courses" reference="course" target="instrumentId">
                    <DatagridConfigurable omit={["id"]}>
                        <TextField source="id" />
                        <TextField source="name" />
                    </DatagridConfigurable>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    );
};

export const InstrumentEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextField source="id" />
                <TextInput source="name" />
                <ReferenceArrayInput reference="course" source="instrumentId" >
                    <SelectArrayInput label="Courses" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
};