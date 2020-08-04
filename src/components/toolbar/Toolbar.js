import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    })
  }

  toHTML() {
    return `
        <button>
          <span class="material-icons">
            format_align_left
          </span>
        </button>
        <button>
          <span class="material-icons">
            format_align_right
          </span>
        </button>
        <button>
          <span class="material-icons">
            format_align_center
          </span>
        </button>
        <button>
          <span class="material-icons">
            format_bold
          </span>
        </button>
        <button>
          <span class="material-icons">
            format_italic
          </span>
        </button>
        <button>
          <span class="material-icons">
            format_underline
          </span>
        </button>
    `
  }

  onClick(event) {

  }
}
