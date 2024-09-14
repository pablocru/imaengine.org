# Imaengine

Website to discuss about the latest technologies about manufacturing.

## How to create multiline string in `.yml` files

I configure `VSCode` to place a visual vertical line after 90 monospace characters to
avoid horizontal scrolling on smaller devices. I manually insert line breaks at this
limit. In `.yml` files you can write multiline strings that will be rendered as a single
line when processed with the `>-` symbol:

```yml
multilineString: >-
  The greater-than symbol (>) allow multiline string
  The dash or hyphen symbol (-) removes the new line char (\n) at the end
```

## How to properly set up Conditional Rendering in Astro

The AND operator (&&) used in an Astro template will return the actual value of the fist
hand of the expression if it is falsy. So, for example, if an array called "routes" is
empty, a 0 will be printed. To avoid that, using the double exclamation mark (!!) will
cast it to boolean. That is useful because Astro won't print "false" in the UI.

```astro
---
const fruitList: string[] = ["apple", "orange", "bananas"];
---

<>
  {
    !!fruitList.length && (
      <ul>
        {fruitList.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    )
  }
</>
```

## Bugs or suggestions

If you found a bug or have a suggestion please don't hesitate to open an
[issue on GitHub](https://github.com/pablocru/imaengine.org/issues).
