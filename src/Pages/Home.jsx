const Home = () => {
    const handleClick = (e) => {
        console.log('hello bang', e);
    }

    const handleClickAgain = (name) => {
        console.log('hello'+ name);
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('wawan')}>Click Me Again</button>
        </div>
     );
}
 
export default Home;