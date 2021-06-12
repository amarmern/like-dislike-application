import cx from 'classnames';
import { Component } from 'react';

const likes = 100;
const dislikes = 25;

export default class LikeDislike extends Component {
    constructor(props) {
    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.dislikeHandler = this.dislikeHandler.bind(this);

    this.state = {
      likeCount: likes,
      dislikeCount: dislikes
    };
    }

    likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState(state => ({
        likeCount: state.likeCount + 1,
        dislikeCount: dislikes
      }));
    }
  }

  dislikeHandler() {
    if (this.state.dislikeCount === dislikes) {
      this.setState(state => ({
        dislikeCount: state.dislikeCount + 1,
        likeCount: likes
      }));
    }
  }

    render() {
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                    <button className="like-button liked" onClick={this.likeHandler}>Like | {this.state.likeCount}</button>
                     <button className="dislike-button disliked"  onClick={this.dislikeHandler}>Dislike |{this.state.dislikeCount}</button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                        margin-right: 10px;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
