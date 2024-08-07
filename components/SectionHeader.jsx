import '@styles/sectionheader.css';


function SectionHeader(props){
    return(
        <>

            <section  className='section-header'>
                <div className='container'>
                    <div className='section-header-content'>
                        <h4> {props.title}</h4>

                        <h2>  </h2>


                        <h1> {props.number} </h1>

                    </div>
                </div>
            </section>

        </>
    )
}

export default SectionHeader;