
import {BsWordpress} from "react-icons/bs"
import {BsDatabaseCheck} from "react-icons/bs"
import {MdComputer} from "react-icons/md"
import {FiFigma} from 'react-icons/fi'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About Me",
        path: '/resume'}
]

export const programs = [
    {
        id: 1,
        icon: <BsWordpress/>,
        title: "Wordpress",
        info: "Built websites for ecommerce businesses, charity organizations, and event organizations.",
    },
    {
        id: 2,
        icon: <FiFigma/>,
        title: "Web Design",
        info: "Completed and led teams for UI/UX design for static professional websites and gamified apps. ",
    },
    {
        id: 3,
        icon: <BsDatabaseCheck/>,
        title: "Data Analytics",
        info: "Used various tools for analytics including R, Python, SPSS, Matlab and SAP Analytics Cloud",
    },
    {
        id: 4,
        icon: <MdComputer/>,
        title: "Front-end Development",
        info: "Led web development projects, and provided technical support for front-end development",
    }
]

const Project1 = require('./images/Project1.jpg')
const Project2 = require('./images/Project2.jpg')
const Project3 = require('./images/Project3.jpg')
const Project4 = require('./images/Project4.jpg')
const Project5 = require('./images/Project5.jpg')
const Project6 = require('./images/Project6.jpg')
const Project7 = require('./images/Project7.jpg')
const Project8 = require('./images/Project8.jpg')
const Project9 = require('./images/Project9.jpg')
const Project10 = require('./images/Project10.jpg')
const Project11 = require('./images/Project11.jpg')
const Project12 = require('./images/Project12.jpg')
const Project13 = require('./images/Project13.jpg')
const Project14 = require('./images/Project14.jpg')
const Project15 = require('./images/Project15.png')

export const recentprojects = [
    {
        id: 1,
        image: Project1,
        title: "Auto Machine Learning App",
        info: "A basic analytics web app that allows users to analyse, visualise and expore data, and run regression models automatically.",
        method: "Programming",
        tag: "Streamlit",
        path: '/project1',
    },
    {
        id: 2,
        image: Project2,
        title: "Behavioural Experiment",
        info: "An attentional bias visual cue experiement with Vernier Discrimination Task for upright and inverted faces built.",
        method: "Programming",
        tag: "Matlab",
        path: '/project2'
    },
    {
        id: 11,
        image: Project11,
        title: "AI model Application",
        info: "Application of mental health-related pre-trained HuggingFace models for sentiment analysis and diagnosis prediction.",
        method: "Natural Language Processing",
        tag: "HuggingFace",
        path: '/project3',
    }
]

