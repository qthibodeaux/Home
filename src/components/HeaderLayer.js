import { Box, Button, Layer, Header, Heading } from 'grommet'
import { FormClose } from 'grommet-icons'
import { useSetRecoilState } from 'recoil'
import { selection } from '../atoms'

import SkyCrop from '../assets/skycrop.jpg'
import Houcrop from '../assets/houcrop.jpg'
import Besomeone from '../assets/besomeonecrop.jpg'
import Screw from '../assets/screwcrop.jpg'

function HeaderLayer(props) {
    const { closer } = props
    const setSelection = useSetRecoilState(selection)
    const close = (value) => {
        setSelection(value)
        closer()
    }
  return (
    <Layer full animation='fadeIn' background='dark-1'>
        <Header
            direction='row'
            pad='medium'
            align='center'
            justify='end'
        >
            <Button color='dark-1' icon={<FormClose color='accent-1'/>} onClick={() => closer()}/>
        </Header>

        <Box
            justify='between'
            gap='medium'
        >
            <Box
                basis='small'
                background={{
                    image: `url(${SkyCrop})`
                }}
                onClick={() => close(1)}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: 'strong'
                    }}
                    pad='medium'
                >
                    <Heading size='large' weight='bold'>Projects</Heading>
                </Box>
            </Box>

            <Box
                basis='small'
                background={{
                    image: `url(${Houcrop})`
                }}
                onClick={() => close(2)}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: 'strong'
                    }}
                    pad='medium'
                >
                    <Heading size='large' weight='bold'>Blog</Heading>
                </Box>
            </Box>

            <Box
                basis='small'
                background={{
                    image: `url(${Besomeone})`
                }}
                onClick={() => close(3)}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: 'strong'
                    }}
                    pad='medium'
                >
                    <Heading size='large' weight='bold'>About</Heading>
                </Box>
            </Box>

            <Box
                basis='small'
                background={{
                    image: `url(${Screw})`
                }}
                onClick={() => close(4)}
            >
                <Box
                    fill
                    background={{
                        color: 'accent-1',
                        opacity: 'strong'
                    }}
                    pad='medium'
                >
                    <Heading size='large'>Updates</Heading>
                </Box>
            </Box>
        </Box>
    </Layer>
  )
}

export default HeaderLayer