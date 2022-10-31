import { useState } from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    return [value, handleInput, setValue]
}

export default useInput