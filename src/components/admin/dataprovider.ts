import type { CreateResult, DataProvider, DeleteManyResult, DeleteResult, GetListResult, GetManyReferenceResult, GetManyResult, GetOneResult, UpdateManyResult, UpdateResult } from "react-admin";

export const getDataProvider = (): DataProvider => ({
    // get a list of records based on sort, filter, and pagination
    getList: async (resource, params): Promise<GetListResult> => {
        console.log("GET LIST CALLED: ", resource, params);
        const res: GetListResult = {
            data: [{ id: "1", name: "TESTING YO", description: "something here", age: 25, fName: "test", lName: "test" }, { id: "2", name: "TESTING YO", description: "something here", age: 25, fName: "test", lName: "test" }, { id: "3", name: "TESTING YO", description: "something here", age: 25, fName: "test", lName: "test" }],
            total: 1,
        };
        return await Promise.resolve(res);
    },
    // get a single record by id
    getOne: async (resource, params): Promise<GetOneResult> => {
        console.log("GET ONE CALLED");
        return await Promise.resolve({ data: { id: "1", name: "TESTING YO" } });
    },
    // get a list of records based on an array of ids
    getMany: async (resource, params): Promise<GetManyResult> => {
        console.log("GET MANY CALLED");
        return await Promise.resolve({ data: [{ id: "1", name: "TESTING YO" }] });
    },
    // get the records referenced to another record, e.g. comments for a post
    getManyReference: (resource, params): Promise<GetManyReferenceResult> => {
        console.log("GET MANY REFERENCE CALLED");
        return Promise.resolve({
            data: [{ id: "1", name: "TESTING YO" }],
            total: 1,
        });
    },
    // create a record
    create: (resource, params): Promise<CreateResult> => {
        console.log("CREATE CALLED");
        return Promise.resolve({ data: { id: "1", name: "TESTING YO" }, total: 1 });
    },
    // update a record based on a patch
    update: (resource, params): Promise<UpdateResult> => {
        console.log("UPDATE CALLED");
        return Promise.resolve({ data: { id: "1", name: "TESTING YO" }, total: 1 });
    },
    // update a list of records based on an array of ids and a common patch
    updateMany: (resource, params): Promise<UpdateManyResult> => {
        console.log("UPDATE MANY CALLED");
        return Promise.resolve({
            data: [{ id: "1", name: "TESTING YO" }],
            total: 1,
        });
    },
    // delete a record by id
    delete: (resource, params): Promise<DeleteResult> => {
        console.log(" DELETE CALLED");
        return Promise.resolve({ data: { id: "1", name: "TESTING YO" }, total: 1 });
    },
    // delete a list of records based on an array of ids
    deleteMany: (resource, params): Promise<DeleteManyResult> => {
        console.log("DELETE MANY CALLED");
        return Promise.resolve({
            data: [{ id: "1", name: "TESTING YO" }],
            total: 1,
        });
    },
});
