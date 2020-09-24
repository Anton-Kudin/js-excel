import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants';
import {debounce} from '@/core/utils';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }
  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" value="${title}" class="input">
      </input>
      <div>
        <button>
          <span class="material-icons">
            exit_to_app
          </span>
        </button>
        <button>
          <span class="material-icons">
            delete
          </span>
        </button>
      </div>
    `
  }

  onInput(event) {
    const $target = $(event.target)
    console.log($target)
    this.$dispatch(changeTitle($target.text()))
  }
}
