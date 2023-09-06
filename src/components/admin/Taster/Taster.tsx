/* eslint-disable react/jsx-key */
import {
  AutocompleteInput,
  DatagridConfigurable,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  RichTextField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  useGetList,
  useGetMany,
  useInfiniteGetList,
} from "react-admin";

export const TasterList = () => {
  return (
    <List>
      <DatagridConfigurable rowClick="show" omit={["id"]}>
        <TextField source="id" />
        <ReferenceField source="pupilId" reference="pupil" />
        <ReferenceField source="instrument" reference="instrument" />
      </DatagridConfigurable>
    </List>
  );
};

export const TasterShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="pupilId" reference="pupil" />
        <ReferenceField source="instrument" reference="instrument" />
        <TextField source="otherInfo" />
      </SimpleShowLayout>
    </Show>
  );
};

export const TasterEdit = () => {
  const result = useInfiniteGetList("pupil");
  console.log(result);
  const { data, isLoading, error } = useInfiniteGetList("pupil", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "fName", order: "DESC" },
  });
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  const choices = data?.pages.flatMap((page) => {
    return page.data as object[];
  });
  return (
    <Edit>
      <SimpleForm>
        <TextField source="id" />
        <AutocompleteInput
          source="pupilId"
          choices={choices}
          optionText={({ fName, lName }) => `${fName} ${lName}`}
        />
        <ReferenceInput source="instrument" reference="instrument" />
        <TextInput source="otherInfo" multiline />
      </SimpleForm>
    </Edit>
  );
};

export const TasterCreate = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextField source="id" />
      </SimpleForm>
    </Edit>
  );
};
