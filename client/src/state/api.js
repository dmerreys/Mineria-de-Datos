import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Estudiantes",
    "Dashboard",
    "Student",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (user) => `general/user/${user}`,
      providesTags: ["User"],
    }),
    getStudent: build.query({
      query: () => `student/estudiantes`, //rutas del index.js de el server y de la ruta enstudent.js en controllers
      providesTags: ["Student"],
    }),
    getHistoricos: build.query({
      query: () => `historicos/historicos`,
      providesTags: ["Historicos"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    postLogin: build.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    postSignUp: build.mutation({
      query: (payload) => ({
        url: "auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
    postEstudiante: build.mutation({
      query: (estudianteData) => ({
        url: "student/estudiantes",
        method: "POST",
        body: estudianteData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  //useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetHistoricosQuery,
  usePostEstudianteMutation,
  useGetStudentQuery,
  useGetDashboardQuery,
  usePostLoginMutation,
  usePostSignUpMutation,
} = api;
