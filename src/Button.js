

export default class Button extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      orange: PropTypes.bool,
      wide: PropTypes.bool,
      clickHandler: PropTypes.func,
    };
  
    handleClick = () => {
      this.props.clickHandler(this.props.name);
    };