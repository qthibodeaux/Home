import { useState } from 'react'
import { Box, Button, DropButton, Image, List, Text } from 'grommet'
import { Domain, Selection, FormDown, FormUp, Github, PhoneVertical } from 'grommet-icons'
import { projectVal } from '../../atoms'
import { useRecoilState } from 'recoil'
import { projects } from '../../bank'

import Sm from '../../assets/sma.gif'
import Ap from '../../assets/apptosms.gif'
import Jt from '../../assets/jtpc.gif'
import Fa from '../../assets/fullauth.gif'
import Mb from '../../assets/marys.png'
import Ps from '../../assets/sideline.gif'
import Pg from '../../assets/piano.gif'

const items = [Sm, Ap, Jt, Fa, Mb, Ps, Pg]

function SmallProjects() {
    const [val, setVal] = useRecoilState(projectVal)
    const [selected, setSelected] = useState(val)
    const [open , setOpen] = useState(false)
    const name = projects.map(x => x.name)

    function onOpen () {
        setOpen(true)
    }
    function onClose () {
        setOpen(false)
    }
    function selects (event) {
        setSelected( selected === event.index ? undefined : event.index)
        setVal(event.index)
        onClose()
    }

    function plus () {
        setVal(val + 1)
    }

    function minus () {
        setVal(val - 1)
    }

  return (
    <Box>
        <Box
            background='dark-1'
            direction='row'
            height='xxsmall'
            margin={{ top: 'xsmall'}}
            justify='between'
        >
            <DropButton 
                icon={<Selection />}
                dropAlign={{ top: 'bottom', left: 'left'}}
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                dropContent={
                    <Box pad='large' background='dark-1'>
                        <List 
                            data={name}
                            itemProps={
                                val >= 0 ? { [val]: {background: 'accent-1'}} : undefined
                            }
                            onClickItem={(event) => {selects(event)}}
                        />
                    </Box>
                }
            />
            <Box justify='center'>
                <Text>{projects[val].shortName}</Text>
            </Box>
            <Box direction='row'>
                <Button icon={<FormUp />} onClick={minus} disabled={val === 0 ? true : false}/>
                <Button icon={<FormDown />} onClick={plus} disabled={val === projects.length - 1 ? true : false}/>
            </Box>
        </Box>
        <Flip projects={projects[val]} id={val}/>
    </Box>
  )
}

function Flip (props) {
    return (
        <Box>
            <Box height='small'>
                <Image
                    fill
                    fit='cover'
                    src={items[props.id]} />
            </Box>
            <Box
                height='xxsmall'
                pad='medium'
            >
                <Text color='black' weight='bold'>{props.projects.headline}</Text>
            </Box>
            <Box height='medium' pad='medium'>
                    <Text color='black'>{props.projects.caption}</Text>
                    <Text color='black'>Features</Text>
                    <Text color='black' size='small'>React</Text>
                </Box>
            <Box
                direction='row'
                height='xxsmall'
                background='accent-1'
            >
                <Button icon={<Github />}/>
                <Button icon={<PhoneVertical />}/>
                <Button icon={<Domain />}/>
            </Box>
        </Box>
    )
}


export default SmallProjects