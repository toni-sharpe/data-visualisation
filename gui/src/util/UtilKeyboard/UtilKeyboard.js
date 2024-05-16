export function rmMenuClass() {
  document.querySelector('.js-header')?.classList?.remove('open')
}

export function toggleKeyHintList() {
  document.querySelector('.js-key-hint-g')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-h')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-k')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-m')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-n')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-r')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-s')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-z')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-1')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-2')?.classList?.toggle('hide')
}

export function onKeyDownRegionHandler({
  zoom = 1,
} = {}) {
  return function ({ keyCode }) {
    const firstEnabledButton = 'button:not([disabled])'
    switch(keyCode) {
      case 49: // 1 left axis
        document.querySelector(`.js-axis-selector--left ${firstEnabledButton}`)?.focus()
        rmMenuClass()
        break;
      case 50: // 2 right axis
        document.querySelector(`.js-axis-selector--right ${firstEnabledButton}`)?.focus()
        rmMenuClass()
        break;
      case 71: // g - Gantt/time-line toggle list
        document.querySelector(`.js-gantt-toggle-list ${firstEnabledButton}`)?.focus()
        document.querySelector(`.js-time-line-filter-list ${firstEnabledButton}`)?.focus()
        rmMenuClass()
        break;
      case 72: // h - history
        document.querySelector('.js-year-slider-main-button')?.focus()
        rmMenuClass()
        break;
      case 75: // k - toggle labels
        toggleKeyHintList()
        break;
      case 77: // m - menu
        document.querySelector('.js-header')?.classList?.toggle('open')
        document.querySelector('.js-menu-first a')?.focus()
        break;
      case 78: // n - menu2
        document.querySelector(`.js-menu-2-first ${firstEnabledButton}`)?.focus()
        rmMenuClass()
        break;
      case 83: // s - scroll
        document.querySelector(`.js-west`)?.focus()
        rmMenuClass()
        break;
      case 90: // z - zoom
        document.querySelector(`.js-zoom-${zoom}`)?.focus()
        document.querySelector(`.js-zoom-gantt ${firstEnabledButton}`)?.focus()
        rmMenuClass()
        break;
      case 82: // r - filter
        document.querySelector('.js-filter')?.focus()
        break;
      case 88: // x - reset
        rmMenuClass()
        break;
      default:
        break;
    }

    return false
  }
}
