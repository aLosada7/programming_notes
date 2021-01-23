# Testing with React

## Enzime

Creates virtual DOM for testing

For React:
```
npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
```
After this you need to configure it, using the adapter:
```
Enzyme.configure({adapter: new EnzymeAdapter() });
```
Then you can use _shallow_ function to create a "copy" of the DOM. It has not to be of the top level (root) element of the main component.
```
const wrapper = shallow(<App />);
```
We can also dive inside the component we are testing.

### Data-test attribute

It can be used by shallow using _.find(selector)_ function. You can search by id, class, element tag, attribute or universal syntax, and also by React component name and props.
```
const appComponent = wrapper.find("[data-test='component-app']");
expect(appComponent.length).toBe(1);
```
To make it green:
```
<div data-test="component-app"></div>
```

As an advanced DRY goal, abstractions can be introduced in your code:
```
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='{$val}']`);
```

Sometimes you will need to use _.text()_ to convert a number to a string.

## Jest using React

* **create-react-app** includes configuration, webpack and the web server.

* **Jest Watch Mode** - Enter using **npm test**

* **Test basic structure**
```
test("render without error", () => {

});
```

* **Useful functions**
    - Expect
    ```
    expect(wrapper, toBeTruthy()); // it exists
    expect(wrapper, toBeFalsy()); // it does not exists
    expect(appComponent.length).toBe(1); // length must be exactly 1
    ```
    - Simulate
    ```
    wrapper.find('button').simulate('click') // simulate button click
    ```