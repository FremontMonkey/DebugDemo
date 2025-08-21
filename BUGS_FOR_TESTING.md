# Bug Documentation

## Bugs to be introduced:

### Bug 1: Method Name Typo (Runtime Error)
- **File**: `JokeGeneratorView.vue`
- **Location**: Template, dislike button click handler
- **Change**: `@click="dislikeJoke"` → `@click="dislikeJok"`
- **Expected Impact**: Runtime error when dislike button is clicked
- **Error Type**: Method reference error

### Bug 2: Wrong API Properties (Logic Error)
- **File**: `JokeGeneratorView.vue` 
- **Location**: `fetchJoke()` function
- **Change**: `data.setup + ' ' + data.punchline` → `data.question + ' ' + data.answer`
- **Expected Impact**: Displays "undefined undefined" instead of actual jokes
- **Error Type**: API integration logic error

### Bug 3: Invalid Array Method (Runtime Error)
- **File**: `JokeGeneratorView.vue`
- **Location**: `clearAllJokes()` function  
- **Change**: `likedJokes.value = []` → `likedJokes.value.clear()`
- **Expected Impact**: Runtime error "clear is not a function" 
- **Error Type**: JavaScript method error

### Bug 4: CSS Syntax Error
- **File**: `JokeGeneratorView.vue`
- **Location**: `.joke-generator h1` styles
- **Change**: Add `text-decoration: underline` without semicolon
- **Expected Impact**: CSS parsing issue, potential style problems
- **Error Type**: Syntax error

### Bug 5: Missing Method in Return Statement
- **File**: `JokeGeneratorView.vue`
- **Location**: `setup()` return object
- **Change**: Remove `initSortable` from return (commented out)
- **Expected Impact**: Method not accessible in template if referenced
- **Error Type**: Scope/export error

### Bug 6: Undefined Variable in Template
- **File**: `JokeGeneratorView.vue`
- **Location**: Template section
- **Change**: Add `v-if="undefinedVar"` with undefined variable
- **Expected Impact**: Template compilation warning/error
- **Error Type**: Variable scope error

### Bug 7: Duplicate Script Tag
- **File**: `JokeGeneratorView.vue`
- **Location**: After main `</script>` tag
- **Change**: Add second `</script>` tag
- **Expected Impact**: Template compilation error
- **Error Type**: Template structure error

### Bug 8: Missing Route Component (File Deletion)
- **File**: `router/index.ts` 
- **Location**: Router configuration
- **Change**: Add route reference to file that doesn't exist
- **Expected Impact**: Module resolution error, failed imports
- **Error Type**: File/module not found error

### Bug 9: Function Not Returned from Setup
- **File**: `JokeGeneratorView.vue`
- **Location**: `setup()` return object
- **Change**: Remove `initSortable` from return statement
- **Expected Impact**: Function not accessible, breaks drag-and-drop functionality
- **Error Type**: Vue Composition API scope error