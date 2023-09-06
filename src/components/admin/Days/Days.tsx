import { DatagridConfigurable, Edit, FunctionField, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, TimeInput } from "react-admin";
import { getMinsPastMidnight, parseMinsPastMidnight } from "~/helpers/time";

interface Day {
  openingTime: number;
  closingTime: number;
}

export const DayList = () => {
    return (
      <List>
        <DatagridConfigurable rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <FunctionField label="Opening time" render={({openingTime}: Day) => {
            return parseMinsPastMidnight(openingTime);
          }} />
          <FunctionField label="Closing time" render={({ closingTime }: Day) => {
            return parseMinsPastMidnight(closingTime);
          }} />
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
          <FunctionField label="Opening time" render={({openingTime}: Day) => {
            return parseMinsPastMidnight(openingTime);
          }} />
          <FunctionField label="Closing time" render={({ closingTime }: Day) => {
            return parseMinsPastMidnight(closingTime);
          }} />
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
          <TimeInput
            source="openingTime"
            format={(value: number) => {
              return parseMinsPastMidnight(value);
            }}
            parse={(value: string) => {
              return getMinsPastMidnight(value);
            }}
          />
          <TimeInput
            source="closingTime"
            format={(value: number) => {
              return parseMinsPastMidnight(value);
            }}
            parse={(value: string) => {
              return getMinsPastMidnight(value);
            }}
          />
        </SimpleForm>
      </Edit>
    );
  };