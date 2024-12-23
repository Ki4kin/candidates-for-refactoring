type CheckResponseStatusType = (response: Response) => boolean;

const hasNotFoundStatus: CheckResponseStatusType = ({ status }) =>
  status === HttpStatusCode.NOT_FOUND_404;

const hasForbiddenStatus: CheckResponseStatusType = ({ status }) =>
  status === HttpStatusCode.FORBIDDEN_403;

const hasServiceUnavailableStatus: CheckResponseStatusType = ({ status }) =>
  status === HttpStatusCode.SERVICE_UNAVAILABLE_503;

//Убрал дублирование типизации, создав отдельный тип. Для однообразия число "503" нужно добавить в енам HttpStatusCode
