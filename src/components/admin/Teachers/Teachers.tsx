/* eslint-disable react/jsx-key */
import { ArrayField, ArrayInput, ChipField, DatagridConfigurable, Edit, List, Loading, ReferenceArrayInput, ReferenceField, ReferenceInput, ReferenceManyField, SelectArrayInput, SelectInput, Show, SimpleForm, SimpleFormIterator, SimpleShowLayout, SingleFieldList, TextField, TextInput, useGetMany, useGetManyReference, useRecordContext, useReference, useReferenceManyFieldController} from "react-admin";

export const TeacherList = () => {
    return (
      <List>
        <DatagridConfigurable rowClick="show" omit={["id"]}>
            <TextField source="id" />
            <TextField source="fName" label="First name"/>
            <TextField source="lName" label="Last name"/>
                <ReferenceManyField reference="teacherInstrument" target="teacherId" label="Instruments">
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
    return (
      <Show>
        <SimpleShowLayout>
            <TextField source="fName" label="First name" />
            <TextField source="lName" label="Last name"/>
            <TextField source="email" />
            <TextField source="phone" />
            <ReferenceManyField reference="teacherInstrument" target="teacherId" label="Instruments">
                    <SingleFieldList linkType={false}>
                        <ReferenceField source="instrumentId" reference="instrument" >
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
                <ReferenceInput source="teacherId" reference="teacherInstrument">
                        <ReferenceArrayInput source="instrumentId" reference="instrument" helperText={false} />
                </ReferenceInput>
                <CustomReferenceSelect />
        </SimpleForm>
      </Edit>
    );
};

const CustomReferenceSelect = () => {
    const record = useRecordContext();
    interface Instrument {
        id: string;
        teacherId: string;
        instrumentId: string;
    };
    const {data} = useGetManyReference<Instrument>(
        'teacherInstrument',
        { 
            target: 'teacherId',
            id: record.id,
        }
    );
    console.log(data);


    const { data: instruments} = useGetMany(
        'instrument',
        { ids: data?.map(el => el.instrumentId) }
    );

    console.log("INSTRUMENTS: ", instruments);
    return (
        <></>
    );
};