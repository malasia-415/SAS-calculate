

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

    render() {
        const className = [
          "component-button",
          this.props.orange ? "orange" : "",
          this.props.wide ? "wide" : "",
        ];
    