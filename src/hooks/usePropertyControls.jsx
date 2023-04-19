import { useObjectWrapProvider } from "components/ObjectWrapContext";
import { schemaOperationsEnum } from "hooks/useSchema";
import { defaultSchemaProperty, validPropertyTypes } from "utils";

export const usePropertyControls = (data) => {
  const { dispatch } = useObjectWrapProvider();

  const updateProperty = (value) =>
    dispatch({
      type: schemaOperationsEnum.UPDATE,
      payload: { key: data.id, value },
    });

  const renameTitleHandler = (event) =>
    updateProperty({ title: event.target.value });

  const changeInterfaceType = (event) => {
    const changeTo = event.target.value;
    if (changeTo === validPropertyTypes.OBJECT)
      return updateProperty({ type: changeTo, children: {} });
    updateProperty({ type: changeTo, children: null });
  };

  const addChild = () => {
    let uuid = self.crypto.randomUUID();
    console.log(uuid);
    updateProperty({
      type: validPropertyTypes.OBJECT,
      children: {
        ...data.children,
        [uuid]: {
          ...defaultSchemaProperty,
          id: uuid,
        },
      },
    });
  };

  const toggleIsRequired = (isChecked) =>
    updateProperty({ isRequired: isChecked });

  const removeProperty = () => {
    dispatch({ type: schemaOperationsEnum.REMOVE, payload: data.id });
  };

  const observer = (updatedChild) => updateProperty({ children: updatedChild });

  return {
    renameTitleHandler,
    changeInterfaceType,
    addChild,
    toggleIsRequired,
    removeProperty,
    observer,
  };
};
