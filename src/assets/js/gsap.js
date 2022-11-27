console.log('gsap');

const duration = .15;
const delayBase = .1;

let children;
let count = 0;
let delayTotalStart;
let delayTotalRepeat;
const svgs = gsap.utils.toArray('.animate-svg');
svgs.forEach((svg) => {
    children = gsap.utils.selector(svg);
    let elements = children('.animate-me');
    // console.log(elements);
    elements.forEach((element) => {
        count += 1;
        delayTotalStart = delayBase * count;
        delayTotalRepeat = delayBase * elements.length;
        console.log(count);
        if ( count !== elements.length ) {
            gsap.to(element, {
                delay: delayTotalStart,
                opacity: 1,
                duration: duration,
                repeat: 1,
                repeatDelay: delayTotalRepeat + .75,
                yoyo: true,
                scrollTrigger: {
                    trigger: svg,
                    start: 'top center',
                    toggleActions: 'play none none none',
                    once: true,
                }
            });
        } else {
            gsap.to(element, {
                opacity: 1,
                duration: duration,
                delay: delayTotalStart,
                scrollTrigger: {
                    trigger: svg,
                    start: 'top center',
                    toggleActions: 'play none none none',
                    once: true,
                }
            });
            count = 0;
        }
    });

})
