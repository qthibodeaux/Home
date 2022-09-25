import { useState } from 'react'
import { Box, Button, DropButton, Image, List, Text } from 'grommet'
import { Selection, FormDown, FormUp } from 'grommet-icons'
import { blogVal } from '../../atoms'
import { useRecoilState } from 'recoil'
import { blags } from '../../bank'

import Cssvari from '../../assets/cssvari.jpg'
import Besomeone from '../../assets/besomeonecrop.jpg'
import Organization from '../../assets/organization.jpg'
import Restart from '../../assets/projectrestart.png'
import Sass from '../../assets/sass2.jpg'

const items = [Sass, Cssvari, Besomeone, Organization, Restart]

function SmallProjects() {
    const [val, setVal] = useRecoilState(blogVal)
    const [selected, setSelected] = useState(val)
    const [open , setOpen] = useState(false)
    const name = blags.map(x => x.name)

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
                <Text>{blags[val].shortName}</Text>
            </Box>
            <Box direction='row'>
                <Button icon={<FormUp />} onClick={minus} disabled={val === 0 ? true : false}/>
                <Button icon={<FormDown />} onClick={plus} disabled={val === blags.length - 1 ? true : false}/>
            </Box>
        </Box>
        <Flip projects={blags[val]} id={val}/>
    </Box>
  )
}

function Flip (props) {
    const { id } = props
    const { title, subtitle, post, date } = props.projects
    return (
        <Box>
            <Box height='small'>
                <Image 
                    fill
                    fit='cover'
                    src={items[id]}
                />
            </Box>
            <Box pad='medium' height='xxsmall'>{title}</Box>
            <Box pad='medium' height='medium' overflow="auto">
                {subtitle}
                {post}
            </Box>
            <Box pad='medium' height='xxsmall'>{date}</Box>
        </Box>
    )
}


export default SmallProjects