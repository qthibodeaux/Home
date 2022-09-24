import { useContext } from 'react'
import { Anchor, Box, Paragraph, Heading, ResponsiveContext, Text, Tip } from 'grommet'
import { DocumentDownload, Linkedin, Github } from 'grommet-icons'
import MeLarge from '../../assets/MeWide.jpg'

function Hero() {
    const size = useContext(ResponsiveContext)
  return (
    <Box>
        {size !== 'small' ? <HeroBig /> : <HeroSmall />}
    </Box>
  )
}

function HeroBig () {
    const onButtonClick = () => {
        fetch('QuintusResumeWL.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'QuintusResumeWL.pdf'
                alink.click()
            })
        })
    }
    return (
        <Box
            fill='horizontal'
            width='xlarge'
            height="small" 
            background={{
                image: `url(${MeLarge})`
            }}
        >
            <Box
                direction='column'
                
            >
                <Box 
                        height="small" 
                        fill='horizontal'
                    >
                        <Box
                            fill
                            background={{
                                color: 'accent-1',
                                opacity: 'strong'
                            }}
                            pad='medium'
                        >
                            <Heading 
                                responsive={true} 
                                size="medium"
                                margin="none"
                                alignSelf="center"
                            >
                                Quintus Thibodeaux
                            </Heading>
                            <Paragraph 
                                responsive={true} 
                                size="large"
                                textAlign="center"
                                margin="none"
                                alignSelf="center"
                            >
                                Full Stack Developer
                            </Paragraph>
                            <Box
                                direction="row"
                                alignSelf="center"
                            >
                                <Tip content=
                                    {
                                        <Box background='dark-1' pad='small'>
                                            <Text color='accent-1'>Link to my Linkedin page.</Text>
                                        </Box>
                                    }
                                >
                                    <Anchor color='dark-1' icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                                </Tip>
                                <Tip content=
                                    {
                                        <Box background='dark-1' pad='small'>
                                            <Text color='accent-1'>Link to my Github Page.</Text>
                                        </Box>
                                    }
                                >
                                    <Anchor color='dark-1' icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                                </Tip>
                                <Tip content=
                                    {
                                        <Box background='dark-1' pad='small'>
                                            <Text color='accent-1'>Click to download my resume.</Text>
                                        </Box>
                                    }
                                >
                                    <Anchor color='dark-1' icon={<DocumentDownload/>} href='myapp\public\QuintusResumeMTO.docx.pdf' onClick={onButtonClick} download/>
                                </Tip>
                            </Box>
                        </Box> 
                    </Box>
            </Box>
        </Box>
    )
}

function HeroSmall () {
    const onButtonClick = () => {
        fetch('QuintusResumeWL.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'QuintusResumeWL.pdf'
                alink.click()
            })
        })
    }
    return (
        <Box
            height='small'
            background={{
                image: `url(${MeLarge})`
            }}
        >
            <Box
                height='small'
                background={{
                    color: 'accent-1',
                    opacity: 'strong'
                }}
                pad='medium'
            >
                <Heading 
                    responsive={true} 
                    size="medium"
                    margin="none"
                    alignSelf="center"
                    textAlign='center'
                >
                    Quintus Thibodeaux
                </Heading>
                <Paragraph 
                    responsive={true} 
                    size="large"
                    textAlign="center"
                    margin="none"
                    alignSelf="center"
                >
                    Full Stack Developer
                </Paragraph>
                <Box
                    direction="row"
                    alignSelf="center"
                >
                    <Anchor color='dark-1' icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                    <Anchor color='dark-1' icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                    <Anchor color='dark-1' icon={<DocumentDownload/>} href='myapp\public\QuintusResumeMTO.docx.pdf' onClick={onButtonClick} download/>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero