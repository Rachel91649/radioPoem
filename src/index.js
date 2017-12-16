const React = require("react");
const ReactDOM = require("react-dom");

class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      fontSize: ""
    };
    this.fontSizes = ["small", "medium", "large", "humongous"];
  }

  handleFontSizeChange = event => {
    this.setState({
      fontSize: event.target.value
    });
  };
  render() {
    const { fontSize } = this.state;
    
    let fonts = {};
    if (fontSize === "small") {
      fonts.fontSize = "10px";
    }
    if (fontSize === "medium") {
      fonts.fontSize = "14px";
    }
    if (fontSize === "large") {
      fonts.fontSize = "18px";
    }
    if (fontSize === "humongous") {
      fonts.fontSize = "28px";
    }
    //console.log(fontSize);
    return (
      <div>
        <ul>
          {this.fontSizes.map(size => (
            <li>
              {size}
              <input
                type="radio"
                value={size}
                checked={fontSize === size}
                onChange={this.handleFontSizeChange}
              />
            </li>
          ))}
        </ul>

        <pre className={fontSize}>{`
        "You are old, Father William," the young man said,
        "And your hair has become very white; 
        And yet you incessantly stand on your head—
        Do you think, at your age, it is right?"
       

        "In my youth," Father William replied to his son,
        "I feared it might injure the brain;
        But now that I'm perfectly sure I have none,
        Why, I do it again and again."`
        }</pre>
      </div>
    );
  }
}

ReactDOM.render(<Reader />, document.getElementById("root"));
