// gsap
// .set
// (
//     "#box",
//     {
//         x: 300,
//         rotate: 45,
//     }
// )


// gsap.set
// ("#box", {
//     transformOrigin: "bottom right",
// })


// gsap
//     .to(
//         ".box",
//         {
//             x: 300,
//             // duration: 3,
//             // rotate: 35,
//             // borderRadius: 50,
//             // scale: 2.6,
//             duration: 3,
//             ease: "back",
//             stagger: 0.05,
//         }
//     )

// gsap
//     .from(
//         ".box",
//         {
//             x: 300,
//             // duration: 3,
//             // rotate: 35,
//             // borderRadius: 50,
//             // scale: 2.6,
//             ease: "back",
//             duration: 3,
//             stagger: 0.1,
//         }
//     )


// gsap
//     .fromTo(
//         ".box",
//         {
//             x: 300,
//             // duration: 3,
//             // rotate: 35,
//             // borderRadius: 50,
//             // scale: 2.6,
//             // ease: "back",
//             // duration: 3,
//             // stagger: 0.1,
//         },
//         {
//             x: 600,
//             ease: "back",
//             duration: 3,
//             scale: 1.2,
//             stagger: 0.1,
//         }
//     )

// gsap.to("#box", {
//     x: 100, duration: 1,
//     onComplete: () => {
//         gsap.to("#box-2", {
//             x: 200, duration: 1,
//             onComplete: () => {
//                 gsap.to("#box-3", { x: 300, duration: 1,
//                     onComplete: () => {
//                         gsap.to(".box", {
//                             opacity: 0,
//                         })
//                     }
//                  })
//             }
//         })
//     }
// })


// gsap
//     .to(document.body, {
//         opacity: 0,
//     })


// Array.from(document.querySelectorAll(".box")).forEach((box) => {
//     box.addEventListener("click", (event) => {
//         gsap.to(event.target, {
//             scale: gsap.getProperty(event.target, "scale") === 2 ? 1 : 2,
//         })
//     })
// }) 