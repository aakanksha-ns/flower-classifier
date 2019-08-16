import '../styles/LandingPage.css'
var React = require("react");

class LandingPage extends React.Component {
    render() {
        let image;
        if (this.props.img) {
            image = <div className="row"><div className="col-12 center-div"><img src={this.props.img} className="center-div image-preview" /></div></div>
        } else {
            image = <div className="row"></div>
        }
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 header">
                        Flower Classifier
                    </h1>
                </div>
                <div className="row">
                    <div className="col-12 message">
                        This simple flower classifier can identify the following flowers using their image:
                        Daisy, Dandelion, Rose, Sunflower and Tulip.
                        Upload your image below:
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 center-div choose-file">
                        <input type="file" name="file" id="file" class="choose" onChange={this.props.handleChange} />
                        <label for="file">Choose a file</label>
                    </div>
                </div>
                {image}
                <footer>
                    <div className="row footer">
                        <div className="col-12 center-div">
                            <button type="button" className="btn btn-primary upload-button" onClick={this.props.fetchResult}>Upload</button>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LandingPage;
