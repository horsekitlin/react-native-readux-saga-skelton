import PureRenderMixin from 'react-addons-pure-render-mixin';
import IconButton from './IconButton';
import React, {
  Component,
} from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class NavRightButtons extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  renderButton(button: Object, index: number) {
    return (
      <View
        key={`navbarrightbutton${index}`}>
        <IconButton
          onPress={button.onPress}
          name={button.icon}
          color={button.color}
          size={button.size} />
      </View>
    );
  }
  render() {
    return (
      <View>
        {this.props.buttons.map(this.renderButton)}
      </View>
    );
  }
}

NavRightButtons.propTypes = {

};

export default NavRightButtons;
