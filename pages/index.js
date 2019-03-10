import React from "react";
import axios from "axios";
import Link from "next/link";

class Index extends React.Component {
    static async getInitialProps() {
        var promise = axios.get('http://localhost:4000/speakers').
        then(response => {
            return {
                hasErrored: false,
                speakerData: response.data
            }
        })
        .catch(error => {
            return {
                hasErrored: true,
                message: error.message
            }     
        })

        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message:  props.message,
            speakerData: props.speakerData
        }
    }

    render() {
        return  (
            <div>
                <nav>
                    <Link href='/'>
                        <a>SPEAKERS</a>
                    </Link>
                    <Link href='/sessions'>
                        <a>SESSIONS</a>
                    </Link>
                </nav>

                <ul>
                    {this.state.speakerData.map((speaker) => 
                        <li key={speaker.id}>
                            {speaker.firstName} {speaker.lastName}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Index;