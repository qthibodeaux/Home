import { useState } from 'react'
import { Box, Button, Tab, Tabs, Text } from 'grommet'
import { Projects, Article, Robot, Domain } from 'grommet-icons'
import BigProjects from './BigProjects'
import BigBlogs from './BigBlogs'
import BigAbout from './BigAbout'
import Updates from './Updates'

function TabDiv() {
    const [index, setIndex] = useState(0)
    const onActive = (nextIndex) => {
        setIndex(nextIndex)
    }
    const FSCount = '12'
    const [FSDisabled, setFSDisabled] = useState(false)
    const [FSActive, setFSActive] = useState(false)
    const FECount = '8'
    const BECount = '5'

    const typesort = 'all'

  return (
    <Box
        align='center'
    >
        <Box
            width='xlarge'
            direction='row'
        >
            <Box
                direction='row'
            >
                <Box>
                    <Button 
                        active={FSActive}
                        disabled={FSDisabled}
                        label={'Full Stack (' + FSCount + ')'}
                    />
                    <Button label={'Front End (' + FECount + ')'}/>
                    <Button label={'Back End(' + BECount + ')'}/>
                </Box>
                <Box 
                    direction='column'
                >
                    <Button label='Business'/>
                    <Button label='Productivity'/>
                    <Button label='Entertainment'/>
                </Box>
                <Box
                    direction='column'
                >
                    <Button label='MongoDB'/>
                    <Button label='Sequelize'/>
                    <Button label='Knex'/>
                </Box>
                <Box>
                    <Box>
                        CSS
                        SASS
                    </Box>
                    <Box>
                        Grommet
                        Material UI
                        Bootstrap
                    </Box>
                    <Box>
                        Recoil
                        Redux
                    </Box>
                    <Box>
                        Form
                        Auth
                        JWT
                        Cookies
                        EmailJS
                        ReactRouter
                        ReactHookForm
                        Yup
                        Auth0
                    </Box>
                    
                    <Box>
                        JWT

                    </Box>
                </Box>
            </Box>
            <Box>Content</Box>
        </Box>
        <Tabs activeIndex={index} onActive={onActive}>
            <Tab title={
                <RichTab
                    icon={<Projects color='dark-1' />}
                    label='Projects'
                />
            }>
                <BigProjects />
            </Tab>
            <Tab title={
                <RichTab
                    icon={<Article color='dark-1' />}
                    label='Blogs'
                />
            }>
                <BigBlogs />
            </Tab>
            <Tab title={
                    <RichTab
                        icon={<Robot color='dark-1' />}
                        label="About Me"
                    />
                }
                >
                    <BigAbout />
                </Tab>
                <Tab title={
                    <RichTab
                        icon={<Domain color='dark-1' />}
                        label="Site Updates"
                    />
                }
                >
                    <Updates />
                </Tab>
        </Tabs>
    </Box>
  )
}

function RichTab ({icon, label}) {
    return (
        <Box
            direction='row' align='center' height='xxsmall' pad='medium' gap='small'
        >
            {icon}
            <Text size='small'>
                <strong>{label}</strong>
            </Text>
        </Box>
    )
}

export default TabDiv