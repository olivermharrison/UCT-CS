# Code Fundamentals

## Dynamically vs Statically Typed Languages

::: tip Dynamically Typed Language
> A variable can have different values of different types at different times.
***
* The value has a type, but the variable itself does not. 
* e.g.) Python, Javascript
:::

::: tip Statically Typed Language
> A variable itself has a type.
***
* If `x` is an integer, it can only ever an integer.
* e.g.) Java, Typescript
:::

## Strings

### String Representation

::: warning ASCII
> American Standard Code for Information Exchange
:::
::: warning Unicode
> A character set that includes all the ASCII characters plus many more.
:::

## Loops
Loops repeat a sequence of statements, _the body_, multiple times in succession.


> `break` - stops the loop  
> `continue` - stops the current iteration and continues to the next

> **One-by-one error** - when a loop repeats itself one too many/few times


### Types of Loops

::: warning Definite Loop
> Know exactly how many times it will iterate.
***
* `for`
:::

::: warning Indefinite Loop
> Iterates until a certain condition is met. 
***
* `while`
:::

::: warning Nested Loop
> When a loop is placed within another loop.
***
* The inner loop iterates to completion for each iteration of the outer loop.
:::


## Recursion
> The process of solving a problem by defining the problem in terms of s smaller version of itself

::: warning Key Elements
1. one or more recursive calls
2. a stopping condition (base case)
:::