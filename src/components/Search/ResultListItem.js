import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { List, Icon, Avatar, Card, Row, Col } from 'antd';

class ResultListItem extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

  render() {
      const { item } = this.props;
      const { Meta } = Card;
      console.log(item);
    return (
      <Row>
        <Col span={12}>            
        <List.Item
        >
          <List.Item.Meta
            title={item.title}
            description={item.intro}
          />
          {item.content}
        </List.Item>
          <List.Item
            key={item.title}
            actions={[<Icon type="star-o" text={item.likes} />, <Icon type="like-o" text="156" />, <Icon type="message" text="2" />]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.profile_pic} />}
              description={item.full_name}
            />
          </List.Item>
        </Col>
        <Col span={12}><Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.header_photo} />}
        >
          <Meta
            description={item.caption}
          />
        </Card></Col>
      </Row>

    )
  }
}

export default withRouter(ResultListItem);
