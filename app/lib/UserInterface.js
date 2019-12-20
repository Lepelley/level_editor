import Menu from './Menu.js'
import PopUp from './PopUp.js'

export default class UserInterface {
  /**
   * Creates an instance of UserInterface.
   * @param {elementHtml} root
   * @param {objectJson} [options={}]
   * @memberof UserInterface
   */
  constructor (root, options = {}) {
    this.rootElt = document.getElementById(root)
    this.popUp = new PopUp(this)
    this.menu = new Menu(this)
    this.options = options
  }

  init () {
    this.generateMenu()
  }

  openWindow (name) {
    this.rootElt.appendChild(this.popUp.create(name))
  }

  generateMenu () {
    const menuElt = document.createElement('ul')
    this.menu.get().forEach((element) => {
      const liElt = document.createElement('li')
      liElt.textContent = element.title
      liElt.addEventListener('click', element.callback)
      menuElt.appendChild(liElt)
    })

    this.rootElt.appendChild(menuElt)
  }
}
