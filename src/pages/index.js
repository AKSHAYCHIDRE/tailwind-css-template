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
                    Lorem Ipsum
                </h2>
                <p className="flex items-start mt-2 text-xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                <h2 className="mb-0 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">Lorem Ipsum</h2>
            </div>
            <div className="max-w-7xl px-0 mx-auto md:px-4">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Lorem Ipsum</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Lorem Ipsum</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 px-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Lorem Ipsum</p>
                        <div className="space-y-4">
                            <div className="flex items-start mt-2 text-1xl">
                                <p className="mb-0 text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Vivamus varius orci vel</h3>
                    <p className="text-gray-700 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. 
                    </p>
                    <div className="flex items-start mt-4 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/javascript.png')}/>
                        <p className="mb-0">Lorem text</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/react.png')}/>
                        <p className="mb-0">printing and typesetting </p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/angular.png')}/>
                        <p className="mb-0">Ipsum has been</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/html.svg')}/>
                        <p className="mb-0">Duis sodales mi ut nibh</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/swift.svg')}/>
                        <p className="mb-0">Vestibulum iaculis libero</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2"src={require('../svg/java.svg')}/>
                        <p className="mb-0">Sed semper tellus</p>
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
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Aliquam in orci pellentesque</h3>
                    <p className="text-gray-700 mb-3">
                        Aenean lobortis augue varius, volutpat magna vitae, posuere sem industry Lorem Ipsum has been.
                    </p>
                    <div className="flex items-start mt-4 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/cms.svg')}/>
                        <p className="mb-0">Aenean fringilla tortor</p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/mongodb.svg')}/>
                        <p className="mb-0">Vivamus varius orci vel </p>
                    </div>
                    <div className="flex items-start mt-2 pb-1 text-sm">
                        <img style={{width:'20px'}} className="mr-2" src={require('../svg/api.png')}/>
                        <p className="mb-0">Maecenas eget arcu blandit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Career section  */}
    <section className="py-16 bg-gray-100" id="career">
        <div className="container">
            <div className="max-w-7xl px-4 mx-auto mb-16 text-center">
                <h2 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">Sed consectetur metus</h2>
                <p className="mb-6 text-lg text-gray-500 md:text-xl">Aenean lobortis augue varius, volutpat magna vitae, posuere sem.</p>
            </div>
            <div className="max-w-7xl px-0 mx-auto md:px-4">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Maecenas non</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Maecenas: </strong>
                                    Class, aptent, taciti, sociosqu, ad,
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
                                    Donec convallis massa eu nunc
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
                                    Maecenas in leo nec massa commodo
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
                                    Duis placerat tellus ullamcorper elit malesuad
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
                                    Proin a leo vehicula, pretium dui ege
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
                                    Mauris luctus ex id ultrices pulvinar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Sed in sapien ultricie</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Quisque: </strong>
                                        Fusce, maximus, dui, id, odio, porttito
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
                                    Proin a leo vehicula, pretium dui ege
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
                                    Ut molestie magna non ex vestibulum dignissim. molestie magna non
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
                                    Duis placerat tellus ullamcorper elit malesuada rhoncus.
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
                                 Quisque sed magna vehicula, molestie odio placerat, pellentesque eros.
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
                                    Etiam semper augue et malesuada egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-0 border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
                        <p className="mb-3 text-xl font-semibold text-center text-gray-800 font-weight-bold">Lorem Ipsum</p>
                        <div className="flex items-center justify-center mb-0 space-x-2">
                            <div>
                                <p className="text-sm text-center mb-2">
                                    <strong className="text-gray-800">Skills: </strong>
                                        Fusce, maximus, dui, id, odio, porttitor, vitae, blandit. 
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
                                    Vestibulum quis erat feugiat, lacinia mi vestibulum, vestibulum eros.
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
                                    Nam aliquet tellus quis turpis ornare, et aliquet leo malesuada.Duis placerat tellus ullamcorper elit
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
                                    In ac libero malesuada, tincidunt metus ac, vulputate dui.
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
                                    Fusce maximus dui id odio porttitor, vitae blandit velit hendrerit.
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
                                    Integer non orci quis ante tempus lacinia vitae vel purus. In ac libero malesuada, tincidunt metus ac, vulputate dui.
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
                <li className=" mr-6"><i className="fa fa-map-marker mr-2 text-teal-400 text-xl"></i>Parvati paytha, Pune 411009</li>
                <li className=" mr-6"><i className="fa fa-phone mr-2 text-teal-400 text-xl"></i><a className="turquoise text-black" href="tel:9673363074">+91 9673363074</a></li>
                <li className=" mr-6"><i className="fa fa-envelope mr-2 text-teal-400 text-xl"></i><a className="turquoise text-black" href="mailto:akshaychidre0@gmail.com">akshaychidre0@gmail.com</a></li>
            </ul>
            <div className="row mt-6">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="470" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.685424636296!2d73.83672567903635!3d18.487221149284295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c007c7e37f75%3A0xf193a4fb3c63cc56!2sParvati%20Paytha%2C%20Pune%2C%20Maharashtra%20411009!5e0!3m2!1sen!2sin!4v1617608228869!5m2!1sen!2sin" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
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