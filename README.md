# type-vo

A generic set of Typescript Value Objects for use in any project.

*A work in progress, please check back soon*

[Wikipedia](https://en.wikipedia.org/wiki/Domain-driven_design)
> When people exchange business cards, they generally do not distinguish between each unique card; they only are concerned about the information printed on the card. In this context, business cards are value objects.

## Table of contents
* [Installation](#installation)
* [Philosophy](#philosophy)

## Installation
```shell
Not published to NPM yet!
```

## Philosophy
To make this code consistent, we've stuck to a certain set of restrictions:

### Rules
* [**Must** be immutable](#must-be-immutable)
* [**Must** contain one value](#must-contain-one-value)
* [**Can** instantiate new object from value](#can-instantiate-new-object-from-value)
* [**Can** be created from multiple arguments](#can-be-created-from-multiple-arguments)
* [**Can** be equal regardless of object](#can-be-equal-regardless-of-object)
* [**Must** have a zero lifespan](#must-have-a-zero-lifespan)


*Disclaimer: This is my interpretation of "The rules".*

#### Must be immutable
The value object's value must be set at the time of construction.
At no point should the value be mutated within the object.

#### Must contain one value
The value object can only be constructed from one value, this can be 
any of the following types:
* boolean 
* integer
* float/double
* string
* array
* object
* resource
* null 

#### Can instantiate new object from value
Rather than mutating, a new object can be instantiated from an existing one.

## Work in progress
More documentation will follow...
