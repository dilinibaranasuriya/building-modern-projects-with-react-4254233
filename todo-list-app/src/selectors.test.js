import { getCompletedTodos } from "./selectors.js";

function testSelectors() {
  const fakeState = {
    todos: {
      value: [{
        text: 'Task One',
        isCompleted: false,
      },{
        text: 'Task Two',
        isCompleted: true,
      }]
    }
  }

  const result = getCompletedTodos(fakeState);

  if(result.length === 1 && result[0].text === 'Task Two') {
    console.log('getcompletedTodos works!');
  } else {
    throw new Error('getCompletedTodos does not work');
  }
}

testSelectors();