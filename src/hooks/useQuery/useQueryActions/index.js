import { useMutation, useQueryClient } from "react-query";
import useAxios from "../../useAxios";
// const useUpdateUserFromCashe = () => {
//   const queryClient = useQueryClient();
//   return ({ id, shouldUpdateData }) => {
//     queryClient.setQueryData(`user/${id}`, (oldQueryData) => {
//       return shouldUpdateData;
//     });
//   };
// };

const useUpdateQueryData = () => {
  // we need to create query client here
  const queryClient = useQueryClient();
  // now we will create our custom hook
  return ({ id, shouldUpdateData }) => {
    queryClient.setQueryData(`user/${id}`, (oldQueryData) => {
      return shouldUpdateData;
    });
  };
};
const useUpdateUser = () => {
  const updateUserFromCashe = useUpdateQueryData();
  const axios = useAxios();
  return useMutation(({ body }) => {
    updateUserFromCashe({ id: body._id, shouldUpdateData: body });
    return axios({
      url: "/accomodation/2/update-user",
      method: "POST",
      body,
    });
  });
};

export { useUpdateUser };
