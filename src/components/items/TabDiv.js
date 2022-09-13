import { useState } from 'react'
import { Box, Tab, Tabs, Text } from 'grommet'
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

  return (
    <div>
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
    </div>
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