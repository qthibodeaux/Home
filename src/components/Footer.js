import { Anchor, Box, Text, Footer } from 'grommet'
import { Linkedin, Github, DocumentDownload } from 'grommet-icons'

function FooterSmall () {
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
        <Footer 
            direction='column'
            gap='xsmall'
            background='dark-1'
            fill='horizontal'
            pad={{ vertical: 'large' }}
        >
            <Text level='6'>Thank you for visiting my site.</Text>
            <Text level='6'>Quintus Thibodeaux</Text>
            <Text level='6'>Email: qthibgit@gmail.com</Text>
            <Box
                direction='row'
                justify='center'
                align='center'
                fill='horizontal'
            >
                <Box direction='row' pad='xsmall'>
                    <Anchor icon={<Linkedin/>} href='https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/' target='_blank'/>
                    <Anchor icon={<Github/>} href='https://github.com/qthibodeaux' target='_blank'/>
                    <Anchor icon={<DocumentDownload/>} href='myapp\public\QuintusResumeMTO.docx.pdf' onClick={onButtonClick} download/>
                </Box>
            </Box>
        </Footer>
    )
}

export default FooterSmall