// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

// initialize an base api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: () => ({}),
});
