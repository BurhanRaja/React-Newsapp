# NewsApp

1. Using free News API

URL:- https://newsapi.org/ 
I used the above link to get the API and Iused the data given in json format in my website NewsMonkey. 

2. State in class based components

- Here, you can use state by calling a constructor. In that constructor it is necessary to include `super()` because it will help display website or you will get an error.
- `Props` are for read-only purpose but you can change the `State`.
- You can initialize state by `this.state = { }` and set it by `this.setState`.

3. Promises, Async and Await

- When you have to load some data on the website it is called 'producing code' and the result of producing code is called 'consuming code'. Promises is used to link both producing code and consuming code.  
- Async is used to make sure that it will return promises, if empty return something promises.
- Await is always used with Async, it waits on the result to return i.e. return some data.

4. Fetching data from URL using `componentDidMount()`

- `constructor()` loads 1st, `render()` loads 2nd and `componentDidMount()` will load at last.

5. Added Next and Previous button for the News navigation

- The functions created for next and previous button are `handleNextClick()` and `handelPrevClick` respectively.

6. Loading Spinner added using some logic

7. Adding category, country and pageSize as props in URL

8. Adding Author's name and Date & Time as a props to display on website

9. Three react lifecycle methods

- `componentDidMount()` for mounting means to define the component
- `componentDidUpdate()` for updating
- `componentWillMount()` for unmounting means to delete the component

10. Added an Infinite Scroll in the web app

- Install this to use infinite scroll ``` npm install --save react-infinite-scroll-component ```

11. Added a Loading bar on the top.