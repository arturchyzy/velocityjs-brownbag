import Velocity from 'velocity-animate';

function animation(id) {

    const element = document.querySelector(`#${id}`);

        Velocity(element, {
            opacity: 0.25,
        }, {
            duration: 1400
        });
        Velocity(element, {
            opacity: 1,
            left: "+=50",
        }, {
            duration: 1400
        });
}

export default animation;