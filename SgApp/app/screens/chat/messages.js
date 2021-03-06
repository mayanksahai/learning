import React from 'react';
import { connect } from 'react-redux';
import { View, Spinner } from '@shoutem/ui';

import MessageList from './chatMessage';
import { updateMessagesHeight } from '../../redux/actions/chatroom';

const mapStateToProps = (state) => ({
    messages: state.chatroom.messages,
    isFetching: state.chatroom.meta.isFetching
});

const Messages = connect(
    mapStateToProps
)(({ messages, isFetching, dispatch }) => {
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                paddingBottom: 50}}>
                <Spinner />
            </View>
        )
    }else{
        return <MessageList messages={messages}
                            style={{minHeight: 100}}
                            onLayout={(event) => dispatch(updateMessagesHeight(event))} />
    }
});

export default Messages;