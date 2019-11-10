import React from 'react'
import { storiesOf } from '@storybook/react'
import DataCard from './DataCard'

storiesOf("DataCard", module)
    .add("- Default -", () => {
        return (
            <DataCard className="data-card" value="Default">Here is a Data Card</DataCard>
        )
    })
    .add("- Small -", () => {
        return (
            <DataCard className="data-card small" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    }) 
    .add("- Medium -", () => {
        return (
            <DataCard className="data-card medium" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    })
    .add("- Large -", () => {
        return (
            <DataCard className="data-card large" value="Default" >
                Here is a DataCard with defined style
            </DataCard>
        )
    }) 
