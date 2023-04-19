export const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "light",
};

export const initSchema = {
  "d5761976-5193-4d01-a1dc-26b6860c9474": {
    title: "person",
    isRequired: false,
    type: "object",
    children: {
      "ff7dfeef-a32f-4da6-9f48-53af918e734c": {
        title: "firstname",
        isRequired: false,
        type: "string",
        children: null,
        id: "ff7dfeef-a32f-4da6-9f48-53af918e734c",
      },
      "422ede5a-2c14-49e0-b426-da9b19b5e262": {
        title: "lastname",
        isRequired: false,
        type: "string",
        children: null,
        id: "422ede5a-2c14-49e0-b426-da9b19b5e262",
      },
    },
    id: "d5761976-5193-4d01-a1dc-26b6860c9474",
  },
  "7bbb4615-e77e-4630-92aa-538b727d88fd": {
    title: "order",
    isRequired: false,
    type: "string",
    children: null,
    id: "7bbb4615-e77e-4630-92aa-538b727d88fd",
  },
  "577a88aa-3eb7-4d68-8f13-3d7eaa6a02f9": {
    title: "class",
    isRequired: false,
    type: "string",
    children: null,
    id: "577a88aa-3eb7-4d68-8f13-3d7eaa6a02f9",
  },
};
