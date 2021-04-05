import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>

    {/* Banner section section  */}
    <section className="py-16" id="home">
        <div className="container mx-auto px-8 lg:flex">
            <div className="lg:w-1/2">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">
                    Our Aim
                </h2>
                <p className="flex items-start mt-2 text-xl">
                    We are a leading software development company that offers top-rated Software Development Services
                    due to our vast experience, team of skilled professionals, key business insights, and a dedicated working process.
                </p>
                <p className="mt-8 md:mt-12">
                   <a href="#contact" className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded">Contact Us</a>
                </p>
            </div>
            <div className="lg:w-1/2">
                <img  src={require('../svg/home_banner.svg')} alt="home_banner_image"/>
            </div>
        </div>
    </section>

    {/* Main Features section */}
    <section className="py-16 bg-gray-100" id="services">
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto mb-12 text-center">
                <h2 className="mb-0 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">Main Features</h2>
            </div>
            <div className="max-w-7xl px-0 mx-auto md:px-4">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Web Application</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    Web development refers to building, creating, and an maintaining websites. 
                                    It includes aspects such as web design, web publishing, web programming, 
                                    and database management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Android Application</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    We build mobile applications on different platforms using top-notch 
                                    technologies and proven approaches. We build cross-platform apps that run 
                                    on both iOS and Android from a single code base.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">JAM Development</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    The JAM Development is a new way of building websites and apps that 
                                    delivers better performance, higher security, lower cost of scaling, 
                                    and a better developer experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    {/* FrontEnd Technologies section */}
    <section className="container pt-16" >
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-0 pt-0 flex items-center">
                <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Front End Technologies</h3>
                    <p className="text-gray-700 mb-3">
                        A bare bones development team for building professional web sites or software for the web platform.
                    </p>
                    <div className="flex items-start mt-4 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/javascript.png')}/>
                        <p className="mb-0">Javacript</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/react.png')}/>
                        <p className="mb-0">ReactJS</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/angular.png')}/>
                        <p className="mb-0">AngularJS</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/html.svg')}/>
                        <p className="mb-0">HTML, CSS</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/swift.svg')}/>
                        <p className="mb-0">Swift</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/java.svg')}/>
                        <p className="mb-0"> Core Java</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-0 pt-0 ">
                <img src={require('../svg/web_development.svg')} alt="web_development_image"/>
            </div>
        </div>
    </section>

    {/* BackEnd Technologies section */}
    <section className="container py-16">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-0 pt-0">
                <img src={require('../svg/backend_development.svg')} alt="backend_development_image"/>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-0 pt-0 flex items-center">
                <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Back End Technologies</h3>
                    <p className="text-gray-700 mb-3">
                        Back-end developers develop an application that supports the front-end. 
                        It should also provide support, security, and content management.
                    </p>
                    <div className="flex items-start mt-4 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/cms.svg')}/>
                        <p className="mb-0">CMS ( Content Management System )</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/mongodb.svg')}/>
                        <p className="mb-0">MySQL, MongoDB, Oracle, SQLServer</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/api.png')}/>
                        <p className="mb-0">API (REST & SOAP)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Career section  */}
    <section className="py-16 bg-gray-100" id="career">
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto mb-16 text-center">
                <h2 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">Multiple Career Options</h2>
                <p className="mb-6 text-lg text-gray-500 md:text-xl">We are passionate about User Experience. If you too, this is the right place for you.</p>
            </div>
            <div className="max-w-7xl px-0 mx-auto md:px-4">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Web Developer</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Skills: </strong>
                                    Javascript, ReactJS, AngularJS, NodeJS, HTML, CSS.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    0-1 year of experience in web development.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Understanding of object oriented programming concepts.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Familiarity with version control systems.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Knowledge of web development using any of the following ReactJS, Angular, jQuery, Node.js.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Familiarity with HTML5 and CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Android Developer</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Skills: </strong>
                                        Android Development, Java, RESTful APIs.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    0-1 year of experience in mobile development.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Understand the current application infrastructure and code design.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Experience working on MySQL, SqlLite, Firebase, or any other database.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Good understanding of OOPS concepts, Design Patterns, Algorithms, and data structure.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    RESTful web services and Parsing JSON/XML.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">iOS Developer</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Skills: </strong>
                                        iOS App Development, Objective C, Swift, Xcode.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    1-3 year of experience in iOS mobile development.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Experienced with iOS frameworks viz. Core Data, Core Animation, Core Graphics, Core Text, Realm.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Familiar with Apple's design principles and interface guidelines.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Familiar working with RESTful APIs third-party libraries and API, cloud message APIs and push notifications.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 text-sm">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 p-px mt-px mr-2 text-teal-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                ></path>
                                </svg>
                                <p className="mb-0">
                                    Solid understanding of the full mobile development life cycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Contact Us section  */}
    <section id="contact" className="py-16">
        <div className="container mx-auto">
            <h2 className="mb-8 text-center">Contact Information</h2>
            <ul className="list-unstyled li-space-lg row justify-content-center pb-10">
                <li className=" mr-6"><i className="fa fa-map-marker mr-2 text-teal-400 text-xl"></i>Erandwane, Pune 411052</li>
                <li className=" mr-6"><i className="fa fa-phone mr-2 text-teal-400 text-xl"></i><a className="turquoise text-black" href="tel:7620010106">+91 7620010106</a></li>
                <li className=" mr-6"><i className="fa fa-envelope mr-2 text-teal-400 text-xl"></i><a className="turquoise text-black" href="mailto:contact.softwill@gmail.com">contact.softwill@gmail.com</a></li>
            </ul>
            <div className="row mt-6">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="550" height="470" id="gmap_canvas" src="https://maps.google.com/maps?q=vighnaharta%20building,erandwane%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form name="contactForm" method="POST" data-netlify="true">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input name="first_name" className="appearance-none block w-full  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" required />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide  text-xs font-bold" for="grid-last-name">
                                    Last Name
                                </label>
                                <input name="last_name" className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input name="e-mail" className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold" for="grid-password">
                                    Message
                                </label>
                                <textarea name="message" className=" no-resize appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Your Message Here" required></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Send
                                </button>
                            </div>
                            <div className="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

  </Layout>
);