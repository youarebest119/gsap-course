import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'

const App = () => {

    // useEffect(() => {
    //     let context1 = gsap.from(".box-1", {
    //         x: 100,
    //     })
    //     let context2 = gsap.from(".box-2", {
    //         delay: 1,
    //         x: 100,
    //     })
    //     let context3 = gsap.from(".box-3", {
    //         x: 100,
    //         delay: 2,
    //     })

    //     return () => {
    //         context1.revert();
    //         context2.revert();
    //         context3.revert();
    //     };
    // }, [])

    useGSAP(() => {
        gsap.to(".box-1", {
            x: 100,
        })
        gsap.from(".box-2", {
            delay: 1,
            x: 100,
        })
        gsap.fromTo(".box-3", {
            x: 100,
        }, {
            x: 200,
            delay: 2,
        })
    })

    return (
        <>
            <div className="box box-1">
                <h2>Box</h2>
            </div>
            <div className="box box-2">
                <h2>Box</h2>
            </div>
            <div className="box box-3">
                <h2>Box</h2>
            </div>
        </>
    )
}

export default App