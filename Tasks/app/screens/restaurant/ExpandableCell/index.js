import React, { Component,PropTypes} from 'react';

import {
  LayoutAnimation,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles';

export default class ExpandableCell extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor (props) {
    super (props);
    this.state = {
      expanded: false
    }
  }

  componentWillUpdate () {
    LayoutAnimation.linear();
  }

  render () {
    console.log('injected property' + this.props.title);
    return (
        <View style={ styles.expandableCellContainer }>
        <View>
          <TouchableHighlight
            onPress={ () => this._expandCell() }
            underlayColor={ '#D3D3D3' }
          >
            <Text style={{ backgroundColor: '#ededed', height: 150 }} value={this.props.title}/>
          </TouchableHighlight>
        </View>
        <View style={ [styles.hiddenContent, this.state.expanded ? {} : {maxHeight: 0}]}>
          { this.props.children }
        </View>
      </View>
    )
  }

  _expandCell () {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}