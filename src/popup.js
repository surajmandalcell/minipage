const moveShortcut = (id, index) => {
  chrome.bookmarks.getSubTree('1', (tree) => {
    let folder = tree[0].children.find(v => v.title.toLowerCase() === SHORTCUTS_FOLDER.toLowerCase())

    if (folder) {
      chrome.bookmarks.move(id, {
        parentId: folder.id,
        index
      })
      return
    }
  })
}

Sortable.create($('#shortcuts'), {
  animation: 150,
  dataIdAttr: 'data-sort-id',
  onEnd: (ev) => {
    moveShortcut(ev.item.getAttribute('data-id'), ev.oldIndex < ev.newIndex ? ev.newIndex + 1 : ev.newIndex)
  },
  setData: (dT, el) => {
    dT.setData('text/plain', el.getAttribute('data-url'))
  }
})

$('html').addEventListener('contextmenu', (e) => {
  e.preventDefault()
  return false
})
