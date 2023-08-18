import { useState } from "react";

const Home = () => {
    const handleClick = (e) => {
        console.log('hello bang', e);
    }

    const handleClickAgain = (name) => {
        console.log('hello'+ name);
    }   


    // Menggunakan UseState Untuk reactive
    const [nama, setNama] = useState('BINTANG');
    const [umur, setUmur] = useState(16);
    
    const ClickChange = () => {
        setNama('WAWAWN');
        setUmur(99);
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('wawan')}>Click Me Again</button>
            <p>{ nama } SUDAH HIDUP { umur }</p>
            <button onClick={ClickChange}>Change Me</button>
        </div>
     );
}
 
export default Home;