export const projects = [
    {
        id:15,
        image: Project15,
        title: "Job Board Phone App",
        info: "A functional app for job applicants to search for latest full-time, part-time and contracting job; made with React Native and RapidAPI",
        method: "Programming",
        tag: "React Native",
    },
    {
        id: 9,
        image: Project9,
        title: "Electorial Data Analysis",
        info: "An exploratory data analysis of voter turnout, majority and returned votes by state and parliament.",
        method: "Data Analysis",
        tag: "Python",
    },
    {
        id: 10,
        image: Project10,
        title: "Stock Price Prediction",
        info: "An exploratory automative stock market analysis of the KLSE market and prediction using LSTM.",
        method: "Data Analysis & Prediction",
        tag: "Python",
    },
    {
        id: 4,
        image: Project4,
        title: "React Gym Portfolio Website",
        info: "A portfolio website for a fitness company developed using React.",
        method: "Programming",
        tag: "React",
    },
    {
        id: 2,
        image: Project2,
        title: "Behavioural Experiment",
        info: "An attentional bias visual cue experiement with Vernier Discrimination Task for upright and inverted faces built.",
        method: "Programming",
        tag: "Matlab",
    },
    {
        id: 3,
        image: Project3,
        title: "Population Density Mapping",
        info: "An exploratory geospatial visualisation project of population density by legislative state assembly.",
        method: "Geospatial Analysis",
        tag: "QGIS",
    },
    {
        id: 5,
        image: Project5,
        title: "Prevelance of Mental Disorders",
        info: "An exploratory data analysis and geospatial analysis of mental health-related data in Malaysia.",
        method: "Data Analysis",
        tag: "Tableau",
    },
    {
        id: 6,
        image: Project6,
        title: "DIstribution of Apartment Rent",
        info: "A geospatial visualisation of apartment rent prices in Kuala Lumpur and Selangor, Malaysia.",
        method: "Geospatial Analysis",
        tag: "QGIS",
    },
    {
        id: 7,
        image: Project7,
        title: "Analysis of Plane Data",
        info: "An exploratory data analysis of distribution of flights across US airports over time with 28 million data.",
        method: "Big Data Analysis",
        tag: "Python & R",
    },
    {
        id: 8,
        image: Project8,
        title: "Exchange Rate Visualisation",
        info: "An exploratory data visualisation of exchange rates over time with interactive widgets.",
        method: "Time Series Analysis",
        tag: "Python",
    },
    {
        id: 11,
        image: Project11,
        title: "AI model Application",
        info: "Application of mental health-related pre-trained HuggingFace models for sentiment analysis and diagnosis prediction.",
        method: "Natural Language Processing",
        tag: "HuggingFace",
    },
    {
        id: 12,
        image: Project12,
        title: "Event website",
        info: "An event website with information, event highlights, and registration forms.",
        method: "Front-end Web",
        tag: "Wix",
    },
    {
        id: 1,
        image: Project1,
        title: "Auto Machine Learning App",
        info: "A basic analytics web app that allows users to analyse, visualise and expore data, and run regression models automatically.",
        method: "Programming",
        tag: "Streamlit",
    },
    {
        id: 13,
        image: Project13,
        title: "Ecommerce Website",
        info: "An ecommerce website with company information, forms, ecommerce integration and payment gateway solution.",
        method: "Front-end Web",
        tag: "Wordpress",
    },
    {
        id: 14,
        image: Project14,
        title: "Charity Website",
        info: "A charity website with event highlights, organization information and a contact form.",
        method: "Front-end Web",
        tag: "Wordpress",
    },
]

export const article = [
    {
        image:Project1,
        title: "Auto Machine Learning App",
        info: "A basic analytics web app that allows users to analyse, visualise and expore data, and run regression models automatically.",
        summary: "In today's data-driven world, having a reliable and efficient data analytics tool is crucial for businesses and data enthusiasts. This project introduces a simple yet powerful web application project built using Streamlit. The tool allows users to perform data manipulation, analysis, visualization, and automatic machine learning using regression models. With its user-friendly interface, this tool opens up a world of possibilities for exploring datasets and deriving valuable insights.",
        problem: "Data analysis and machine learning can often be complex and time-consuming tasks, requiring expertise in programming and statistical modeling. Additionally, the process of preprocessing data, visualizing it, and selecting the best regression model for predictions can be overwhelming. The challenge lies in finding a way to simplify these processes and make them accessible to users with varying levels of technical knowledge.",
        solution: "The Data Analytics Tool we have developed addresses these challenges by providing a streamlined workflow for data preprocessing, data profiling, visualization, and automated machine learning for regression tasks. The tool's intuitive interface allows users to effortlessly upload their dataset (in CSV format) and explore it using the data viewer. Missing values can be handled using various methods such as keeping, dropping, filling, or imputing. Users can also select specific columns for analysis, tailoring the tool to their specific needs. One of the key features of the tool is the integration of the pandas_profiling package, which generates a comprehensive data profile report based on the uploaded dataset, offering valuable insights into the dataset's structure, distribution, missing values, and correlations. Additionally, the tool provides a range of basic visualization options, enabling users to generate meaningful visualizations such as scatter plots, line charts, and histograms, facilitating the discovery of hidden patterns, trends, and outliers within the dataset. Leveraging the pycaret library, the tool runs a series of regression models on the dataset, presenting the performance metrics for each model. This automated approach saves time and effort by eliminating the need for manual model selection and hyperparameter tuning, empowering users to make informed decisions based on the model's accuracy, precision, and other relevant metrics.",
        conclusion: "The Data Analytics Tool presented here offers a user-friendly and efficient solution for data analysis and automated machine learning in regression tasks. By integrating data preprocessing, profiling, visualization, and regression modeling into a single application, users can streamline their workflow and focus on deriving valuable insights from their datasets. Whether you are a data analyst, data scientist, or business professional, this tool equips you with the necessary resources to unlock the power of your data and make data-driven decisions with confidence. Try out this tool and witness the ease and efficiency it brings to your data analytics journey."
    }]

