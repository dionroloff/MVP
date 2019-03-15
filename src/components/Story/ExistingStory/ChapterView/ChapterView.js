import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import ChapterEditButton from './ChapterEditButton';

import { PageHeader, Pagination, Card } from 'antd';

class ChapterView extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        contributor: PropTypes.array.isRequired,
    };

    turnPage = (page, pageSize) => {
        this.props.history.push(`${page}`)
    }

    render() {
        //took out likes for now
        const { summary, chapter, contributor, editMode } = this.props;
        const { chapterId } = this.props.match.params;

        // console.log('editMode:', this.state.editMode);
        const contributorSum = contributor.length;
        let contributorDescription;
        if (contributorSum === 0) {
            contributorDescription = '';
        } else if (contributorSum === 1) {
            contributorDescription = ' and one contributor';
        } else if (contributorSum < 2) {
            contributorDescription = ` and ${contributorSum} contributors`;
        }
        const currChapter = chapter[chapterId - 1];
        // console.log(currChapter);
        return (

            <div>
                {currChapter !== undefined ?
                    <div>
                        <PageHeader
                            title={`Chapter ${chapterId}: ${currChapter.title}`}
                            subTitle={`in story "${summary[0].title}" by ${summary[0].author_name}${contributorDescription}. `}
                        />
                        {editMode &&
                            <ChapterEditButton
                                valueToEdit={currChapter.title}
                                type='Chapter'
                                name='Title'
                                id={currChapter.id} />}
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt={`Chapter ${chapterId} header`} src={currChapter.chapter_photo} />}
                        >
                            <Card.Meta
                                description={currChapter.text}
                            />
                        </Card>
                        {editMode &&
                        <ChapterEditButton
                            valueToEdit={currChapter.text}
                            type='Chapter'
                            name='Text'
                            id={currChapter.id} />
                        }
                        <Pagination
                            defaultCurrent={Number(chapterId)}
                            pageSize={1}
                            total={Number(chapter.length)}
                            onChange={this.turnPage} />
                    </div>
                    :
                    <p> Page is loading.</p>
                }
            </div>
        )
    }
};

const ChapterViewWithRouter = withRouter(ChapterView);

export default connect()(ChapterViewWithRouter);