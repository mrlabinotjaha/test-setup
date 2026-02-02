# Test Setup

Simple setup verification tests for JavaScript and Python. Implement the TODO functions and make all tests pass.

## JavaScript

```bash
cd js
make install
make run-test
```

### What to implement

In `js/math.js`, implement the following functions:

- `add(a, b)` — return the sum (already done as example)
- `subtract(a, b)` — return the difference
- `multiply(a, b)` — return the product
- `divide(a, b)` — return the result, throw `"Cannot divide by zero"` if `b` is 0

## Python

```bash
cd python
make setup
make test
```

### What to implement

In `python/utils.py`, implement the following functions:

- `greet(name)` — return `"Hello, {name}!"` (already done as example)
- `is_even(n)` — return `True` if even, `False` otherwise
- `reverse_string(s)` — return the reversed string
- `find_max(numbers)` — return the largest number, raise `ValueError("List is empty")` if the list is empty
