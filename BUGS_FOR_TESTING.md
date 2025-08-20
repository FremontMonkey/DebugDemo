# Bug Documentation for Code Rabbit Testing

**Branch**: `feature/introduce-bugs`  
**Purpose**: Evaluate Code Rabbit's debugging capabilities with clean, undocumented bugs

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

## Implementation Status:
- ✅ Bug 1: Method name typo implemented (`dislikeJok`) - Silent failure
- ✅ Bug 2: API properties implemented (`data.question + data.answer`) - Shows "undefined undefined"
- ⏸️ Bug 3: Array method (commented out - correct version active)
- ⏸️ Bug 4: CSS syntax (commented out - correct version active)
- ⏸️ Bug 5: Missing return (commented out - correct version active)
- ⏸️ Bug 6: Undefined variable (commented out - correct version active)
- ⏸️ Bug 7: Duplicate script tag (commented out - correct version active)

**Currently Active Bugs: 2**
1. **Silent Bug**: `dislikeJok` method - No console error, button just doesn't work
2. **Visible Bug**: Wrong API properties - Displays "undefined undefined" instead of jokes

## Evaluation Criteria:
- Can Code Rabbit identify each bug type?
- Does it provide accurate fix suggestions?
- How detailed are the explanations?
- Does it catch subtle vs obvious errors?
- Speed and accuracy of detection
