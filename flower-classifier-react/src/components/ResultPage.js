import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.props.img} />
                </div>
                <div className="row">
                    <div>Category: {this.props.result['category']}</div>
                </div>
            </div >
        );
    }
}

export default ResultPage;
