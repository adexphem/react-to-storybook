import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import DataCard from './DataCard'

storiesOf("Define DataCard", module)
    .add("Default DataCard", withInfo("Description")(() => {
        return (
            <DataCard className="data-card" value="Default">Here is a Data Card</DataCard>
        )
    }))
    .add("Small DataCard", withInfo("Description")(() => {
        return (
            <DataCard className="data-card small" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    }))  
    .add("Medium DataCard", withInfo("Description")(() => {
        return (
            <DataCard className="data-card medium" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    }))
    .add("Large DataCard", withInfo("Description")(() => {
        return (
            <DataCard className="data-card large" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    }))   
