type Modem = {
  dial(phoneNumber: string): boolean;
  disconnect(): boolean;
  send(c: string): boolean;
  recv(): string;
  getConnectedPhoneNumber(): string;
};

//Использование типа здесь зделает код немного короче
