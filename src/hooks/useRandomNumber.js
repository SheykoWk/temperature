import { useState } from "react"

const useRandomNumber = (max) => {

    const [num, setNum] = useState(Math.floor(Math.random() * max))

    const changeNumber = () => {
        setNum(Math.floor(Math.random() * max))
    }


    return [num, changeNumber]
}

export default useRandomNumber