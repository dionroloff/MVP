import React, { Component } from 'react';
import ContributedListItem from './ContributedListItem';

import propTypes from 'prop-types';

import { connect } from 'react-redux';

import { Carousel } from 'antd';



class ContributedList extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MY_CONTRIBUTIONS' });
    }

    static propTypes = {
        contributedStories: propTypes.array.isRequired,
    };




    render() {
        //these lines will render 'story' or 'stories' depending on the length
        //of the contributedStoryReducer
        let header;

        if (this.props.contributedStories.length === 1) {
            header = <h4>1 story live</h4>;
        } else {
            header = <h4>{this.props.contributedStories.length} stories live</h4>
        }

        return (
            <div className='contributions'>
                <h3>My stories and contributions</h3>
                {/* this line below will conditionally render 'story' or 'stories' depending on length of reducer */}

                {header}

                {/* this div contains the actual story blocks */}

                <div>
                    <Carousel swipeToSlide>
                        {this.props.contributedStories.map((story, i) => {
                            return <ContributedListItem
                                history={this.props.history}
                                story_id={story.story_id}
                                key={i}
                                header_photo={story.header_photo}
                                title={story.title}
                                intro={story.intro}
                                //combining the DB columns into a props item 'author'
                                //for simplicity on the client
                                author={story.first_name + ' ' + story.last_name}
                                profile_pic={story.profile_pic}
                            />
                            

                        })}
                    </Carousel>
                </div>
            </div>

        )
    }
};

const mapStateToProps = (state) => ({
    contributedStories: state.story.contributedStoryReducer
});

export default connect(mapStateToProps)(ContributedList);