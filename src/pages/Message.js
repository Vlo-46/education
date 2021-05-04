import React, {useState, useEffect} from 'react'
import axios from "axios";
import keys from '../keys'
import openSocket from "socket.io-client";

const ExampleMessage = () => {
    const socket = openSocket(`http://localhost:5000/`, {transports: ['websocket']})
    // const [user, setUser] = useState(null)
    // const [message, setMessage] = useState('')
    // const [userMessage, setUserMessage] = useState(null)

    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])

    useEffect(() => {
        let cleanupFunction = false;
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id: 2}
        })
            .then(res => {
                socket.emit('joined user', {user: res.data.user})
            })

        return () => cleanupFunction = true;
    }, [allMessages])

    socket.on('new message', data => {
        console.log(data)
    })


    let GET_VALUE = e => {
        setMessage(e.target.value)
    }

    let SEND_MSG = e => {
        e.preventDefault()
        socket.emit('new message', message)
    }

    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center mt-5'}>
                <form className={'w-50 border p-3'}>
                    <p>Type message</p>
                    <textarea style={{resize: 'none', height: '200px'}}
                              className={'form-control'}
                              onChange={GET_VALUE}
                    />
                    <button
                        className={'btn btn-outline-success mt-2'}
                        type={'submit'}
                        onClick={SEND_MSG}
                    >
                        Send
                    </button>
                </form>
            </div>
            {
                allMessages
                    ? <h1>{allMessages.length}</h1>
                    : null
            }

            <div className={'messages_list mt-5'}>
                <div className="alert alert-secondary mt-3" role="alert">
                    hello world
                </div>
                <div className="alert alert-secondary mt-3" role="alert">
                    privet
                </div>
                <div className="alert alert-secondary mt-3" role="alert">
                    hello world
                </div>
            </div>

        </div>
    )
}

export default ExampleMessage