export const article2 = [
    {
        image:Project2,
        title: "Behavioural Experiment",
        info: "An attentional bias visual cue experiement with Vernier Discrimination Task for upright and inverted faces built.",
        summary: "I developed an emotional attentional bias behavioral experiment using MATLAB. This experiment aimed to investigate the effects of manipulating stimulus onset asynchrony on attentional bias towards fearful faces/emotion. The experiment utilized a Vernier Discrimination Task to measure visual acuity and an adapted Posner's spatial cueing paradigm. The experiment consisted of three parts: a brief trial for familiarization, Experiment 1, and Experiment 2.",
        problem: "Attentional bias towards emotional stimuli, particularly fearful faces, is a well-known phenomenon in psychology. However, the precise mechanisms underlying this bias and its temporal dynamics are not fully understood. Previous research has shown that the timing of stimulus presentation can modulate attentional bias, but further investigation is required to elucidate the specific effects of stimulus onset asynchrony on attentional bias towards fearful faces. Additionally, the impact of emotional attention on visual acuity needs to be examined in order to gain a comprehensive understanding of the phenomenon.",
        solution: "To address these research gaps, I developed an experimental paradigm that incorporated the Vernier Discrimination Task and an adapted Posner's spatial cueing paradigm. The experiment consisted of two parts: Experiment 1 and Experiment 2. In Experiment 1, participants were presented with two face images on either side of a fixation cross. The face images disappeared after a specific duration, and a blank screen was presented for varying durations. The Vernier Discrimination Task was then administered to assess visual acuity. Experiment 2 followed the same procedure as Experiment 1, but with inverted face images.",
        conclusion: "The emotional attentional bias behavioral experiment I developed provides valuable insights into the temporal dynamics of attentional bias towards fearful faces. By manipulating stimulus onset asynchrony and utilizing the Vernier Discrimination Task, the experiment allows for a comprehensive investigation of the emotional attention effect on visual acuity. The findings from this experiment contribute to the understanding of attentional processes and emotional perception, shedding light on the underlying mechanisms of attentional bias. This project showcases my skills in experimental design, programming, and data analysis, and demonstrates my ability to conduct rigorous research in the field of psychology."

    }
]

export const article3 = [
    {
        image:Project11,
        title: "AI model Application",
        info: "Application of mental health-related pre-trained HuggingFace models for sentiment analysis and diagnosis prediction.",
        summary: "I explored role of Natural Language Processing (NLP) in improving the understanding and treatment of mental health disorders. We delve into various open-source pretrained models and their applications in mental health predictions, highlighting their strengths, limitations, and ethical considerations. By leveraging NLP techniques, such as sentiment analysis, fill-mask pipelines, and text classification, we can gain valuable insights and automate mental health assessments to support healthcare professionals in providing effective care.",
        problem: "Mental health disorders significantly impact individuals' well-being and quality of life. However, accurately identifying and assessing these disorders can be challenging due to the subjective nature of mental health symptoms and the vast amount of unstructured text data generated by patients. This presents a crucial problem in mental health care, as misdiagnoses or delayed interventions can have severe consequences for patients.",
        solution: "NLP techniques offer a promising solution to enhance mental health assessments. By leveraging pretrained models and pipelines, we can analyze large amounts of unstructured text data, such as social media posts, electronic health records, and patient-provider communication. Sentiment analysis models enable us to identify the overall attitude expressed in text, while fill-mask pipelines predict missing words in a given context. Text classification models allow us to assign predefined categories or labels to text, aiding in the identification of mental health conditions.",
        conclusion: "NLP models have shown great potential in improving mental health assessments by automating processes and providing valuable insights. However, it is crucial to acknowledge the ethical concerns and biases associated with these models. Biased or unrepresentative training data can lead to inaccurate or harmful predictions. Therefore, it is essential to use quality data and datasets to develop accurate and effective NLP models for mental health assessments. These models can ultimately enhance access to mental health care, alleviate the burden on healthcare professionals, and improve the lives of individuals experiencing mental health disorders. By highlighting the opportunities and challenges in leveraging NLP for mental health assessments, this article serves as a comprehensive overview of the field. It underscores the need for further research, responsible development, and collaboration between NLP experts and mental health professionals to ensure the ethical and effective application of NLP techniques in mental health care."

    }
]
