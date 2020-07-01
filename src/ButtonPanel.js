

export default class ButtonPanel extends React.Component {
    static propTypes = {
      clickHandler: PropTypes.func,
    };
  
    handleClick = buttonName => {
      this.props.clickHandler(buttonName);
    };
  