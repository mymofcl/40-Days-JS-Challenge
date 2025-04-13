## 1. What will be the output of this code snippet and why?
 ```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}
```
### Output
```
    It's a normal day.
```
Becouse of the case Sensitivity issues of `Javascript` Programming Language.