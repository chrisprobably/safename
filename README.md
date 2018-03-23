# safeclassname
Micro-library for JS that generates a safe CSS classname from a string.  

# Behaviour

* Spaces are replaced with `-`.
* Special characters are replaced with `_x<charCode>` e.g. `!` is replaced with `_x21`.
* If passed undefined or null, safeclassname will return an empty string.

# Examples

* `safeclassname('Some sentence')` - returns `"Some-sentence"`
* `safeclassname('super!')` - returns `"super_x21"`
* `safeclassname(undefined)` - returns `""`
* `safeclassname(null)` - returns `""`

