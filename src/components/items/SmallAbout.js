import { Box, Paragraph } from 'grommet'


function SmallAbout() {
  return (
    <Box>
        <Box
            pad='medium'
            gap='small'
        >
            <Paragraph margin='none' color='black'>Salutations</Paragraph>

            <Paragraph margin='none' color='black'>My name is Quintus Thibodeaux. Thank you for visiting my webpage. I am a nerd who enjoys computers, sports, statistics, and music. I have been employed in various industries, but the challenge and problem solving of programming really appealed to me. I decided to dive right in, and pursue a career change. I enrolled in DigitalCrafts, an immersive coding bootcamp focusing on the most modern web technologies.
            General Info</Paragraph>

            <Paragraph margin='none' color='black'>qthibdev.com Is my personal domain. It is a site where i host the various projects I have worked on. The site uses Bootstrap 4.0 as the css framework. The site contains an animated gif, github links, and basic information about the project. The site also allows you to download my resume.
            About Me</Paragraph>

            <Paragraph margin='none' color='black'>I am Full Stack Web Developer. I was able to grow and hone my skills at the DigitalCrafts bootcamp. The camp was veryful and was able to guide me and direct a coding hobby into a full skillset.</Paragraph>
        </Box>
    </Box>
  )
}

export default SmallAbout