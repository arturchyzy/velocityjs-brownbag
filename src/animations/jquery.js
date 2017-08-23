import $ from 'jquery';

function animation(id) {

    $(`#${id}`).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function () {
        console.log('animation complete');
    });

}

export default animation;