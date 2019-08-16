import LandingPage from '../components/LandingPage';
import ResultPage from '../components/ResultPage';
var React = require("react");

class FlowerClassifier extends React.Component {
    state = {
        currentStep: 0
    }
    handleChange = (event) => {
        this.setState({
            img_file: event.target.files[0],
            img_obj: URL.createObjectURL(event.target.files[0])
        })
    };
    fetchResult = () => {
        console.log('im gonna post request');
        var formData = new FormData();
        formData.append('image', this.state.img_file);
        fetch('https://flower-classifier.onrender.com/predict', {
            method: 'POST',
            body: formData
        }).then(
            resp => {
                console.log(resp)
                resp.json().then(data => {
                    this.setState({
                        currentStep: 1,
                        response: data
                    });
                });
            }
        );

    };
    render() {
        if (this.state.currentStep === 0) {
            return (
                <LandingPage handleChange={this.handleChange} fetchResult={this.fetchResult} img={this.state.img_obj} />
            );
        } else {
            return (
                <div>
                    <ResultPage img={this.state.img_obj} result={this.state.response} />
                </div >
            );
        }
    }
}

export default FlowerClassifier;
