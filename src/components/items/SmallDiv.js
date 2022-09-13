import { Box, Tab, Tabs } from 'grommet'
import { Projects, Article, Robot, Domain, Home } from 'grommet-icons'
import { selection } from '../../atoms'
import { useRecoilState } from 'recoil'
import SmallProjects from './SmallProjects'
import SmallBlog from './SmallBlog'
import Updates from './Updates'
import SmallAbout from './SmallAbout'
import Bgimage from '../../assets/rebel.png'

function SmallDiv() {
    const [tabSelecton, setTabSelection] = useRecoilState(selection)
    const onActive = (nextIndex) => {
        setTabSelection(nextIndex)
    }
  return (
    <Box
        background={{
            image: `url(${Bgimage})`
        }}
        height='large'
    >
        <Box
            fill
            background={{
                color: 'accent-1',
                opacity: 'strong'
            }}
        >
            <Tabs activeIndex={tabSelecton} onActive={onActive}>
                <Tab title={<RichTab icon={<Home />} />}>
                    Home
                </Tab>
                <Tab title={<RichTab icon={<Projects />} />}>
                    <SmallProjects />
                </Tab>
                <Tab title={<RichTab icon={<Article />} />}>
                    <SmallBlog />
                </Tab>
                <Tab title={<RichTab icon={<Robot />} />}>
                    <SmallAbout />
                </Tab>
                <Tab title={<RichTab icon={<Domain />} />}>
                    <Updates />
                </Tab>
            </Tabs>
        </Box>
    </Box>
  )
}

const RichTab = ({icon}) => {
    return (
      <Box
          direction='row' align='center' height='xxsmall' pad='medium'
      >
          {icon}
      </Box>
    )
  }

export default SmallDiv