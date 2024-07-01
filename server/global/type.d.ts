type getType<T extends () => any> = T extends () => infer U ? U : T;
type k = typeof Config;
type ConfigType = getType<k>;
