import React from 'react'
import { useState } from 'react'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Phone() {
    const [value, setValue] = useState()
    return (
        <PhoneInput
            value={value}
            onChange={setValue} />
    )
}