import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const UseGsap = () => {
    const [show, setShow] = useState(true);
    const container = useRef(null);

    useGSAP(() => {
        // if (show) {
        //     gsap.to(".box", {
        //         opacity: 1,
        //     })
        // }
        // else {
        //     gsap.to(".box", {
        //         opacity: 0,
        //     })
        // }

        gsap.to(".box", {
            opacity: show ? 1 : 0, // Number(false);
        })

    }, {
        dependencies: [show],
        scope: container,
    })

    return (
        <div>
            <button type="button" onClick={() => setShow(!show)}>Show/Hide</button>
            <div className="container" ref={container} style={{ border: '2px solid' }}>
                <div className="box">
                    Box 1
                </div>
                <div className="box">
                    Box 2
                </div>
                <div className="box">
                    Box 3
                </div>
            </div>
            <div className="box">
                Box 4
            </div>
        </div>
    )
}

export default UseGsap