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
    <section className="pt-6 md:pt-12" id="home">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          Our Aim
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          We are a leading software development company that offers top-rated Software Development Services
           due to our vast experience, team of skilled professionals, key business insights, and a dedicated working process.


          </p>
          <p className="mt-8 md:mt-12">
            <Button size="sm">Contact Us</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <img  src={require('../svg/home_banner.svg')} alt="home_banner_image"/>
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Web Application</p>
              <p className="mt-4">
                Web development refers to building, creating, and an maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Android Application</p>
              <p className="mt-4">
              We build mobile applications on different platforms using top-notch technologies and proven approaches. We build cross-platform apps that run on both iOS and Android from a single code base.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">JAM Development</p>
              <p className="mt-4">
                The JAM Development is a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-10 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Front End Technologies</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          <ul>
              <li>
              A bare bones development team for building professional web sites or software for the web platform.
              </li>
              <li className="d-flex ">
                <img style={{width:'25px'}} className="mr-2" src={require('../svg/javascript.png')}/>
                Javacript
              </li>
              <li className="d-flex ">
              <img style={{width:'25px'}} className="mr-2"src={require('../svg/react.png')}/>
              ReactJS
              </li>
              <li className="d-flex ">
              <img style={{width:'25px'}} className="mr-2"src={require('../svg/angular.png')}/>
              AngularJS
              </li>
              <li className="d-flex ">
              <img style={{width:'25px'}} className="mr-2"src={require('../svg/html.svg')}/>
              HTML, CSS
              </li>
              <li className="d-flex ">
              <img style={{width:'25px'}} className="mr-2"src={require('../svg/swift.svg')}/>
              Swift
              </li>
              <li className="d-flex ">
              <img style={{width:'25px'}} className="mr-2"src={require('../svg/java.svg')}/>
              Core Java 
              </li>
          </ul>
         </p>
        </div>
      }
      secondarySlot={<img src={require('../svg/web_development.svg')} alt="web_development_image"/>}
    />
  
    <SplitSection
    reverseOrder={true}
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Back End Technologies
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          <ul>
              <li>
              Back-end developers develop an application that supports the front-end. It should also provide support, security, and content management.
              </li>
              <li className="d-flex">
              <img style={{width:'25px'}} className="mr-2" src={require('../svg/cms.svg')}/>
              CMS ( Content Management System )
              </li>
              <li className="d-flex">
              <img style={{width:'25px'}} className="mr-2" src={require('../svg/mongodb.svg')}/>
              MySQL, MongoDB, Oracle, SQLServer
              </li>
              <li className="d-flex">
              <img style={{width:'25px'}} className="mr-2" src={require('../svg/api.png')}/>
              API (REST & SOAP)
              </li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<img src={require('../svg/backend_development.svg')} alt="backend_development_image"/>}
    />
  
    <section id="career" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center">Multiple Career Options</h2>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center">Contact Information</h2>
        <ul className="list-unstyled li-space-lg row justify-content-center pb-10">
            <li className=" mr-6"><i className="fa fa-map-marker mr-2"></i>Erandwane, Pune 411052</li>
            <li className=" mr-6"><i className="fa fa-phone mr-2"></i><a className="turquoise" href="tel:7620010106">+91 7620010106</a></li>
            <li className=" mr-6"><i className="fa fa-envelope mr-2"></i><a className="turquoise" href="mailto:contact.softwill@gmail.com">contact.softwill@gmail.com</a></li>
        </ul>
        <div className="row mt-6">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <div className="mapouter">
                          <div className="gmap_canvas">
                            <iframe width="550" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=vighnaharta%20building,erandwane%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
