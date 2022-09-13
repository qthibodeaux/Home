import { Box, Text } from 'grommet'
import { Projects, Article, Robot, Domain } from 'grommet-icons'
import { useSetRecoilState } from 'recoil'
import { selection } from '../../atoms'

import ProjectsAll from '../../assets/Projectstall.jpg'
import Metall from '../../assets/Metall.jpg'
import Construction from '../../assets/underconstruction.jpg'
import Blogtall from '../../assets/blogtall.jpg'

function FourSquare() {
    const setSelection = useSetRecoilState(selection)
    const close = (value) => {
        setSelection(value)
    }
  return (
    <Box
        direction='column'
        height='large'
    >
        <Box
            direction='row'
            height='medium'
        >
            <Box
                fill='horizontal'
                border={{ color: 'dark-1', size: 'small', side: 'all' }}
                background={{
                    image: `url(${ProjectsAll})`
                }}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: '0.8'
                    }}
                    pad='large'    
                    align='center'
                    justify='center'    
                    gap='small'
                    onClick={() => close(1)}
                >
                    <Projects size='large' color='dark-1'/>
                    <Text weight='bold' color='dark-1'>Projects</Text>
                </Box>
            </Box>

            <Box
                fill='horizontal'
                border={{ color: 'dark-1', size: 'small', side: 'all' }}
                background={{
                    image: `url(${Blogtall})`
                }}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: '0.8'
                    }}
                    pad='large'    
                    align='center'
                    justify='center'    
                    gap='small'
                    onClick={() => close(2)}
                >
                    <Article size='large' color='dark-1'/>
                    <Text weight='bold' color='dark-1'>Blog</Text>
                </Box>
            </Box>
        </Box>

        <Box
            direction='row'
            height='medium'
        >
            <Box
                fill='horizontal'
                border={{ color: 'dark-1', size: 'small', side: 'all' }}
                background={{
                    image: `url(${Metall})`
                }}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: '0.8'
                    }}
                    pad='large'    
                    align='center'
                    justify='center'    
                    gap='small'
                    onClick={() => close(3)}
                >
                    <Robot size='large' color='dark-1' />
                    <Text weight='bold' color='dark-1'>About Me</Text>
                </Box>
            </Box>

            <Box
                fill='horizontal'
                border={{ color: 'dark-1', size: 'small', side: 'all' }}
                background={{
                    image: `url(${Construction})`
                }}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: '0.8'
                    }}
                    pad='large'    
                    align='center'
                    justify='center'    
                    gap='small'
                    onClick={() => close(4)}
                >
                    <Domain size='large' color='dark-1' />
                    <Text weight='bold' color='dark-1'>Site Updates</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default FourSquare