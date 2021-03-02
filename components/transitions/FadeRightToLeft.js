import gsap, { Power2 } from 'gsap'

export default {
    functional: true,
    render: (createElement, context) => {
        let on = {
            enter(element, done) {
                gsap.fromTo(
                    element,
                    {
                        xPercent: 100,
                        display: 'block'
                    },
                    {
                        xPercent: 0,
                        duration: 0.4,
                        ease: Power2.easeInOut
                    }
                )
            },

            leave(element, done) {
                gsap.to(element, {
                    xPercent: -100,
                    duration: 0.4,
                    ease: Power2.easeInOut
                })
            }
        }

        return createElement('transition', { on }, context.children)
    }
}
