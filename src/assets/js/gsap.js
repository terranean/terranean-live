console.log('gsap');

const duration = .25;
const delayBase = .15;

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
                repeatDelay: delayTotalRepeat,
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


// // get all svgs
// const svgs = gsap.utils.toArray('.animate-svg');
// // for each svg
// svgs.forEach((svg) => {
//     gsap.from(svg, {
//         scrollTrigger: {
//             markers: true,
//             // 'trigger scroller(viewport)'
//             start: `top center`,
//             // end: 'bottom top',
//             trigger: svg,
//             // toggleClass: 'animated',
//             toggleClass: {
//                 targets: '.animate-me',
//                 className: 'opacity-1'
//             },
//             // toggleActions: 'play none none none',
//             once: true,
//             // onEnter: delayedFadeOut(svg)
//             onEnter: animate(svg)
//         }
//     });
// });

// get svgs
// get .animate-me elements inside svg
// 



// function delayedFadeOut(element) {

//     console.log(delayedFadeOut);
//     function unanimate(element) {
//         element.classList.add('unanimated');
//     };
//     setTimeout(function() {
//         unanimate(element);
//     }, 10000)
// }