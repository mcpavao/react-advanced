import React from 'react';
import './App.css';

class App extends React.Component {
  state ={
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O Corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O Corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O Corpo 3'
      },
    ]
  };

  componentDidMount() {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou';

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>   
          </div>
        ))}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
