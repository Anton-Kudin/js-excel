import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
      <input type="text" value="Новая таблица" class="input">
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
}
