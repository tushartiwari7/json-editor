const json = {};

const schema = {
  add(value, key) {
    json[key] = value;
    return json;
  },
  delete(key) {
    delete json[key];
    return json;
  },
  update(key, value) {
    json[key] = value;
    return json;
  },
  get() {
    return json;
  },
};

Object.freeze(schema);
export { schema };
