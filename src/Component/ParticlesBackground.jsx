import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
 const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

   return (
     <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
            "fpsLimit": 120,
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "polygon",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": [
                        {
                            "nb_sides": 3,
                            "particles": {
                                "opacity": {
                                    "value": 0.1,
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 0.5
                                    }
                                },
                                "size": {
                                    "value": 0.1,
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 10
                                    }
                                },
                                "color": {
                                    "value": "#00ff44"   //triangle color
                                }
                            }
                        },
                        {
                            "nb_sides": 5,
                            "particles": {
                                "opacity": {
                                    "value": 0.1
                                },
                                "size": {
                                    "value": 0.1,
                                    "random": {
                                        "enable": false
                                    }
                                },
                                "color": {
                                    "value": "#00ff44"   //polygon color
                                }
                            }
                        },
                        {
                            "nb_sides": 8,
                            "particles": {
                                "opacity": {
                                    "value": 0.1,
                                    "random": false
                                },
                                "size": {
                                    "value": 0.1,
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 15
                                    }
                                },
                                "color": {
                                    "value": "#00ff44"   //hexagon color
                                }
                            }
                        }
                    ]
                },
                "opacity": {
                    "value": 0,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#cfc7c7",
                    "opacity": 0.4,
                    "width": 3
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble",
                        "parallax": {
                            "enable": false,
                            "force": 60,
                            "smooth": 10
                        }
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 30,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "#343232",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
     
     />
   )
 }
 
 export default ParticlesBackground