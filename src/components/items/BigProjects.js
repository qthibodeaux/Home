import { Anchor, Box, Image, Text, Tip } from 'grommet'
import { Database, Domain, Github, PhoneVertical } from 'grommet-icons'
import { projects } from '../../bank'

import Ps1 from '../../assets/photog.gif'
import Sm from '../../assets/sma.gif'
import Ap from '../../assets/apptosms.gif'
import Jt from '../../assets/jtpc.gif'
import Fa from '../../assets/fullauth.gif'
import Mb from '../../assets/bbq.jpg'
import Ps from '../../assets/sideline.gif'
import Pg from '../../assets/piano.gif'

const items = [Ps1, Sm, Jt, Ap, Fa, Mb, Ps, Pg]

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
    const { headline, caption, name, technologies, caption2, caption3, mobile, hassite, githubrepo, site, backend, backendsite } = props.projects
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
                    <Text size='large' weight='bold'>{name}</Text>
                    <Text margin={{ bottom: 'small'}}>{headline}</Text>
                </Box>
                <Box
                    fill='vertical'
                    pad={{top:'small'}}
                    overflow='auto'
                    justify='between'
                >
                    <Box>
                        <Text size='small'>{caption}</Text>
                        <Text size='small' margin={{ top: 'small'}}>{caption2}</Text>
                        <Text size='small' margin={{ top: 'small'}}>{caption3}</Text>
                    </Box>
                    <Text size='xsmall'>Technologies | {technologies}</Text>
                </Box>
                <Box
                    direction='row'
                >
                    <Tip
                        plain
                        dropProps={{
                            align: { bottom: 'top' }
                        }}
                        content={
                            <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                <Text>Github Repo</Text>
                            </Box>
                        }>
                        <Anchor color='white' href={githubrepo} target="_blank" icon={<Github />}/>
                    </Tip>
                    {mobile 
                        ? (
                            <Tip
                                plain
                                dropProps={{
                                    align: { bottom: 'top' }
                                }}
                                content={
                                    <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                        <Text>Mobile Friendly</Text>
                                    </Box>
                                }   
                            >
                                <Anchor color='white' icon={<PhoneVertical />}/>
                            </Tip>
                        ) 
                        : (
                            <Tip
                                plain
                                dropProps={{
                                    align: { bottom: 'top' }
                                }}
                                content={
                                    <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                        <Text>No mobile site</Text>
                                    </Box>
                                }   
                            >
                                <Anchor disabled color='white' icon={<PhoneVertical />}/>
                            </Tip>
                        )
                    }
                    {hassite
                        ? (
                            <Tip
                                plain
                                dropProps={{
                                    align: { bottom: 'top' }
                                }}
                                content={
                                    <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                        <Text>Visit {name}</Text>
                                    </Box>
                                }   
                            >
                                <Anchor color='white' href={site} target="_blank" icon={<Domain />}/>
                            </Tip>
                        )
                        : (
                            <Tip
                                plain
                                dropProps={{
                                    align: { bottom: 'top' }
                                }}
                                content={
                                    <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                        <Text>No Github Pages page</Text>
                                    </Box>
                                }   
                            >
                                <Anchor disabled color='white' icon={<Domain />}/>
                            </Tip>
                        )
                    }
                    {backend && (
                            <Tip
                                plain
                                dropProps={{
                                    align: { bottom: 'top' }
                                }}
                                content={
                                    <Box background='light-1' round={{ size: 'medium' }} pad='small'>
                                        <Text>Backend Link</Text>
                                    </Box>
                                }   
                            >
                                <Anchor color='white' href={backendsite} target="_blank" icon={<Database />}/>
                            </Tip>
                        )}
                </Box>
            </Box>
        </Box>
    )
}
export default BigProjects