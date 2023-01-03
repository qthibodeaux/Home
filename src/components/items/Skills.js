import { useContext } from 'react'
import { Box, Button, Heading, ResponsiveContext } from 'grommet'
import { Code } from 'grommet-icons'

/*
<a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">Node js icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/html5" title="html5 icons">Html5 icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Vectors Market - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/bootstrap" title="bootstrap icons">Bootstrap icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/postgre" title="postgre icons">Postgre icons created by Freepik - Flaticon</a>





*/

function SkillSmall () {
    return (
        <Box 
            background='dark-1' 
            fill='horizontal' 
            pad='medium' 
            justify='center'
            align='center'
        >
            <Heading level='4' margin='none'>My Experience</Heading>
            <Box
                direction='row-responsive'
                justify='center'
                align='between'
                gap='small'
            >
                <Box 
                    pad='medium'
                    justify='center'
                    align='between'
                >
                    <Heading textAlign='center' level='6' margin='none'>Frontend Development</Heading>
                    <Box 
                        direction='row'
                    >
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                        >
                            <Button plain icon={<Code />} label='HTML' />
                            <Button plain icon={<Code />} label='Javascript' />
                            <Button plain icon={<Code />} label='CSS' />
                        </Box>
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                        >
                            <Button plain icon={<Code />} label='React' />
                            <Button plain icon={<Code />} label='Redux' />
                            <Button plain icon={<Code />} label='Recoil' />
                        </Box>
                    </Box>
                </Box>
                <Box
                    pad='medium'
                    justify='center'
                    align='between'
                >
                    <Heading textAlign='center' level='6' margin='none'>Backend Development</Heading>
                    <Box 
                        direction='row'
                    >
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                        >
                            <Button plain icon={<Code />} label='Node JS' />
                            <Button plain icon={<Code />} label='Postgres' />
                            <Button plain icon={<Code />} label='Sequelize' />
                        </Box>
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                        >
                            <Button plain icon={<Code />} label='MongoDB' />
                            <Button plain icon={<Code />} label='Knex' />
                            <Button plain icon={<Code />} label='Twilio' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function SkillBig () {
    return (
        <Box 
            background='dark-1' 
            fill='horizontal' 
            pad='large' 
            justify='center'
            align='center'
            gap='large'
        >
            <Heading level='4' margin='none'>My Experience</Heading>
            <Box
                width='large'
                direction='row'
                justify='between'
            >
                <Box 
                    pad='large'
                    justify='center'
                    align='between'
                    background='dark-2'
                    border={{ color: 'light-1', size: 'medium' }}
                    round={{ size: 'medium' }}
                    gap='medium'
                    elevation="medium"
                >
                    <Heading textAlign='center' level='6' margin='none'>Frontend Development</Heading>
                    <Box 
                        direction='row'
                    >
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                            gap='medium'
                        >
                            <Button plain icon={<Code />} label='HTML' />
                            <Button plain icon={<Code />} label='Javascript' />
                            <Button plain icon={<Code />} label='CSS' />
                        </Box>
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                            gap='medium'
                        >
                            <Button plain icon={<Code />} label='React' />
                            <Button plain icon={<Code />} label='Redux' />
                            <Button plain icon={<Code />} label='Recoil' />
                        </Box>
                    </Box>
                </Box>
                <Box
                    pad='medium'
                    justify='center'
                    align='between'
                    background='dark-2'
                    border={{ color: 'light-1', size: 'medium' }}
                    round={{ size: 'medium' }}
                    gap='medium'
                    elevation="medium"
                >
                    <Heading textAlign='center' level='6' margin='none'>Backend Development</Heading>
                    <Box 
                        direction='row'
                    >
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                            gap='medium'
                        >
                            <Button plain icon={<Code />} label='Node JS' />
                            <Button plain icon={<Code />} label='Postgres' />
                            <Button plain icon={<Code />} label='Sequelize' />
                        </Box>
                        <Box 
                            pad='small'
                            justify='start'
                            align='start'
                            gap='medium'
                        >
                            <Button plain icon={<Code />} label='MongoDB' />
                            <Button plain icon={<Code />} label='Knex' />
                            <Button plain icon={<Code />} label='Twilio' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


function Skills () {
    const size = useContext(ResponsiveContext)
    return (
        <div>
            {size !== 'small'
                ? <SkillBig />
                : <SkillSmall />
            }
        </div>
    )
}

export default Skills