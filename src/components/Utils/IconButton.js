//@ts-check
import React, {
  Component,
} from "react"
import {
  View
} from 'react-native';
import {
  Icon,
} from 'react-native-elements';

import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class IconButton extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const {
      name,
      size,
      background,
      color
    } = this.props;

    return (
      <Icon
        type='font-awesome'
        onPress={this.props.onPress}
        name={name}
        size={size} />
    );
  }
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number
};

IconButton.defaultProps = {

};

export default IconButton;