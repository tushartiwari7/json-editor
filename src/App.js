import { ToastContainer, toast } from "react-toastify";
import ObjectWrap from "components/ObjectWrap";
import "styles.css";
import "react-toastify/dist/ReactToastify.css";
import { defaultSchemaProperty, initSchema, toastOptions } from "utils";
import ObjectWrapProvider from "components/ObjectWrapContext";
import { schemaOperationsEnum, useSchema } from "hooks/useSchema";
export default function App() {
  const { state, dispatch } = useSchema(initSchema);

  const addNewField = () => {
    dispatch({
      type: schemaOperationsEnum.ADD,
      payload: defaultSchemaProperty,
    });
  };

  const readSchema = () => {
    dispatch({ type: schemaOperationsEnum.GET });
    toast("Logged the Schema in Console");
  };

  return (
    <main className="App center">
      <ObjectWrapProvider value={state}>
        <section className="wrapper">
          <header className="header">
            <p className="text">Field Name and Type</p>
            <button className="btn" onClick={addNewField}>
              +
            </button>
          </header>
          <ObjectWrap />
          <footer className="footer">
            <button className="btn" onClick={readSchema}>
              Save
            </button>
          </footer>
        </section>
      </ObjectWrapProvider>
      <ToastContainer {...toastOptions} />
    </main>
  );
}
