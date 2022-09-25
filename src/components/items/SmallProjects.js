import { useState } from 'react'
import { Box, Button, DropButton, Image, List, Text } from 'grommet'
import { Database, Selection, FormDown, FormUp, Github, PhoneVertical } from 'grommet-icons'
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

const items = [Sm, Jt, Ap, Fa, Mb, Ps, Pg]

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
    const { headline, caption, technologies, caption2, caption3, mobile, hassite, githubrepo, site, backend, backendsite } = props.projects
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
                <Text color='black' weight='bold'>{headline}</Text>
            </Box>
            <Box height='medium' pad='medium' justify='between'>
                <Box gap='small'>
                    <Text color='black'>{caption}</Text>
                    <Text color='black'>{caption2}</Text>
                    <Text color='black'>{caption3}</Text>
                </Box>
                <Text color='black' size='xsmall'>Techonologies | {technologies}</Text>
            </Box>
            <Box
                direction='row'
                height='xxsmall'
                background='accent-1'
                justify='around'
            >
                <Button href={githubrepo} target='_blank' icon={<Github color='dark-1' />} />
                {mobile && hassite && <Button href={site} target='_blank' icon={<PhoneVertical color='dark-1'/>} />}
                {backend && <Button href={backendsite} target='_blank' icon={<Database color='dark-1'/>} />}
            </Box>
        </Box>
    )
}


export default SmallProjects