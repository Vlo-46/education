import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import Layout from "../../../layout/Layout";
import keys from "../../../keys";
import {getTeacher} from "../../../redux/actions/profileAction";
import VideoField from "../../VideoChat/VideoField";
import VideoMessagesField from "../../VideoChat/VideoMessagesField";
import openSocket from "socket.io-client";
import {roomUsers} from "../../../redux/actions/roomChatAction";

const VideoChat = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        if (localStorage.getItem(keys.AUTH)) {
            let auth = JSON.parse(localStorage.getItem(keys.AUTH))
            dispatch(getTeacher(auth))

            socket.on('room', rooms => {
                dispatch(roomUsers(rooms))
            })
        }
    }, []);

    const {id} = useParams()

    let candidate = useSelector(state => state.profile.candidate)

    if (candidate) {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.emit('connect room', {
            room: {
                roomId: id,
                user: candidate
            }
        })
    }

    return (
        <Layout>
            {
                candidate
                    ? <div className="mt-5 mb-5" style={{marginLeft: "100px", marginRight: "100px"}}>
                        <div className="row">
                            <div className="col-md-7">
                                <VideoField/>
                            </div>
                            <div className="col-md-5">
                                <VideoMessagesField candidate={candidate}/>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </Layout>
    )
}

export default VideoChat