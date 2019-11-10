import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Button from './Button'

storiesOf("Define Buttons", module)
    .add("Default", withInfo("Description")(() => {
        return (
            <Button className="btn btn-default" value="Default" onClick={action("Default Button Clicked")} />
        )
    }))
    .add("Primary Button", withInfo("Description")(() => {
        return (
            <Button className="btn btn-primary" value="Default" onClick={action("Primary Button Clicked")} />
        )
    }))    
