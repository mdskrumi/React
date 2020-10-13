import React from 'react';
import { connect } from 'react-redux';

import { fetchPostAndUser } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostAndUser();
    }
    renderContent() {
        console.log(this.props.posts);
        if (!this.props.posts) {
            return (
                <div class="ui active dimmer">
                    <div class="ui indeterminate text loader">Preparing Files</div>
                </div>
            )

        }
        return (
            this.props.posts.map((post) => {
                return (
                    <div style={{ padding: '10px' }} key={post.id}>
                        <div className="item" >
                            <i className="large middle aligned icon user" />
                            <div className="content">
                                <div className="description">
                                    <h2>
                                        {post.title}
                                    </h2>
                                    <p>
                                        {post.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <UserHeader uID={post.userId} />
                        <hr />
                    </div>
                );
            })
        );
    }

    render() {
        return <div className="ui relaxed devided list" style={{ padding: '10px' }}> {this.renderContent()} </div>

    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return { posts: state.posts };
}

export default connect(mapStateToProps, {
    fetchPostAndUser,
})(PostList);