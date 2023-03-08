import React from 'react';

const Blog = () => {
    return (

        <div className='m-2 my-4 lg:m-24 p-6 lg:p-20' style={{ background: '#f5f5f5', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title lg:text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <h3><strong>There are four main types of state you need to properly manage in your React apps:</strong>
                        <ul>
                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>
                        </ul>
                        useState is the first tool we should reach for to manage state in your components. It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).
                    </h3>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title lg:text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p><strong>Working process: </strong>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title lg:text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p><strong>Unit test: </strong>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
                    <p><strong>Reason for writing unit tests: </strong>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                        <br /> <strong>Here, are the key reasons to perform unit testing in software engineering:</strong>
                        <ul>
                            <li>Unit tests help to fix bugs early in the development cycle and save costs.</li>
                            <li>It helps the developers to understand the testing code base and enables them to make changes quickly</li>
                            <li>Good unit tests serve as project documentation</li>
                            <li>Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title lg:text-xl font-medium">
                    What is the difference between React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p><strong>Framework: </strong>A software framework is a piece of code that performs a certain job, irrespective of the program it is implemented in. By using the framework, the programmer need not write the code for the functionality from scratch and can add a few extra lines to customize it according to the application he is working on.</p>
                    <p> <strong>Angular vs Vue</strong>
                        <ul>
                            <li>Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development</li>
                            <li>Angular is Google’s matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.</li>
                            <li>While comparing Vue JS vs Angular, Vue is known for its clean architecture and its elegant designs. On the other hand, Angular is considered for many organizations due to its vast functionality and high performance.</li>
                        </ul>
                    </p>
                    <p><strong>React vs Vue</strong>
                        <ul>
                            <li>Vue is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps</li>
                            <li>Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM.</li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;