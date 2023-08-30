# [KaTeX](https://github.com/KaTeX/KaTeX) Nodes

KaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web.

```litegraph
{
  "title": "Renderer",
  "inputs": [
    { "type": -1, "label": "update" },
    { "label": "template" },
    { "label": "params" }
  ],
  "outputs": [{ "label": "component" }]
}
```

## Slots

### Inputs

| Label                       | Type   | Description                                                      |
| --------------------------- | ------ | ---------------------------------------------------------------- |
| **update**                  | `Event`  | Update the component when the template or parameters are changed |
| [**template**](#1-template) | `string` | TeX source code that supports paramters                          |
| [**params**](#2-params)     | `object` | Parameters                                                       |

### Outputs

| Label         | Type      | Description                               |
| ------------- | --------- | ----------------------------------------- |
| **component** | `component` | UI Component that displays rendered KaTeX |

## Example

### 1. Template

See the [Supported Functions](https://katex.org/docs/supported)  
Learn more about using KaTeX [on the website](https://katex.org)

| Input                        | Rendered                        |
| ---------------------------- | ------------------------------- |
| \sqrt{3x-1}+(1+x)^2          | $\sqrt{3x-1}+(1+x)^2$           |
| \sqrt{ {{~x}}-1}+(1+{{x}})^2 | $\sqrt{ {{[]}}-1}+(1+{{[]}})^2$ |

### 2. Params

See the [Handlebars Expressions](https://handlebarsjs.com/guide/expressions.html)

| Input       | Template                     | Rendered             |
| ----------- | ---------------------------- | -------------------- |
| { "x" : 1 } | \sqrt{ {{~x}}-1}+(1+{{x}})^2 | $\sqrt{1-1}+(1+1)^2$ |


## Source Code

KaTeX-Nodes is Open Source and You can see the code in [Github](https://github.com/DesingExpress/KaTeX-Nodes.git)
## License

KaTeX-Nodes is licensed under the [MIT License](https://opensource.org/licenses/MIT).
