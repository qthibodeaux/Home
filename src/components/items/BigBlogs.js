import { Box, Image } from 'grommet'
import { blags } from '../../bank'

import Besomeone from '../../assets/besomeonecrop.jpg'
import Organization from '../../assets/organization.jpg'
import Restart from '../../assets/projectrestart.png'

const images = [Besomeone, Organization, Restart]

function BlogList () {    
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
                {blags.map((blags, index) => {
                    return (
                        <BlogBar blogs={blags} key={index} index={index}/>
                    )
                })}
            </Box>
        </Box>
    )
}

function BlogBar (props) {
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
            <Box width='large'>
                <Image
                    fill
                    fit='cover'
                    src={images[props.index]} />
            </Box>

            <Box width='large' justify='between'>
                <Box pad='medium' height='xxsmall'>{props.blogs.title}</Box>
                <Box pad='medium' height='medium' overflow="auto">
                    {props.blogs.subtitle}
                    {props.blogs.post}
                </Box>
                <Box pad='medium' height='xxsmall'>{props.blogs.date}</Box>
            </Box>
        </Box>
    )
}

export default BlogList