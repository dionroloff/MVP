import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Avatar, Icon, Button } from 'antd';

class InviteList extends Component {

    buildListItems = (item) => {
        return <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">title</a>}
                description={item.status}
            />
        </List.Item>
    }

    handleInvite = (id, status, event) => {
        this.props.dispatch({
            type: `SEND_INVITE_RESPONSE`,
            payload: { invite_id: id, status: status }
        })
    }

    render() {
        const { invite } = this.props;
        return (
            <List
                itemLayout="vertical"
                dataSource={invite}
                renderItem={invite => (
                    <List.Item actions={[
                        <Button onClick={this.handleInvite.bind(this, invite.invite_id, 'accepted')}> Accept</Button>,
                        <Button onClick={this.handleInvite.bind(this, invite.invite_id, 'rejected')}> Maybe Later</Button>,
                    ]}>
                        <List.Item.Meta
                            avatar={<Avatar src={invite.profile_pic} />}
                            title={`${invite.first_name} ${invite.last_name} invites you to contribute on "${invite.title}"`}
                        />
                    </List.Item>
                )}

            />

        )
    }
};

export default connect()(InviteList);