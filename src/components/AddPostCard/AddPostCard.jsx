import { Component } from 'react';
import './AddPostCard.css'

export default class AddPostCard extends Component {

  state = {
    user: this.props.user,
    content:this.props.content,
  };

  handleEdit = async (evt) => {
    evt.preventDefault(); 
    try {
      const {user, content} = this.state;
      const postData = {user, content};
      const postId = this.props.postId;
      const post = await this.props.handleUpdatePost(postId, postData);
      this.props.showUpdateCard(0);
    } catch {
      console.log('Post Failed to Upload');
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try { 
      const {user, content} = this.state;
      const postData = {user, content}
      const post = await this.props.handleAddPost(postData);
      this.props.setAddPostCard(0);
    } catch {
      console.log('Post Failed to Upload');
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return(
      <div className="AddPostCard">
        <h1>Write Something!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
          { this.props.edit ?
            <button onClick={this.handleEdit}>Edit!</button>  
            :
            <button type="submit">Post!</button>
          }
        </form>
      </div>
    );
  }

}