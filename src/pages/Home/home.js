import '../../assets/scss/pages/home/home.scss'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='know-about'>
                <h2 className='title light-yellow fs-2em'>¿Qué es Movie Rating?</h2>
                <span className='know-about-text'>Con esta aplicación podrás crear tus propias listas con distintas películas que hayas visto y ponerles nota.
                    Podrás ver distintos gráficos que muestren información sobre las películas y notas que hayas puesto, hacer tuits automáticos
                    con las películas que acabes de ver...<br />
                    <span className='link-medium-blue'>¡Y mucho más!</span></span>
            </div>
            <hr className='solid black' />
            <div className='join-trending-container'>
                <div className='join-now'>
                    <div className='text-join'>
                        Empieza a poner nota a tus películas favoritas

                    </div>
                </div>
                <div className='trending-movies'>
                    <h2>Trending</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;