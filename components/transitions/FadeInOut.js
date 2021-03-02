import gsap, { Power2 } from 'gsap'

export default {
    functional: true,
    render: (createElement, context) => {
        let on = {
            enter(element, done) {
                gsap.fromTo(
                    element,
                    {
                        opacity: 0,
                        display: 'block'
                    },
                    {
                        opacity: 1,
                        duration: 0.2,
                        ease: Power2.easeInOut,
                        onComplete: () => done()
                    }
                )
            },

            leave(element, done) {
                gsap.fromTo(
                    element,
                    {
                        opacity: 1
                    },
                    {
                        display: 'none',
                        opacity: 0,
                        duration: 0.2,
                        ease: Power2.easeInOut,
                        onComplete: () => done()
                    }
                )
            }
        }

        return createElement('transition', { on }, context.children)
    }
}
