import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {this.props.result['category']}</div>
                </div>
                <div className="row center-div probs-outer">
                    <div className="col-12 center-div probs-title">
                        Probabilities for each class:
                    </div>
                    <div className="col-12 center-div probs">
                        Daisy: {this.props.result['probs']['daisy']}
                    </div>
                    <div className="col-12 center-div probs">
                        Rose: {this.props.result['probs']['rose']}
                    </div>
                    <div className="col-12 center-div probs">
                        Sunflower: {this.props.result['probs']['sunflower']}
                    </div>
                    <div className="col-12 center-div probs">
                        Tulip: {this.props.result['probs']['tulip']}
                    </div>
                    <div className="col-12 center-div probs">
                        Dandelion: {this.props.result['probs']['dandelion']}
                    </div>
                </div>
            </div >
        );
    }
}

export default ResultPage;
