import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'antd';
// import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


class ContributedStoryListItem extends Component {

    handleReadStory = (event) => {
        console.log('in handleRead');
    }

    componentDidMount = () => {
        this.handleDispatch();
    }

    handleDispatch = () => {
        this.props.dispatch({
            type: 'GET_STORY_LIKES',
            payload: this.props.story.contributedStoryReducer[0].story_id
        })
    }

    render() {

        return (
            <div>
                {this.props.storyDetail.likes.length !== 0 ?
                    <Card

                        style={{ width: 300 }}
                        cover={<img width='150px' height='150px' src={this.props.header_photo} alt="story" />}
                    >


<Title level={4}>{this.props.title}</Title>
                <Icon type='like' /><p>{this.props.story.contributedStoryReducer[0].likes}</p>
                       
                    </Card> : (<p>loading...</p>)}


            </div>
        )
    }
};

const mapStateToProps = (reduxStore) => ({
    story: reduxStore.story,
    storyDetail: reduxStore.storyDetail
});

export default connect(mapStateToProps)(ContributedStoryListItem);