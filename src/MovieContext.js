import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Name 1',
            price: '$10',
            id: 123
        },
        {
            name: "Name 2",
            price: "$12",
            id: 1234
        },
        {
            name: "Name 3",
            price: "$15",
            id: 12345
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}
