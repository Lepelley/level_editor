export default class Menu {
  /**
   * Creates an instance of Menu.
   * @memberof Menu
   */
  constructor (UI) {
    this.ui = UI
    this.elements = [
      {
        title: 'Test 1',
        callback: () => {
          this.ui.openWindow('button_1')
        }
      },
      {
        title: 'Menu 2',
        callback: () => {
          window.alert('element 2')
        }
      }
    ]
  }

  get () {
    return this.elements
  }
}
