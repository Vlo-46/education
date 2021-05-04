import React from 'react'
import Particles from "react-particles-js";

const Particle = () => {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 10,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": 1,
                        "out_mode": "out"
                    },
                    "shape": {
                        "type": [
                            "image",
                            "circle"
                        ],
                        "image": [
                            {
                                "src": "assets/icons/interactive-icon-1.png",
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": "assets/icons/interactive-icon-2.png",
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": "assets/icons/interactive-icon-3.png",
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": "assets/icons/interactive-icon-4.png",
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": "assets/icons/interactive-icon-5.png",
                                "height": 20,
                                "width": 23
                            },
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    "size": {
                        "value": 30,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                // "retina_detect": false
            }}
            style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                minWidth: "100%",
                minHeight: "100%",
            }}
        />
    )
}

export default Particle