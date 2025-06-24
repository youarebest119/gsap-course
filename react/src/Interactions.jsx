import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Interactions = () => {
    const scope = useRef();
    const { contextSafe } = useGSAP(() => { }, { scope })

    const handleRotate = contextSafe(() => {
        gsap.to(".box", {
            rotate: "+=360"
        })
    })

    return (
        <div>
            <button onClick={handleRotate} type="button">Rotate</button>
            <div ref={scope} className="container">
                <div className="box">
                    Box
                </div>
            </div>
            <div className="box">
                Box
            </div>
        </div>
    )
}

export default Interactions