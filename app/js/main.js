document.addEventListener('DOMContentLoaded', () => {
    const preset = {
        actionsStart: function () {
            colorInterval = setInterval(function () {
                /*TODO: Need refactoring*/
                dotColorTween = jsband.ColorTween.run(animation, "dotColor", "rgb(" + 255 * Math.random() + "," + 255 * Math.random() + "," + 255 * Math.random() + ")", jsband.Ease.lin(), 1000)
            }, 1000)
        },

        backColor: "black",
        titleColor: "white",
        presetMenuTheme: "white",

        BLOB_SIZE: 220,
        BLOB_DISTANCE: 0,
        DETALISATION: 60,
        PERSPECTIVE_DISTORTION: 5,
        ROTATION_SPEED: 2,

        DOT_SIZE: 1,
        DOT_COLOR: "gray",

        MOUSE_DISTANCE_MIN: 20,
        MOUSE_DISTANCE_MAX: 2,
        MOUSE_SENSITIVITY: 0.1,
        INERTIAL_TIME: 2,

        INITIAL_SHAPE: {
            wave1: {amplitude: 70, frequency: 3, phase: 0},
            wave2: {amplitude: 60, frequency: 2, phase: 0},
            wave3: {amplitude: 50, frequency: 2, phase: 0}
        },
        USE_MORPHING: false,
        USE_WAVE_MOTION: true,
        USE_WAVE_SWING: false,

        WAVE_1_MOTION_SPEED: 0.35,
        WAVE_2_MOTION_SPEED: 0.3,
        WAVE_3_MOTION_SPEED: 0.5
    };

    const animation = new TenderOnlineAnimation("animation_container", preset);
    if (preset.actionsStart) preset.actionsStart();


    const identifiers = [
        {
            modal: 'modal1',
            button: 'customer',
            wrapper: 'wrapper1'
        },
        {
            modal: 'modal2',
            button: 'participant',
            wrapper: 'wrapper2'
        }];

    const closeButtonsId = ['modal-close', 'modal-close-2', 'modal-close-3', 'modal-close-4'];


    identifiers.forEach(identifier => {
        const modal = document.getElementById(identifier.modal);
        const button = document.getElementById(identifier.button);
        const wrapper = document.getElementById(identifier.wrapper);

        closeButtonsId.forEach(closeButtonId => {
            const button = document.getElementById(closeButtonId);

            button.addEventListener('click', () => {
                modal.classList.remove('md-show');
                wrapper.classList.remove('show-wrapper')
            })
        });

        button.addEventListener('click', () => {
            modal.classList.add('md-show');
            wrapper.classList.add('show-wrapper');
        });
    });

    const modalElemets = ['md-customer-content__1', 'md-customer-content__2', 'md-customer-content__3', 'md-customer-content__4'];


    const element1 = document.getElementById('md-customer-content__1');
    const element2 = document.getElementById('md-customer-content__2');
    const element3 = document.getElementById('md-customer-content__3');
    const element4 = document.getElementById('md-customer-content__4');
    const wrapper = document.getElementById('wrapper1');


    const style = window.getComputedStyle(element1);

    const top = style.height.slice(0, -2) - 0.1 * style.height.slice(0, -2);


    element2.style.top = `${top + 20}px`;
    element3.style.top = `${top + 45}px`;
    element4.style.top = `${top + 70}px`;

    if (document.documentElement.clientWidth < 550) {
        element2.style.top = `${top + 40}px`;
        element3.style.top = `${top + 55}px`;
        element4.style.top = `${top + 75}px`;
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 550) {
            element2.style.top = `${top + 40}px`;
            element3.style.top = `${top + 65}px`;
            element4.style.top = `${top + 90}px`;
        } else {
            element2.style.top = `${top + 20}px`;
            element3.style.top = `${top + 45}px`;
            element4.style.top = `${top + 70}px`;
        }
    });

    window.addEventListener('keydown', (e) => {

        if (element1) {
            if (e.key === "ArrowDown") {
                element2.style.top = `22px`;
            }
            if (e.key === "ArrowUp" && element3.offsetTop !== 42) {
                if (window.innerWidth < 550) {
                    element2.style.top = `${top + 40}px`;
                } else {
                    element2.style.top = `${top + 20}px`;
                }
            }
        }

        if (element2.offsetTop === 22) {
            if (e.key === "ArrowDown") {
                element3.style.top = `42px`;
            }
            if (e.key === "ArrowUp" && element4.offsetTop !== 66) {
                if (window.innerWidth < 550) {
                    element3.style.top = `${top + 55}px`;
                } else {
                    element3.style.top = `${top + 45}px`;
                }
            }
        }

        if (element3.offsetTop === 42) {
            if (e.key === "ArrowDown") {
                element4.style.top = `66px`;
            }
            if (e.key === "ArrowUp") {
                if (window.innerWidth < 550) {
                    element4.style.top = `${top + 75}px`;
                } else {
                    element4.style.top = `${top + 70}px`;
                }
            }
        }
    });

    window.addEventListener("wheel", (e) => {

        if (e.deltaY > 0) {
            element2.style.top = `22px`;
        }
        if (e.deltaY < 0 && element3.offsetTop !== 42) {
            if (window.innerWidth < 550) {
                element2.style.top = `${top + 40}px`;
            } else {
                element2.style.top = `${top + 20}px`;
            }
        }

        if (element2.offsetTop === 22) {
            if (e.deltaY > 0) {
                element3.style.top = `42px`;
            }
            if (e.deltaY < 0 && element4.offsetTop !== 66) {
                if (window.innerWidth < 550) {
                    element3.style.top = `${top + 55}px`;
                } else {
                    element3.style.top = `${top + 45}px`;
                }
            }
        }

        if (element3.offsetTop === 42) {
            if (e.deltaY > 0) {
                element4.style.top = `66px`;
            }
            if (e.deltaY < 0) {
                if (window.innerWidth < 550) {
                    element4.style.top = `${top + 75}px`;
                } else {
                    element4.style.top = `${top + 70}px`;
                }
            }
        }
    })


})
;
