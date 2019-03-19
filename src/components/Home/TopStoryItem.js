import React, { Component } from 'react';
import { connect } from 'react-redux';

//Ant design imports
import { Card, Avatar, Button, Icon } from 'antd';
const { Meta } = Card;

class TopStoryItem extends Component {

    handleReadStory = (event) => {
        console.log('in hRS');
        
        this.props.history.push(`/existing-story/${this.props.id}`);
    }

    render() {

        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="headshot of author" src={this.props.header_photo} />}
                    actions={[<Button onClick={this.handleReadStory}>Read</Button>]}
                >
                    <Meta
                        avatar={<Avatar src={this.props.profile_pic} />}
                        title={this.props.title}
                    />
                    <h4>{this.props.name}</h4>
                    <Icon type='like' /><p>{this.props.likes}</p>
                </Card>
            </div>
        )
    }
};

const mapStateToProps = (reduxStore) => ({
    story: reduxStore.story,
    storyDetail: reduxStore.storyDetail
});

export default connect(mapStateToProps)(TopStoryItem);
// export default TopStoryItem;