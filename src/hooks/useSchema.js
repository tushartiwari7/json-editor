export const useSchema = () => {
  const json = { a: 5, b: 4 };

  const add = (key, value) => {
    json[key] = value;
    return json;
  };

  const del = (key) => {
    delete json[key];
    return json;
  };

  const update = (key, value) => {
    json[key] = value;
    return json;
  };

  const get = () => {
    return json;
  };
  return {
    add,
    delete: del,
    update,
    get,
  };
};
