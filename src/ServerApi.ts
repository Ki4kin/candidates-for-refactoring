enum ApiMethod {
  POST,
  DELETE,
  GET,
}

type TBody = string | TAccount | TCredentials;
class ServerApi {
  private fetchData(method: ApiMethod, body: TBody) {
    this.fetch(method, url, body);
  }
  public processAddAccountRequest(account: TAccount) {
    return this.fetchData(ApiMethod.POST, account);
  }

  public sendDeleteAccountRequest(accountId: string) {
    return this.fetchData(ApiMethod.DELETE, accountId);
  }

  public requestAuth(credentials: TCredentials) {
    return this.fetchData(ApiMethod.GET, credentials);
  }
}

//Для запроса создал отдельный метод, убрал тем самым дублирование url, а также поработал с типизацией  