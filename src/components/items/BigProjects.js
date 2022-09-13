import { Anchor, Box, Image, Text } from 'grommet'
import { Domain, Github, PhoneVertical } from 'grommet-icons'
import { projects } from '../../bank'

import Sm from '../../assets/sma.gif'
import Ap from '../../assets/apptosms.gif'
import Jt from '../../assets/jtpc.gif'
import Fa from '../../assets/fullauth.gif'
import Mb from '../../assets/marys.png'
import Ps from '../../assets/sideline.gif'
import Pg from '../../assets/piano.gif'

const items = [Sm, Ap, Jt, Fa, Mb, Ps, Pg]

function BigProjects() {
  return (
    <Box
        direction='row'
        justify='center'
        pad={{ top:'medium', bottom:'medium'}}
        gap='medium'
        height='large'
        overflow='auto'
        margin={{ bottom: 'medium'}}
    >
        <Box
            width='xlarge'
            pad={{ vertical:'small', horizontal: 'large'}}
            gap='medium'
        >
            
            {projects.map((project, key) => {
                return <ProjectItem projects={project} key={key} id={key}/>
            })}
        </Box>
    </Box>
  )
}

function ProjectItem (props) {
    const { id } = props
    const { headline, caption, name } = props.projects
    return (
        <Box 
            direction='row'
            justify='center'
            pad='medium'
            gap='medium'
            height={{min:'medium'}}
            background='dark-1'
            style={{ borderRadius: '25px' }}
        >
            <Box width='large' style={{ borderRadius: '25px'}}  overflow='hidden'>
                <Image
                    fill
                    fit='cover'
                    src={items[id]} />
            </Box>

            <Box width='large' justify='between'>
                <Box>
                    <Text size='large' weight='bold' margin={{ bottom: 'small'}}>{name}</Text>
                    <Text>{headline}</Text>
                </Box>
                <Box
                    fill='vertical'
                    pad={{top:'small'}}
                    overflow='auto'
                >
                    <Text>{caption}</Text>
                    Features
                    React
                </Box>
                <Box
                    direction='row'
                >
                    <Anchor color='white' icon={<Github />}/>
                    <Anchor color='white' icon={<PhoneVertical />}/>
                    <Anchor color='white' icon={<Domain />}/>
                </Box>
            </Box>
        </Box>
    )
}

export default BigProjects