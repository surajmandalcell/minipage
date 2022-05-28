const setTheme = (theme) => {
  $('html').className = Array.from($('html').classList).filter(c => !c.startsWith('theme-')).join(' ')
  $('html').classList.add('theme-' + theme)
}

const setMode = (mode) => {
  $('html').className = Array.from($('html').classList).filter(c => !c.startsWith('mode-')).join(' ')
  $('html').classList.add('mode-' + mode)

  if ($('summary')) {
    // hack: fixes issue with summary not changing color
    $('summary').click()
    $('summary').click()
  }
}

const setPrefers = (mode) => {
  $('html').className = Array.from($('html').classList).filter(c => !c.startsWith('prefers-')).join(' ')
  $('html').classList.add('prefers-' + mode)
}

const setCss = (css) => {
  $('#custom-style').textContent = css
}

const setAppearance = (appearance) => {
  // custom styles can only be added after all DOM contents have been loaded :(
  document.addEventListener('DOMContentLoaded', () => {
    if (appearance.css) setCss(appearance.css)
  })

  if (appearance.mode) setMode(appearance.mode)
  if (appearance.theme) setTheme(appearance.theme)
}

const loadAppearance = () => {
  let mode = localStorage.getItem('mode') || 'system'
  let theme = localStorage.getItem('theme') || 'smooth-dark'
  let timeformat = localStorage.getItem('timeformat') || '12'
  let battery = localStorage.getItem('battery') || 'show'
  let css = localStorage.getItem('css') || ''

  setAppearance({ mode, theme, timeformat, battery, css })

  chrome.storage.sync.get(['theme', 'mode', 'timeformat', 'battery', 'css'], (settings) => {
    let preset = {
      mode,
      theme,
      timeformat,
      battery,
      css,
      ...settings
    }

    localStorage.setItem('mode', preset.mode)
    localStorage.setItem('theme', preset.theme)
    localStorage.setItem('timeformat', preset.timeformat)
    localStorage.setItem('battery', preset.battery)
    localStorage.setItem('css', preset.css)

    setAppearance({
      mode: preset.mode,
      theme: preset.theme,
      timeformat: preset.timeformat,
      battery: preset.battery,
      css: preset.css
    })
  })
}

// get preferred color from system
// AND set an event listener to detect changes
(function () {
  let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkQuery.addEventListener('change', function (event) {
    setPrefers(event.matches ? 'dark' : 'light')
  })

  setPrefers(darkQuery.matches ? 'dark' : 'light')
})()

const stats = () => {
  if (!localStorage.getItem('installed')) {
    localStorage.setItem('installed', Date.now())
  }
}

loadAppearance()
stats()
