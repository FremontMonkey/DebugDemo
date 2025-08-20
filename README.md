# DebugDemo - Vue 3 Demo Application

A comprehensive Vue 3 demo application built for testing debugging tools and Code Rabbit evaluation. Features interactive joke and haiku generators with modern Vue 3 patterns and intentional code examples.

## 🚀 Technology Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Language**: JavaScript
- **Styling**: Scoped CSS
- **Drag & Drop**: SortableJS with Vue integration
- **Storage**: localStorage for persistence
- **API**: Official Joke API integration

## 🎯 Vue 3 Implementation Details

This application showcases modern Vue 3 features:

### **Composition API**
- Uses `setup()` function instead of Options API
- Reactive references with `ref()`
- Lifecycle hooks with `onMounted()`
- Watchers with `watch()`

### **Modern Patterns**
- Template refs for DOM manipulation
- Async/await for API calls
- Event handling with proper method binding
- Conditional rendering with `v-if`
- List rendering with `v-for`

### **Component Architecture**
- Single File Components (SFC)
- Scoped styling
- Props and event handling
- Vue Router for navigation

### **Third-party Integration**
- SortableJS for drag-and-drop functionality
- External API consumption
- localStorage integration

## 🐛 Code Rabbit Evaluation Features

This app includes **7 types of documented errors** for debugging tool evaluation:

1. **Template Compilation Errors** - Duplicate script tags
2. **Runtime JavaScript Errors** - Undefined variables, method typos  
3. **Logic Errors** - Incorrect API property usage
4. **Array Method Errors** - Non-existent method calls
5. **CSS Syntax Errors** - Missing semicolons
6. **Method Reference Errors** - Missing exports
7. **Variable Scope Issues** - Undefined template variables

*All errors are commented out so the app runs perfectly, but can be easily activated for testing.*

## 📱 Application Features

- **Joke Generator**: Fetch random jokes from Official Joke API
- **Haiku Generator**: Create random haikus
- **Like/Dislike System**: Interactive rating with green/red buttons
- **Persistent Storage**: Liked jokes saved to localStorage
- **Drag & Drop Ranking**: Reorder liked jokes with SortableJS
- **Clear All Function**: Remove all liked jokes
- **Responsive Design**: Modern styling with custom color scheme

## 📋 Technical Specifications

- **Vue Version**: 3.5.18
- **Vue Router**: 4.5.1  
- **Vite**: 7.0.6
- **Node.js**: ^20.19.0 || >=22.12.0
- **TypeScript**: ~5.8.0 (for tooling)
- **ESLint**: Vue-specific linting rules

## 🛠️ Vue 3 Patterns Demonstrated

```javascript
// Composition API with reactive refs
const joke = ref('')
const likedJokes = ref([])

// Lifecycle hooks
onMounted(async () => {
  // Component initialization
})

// Watchers for reactive updates
watch(likedJokes, (newJokes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newJokes))
}, { deep: true })

// Template refs for DOM access
const sortableRef = ref(null)
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
