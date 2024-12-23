type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const addError = (errors: TMutableList<TWarning>) => {
  errors.push({ type: WarningType.LEGACY_CODE_DEPENDENCY });
};

// На мой взгляд, в этом примере нет смысла выносить создание объекта в отдельную функцию, это портит читаемость кода  