import React from 'react'
import { Link } from 'react-router-dom';
function Index() {
    return (
        <>
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={Index} className="btn btn-success">Devolver</Link>
                        
                    </div>
            </div>
        </>
    )
}

export default Index;