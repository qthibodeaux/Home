import { useContext } from 'react'
import { ResponsiveContext } from 'grommet'
import TabDiv from './items/TabDiv'
import SmallCondition from './items/SmallCondition'

function Main() {
    const size = useContext(ResponsiveContext)
  return (
    <div>
        {size !== 'small'
            ? <TabDiv />
            : <SmallCondition />
        }
    </div>
  )
}

export default Main