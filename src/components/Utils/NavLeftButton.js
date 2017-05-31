
import PureRenderMixin from 'react-addons-pure-render-mixin';
import IconButton from './IconButton';
import React, {
  Component,
} from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class NavLeftButtons extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <View>
        <View>
          <IconButton
            onPress={this.props.onPress}
            name={this.props.name}
            color={this.props.color}
            size={this.props.size} />
        </View>
      </View>
    );
  }
}

NavLeftButtons.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
};

NavLeftButtons.defaultProps = {
  size: 25,
  color: '#FFFFFF',
  name: 'bars'
};

export default NavLeftButtons;
