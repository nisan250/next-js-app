import React from "react";
import axios from 'axios';
import SpeakerCard from "../src/SpeakerCard";


class Speakers extends React.Component {

    static async getInitialProps () {
        var promise = axios.get('http://localhost:4000/speakers').
        then(response => {
            return {
                hasErrored: false,
                speakerData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
    }


    componentDidMount() {

    }

     componentWillUnmount() {

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.speakerData.map((speaker) =>
                            <div className="card col-4 cardmin margintopbottom" key={speaker.id}>
                                <SpeakerCard speaker={speaker}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Speakers;

