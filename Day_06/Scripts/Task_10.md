## Creating Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```

### The Call Stack Execution Diagram
![CallStack_2](../Images/CallStack_2.png)