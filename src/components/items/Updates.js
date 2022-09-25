import { Box, Text } from 'grommet'
import { updates } from '../../bank'

function Updates() {
  return (
    <Box
            justify='center'
            alignItems='center'
            fill='horizontal'
            pad='medium'
        >
            {
                updates.map((element, key) => {
                    return (
                        <Box 
                            direction='column'
                            pad='small'
                            border={{ 
                                        color: 'dark-1',
                                        size: 'small',
                                        style: 'solid',
                                        side: 'bottom'
                                    }}
                            gap='small'
                            key={key}
                        >
                            <Text>{element.date}</Text>
                            <Text>{element.content}</Text>
                        </Box>
                    )
                })
            }
        </Box>
  )
}

export default Updates