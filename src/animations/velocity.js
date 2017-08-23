import Velocity from 'velocity-animate';

let counter = 1;

function animation(id) {

    const element = document.querySelector(`#${id}`);

    if (counter  %2 === 1) {
        Velocity(element, {
            opacity: 0.25,
            left: "+=50",
            height: "/=2"
        }, {
            duration: 400
        });
    }
    if (counter %2 === 0) {
        Velocity(element, {
            opacity: 1,
            left: "+=50",
            height : 500,
        }, {
            duration: 400
        });
    }
    counter++;


}

export default animation;