document.addEventListener("DOMContentLoaded", () => {
    let data = [
        {
            projectTitle: "Intro",
            projectDesc:
                "Welcome to Apps by GDSC IARE! Explore the amazing projects created by our talented community members. From web apps to mobile apps, we have a wide variety of projects that solve major real time problems. Click on any project to learn more about it and discover the innovative solutions developed by our community.",
            features: [
                "Clean and minimal design",
                "Wide variety of projects",
                "Innovative solutions",
                "Community-driven",
                "Community-driven",
            ],
            authorName: ["Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/ujjwalshiva"],
            projectLink: "https://gdsciareblogs.vercel.app",
            projectLogo: "https://weboris.vercel.app/image.gif",
        },
        {
            projectTitle: "Blogs Hub",
            projectDesc:
                "GDSC IARE Blogs Hub is a website built for sharing technical blogs written by our community members. It is regularly updated with new articles and blog posts, making it a go-to platform for all tech enthusiasts. The website is easy to use and mobile-friendly, allowing users to access it on the go.",
            features: [
                "Clean and minimal design",
                "Wide variety of topics",
                "Regularly updated with new articles and blog posts",
                "Easy to use",
                "Mobile-friendly",
            ],
            authorName: ["Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/ujjwalshiva"],
            projectLink: "https://gdsciareblogs.vercel.app",
            projectLogo: "./app_logos/blogs_hub.png",
        },
        {
            projectTitle: "Certification Client",
            projectDesc:
                "The Certification Client is a user-friendly web application that simplifies certificate generation for technical events. It supports bulk certificate generation, allowing event organizers to save time and effort. Users can download certificates in printable format or share them electronically. With the Certification Client, event organizers can focus on delivering a great event experience while leaving the certificate generation to the app.",
            features: [
                "Simplified certificate generation for technical events",
                "Efficiently eliminates manual certificate design and data entry",
                "Supports bulk certificate generation",
                "Download certificates in printable format or share electronically",
            ],
            authorName: ["Ujjwal Shivacharya", "Vishnu Sai Nadella"],
            authorPic: "",
            authorLink: [
                "https://www.linkedin.com/in/ujjwalshiva",
                "https://www.linkedin.com/in/vishnu-sai-nadella/",
            ],
            projectLink: "https://consortium-2022.streamlit.app",
            projectLogo: "./app_logos/certification_client.png",
        },
        {
            projectTitle: "Check Fast App",
            projectDesc:
                "This is an Android App submission made to Google Developers. The Check Fast App is an all-in-one solution for college students. With this app, students can easily check their college attendance, plan their next CGPA, and split food bills with friends. The app is designed to make college life easier and more convenient. It is available on GitHub, making it open-source and free for everyone to use.",
            features: [
                "Check college attendance",
                "Plan your next CGPA",
                "Split food bills easily with friends",
            ],
            authorName: ["Praneetha Peniji", "Core Team - GDSC IARE"],
            authorPic: "",
            authorLink: [
                "https://www.linkedin.com/in/praneetha-peniji/",
                "https://gdsciare.club/",
            ],
            projectLink: "https://github.com/praneetha28-ai/checkFast",
            projectLogo: "./app_logos/check_fast.png",
        },
        {
            projectTitle: "CodeLink Web App",
            projectDesc:
                "Codelink is an online platform where developers can share their code and collaborate with others. With its easy-to-use and secure interface, developers can work together on projects and learn from each other. The platform is designed to be collaborative and promote learning. It is hosted on the GDSC IARE website, making it easily accessible to all members of the community.",
            features: [
                "Easy to use",
                "Secure code sharing",
                "Data saved in private data servers",
                "Fast and Quick",
            ],
            authorName: ["Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/ujjwalshiva/"],
            projectLink: "https://gdsciare.club/codelink",
            projectLogo: "./app_logos/codelink.png",
        },
        {
            projectTitle: "DigiAuth App",
            projectDesc:
                "DigiAuth is an online app that allows event organizers to quickly and securely authenticate attendees. With its reliable and secure authentication process, event organizers can ensure that only authorized attendees have access to the event. With DigiAuth, event organizers can focus on delivering a great event experience while leaving the authentication process to the app.",
            features: ["Quick", "Secure", "Reliable"],
            authorName: ["Vishnu Sai Nadella"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/vishnu-sai-nadella/"],
            projectLink: "Contact Vishnu",
            projectLogo: "./app_logos/digiauth.png",
        },
        {
            projectTitle: "NBA Tracker Bot",
            projectDesc:
                "NBA Tracker bot is a Telegram bot that instantly sends updates on NBA games and scores. With its instant updates and live results, NBA fans can stay up-to-date on their favorite teams and players. The bot is easy to use and can be accessed through Telegram. With NBA Tracker bot, fans can never miss a game again.",
            features: ["Instant updates", "Live results", "Easy to use"],
            authorName: ["Sri Vishal Lanka"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/sri-vishal-lanka/"],
            projectLink: "https://t.me/nbaupdates_bot",
            projectLogo: "./app_logos/nba_tracker.png",
        },
        {
            projectTitle: "Open Source Platform",
            projectDesc:
                "GDSC IARE Open Source Platform is a mega website that stores all the resources, events, and projects of the GDSC IARE community. With its comprehensive collection of resources, the platform is a one-stop-shop for all things tech. It hosts a wide variety of events and projects, allowing members of the community to learn, collaborate, and grow. The platform is designed to be community-driven, promoting inclusivity and diversity. It is hosted on the GDSC IARE website, making it easily accessible to all members of the community.",
            features: ["Events", "Projects", "Resources", "Community"],
            authorName: ["Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/ujjwalshiva"],
            projectLink: "https://docs.gdsciare.club",
            projectLogo: "./app_logos/open_source.png",
        },
        {
            projectTitle: "QBS Archive",
            projectDesc:
                "QBS Archive is a website where students of IARE can obtain solutions and contributions for various question banks. With its easy-to-use interface, students can search for solutions and contributions for their respective question banks. It is designed to make the process of finding and sharing solutions easier and more convenient. The website is hosted on GitHub and Vercel for added accessibility.",
            features: ["Solutions", "Contributions", "Search", "Easy to use"],
            authorName: ["Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/ujjwalshiva"],
            projectLink: "https://qbsolutions.gdsciare.club/",
            projectLogo: "./app_logos/qbs_archives.png",
        },
        {
            projectTitle: "ToShare",
            projectDesc:
                "ToShare is a cool web app that allows you to share files using words. With its decentralized approach, you can securely and privately share files with others. The app is designed to be easy to use, ensuring a seamless file sharing experience.",
            features: [
                "Decentralized File Sharing",
                "Easy to use",
                "Backed by Web3 Tech",
                "Supports large file sharing",
            ],
            authorName: ["Rishi Raj"],
            authorPic: "",
            authorLink: ["https://www.linkedin.com/in/brishiraj/"],
            projectLink: "https://toshare.vercel.app/",
            projectLogo: "./app_logos/toshare.png",
        },
        {
            projectTitle: "Utsav IARE Events App",
            projectDesc:
                "Utsav - The IARE Events App is an upcoming project by Vishnu Sai Nadella and Ujjwal Shivacharya. It aims to revolutionize the way events are organized and experienced. With exciting features and a user-friendly interface, the app will provide a seamless event management experience for both organizers and attendees. More details will be revealed soon, so stay tuned for updates!",
            features: [
                "Exciting features",
                "User-friendly interface",
                "Seamless event management experience",
                "Revolutionize the way events are organized and experienced",
            ],
            authorName: ["Vishnu Sai Nadella", "Ujjwal Shivacharya"],
            authorPic: "",
            authorLink: [
                "https://www.linkedin.com/in/vishnu-sai-nadella/",
                "https://www.linkedin.com/in/ujjwalshiva",
            ],
            projectLink: "https://docs.gdsciare.club",
            projectLogo: "./app_logos/utsav.png",
        },
        {
            projectTitle: "Weboris Web App",
            projectDesc:
                "Weboris is a web app that helps students of IARE download lab sheets conveniently. With its responsive design, students can access lab sheets on any device. The app allows students to check lab sheets based on their roll number, making it easy to find the required lab sheets. Weboris fetches the required lab sheets conveniently, saving students time and effort. It is hosted on the GDSC IARE website, making it easily accessible to all students.",
            features: [
                "Download lab sheets",
                "Responsive design",
                "Check lab sheets based on roll number",
                "Fetches required lab sheets conveniently",
            ],
            authorName: ["Sri Vishal Lanka", "Syed Ikram Uddin"],
            authorPic: "",
            authorLink: [
                "https://www.linkedin.com/in/sri-vishal-lanka/",
                "https://www.linkedin.com/in/syed-ikram-uddin/",
            ],
            projectLink: "https://gdsciare.club/weboris",
            projectLogo: "https://weboris.vercel.app/image.gif",
        },
    ];

    let navbar = document.getElementById("navbar");

    data.forEach((i) => {
        const spanElement = document.createElement("span");
        spanElement.textContent = `${i.projectTitle}`;
        spanElement.setAttribute("id", "menuButton");
        spanElement.addEventListener("click", () => {
            document
                .getElementById("innerContainer")
                .classList.add("animate__animated", "animate__pulse");
            document
                .getElementById("innerContainer")
                .classList.remove("animate__pulse");
            document.getElementById("authorGroup").innerHTML = "";
            document
                .getElementById("projectLogo")
                .setAttribute("src", `${i.projectLogo}`);
            document.getElementById(
                "projectTitle"
            ).textContent = `${i.projectTitle}`;
            document.getElementById(
                "projectDesc"
            ).textContent = `${i.projectDesc}`;
            document.getElementById("projectFeatures").innerHTML = "";
            i.features.forEach(function (feature) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(feature));
                document.getElementById("projectFeatures").appendChild(li);
            });
            document.getElementById("projectLink").onclick = function () {
                window.open(`${i.projectLink}`, "_blank");
            };

            for (let j = 0; j < i.authorName.length; j++) {
                const author = document.createElement("div");
                author.setAttribute("id", "authorCard");
                author.innerHTML = `<img
                                        id="authorIcon"
                                        src="https://ui-avatars.com/api/?name=${i.authorName[j]}.png"
                                        alt="${i.authorName[j]}"
                                    />
                                    <h5 id="authorName" ><a href="${i.authorLink[j]}" target="_blank">${i.authorName[j]}</a></h5>`;
                document.getElementById("authorGroup").appendChild(author);
            }
        });
        navbar.appendChild(spanElement);
    });
});
