//Calling p with function
function Text(){
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quas?</p>
}

function ButtonClick(){
    const [likes, setLikes] = React.useState(0)

    function handleClick(){
        setLikes(likes+1)
    }

    return (
        <div>
            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    );
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<>
    <h1>React with CDN</h1>
    <Text />
    <ButtonClick />
</>)