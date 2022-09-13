import { Avatar, Box, Button, Header, ResponsiveContext} from 'grommet'
import { Menu } from 'grommet-icons'
import { useContext } from 'react'

function Navbar(props) {
    const size = useContext(ResponsiveContext)
  return (
    <Box background='dark-1'>
        {size !== 'small' ? <NavBig /> : <NavSmall opener={props.opener}/>}
    </Box>
  )
}

function NavBig () {
    return (
        <Header pad='small' width='xlarge' alignSelf='center'>
            <Box direction='row' align='center'>
                <Avatar background='accent-1'>QT</Avatar>
            </Box>
        </Header>
    )
}

function NavSmall (props) {
    const { opener } = props

    return (
        <Header
            direction='row'
            pad='medium'
        >
            <Avatar background='accent-1' size='medium'>QT</Avatar>
            <Button color='dark-1' icon={<Menu color='accent-1'/>} onClick={() => opener()}/>
        </Header>
    )
}

export default Navbar