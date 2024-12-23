class FilmController {
  private popupOpened: boolean = false;

  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}

//Свойство "popupOpened" не существует в типе "FilmController", необходимо его добавить в класс