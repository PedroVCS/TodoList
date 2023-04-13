import './style.css';

export default function Task () {
    return (
       <div className='Task'>
       <div className="TaskDecription">
            Arrumar a cama
        </div>
        <div className="TaskAction">
        <button className='danger' onClick={() => removeTask()}>Remove</button>
        <button>Edit</button>
        </div>
        </div>
    );
}