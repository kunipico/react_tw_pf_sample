import './App.css'

function App() {
    return (
        // <h1 className='text-3xl font-bold underline'>Hello React!</h1>
        <>
            <header className='text-gray-700 border-b border-gray-200'>
                <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
                    <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
                        <span className='text-xl ml-3'>Pico Code</span>
                    </a>
                    <nav className='md:ml-auto text-base'>
                        <a href="#home" className='mr-5 hover:text-green-500'>
                            Home
                        </a>
                        <a href="#about" className='mr-5 hover:text-green-500'>
                            About
                        </a>
                        <a href="#skills" className='mr-5 hover:text-green-500'>
                            Skills
                        </a>
                        <a href="#blog" className=' hover:text-green-500'>
                            Blog
                        </a>
                    </nav>
                </div>
            </header>
            
            <section className='text-gray-700 id="home'>
                <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
                    <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
                        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
                            Hi!<br />
                            I'm Pico<br />
                            Web<br />
                            えんじにゃ〜
                        </h1>
                        <p className='mb-8 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur magni fuga sapiente assumenda quas omnis. Necessitatibus vero placeat eaque?
                        </p>
                        <button className='text-white bg-green-500 -py-2 px-6 boder-0 rounded text-lg hover:bg-green-600 duration-300'>
                            Contact
                        </button>
                    </div>
                    <div className='md:w-1/2 lg:max-w-lg w-5/6'>
                        <img src="./img/icon.png" alt="account icon image" />
                    </div>
                </div>
            </section>

            <section className='text-gray-700 border-t border-gray-200'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='text-center mb-5'>
                        <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>
                            About Me
                        </h1>
                        <p className='pb-10'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis quo incidunt obcaecati modi blanditiis voluptate illum tempore eum vel.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima earum facilis quam quod temporibus voluptates! Architecto nostrum porro maiores, quidem, sequi quaerat a similique eius nihil esse, odit commodi accusantium molestiae blanditiis provident dolorem amet eos natus asperiores repellat dolore illum. Minima eos asperiores eum officia, incidunt vitae? Voluptate iusto soluta nisi itaque dolore magni, repellendus accusantium distinctio saepe? Tempore illo, consequuntur maiores ratione quasi voluptas perspiciatis veniam itaque hic, reiciendis id dignissimos laboriosam blanditiis accusamus eligendi labore eaque ut optio. Error minima iusto ducimus libero maxime optio nemo deserunt magnam unde eaque, molestiae alias explicabo provident nihil dolorem maiores.
                        </p>
                    </div>
                    {/* カードセクション */}
                    <div className='flex flex-wrap'>

                        {/* Card #1 */}
                        <div className='md:w-1/3 p-3'>
                            <div className='bg-gray-200 rounded-lg p-8'>
                                <div className='flex items-center mb-3'>
                                    <div className='bg-green-500 text-white rounded-full '>
                                        <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" />
                                            <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" />
                                            <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                                        Web developer
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt magni quae est error ad delectus autem eius quo cupiditate.
                                    </p>
                                    <a href="#" className='flex mt-3 text-green-500 items-center'>
                                        more view
                                        <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>                   
                        </div>

                        {/* Card #2 */}
                        <div className='md:w-1/3 p-3'>
                            <div className='bg-gray-200 rounded-lg p-8'>
                                <div className='flex items-center mb-3'>
                                    <div className='bg-green-500 text-white rounded-full '>
                                        <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" />
                                            <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" />
                                            <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                                        Web developer
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt magni quae est error ad delectus autem eius quo cupiditate.
                                    </p>
                                    <a href="#" className='flex mt-3 text-green-500 items-center'>
                                        more view
                                        <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>                     
                        </div>

                        {/* Card #3 */}
                        <div className='md:w-1/3 p-3'>
                            <div className='bg-gray-200 rounded-lg p-8'>
                                <div className='flex items-center mb-3'>
                                    <div className='bg-green-500 text-white rounded-full '>
                                        <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" />
                                            <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" />
                                            <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                                        Web developer
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt magni quae est error ad delectus autem eius quo cupiditate.
                                    </p>
                                    <a href="#" className='flex mt-3 text-green-500 items-center'>
                                        more view
                                        <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-gray-700 border-t border-gray-200'>
                <div className='container px-5 py-24 mx-auto flex flex-wrap'>
                    {/* Left Side */}
                    {/* <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'> */}
                    <div className='mb-10 lg:mb-0 md:w-1/2 lg:max-w-lg w-5/6 flex flex-grow justify-center'>
                        <img src="./img/pc.jpg" alt="" className='rounded'/>
                    </div>
                    {/* Right Side */}
                    <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
                        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-lefr'>
                            My Skills
                        </h1>
                        <div className='w-full'>
                            <h2>
                                HTML
                            </h2>
                            <div className='shadow bg-green-100 mt-2 w-full'>
                                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>
                                    85%
                                </div>
                            </div>

                            <h2>
                                CSS
                            </h2>
                            <div className='shadow bg-green-100 mt-2 w-full'>
                                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' 
                                style={{width:"65%"}}>
                                    65%
                                </div>
                            </div>

                            <h2>
                                JavaScript
                            </h2>
                            <div className='shadow bg-green-100 mt-2 w-full'>
                                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' 
                                style={{width:"75%"}}>
                                    75%
                                </div>
                            </div>

                            <h2>
                                Linux
                            </h2>
                            <div className='shadow bg-green-100 mt-2 w-full'>
                                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' 
                                style={{width:"95%"}}>
                                    95%
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default App
