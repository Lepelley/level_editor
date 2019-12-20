export default class PopUp {
  constructor (UI) {
    this.ui = UI
  }

  create (name, title = '', content = '', width = 500, height = 200, positionLeft = 0, positionTop = 0) {
    let element = document.getElementById('#popUp_' + name)
    // On vérifie pour voir si on a pas déjà une popup de disponible
    if (element === null) {
      // on doit créer la fenetre avant de l'ouvrir
      element = document.createElement('div')
      element.setAttribute('id', 'popUp_' + name)
      element.setAttribute('draggable', 'true')
      element.classList.add('popUp')
      element.textContent = 'coucou'
      this.init(element, width, height, positionLeft, positionTop)
    }
    return element
  }

  destroy (name) {
    // On vérifie pour voir si on a pas déjà une popup de disponible
    const element = document.getElementById('#popUp_' + name)
    if (element !== null) {
      this.close(name)
    }
  }

  close (name) {
  }

  init (element, width, height, left, top) {
    element.style.width = width + 'px'
    element.style.height = height + 'px'
    element.style.top = top
    element.style.left = left
  }
}
