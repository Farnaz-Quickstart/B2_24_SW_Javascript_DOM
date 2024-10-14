# Document Object Model
"The DOM(or Document Object Model) is a tree-like representation of the web page that gets loaded into the browser.
It represents the web page using a‌‌ series of objects. The main object is the document object, which in turn houses other objects which also house their own objects, and so on."

## Selecting Element in the DOM
### 1- getElementById
The Document method getElementById() returns an Element an object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

```
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = "red";
}
```

### 2- getElementsByTagName
search element by tag name (e.g., span, div)

The Element.getElementsByTagName() method turns a live HTMLCollection of elements with the given tag name.

When called on an HTML element in an HTML document, getElementsByTagName lower-case the argument before searching for it. This is undesirable when trying to match camel-cased SVG elements (such as <linearGradient>) in an HTML document. Instead, use Element.getElementsByTagNameNS(), which preserves the capitalization of the tag name.

```
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
    cells[i].style.color = "red";
  }
```

### 3- getElementsByClassName
Search element by class name

The Element method getElementsByClassName() returns a live HTMLCollection which contains every descendant element which has the specified class name or names.

```
element.getElementsByClassName("test");
for (let i = 0; i < elems.length; i++) {
    elems[i].style.color = "red";
  }
```

### 4- getElementsByName
Search element by the name attribute. The getElementsByName() method of the Document object returns a NodeList Collection of elements with a given name attribute in the document
```
const up_names = document.getElementsByName("up");
for (let i = 0; i < elems.length; i++) {
    elems[i].style.color = "red";
  }
```

### 5- querySelector
returns the first element that matches the specified selector

The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
```
const el = document.querySelector(".myclass");
elem.style.color = "red";
```

### 6- querySelectorAll
returns elements that match the specified selector

The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
```
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted");
for (let i = 0; i < matches.length; i++) {
    matches[i].style.color = "red";
  }
```