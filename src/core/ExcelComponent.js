import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscibers = []
    this.prepare()
  }
  // Настраиваем наш компонент до init
  prepare() {

  }

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомляем слушателей про событие евент
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие евент
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscibers.push(unsub)
  }
  // Инициализируем компонент
  init() {
    this.initDOMListeners()
  }

  // Удаляем компонент
  destroy() {
    this.removeDOMListeners()
    this.unsubscibers.forEach(unsub => unsub())
  }
}
