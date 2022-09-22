import getTodos from '../2/index.js'
import todosView from '../2/todosRender.js'
import counterView from '../2/counter.js'
import filtersView from '../2/filter.js'

import registry from './registry.js'

registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

const state = {
    todos: getTodos(),
    currentFilter: 'All'
}

window.requestAnimationFrame(() => {
    const main = document.querySelector('.todoapp')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
})