import React, { Component } from 'react';
import './App.css';
import AddPost from './AddPost';
import RedditPost from './RedditPost/RedditPost';
import _ from 'lodash';
import firebase from 'firebase';
import moment from 'moment';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redditPosts: {}
    }
    firebase.database().ref('posts')
    .on('value', (snapshot) => {
      this.setState({redditPosts: snapshot.val()})
  })
}

  render() {
    return (
      <div className="App">
      <AddPost onAdd={(redditPost)=> {
        const newRedditPost = {...redditPost, comments: 5, submitted:moment().format()}
        firebase.database().ref('posts').push(newRedditPost)
      }} />
        {_.map(this.state.redditPosts, redditPost => {
          return <RedditPost 
          title={redditPost.title} 
          comments={redditPost.comments} 
          submitted={redditPost.submitted}
           />
        })}
      </div>
    );
  } 
}

export default App;
