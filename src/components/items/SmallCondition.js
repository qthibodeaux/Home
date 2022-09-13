import { Box } from 'grommet'
import { useRecoilValue } from 'recoil'
import { selection } from '../../atoms'
import FourSquare from './FourSquare'
import SmallDiv from './SmallDiv'

function SmallCondition() {
    const value = useRecoilValue(selection)
  return (
    <Box>
        {value > 0 
            ? <SmallDiv />
            : <FourSquare />
        }
    </Box>
  )
}

export default SmallCondition