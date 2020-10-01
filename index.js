//importing both inquirer and fs here
var inquirer = require("inquirer");
var fs = require("fs");

// const questions = 
//using inquirer to ask user questions about their readme
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What other libraries or pieces of software are necessary for your user to download before using your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How does one use your project? Such as 'npm install projectName', or 'import projectName' depending on the environment it is used in.",
        name: "usage"
    },
    {
        type: "checkbox",
        choices:["MIT", "Unlicense", "Apache", "Mozilla"],
        message: "Which license is your project under?",
        name: "license"
    },
    {
        type: "input",
        message: "Write the lines of code needed for a basic user to quickly test your code. If it is an npm package, type 'npm run test'.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }
    //Writes the new readme based on a template but with the user's customization to a file titled "redme"
]).then(function(response){
    fs.writeFile("ReadMe.md", `# ${response.title} \n ## Table of Contents \n [Description](#description) \n\n [Installation](#installation) \n\n [Usage](#usage) \n\n [License](#license) \n\n [Contributing](#contributing) \n\n [Tests](#tests) \n\n [Questions](#questions) \n ## Description \n ${response.description} \n ## Installation \n This project requires ${response.installation} to be installed before using. \n ## Usage \n ${response.usage} \n ## License \n This project uses the ${response.license} license. \n ## Contributing \n When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. \n Please note we have a code of conduct, please follow it in all your interactions with the project. \n ### Pull Request Process \n Ensure any install or build dependencies are removed before the end of the layer when doing a build. \n Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
    Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.\n You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you. \n ## Code of Conduct \n ### Our Pledge \n In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation. \n ### Our Standards \n Examples of behavior that contributes to creating a positive environment include: \n Using welcoming and inclusive language \n Being respectful of differing viewpoints and experiences \n Gracefully accepting constructive criticism \n Focusing on what is best for the community \n Showing empathy towards other community members \n Examples of unacceptable behavior by participants include: \n The use of sexualized language or imagery and unwelcome sexual attention or advances \n Trolling, insulting/derogatory comments, and personal or political attacks
    Public or private harassment \n Publishing others' private information, such as a physical or electronic address, without explicit permission \n Other conduct which could reasonably be considered inappropriate in a professional setting \n ### Our Responsibilities \n Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior. \n Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful. \n ### Scope \n This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers. \n ### Enforcement \n Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at ${response.email}. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately. \n Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership. \n ### Attribution \n This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4. \n ## Tests \n In order to test the project, try these test inputs: \n ${response.tests} \n ## Questions \n Direct all questions about this project to me on GitHub. My username is ${response.username}.`, function(err){
        if (err) {
            return console.log(err);
        }
    })
})