import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userSliceApi = createApi({
    reducerPath: 'userSliceApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET',
            
            }),
            providesTags: ['User'],

        }),

       
    }),
});
export const {
    useGetUserQuery,
} = userSliceApi;

