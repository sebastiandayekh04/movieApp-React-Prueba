import movies from "./movies";
import { useState } from "react";
export function MainDos(){

    return(
        <>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {movies.map((movie) => (
                        <div className="col" key={movie.id}>
                            <div className="card shadow-sm">
                                <img 
                                    src={movie.poster} 
                                    alt={movie.title} 
                                    className="bd-placeholder-img card-img-top" 
                                    width="100%" 
                                    height="100%" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">+</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">-</button>
                                        </div>
                                        <small className="text-muted">ID: {movie.id}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>              
)
};