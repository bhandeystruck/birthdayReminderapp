import React, { Fragment } from 'react'



//Need to pass people as props because we need the
//information from app.js people state to display in the list component
function List({people}) {
    return (
        <Fragment>
            {people.map((person)=>{
                //deconstructing the data
                const {id, name, age, image} = person;
                return (
                        
                        <article key={id} className='person'>
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>);
            })}
        </Fragment>
    );
};

export default List
