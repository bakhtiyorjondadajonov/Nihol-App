import { useMutation, useQuery, useQueryClient } from "react-query";
import useAxios from "../../useAxios";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../redux/modalSlice";

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
const useAddUserToQueryData = () => {
  const queryClient = useQueryClient();

  return ({ userData }) => {
    queryClient.setQueryData(
      `accomodation/${userData.buildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) => {
          return value.roomNumber == userData.roomNumber
            ? {
                ...value,

                cliente: value.cliente.map((value) => {
                  return value.clienteID == userData.clienteID
                    ? {
                        ...value,
                        userID: userData._id,
                      }
                    : value;
                }),
              }
            : value;
        });
      }
    );
  };
};
const useAddUser = () => {
  const axios = useAxios();
  const addUserToQuery = useAddUserToQueryData();
  return useMutation(({ body }) => {
    return axios({
      url: `/accomodation/${body.buildingNumber}/create-user`,
      method: "POST",
      body,
    }).then((res) => {
      addUserToQuery({ userData: res.data.data });
    });
  });
};
/////////////
const useAddBookedUserToQueryData = () => {
  const queryClient = useQueryClient();

  return ({ body }) => {
    queryClient.setQueryData();
  };
};
const useAddBookedUser = () => {
  const axios = useAxios();

  return useMutation(({ body }) => {
    return axios({
      url: `/accomodation/${body.buildingNumber}/create-booked-user`,
      method: "POST",
      body,
    });
  });
};
export { useUpdateUser, useAddUser };

const useDeleteUserFromQuery = () => {
  const queryClient = useQueryClient();

  return ({ userData }) => {
    queryClient.setQueryData(`accomodation/2`, (oldQueryData) => {
      return oldQueryData.map((value) => {
        return value.roomNumber == userData.roomNumber
          ? {
              ...value,

              cliente: value.cliente.map((value) => {
                return value.clienteID == userData.clienteID
                  ? {
                      ...value,
                      userID: "",
                    }
                  : value;
              }),
            }
          : value;
      });
    });
  };
};
export const useDeleteUser = () => {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(switchUserModalVisibility());
  };
  const deleteFromQuery = useDeleteUserFromQuery();
  const axios = useAxios();
  return useMutation(({ body }) => {
    return axios({
      url: `/accomodation/2/delete-user`,
      method: "DELETE",
      body,
    }).then((res) => {
      console.log(res);
      deleteFromQuery({ userData: body });
      console.log("Deleted Successfully");
      hideModal();
    });
  });
};
